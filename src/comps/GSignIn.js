import React from "react";
import { projectAuth, authProvider } from "../firebase/config";

const GSignIn = () => {
  const loginHandler = (e) => {
    e.preventDefault();
    projectAuth
      .signInWithPopup(authProvider)
      .then((result) => {
        console.log("successful sign in from signInWithPopUp : ", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="btn-div">
      <div className="">
        <h1>FireGram</h1>
        <p>Welcome to Firegram!</p>
      </div>
      <div className="btn-wrap">
        <button className="btn-signin" onClick={loginHandler}>
          SignIn With Google
        </button>
      </div>
    </div>
  );
};

export default GSignIn;
