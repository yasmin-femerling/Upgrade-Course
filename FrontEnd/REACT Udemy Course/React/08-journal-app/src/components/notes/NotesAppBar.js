import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const { active } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };
  
  return (
    <div className="notes__appbar">
      <span>28 de Nov 2021</span>

      <input 
        id='fileSelector'
        type='file'
        name='file'
        style={{display:'none'}}
        onChange={handleFileChange}/>

      <div>
        <button className="btn" onClick={handlePictureClick}>Picture</button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
