import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="modal-wrap"
        initial={{ y: "-100vh" }} // vh is viewport height
        animate={{ y: 0 }}
      >
        <motion.img src={selectedImg.url} alt="enlarged img" />
        <div className="caption-div">
          <b>{selectedImg.username}</b> {selectedImg.caption}
          {/* <p>{selectedImg.caption}</p> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
