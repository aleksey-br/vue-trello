import { useToast } from "vue-toastification";
const toast = useToast();

export class AppError {
  optopns = [
    { code: "auth/invalid-email", msg: "Incorrect email" },
    { code: "auth/wrong-password", msg: "Incorrect password" },
    { code: "auth/email-already-exists", msg: "Email address already in use" },
    { code: "auth/user-not-found", msg: "User not found" },
    { code: "auth/internal-error", msg: "Unexpected error" },
  ];
  constructor(msg) {
    this.error = msg;
    this.msg = msg;
    if (this.error) {
      this.errorMsg();
    }
  }

  errorMsg() {
    const err = this.optopns.find((el) => el.code === this.error);
    console.log(err);
    return toast.error(err.msg);
  }
}
