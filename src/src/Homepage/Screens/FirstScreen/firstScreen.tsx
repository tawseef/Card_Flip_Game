import React, { useContext } from "react";
import { DataContext } from "../../../Context/context";
import MonkeyImg from "../../../asset/monkeyStart.svg";
import Arrow from "../../../asset/Arrow.svg";
import ArrowBack from "../../../asset/backArrowRect.svg";
import NextButton from "../../../asset/NextButton.svg";
import StartLogo from "../../../asset/startButton.svg";
import CloudLogo from "../../../asset/cloudText.svg";
import YesButton from "../../../asset/YesButton.svg";
import Loading from "../../../asset/Loding1.svg";
import GreyBanana from "../../../asset/GreyBanana.svg";

import "./firstScreen.css";

function FirstScreen() {
  const data = useContext(DataContext);

  const handleButton = () => {
    data?.setCount(data.count + 1);
  };

  const handleArrow = () => {
    data?.setCount(data.count - 1);
  };

  return (
    <>
      <div className="secondScreen">
        {data?.count === 0? false :
        
        <><div className="loadingDiv">
          <img className="loading" src={Loading} alt="Not Found" />
        </div>
        <div className="greyDiv">
          <img className="greyImg" src={GreyBanana} alt="Not Found" />
        </div></>
        }
        {data?.count === 0 ? (
          false
        ) : (
          <div className="nav">
            <img
              className="arrowRect"
              onClick={handleArrow}
              src={ArrowBack}
              alt="Not Found"
            />
            <img
              className="back"
              onClick={handleArrow}
              src={Arrow}
              alt="Not Found"
            />
          </div>
        )}

        {data?.count === 0 ? (
          <div className="cloud">
            <div className="cloudText">
              <span className="text">Welcome Kiddo !</span>
            </div>
            {/* eslint-disable-next-line  */}
            <img
              onClick={() => console.log("Click Cloud")}
              className="cloudImg"
              src={CloudLogo}
              alt="Image Not Found"
            />
          </div>
        ) : (
          <div className="cloud1">
            <div className="cloudText1">
              {data?.count === 1 ? (
                <span className="text1">
                  Hi, I am Mizo ! <br /> and I love bananas 🍌
                </span>
              ) : (
                <span className="text1">
                  Can you help me get <br /> some? 🤔
                </span>
              )}
            </div>
            {/* eslint-disable-next-line  */}
            <img className="cloudImg1" src={CloudLogo} alt="Image Not Found" />
          </div>
        )}

        <div className="monkeyDiv">
          {/*eslint-disable-next-line   */}
          <img
            onClick={() => console.log("ClickMonkey")}
            className="monkeyImage"
            src={MonkeyImg}
            alt="Image Not Found"
          />
        </div>

        <div className="startBtn">
          {/* eslint-disable-next-line  */}
          {data?.count === 0 ? (
            <img
              onClick={handleButton}
              className="startImage"
              src={StartLogo}
              alt="Not Found"
            />
          ) : data?.count === 1 ? (
            <img
              onClick={handleButton}
              className="startImage"
              src={NextButton}
              alt="Not Found"
            />
          ) : data?.count === 2 ? (
            <img
              onClick={handleButton}
              className="startImage"
              src={YesButton}
              alt="Not Found"
            />
          ) : (
            false
          )}
        </div>
      </div>
    </>
  );
}

export default FirstScreen;
