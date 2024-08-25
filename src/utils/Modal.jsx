// Modal.js
import React from "react";

const Modal = ({ message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <p className="text-xl font-bold">{message}</p>
        {/* <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
