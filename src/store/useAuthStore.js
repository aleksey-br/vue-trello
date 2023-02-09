import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  SetUserData,
} from "firebase/auth";
import { auth } from "@/firebase.config";
import router from "@/router";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase.config";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  getters: {},

  actions: {
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
        await setDoc(doc(collection(db, "users"), response.user.uid), {
          name,
        });

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
        const user = await getDoc(doc(db, "users", response.user.uid));

        console.log(response.user.uid);
        localStorage.setItem("uid", response.user.uid);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        const out = await signOut(auth);
        localStorage.removeItem("user");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
