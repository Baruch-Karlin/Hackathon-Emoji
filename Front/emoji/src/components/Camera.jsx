import React from "react";
import Webcam from "react-webcam";
import axios from "axios";
import Emoji from "./Emoji";
import { useState } from 'react'



const Camera = () => {
  const webcamRef = React.useRef(null);
  const [pic, setPic] = useState(null)


  const onClosePicture = () => {
    setPic(null)
  }


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
        console.log("response", response.data.result.url);
        setPic(response.data.result.url);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [webcamRef]);

  return (
    <div className="root">
      <div className="camera">

        {pic ? (
          <div className="container">
            <div
              onClick={onClosePicture}
              style={{ backgroundColor: 'black', height: '100px', width: '100px', position: 'absolute', right: '0px' }}></div>
            <img src={pic}></img>
          </div>
        ) : (<div className="container">
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
        </div>)
        }

        <Emoji />
      </div>
    </div>
  );
};

export default Camera;
