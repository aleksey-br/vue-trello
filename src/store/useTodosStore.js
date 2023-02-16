import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  getDocs,
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  query,
  where,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "@/firebase.config";
import { getCurrentUser } from "vuefire";

const uid = localStorage.getItem("uid") || null;

export const useTodosStore = defineStore("todos", {
  state: () => ({
    boards: [],
    tasks: [],
  }),
  getters: {
    getData(state) {
      return state.boards.filter((board) => {
        return Object.assign(board, {
          items: state.tasks.filter((task) => {
            return task.progress === board.category;
          }),
        });
      });
    },
  },

  actions: {
    async getDataforFirestore() {
      try {
        const user = await getCurrentUser();
        onSnapshot(doc(db, "boards", user.uid), (doc) => {
          this.boards = doc.data().boards || [];
        });

        const generalWhere = where("user_id", "==", user.uid);
        const queryTasks = query(collection(db, "tasks"), generalWhere);

        onSnapshot(queryTasks, (querySnapshot) => {
          const tasks = [];
          querySnapshot.forEach((doc) => {
            tasks.push(doc.data());
          });
          this.tasks = tasks;
        });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Create tasks
     * @param {Object} formData {comumn, title, descr}
     */
    async createTask({ column, title, descr }) {
      const item = this.boards.find((col) => col.id === column);

      await addDoc(collection(db, "tasks"), {
        id: uuidv4(),
        title,
        descr,
        progress: item.category,
        user_id: localStorage.getItem("uid"),
        timestamp: serverTimestamp(),
      });
    },
    /**
     * Create board
     * @param {string} name name board
     */
    async createBoard(name) {
      try {
        const user = await getCurrentUser();
        const docSnap = await getDoc(doc(db, "boards", user.uid));
        if (docSnap.exists()) {
          const docRef = doc(db, "boards", user.uid);
          await updateDoc(docRef, {
            boards: arrayUnion({
              id: uuidv4(),
              name,
              category: name,
            }),
          });
        } else {
          await setDoc(doc(db, "boards", user.uid), {
            boards: [
              {
                id: uuidv4(),
                name,
                category: name,
              },
            ],
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Change position boards
     * @param {array} event array boards
     */
    async startDraggingBoard(event) {
      const user = await getCurrentUser();
      const boardsRef = doc(db, "boards", user.uid);

      await updateDoc(boardsRef, {
        boards: event,
      });
    },
    /**
     * Update task list
     * @param {object} item index elem and object task
     * @param {object} board board
     */
    async changeProgress(item, board) {
      const task = this.tasks.find((task) => task.id === item.value.id);
      let doc_id = null;
      const q = query(collection(db, "tasks"), where("id", "==", task.id));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        doc_id = doc.id;
      });

      const docRef = doc(db, "tasks", doc_id);

      await updateDoc(docRef, {
        progress: board.category,
      });
    },

    async deleteBoard(board) {
      const user = await getCurrentUser();
      const docRef = doc(db, "boards", user.uid);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const arr = docSnap.data().boards;
        const indexItem = arr.findIndex((el) => el.id === board.id);
        if (board.items.length === 0) {
          arr.splice(indexItem, 1);

          await updateDoc(docRef, {
            boards: arr,
          });
        } else {
          let deleteDocs = confirm("The board contains tasks. Delete them?");
          if (deleteDocs) {
            this.deleteTask(board);
          }
        }
      }
    },
    async deleteTask(item) {
      if (Array.isArray(item.items)) {
        let queryArr = [];
        const idArr = item.items.map((el) => el.id);
        console.log(idArr);
        const q = query(collection(db, "tasks"), where("id", "in", idArr));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          queryArr.push(doc.id);
        });

        queryArr.forEach(async (el) => {
          await deleteDoc(doc(db, "tasks", el));
        });
        this.deleteBoard(item);
      } else {
        let doc_id = null;
        const q = query(collection(db, "tasks"), where("id", "==", item.id));

        const docRef = await getDocs(q);

        docRef.forEach((doc) => {
          doc_id = doc.id;
        });
        await deleteDoc(doc(db, "tasks", doc_id));
      }
    },
  },
});
