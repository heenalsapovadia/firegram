import React, { useState, useEffect } from "react";
import GSignIn from "./comps/GSignIn";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import { projectAuth } from "./firebase/config";

function App() {
  const [user, setUser] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const logoutHandler = () => {
    console.log("inside logout handler");
    projectAuth
      .signOut()
      .then(() => {
        console.log("signed out successfully from logout handler");
        // setIsLoggedIn(false);
      })
      .catch((err) => {
        console.log("sign out error");
      });
  };

  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in successfully from auth state change");
        console.log("user name : ", user.displayName);
        console.log("user : ", user);
      } else {
        console.log("user logged out successfully from auth state change");
      }
      setUser(user);
    });
  }, []);

  if (user)
    return (
      <div className="App">
        <Title logout={logoutHandler} />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    );
  else return <GSignIn ></GSignIn>;
}

export default App;
