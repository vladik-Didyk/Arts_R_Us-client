import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { createPicture } from "../lib/api";

const PictureUpload = () => {
  const [showValidationError, setShowValidationError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [picture, setPicture] = useState();

  async function addNewPicture(picture) {
    const data = await createPicture(picture);
    return data;
  }

  function closeButton() {
    setShowValidationError(false);
  }

  function uploadPicture(file) {
    console.log(file);
    setPicture(file);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (picture) {
      try {
        await addNewPicture(picture);
        setModalIsOpen(true);
      } catch (err) {
        alert(err);
      }
    } else {
      setShowValidationError(true);
    }
  }

  return (
    <>
      <div className=" mt-1">
        <div className="">
          <form
            className=" justify-content-center p-5 bg-white mt-2 "
            onSubmit={(event) => handleFormSubmit(event)}
          >
            <h1 className="text-center mb-4">Picture Upload</h1>
            <div className="row mb-3">
              {/* <label className="col-sm-2 col-form-label">Picture</label> */}
              <div className="">
                <div className=" input-group mb-1">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => uploadPicture(e.target.files[0])}
                    id="inputGroupFile02"
                  />
                  {/* <label
                    className="input-group-text "
                    htmlFor="inputGroupFile02"
                  >
                    Upload
                  </label> */}
                </div>
              </div>
            </div>
            <div>
              {showValidationError && (
                <div
                  className="d-flex justify-content-center alert alert-danger mt-1 alert-dismissible fade show"
                  role="alert"
                >
                  Please Upload again.
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeButton}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <div className="d-flex justify-content-center">
                <button className="btn btn-dark rounded-pill mt-1 " type="submit">
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        className="pt-5 w-25 m-auto mt-5"
      >
        <div
          className="d-flex justify-content-center alert alert-warning mt-2 alert-dismissible fade show"
          role="alert"
        >
          The picture was uploaded!
          <button
            type="button"
            className="btn-close"
            onClick={() => setModalIsOpen(false)}
            aria-label="Close"
          ></button>
        </div>
      </Modal>
    </>
  );
};

export default PictureUpload;
