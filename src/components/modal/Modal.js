import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>Hello, I'm a modal.</p>
              <Link to="/success">
                <p>Link to success page</p>
              </Link>
              <Link to="/failure">
                <p>Link to failure page</p>
              </Link>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
