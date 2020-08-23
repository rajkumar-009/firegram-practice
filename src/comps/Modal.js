// Component for Modal to display enlarged image when clicked
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  //get selected img url as prop from app.js

  //function to close modal only if clicked target div has class backdrop
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
        src={selectedImg}
        alt="enlarged pic"
      />
    </motion.div>
  );
};

export default Modal;

//propTypes
Modal.propType = {
  selectedImg: PropTypes.object.isRequired,
  setSelectedImg: PropTypes.func.isRequired,
};
