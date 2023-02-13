import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase.config";
import router from "@/router";
import {
  collection,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase.config";
import { AppError } from "@/helpers/AppError";

const uid = localStorage.getItem("uid") || null;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  getters: {
    getUserName(state) {
      return (
        state.user?.name.charAt(0).toUpperCase() + state.user?.name.slice(1)
      );
    },
  },

  actions: {
    async getUserData() {
      try {
        onSnapshot(doc(db, "users", localStorage.getItem("uid")), (doc) => {
          if (doc.exists()) {
            this.user = doc.data();
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * We get the data object for registration
     * @param {{name: string, email: string, password: string}} formData { name, email, password }
     */
    async register({ name, email, password }) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        // Add user to database
        await setDoc(doc(db, "users", response.user.uid), {
          name,
        });

        console.log(name);

        // Save user info to localstorage
        localStorage.setItem("uid", response.user.uid);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    /**
     *  We get the data object for authorization
     * @param {{email: string, password: string}} formData {email, password}
     */
    async login({ email, password }) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );

        //search for a user in the database
        await getDoc(doc(db, "users", response.user.uid));

        localStorage.setItem("uid", response.user.uid);
        router.push("/");
      } catch (error) {
        new AppError(error.code);
      }
    },
    async logout() {
      try {
        const out = await signOut(auth);
        localStorage.removeItem("uid");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },

    async changeName(name) {
      const userRef = doc(db, "users", uid);

      await updateDoc(userRef, {
        name: name,
      });
    },
  },
});
