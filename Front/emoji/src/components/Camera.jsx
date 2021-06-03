import React from "react";
import Webcam from "react-webcam";
import axios from "axios";
import Emoji from "./Emoji";

const Camera = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const file = webcamRef.current.getScreenshot();
    let URL = "http://localhost:3003/images";
    let config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };
    let data = new FormData();

    data.append("name", "image");
    data.append("file", file);

    axios
      .post(URL, data, config)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [webcamRef]);

  return (
    <div className="root">
      <div className="camera">
        <div className="container">
          <div className="camera__inner">
            <div className="main">
              <div id="video-stream">
                <Webcam
                  className="my-webcam-class"
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  forceScreenshotSourceSize="true"
                  style={{
                    width: "100%",
                    objectFit: "fill",
                    position: "absolute",
                    left: "0",
                  }}
                />

              </div>
              <div className="capture" onClick={capture}>
                <div className="capture__btn">
                </div> 
              </div>
            </div>
          </div>
        </div>
        <Emoji />
      </div>
    </div>
  );
};

export default Camera;
