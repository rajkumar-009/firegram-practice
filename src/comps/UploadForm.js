// Component to upload an image
import React, { useState } from "react";
import Progressbar from "./Progressbar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const imageTypes = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0]; // grab file

    if (selected && imageTypes.includes(selected.type)) {
      // file must be of type jpg or png
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg only)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <Progressbar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
