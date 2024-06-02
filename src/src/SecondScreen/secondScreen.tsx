import React, { useContext } from "react";
import { DataContext } from "../Context/context";
import Activity from "../ActivityFolder/activity";
import PlayButton from "../asset/PlayButton.svg";
import ArrowBack from "../asset/backArrowRect.svg";
import Arrow from "../asset/Arrow.svg";
import SingleHeartPic from "../asset/singleHeart.svg";
import DualHeartPic from "../asset/dualHeart.svg";
import LodingImg from "../asset/Loding1.svg";
import GreyBanana from "../asset/GreyBanana.svg";
import TiltCardPic1 from "../asset/TiltCard.svg";
import TiltCardPic2 from "../asset/TiltCard1.svg";
import LoadingLow from "../asset/loadingYellowLow.svg";
import LoadingHalf from "../asset/loadingHalf.svg";
import LoadingFull from "../asset/loadingFull.svg";
import BananaFull from "../asset/bananaFull.svg";
import WinnerScreen from "../asset/Final Rewards Screen.svg";

import "./secondScreen.css";

function SecondScreen() {
  const dataContext = useContext(DataContext);
  
  const handleArrow = () => {
    dataContext?.setCount(dataContext.count - 1);
  }

  const handleButton = () => {
    dataContext?.setCount(dataContext.count + 1);
  };

  return (
    <>
      <div className="secondScreen">
        <div className="loadingDiv">
          {dataContext?.flag === 1 ? (
            <img className="loading" src={LoadingLow} alt="Not Found" />
          ) : dataContext?.flag === 4 ? (
            <img className="loading" src={LodingImg} alt="Not Found" />
          ) : dataContext?.flag === 6 ? (
            <img className="loading" src={LoadingFull} alt="Not Found" />
          ) : (
            <img className="loading" src={LoadingHalf} alt="Not Found" />
          )}
        </div>
        <div className="greyDiv">
          {dataContext?.flag === 6 ? (
            <img className="greyImg" src={BananaFull} alt="Not Found" />
          ) : (
            <img className="greyImg" src={GreyBanana} alt="Not Found" />
          )}
        </div>

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

        {dataContext?.count === 4 ? <Activity /> : false}

        {dataContext?.count === 3 ? (
          <div className="cardDiv">
            <div className="card">
              <img className="dispCardPic" src={TiltCardPic2} alt="Not Found" />
              <img
                className="dispCardPic override"
                src={TiltCardPic1}
                alt="Not Found"
              />
              <div className="blueText">
                Select a <br />
                pink card.
              </div>
              <div className="greenText">It has Images.</div>
            </div>

            <div className="card">
              <img
                className="dispCardPic"
                src={SingleHeartPic}
                alt="Not Found"
              />
              <div className="blueText">
                Select a <br />
                blue card.
              </div>
              <div className="greenText">It has alphabets.</div>
            </div>
            <div className="card">
              <img
                className="dispDualCardPic"
                src={DualHeartPic}
                alt="Not Found"
              />
              <div className="blueText">
                <span className="greenText">If they're same </span>
                <br />
                Its a match !<br />
                <span className="greenText">otherwise retry :(</span>
              </div>
            </div>
          </div>
        ) : (
          false
        )}

        <div className="startBtn">
          {dataContext?.count === 4 ? (
            false
          ) : (
            <img
              onClick={handleButton}
              className="startImage"
              src={PlayButton}
              alt="Not Found"
            />
          )}
        </div>
        {dataContext?.flag === 6 ? (
          <img
            className="winner"
            onClick={() => window.location.reload()}
            src={WinnerScreen}
            alt="Not Found"
          />
        ) : (
          false
        )}
      </div>
    </>
  );
}

export default SecondScreen;
