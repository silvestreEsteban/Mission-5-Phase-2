import React from 'react';
import myStyles from "./AddCompare.module.css" ; 

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [id, setId] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id);
    setId('');
  };

  console.log("Submitting ID:", id);


  if (!isOpen) return null;

  return (
    <div className={myStyles.modalOverlay}>
      <div className={myStyles.modalContent}>
        <h2>Enter Listing Number</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Listing ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;


