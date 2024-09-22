import React from 'react';
import myStyles from "./AddCompare.module.css" ; 

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [id, setId] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id);
    setId(''); // Clear input
  };

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

// potential modal css structure
// .modal-overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.5);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .modal-content {
//     background: white;
//     padding: 20px;
//     border-radius: 5px;
//     width: 300px;
//   }
