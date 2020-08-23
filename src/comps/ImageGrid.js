// Component for image grid
import React from "react";
import useFirestore from "../hooks/useFirestore";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images"); // get docs from useFirestore

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: "1" }}
            onClick={() => setSelectedImg(doc.url)} //get the img url when clicked and pass it to app.js
          >
            <motion.img
              src={doc.url}
              initial={{ opacity: "0" }}
              animate={{ opacity: "1" }}
              transition={{ delay: "1" }}
              alt="uploaded pic"
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;

//proptypes
ImageGrid.propType = {
  setSelectedImg: PropTypes.func.isRequired,
};
