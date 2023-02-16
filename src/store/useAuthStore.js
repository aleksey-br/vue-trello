import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "@/firebase.config";
import router from "@/router";
import {
  collection,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { getCurrentUser } from "vuefire";
import { AppError } from "@/helpers/AppError";

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
        const user = await getCurrentUser();
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          this.user = doc.data() || [];
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
        await setDoc(doc(collection(db, "users"), response.user.uid), {
          name: name,
        });

        await setDoc(doc(db, "boards", response.user.uid), {});

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
      const user = await getCurrentUser();
      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        name: name,
      });
    },
  },
});
