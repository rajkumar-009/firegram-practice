// Component for progress bar
import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Progressbar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file); // get progress and url from useStorage

  useEffect(() => {
    if (url) {
      setFile(null); //reset the file to null to remove progress bar
    }
  }, [url, setFile]);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
      className="progress-bar"
    ></motion.div>
  );
};

export default Progressbar;

//proptypes
Progressbar.propType = {
  file: PropTypes.object.isRequired,
  setFile: PropTypes.func.isRequired,
};
