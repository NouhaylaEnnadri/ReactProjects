import React from "react";

const Alert = ({ message }) => {
  return (
    <div className="modal" role="dialog" id="alert_modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Error</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <a href="#" className="btn">Close</a>
        </div>
      </div>
    </div>
  );
};

export default Alert;
