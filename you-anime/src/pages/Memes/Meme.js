import "./Meme.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
  updateMetadata,
  getMetadata,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import Modal from "./Modal";

function Meme() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUploadName, setImageUploadName] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  //State for upload modal window
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const imagesListRef = ref(storage, "images/");

  // const uploadFile = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     setImageUploadName("");
  //     setImageUpload(null);
  //     setOpenUploadModal(false);
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [url, ...prev]);
  //     });
  //   });
  // };

  const uploadFile = () => {
    if (imageUpload == null) return; // Ensure there's an image to upload

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // Upon successful upload, update the metadata with the description
      const metadata = {
        customMetadata: {
          description: imageDescription,
        },
      };

      // Update metadata with the description
      updateMetadata(imageRef, metadata)
        .then((updatedMetadata) => {
          getDownloadURL(updatedMetadata.ref).then((url) => {
            setImageUrls((prev) => [
              { url, description: metadata.customMetadata.description },
              ...prev,
            ]);
          });
        })
        .catch((error) => {
          console.error("Error updating metadata:", error);
        });

      setImageDescription("");
      setImageUploadName("");
      setImageUpload(null);
      setOpenUploadModal(false);
    });
  };

  const removeFile = () => {
    if (selectedImg == null) return;
    const httpsReference = ref(storage, selectedImg.url);
    // Then you do whatever you want with the ref
    deleteObject(httpsReference)
      .then(() => {
        setImageUrls(imageUrls.filter((img) => img.url != selectedImg.url));
        setOpenViewModal(false);
        setSelectedImg(null);
        console.log("File deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting file:", error);
      });
  };

  useEffect(() => {
    setImageUrls([]);

    // List all images from Firebase Storage
    listAll(imagesListRef)
      .then((response) => {
        const promises = response.items.map((item) =>
          getDownloadURL(item).then((url) => {
            return getMetadata(item).then((metadata) => ({
              url,
              description: metadata?.customMetadata?.description ?? "",
            }));
          })
        );
        Promise.all(promises).then((urls) => {
          setImageUrls(urls);
        });
      })
      .catch((error) => {
        console.error("Error retrieving images:", error);
      });
  }, []);

  return (
    <div className="App">
      <div className="main-container">
        <div className="button-container">
          <button className="btn" onClick={() => setOpenUploadModal(true)}>
            Upload Your Meme
          </button>
        </div>
        <Modal
          isOpen={openUploadModal}
          onClose={() => setOpenUploadModal(false)}
        >
          <div className="vertical-stack">
            <button>
              select meme
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setImageUploadName(event.target.value);
                  setImageUpload(event.target.files[0]);
                }}
                value={imageUploadName}
              />
            </button>
            {imageUpload && <img src={URL.createObjectURL(imageUpload)} />}
            <input
              type="text"
              placeholder="description..."
              onChange={(event) => {
                setImageDescription(event.target.value);
              }}
              value={imageDescription}
            />
            <button className="btn" onClick={() => uploadFile()}>
              Upload
            </button>
          </div>
        </Modal>
        <div className="image-container">
          {imageUrls.map((image, i) => {
            return (
              <img
                key={i}
                src={image.url}
                onClick={() => {
                  setSelectedImg(image);
                  setOpenViewModal(true);
                }}
              />
            );
          })}
        </div>
        {selectedImg != null && (
          <Modal
            isOpen={openViewModal}
            onClose={() => {
              setOpenViewModal(false);
              setSelectedImg(null);
            }}
          >
            <div className="vertical-stack">
              <img src={selectedImg.url} />
              <label>{selectedImg.description}</label>
              <button className="btn" onClick={() => removeFile()}>
                Delete
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Meme;
