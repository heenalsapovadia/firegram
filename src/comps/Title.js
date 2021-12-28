import React from "react";

const Title = (props) => {
  return (
    <div className="title">
      <div className="title-top">
        <h1>FireGram</h1>
        <button onClick={props.logout}>Logout</button>
      </div>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Title;
