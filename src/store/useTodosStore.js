import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase.config";

const dbRef = collection(db, "todos");

export const useTodosStore = defineStore("todos", {
  state: () => ({
    boards: [],
    tasks: [],
  }),
  getters: {
    getTodos(state) {
      return state.boards;
    },
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
        const generalWhere = where(
          "user_id",
          "==",
          JSON.parse(localStorage.getItem("user")).uid,
        );
        const queryBoards = query(collection(db, "boards"), generalWhere);
        const queryTasks = query(collection(db, "tasks"), generalWhere);

        onSnapshot(queryBoards, (querySnapshot) => {
          const boards = [];
          querySnapshot.forEach((doc) => {
            boards.push(doc.data());
          });
          console.log(boards);
          this.boards = boards;
        });
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
        user_id: JSON.parse(localStorage.getItem("user")).uid,
      });
    },
    /**
     * Create board
     * @param {string} name name board
     */
    async createBoard(name) {
      try {
        const pesponse = await addDoc(collection(db, "boards"), {
          id: uuidv4(),
          name,
          category: name,
          user_id: JSON.parse(localStorage.getItem("user")).uid,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
