import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { createPicture } from "../lib/api";
// import { Link } from "react-router-dom";

const PictureUpload = () => {
  const [showValidationError, setShowValidationError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [picture, setPicture] = useState();
  const [picturesData, setPicturesData] = useState([]);

  async function addNewPicture(picture) {
    try {
      const data = await createPicture(picture);
      if (data && !isPictureAlreadyExists(picturesData, data.fileName)) {
        const arr = [data, ...picturesData];
        setPicturesData(arr);
      } else {
        setModalIsOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function isPictureAlreadyExists(picturesData, pictureName) {
    const data = picturesData.find((e) => e.fileName === pictureName);
    return data ? true : false;
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
        setShowValidationError(false);
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
            <h1 className="text-center mb-4" id="p">
              Picture Upload
            </h1>
            <div className="row mb-3 ">
              <div className="">
                <div className=" input-group mb-1">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => uploadPicture(e.target.files[0])}
                    id="inputGroupFile02"
                  />
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
                <button
                  className="btn btn-dark rounded-pill mt-1 "
                  type="submit"
                >
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ul className=" list-unstyled">
        {picturesData &&
          picturesData.map((item) => (
            <li className=" ">
              <div className="card mb-4" width="540">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.path}
                      className="card-img-top"
                      alt="..."
                      height="300"
                    />
                  </div>
                  {/* <p>{item.id}</p> */}
                  <div className="col-md-8">
                    <div className="card-body">
                      <h1 className="card-title">{item.title}</h1>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        className="pt-5 w-25 m-auto mt-5"
      >
        <div
          className="d-flex justify-content-center alert alert-warning mt-2 alert-dismissible fade show p-5"
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
