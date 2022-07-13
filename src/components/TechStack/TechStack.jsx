import React from "react";
import "./techstack.css";
import img from "../../assets/mongoDB.png";

export default function TechStack() {
  return (
    <>
      <div className="skills">
        <h2>Skills</h2>
        <p>
          Estas son las tecnologias con las cuales estoy trabajando actualmente
        </p>
      </div>

      <div className="techcontainter">
      <div className="techcontainter2">
        <div className="divimg">
          <img
            className="techstackimg"
            src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg"
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimg"
            src="http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimg"
            src="https://raw.githubusercontent.com/existenzial/bbbasic/HEAD/imgs/node_logo.png"
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimg"
            src="https://www.nextontop.com/assets/img/services/web/expressjs.svg"
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimg"
            src={img}
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimg"
            src="http://assets.stickpng.com/thumbs/58482ee4cef1014c0b5e4a75.png"
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
          />
        </div>

        <div className="divimg">
          <img
            className="techstackimggh"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFSIO_dsJJiOX3Sntwxpw6lUIJKI0ueBlRpcQ3q57xVOw4-bCAQ2eX0v_5v2sf5CIiNA&usqp=CAU"
            alt="img not found"
          />
        </div>
        </div>
      </div>
    </>
  );
}
