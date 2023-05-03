import React from "react";
import PropTypes from "prop-types";

function TextImgPair({ text, textSize, imgSrc, minImgHeight, textFirst }) {
  if (textFirst) {
    return (
      <div className="row my-3">
        <div className="col-8 col-sm-6 my-2">
          <p className="m-0" style={{ fontSize: textSize }}>
            {text}
          </p>
        </div>
        <div
          className="col-5 col-sm my-2"
          style={{ minHeight: minImgHeight }}
        ></div>
        <div
          className="col-7 col-sm-5 rounded"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: minImgHeight,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    );
  } else {
    return (
      <div className="row my-3">
        <div
          className="col-6 col-sm-6 rounded"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: minImgHeight,
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="col-12 col-sm-6 my-2 text-end">
          <p className="m-0" style={{ fontSize: textSize }}>
            {text}
          </p>
        </div>
      </div>
    );
  }
}

TextImgPair.propTypes = {
  // If true, Adds text first then Image
  textFirst: PropTypes.bool,

  // Text content and size
  text: PropTypes.element,
  textSize: PropTypes.string,

  // Image source and Image minimum height on small devices
  imgSrc: PropTypes.string,
  minImgHeight: PropTypes.string,
};

TextImgPair.defaultProps = {
  textFirst: true,
  text: (
    <>
      This is a sample text with <strong> bold</strong>
    </>
  ),
  textSize: "6vw",
  minImgHeight: "150px",
  imgSrc:
    "https://scontent.fbom23-1.fna.fbcdn.net/v/t39.8562-6/314388463_457051459669939_3108666438678561576_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6825c5&_nc_ohc=IBne1O-ubPcAX9vAhpT&_nc_ht=scontent.fbom23-1.fna&oh=00_AfCs5gyw6V9OJCDH5cly33tQ5wSHVr3o9F57Fl7WNVXn6g&oe=644EA054",
};

export default TextImgPair;
