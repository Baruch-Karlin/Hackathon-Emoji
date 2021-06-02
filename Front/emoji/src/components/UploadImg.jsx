import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const UploadImg = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const onSend = (img) => {
    console.log(img);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,

          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            {imageList.length !== 0 && (
              <Link to="result">
                <Button
                  renderas="button"
                  onClick={() => {
                    onSend(imageList[0]);
                  }}
                >
                  Send
                </Button>
              </Link>
            )}
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="300" className="p-2" />
                <div className="image-item__btn-wrapper">
                  <Button onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default UploadImg;
