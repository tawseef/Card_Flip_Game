import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/context";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./activityCards.css";
import ReactCardFlip from "react-card-flip";
import RedActivityCard from "../../asset/RedActivityCard.svg";
import BlueActivityCard from "../../asset/BlueActivityCard.svg";
import RedApple from "../../asset/Red Apple.svg";
import Red_A from "../../asset/red-A.svg";
import Orange from "../../asset/Orange.svg";
import Orange_O from "../../asset/orange-O.svg";
import ModalCardPic1 from "../../asset/modalCard1.svg";
import ModalCardPic2 from "../../asset/modalCard2.svg";
import Cloud from "../../asset/cloudText.svg";
import Fun from "./FunctionFile";
const Func = new Fun();

const ActivityCards = () => {
  const num = [0, 1, 2, 3, 4, 5];
  const redFun = [
    () => Func.fun0("apple"),
    () => Func.fun1("orange"),
    () => Func.fun2("apple"),
    () => Func.fun3("orange"),
    () => Func.fun4("apple"),
    () => Func.fun5("orange"),
  ];

  const blueFun = [
    () => Func.fun0("A"),
    () => Func.fun1("O"),
    () => Func.fun2("A"),
    () => Func.fun3("O"),
    () => Func.fun4("A"),
    () => Func.fun5("O"),
  ];

  const [redCards, setRedCards] = useState([
    RedActivityCard,
    RedActivityCard,
    RedActivityCard,
    RedActivityCard,
    RedActivityCard,
    RedActivityCard,
  ]);
  const [blueCards, setBlueCards] = useState([
    BlueActivityCard,
    BlueActivityCard,
    BlueActivityCard,
    BlueActivityCard,
    BlueActivityCard,
    BlueActivityCard,
  ]);
  const [mixAO, setMixAO] = useState([
    Red_A,
    Orange_O,
    Red_A,
    Orange_O,
    Red_A,
    Orange_O,
  ]);
  const [mixOrngApple, setMixOrngApple] = useState([
    RedApple,
    Orange,
    RedApple,
    Orange,
    RedApple,
    Orange,
  ]);
  const [redIndex, setRedIndex] = useState(1);
  const [blueIndex, setBlueIndex] = useState(2);
  const [flippedIndexRed, setFlippedIndexRed] = useState<number | null>(null);
  const [flippedIndexBlue, setFlippedIndexBlue] = useState<number | null>(null);
  const [hiddenRedCards, setHiddenRedCards] = useState<number[]>([]);
  const [hiddenBlueCards, setHiddenBlueCards] = useState<number[]>([]);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const data = useContext(DataContext);

  useEffect(() => {
    if (redIndex !== 10 && blueIndex !== 10 && redIndex === blueIndex) {
      onOpenModal();
      data?.setFlag(data.flag + 1);
      setHiddenRedCards([...hiddenRedCards, redIndex]);
      setHiddenBlueCards([...hiddenBlueCards, blueIndex]);
    }
  }, [redIndex, blueIndex]);

  const handleFlipRed = (index: number, type: string) => {
    setFlippedIndexRed((prevIndex) => (prevIndex === index ? null : index));
    redFun[index]();
    setRedIndex(index);
  };

  const handleFlipBlue = (index: number) => {
    setFlippedIndexBlue((prevIndex) => (prevIndex === index ? null : index));
    blueFun[index]();
    setBlueIndex(index);
  };

  return (
    <div className="activityDiv">
      <div className="redDisplayCard">
        {data?.flag === 6 ? (
          false
        ) : (
          <Modal open={open} onClose={onCloseModal} center>
            <div className="match">
              It’s a match !
              <img className="modalPic1" src={ModalCardPic2} alt="Not found" />
              <img src={ModalCardPic1} alt="Not found" />
            </div>
          </Modal>
        )}
        {data?.count === 4 ? (
          <div className="selectCloud">
            <img className="selectCloudImg" src={Cloud} alt="Not found" />
            <div className="selCloudText"> Select cards.</div>
          </div>
        ) : (
          false
        )}

        {num.map((ele, ind) => (
          <ReactCardFlip
            key={ind}
            flipDirection="horizontal"
            isFlipped={flippedIndexRed === ind}
          >
            <div key="front" onClick={() => handleFlipRed(ind, "red")}>
              {hiddenRedCards.includes(ind) ? null : (
                <img src={redCards[ind]} alt="Not found" />
              )}
            </div>
            <div key="back" onClick={() => handleFlipRed(ind, "back")}>
              {hiddenRedCards.includes(ind) ? null : (
                <img
                  onClick={() => handleFlipRed(ind, "back")}
                  src={mixOrngApple[ind]}
                  alt="Not found"
                />
              )}
            </div>
          </ReactCardFlip>
        ))}
      </div>

      <div className="blueDisplayCard">
        {num.map((ele, ind) => (
          <ReactCardFlip
            key={ind}
            flipDirection="horizontal"
            isFlipped={flippedIndexBlue === ind}
          >
            <div key="front" onClick={() => handleFlipBlue(ind)}>
              {hiddenBlueCards.includes(ind) ? null : (
                <img src={blueCards[ind]} alt="Not found" />
              )}
            </div>
            <div key="back" onClick={() => handleFlipBlue(ind)}>
              {hiddenBlueCards.includes(ind) ? null : (
                <img
                  className="alphabetHeight"
                  src={mixAO[ind]}
                  alt="Not found"
                />
              )}
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </div>
  );
};

export default ActivityCards;
