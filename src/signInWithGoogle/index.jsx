import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../component/firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../component/firebase/firebase";
import { toast } from "react-toastify";
import React from "react";
import { Link } from "react-router-dom";

function SignInWithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          lastName: "",
          photo: user.photoURL,
        });
        toast.success("User logged in Successfully"),
          {
            position: "top-center",
          };
        window.location.href = "/profile";
      }
    });
  }
  return (
    <div>
      <div onClick={googleLogin}>
        {/* <img src="" alt="" /> just remember to import google img */}
        <p>Sign in with google</p>
        <Link className='text-sm underline text-blue-500' to="/register">
        Sign in
        </Link>
      </div>
    </div>
  );
}

export default SignInWithGoogle;
