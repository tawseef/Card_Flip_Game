import { useContext } from "react";
import { DataContext } from "../Context/context";
import FirstScreen from "./Screens/FirstScreen/firstScreen";
import SecondScreen from "./Screens/SecondScreen/secondScreen";
import "./homepage.css";

function Homepage() {
  const data = useContext(DataContext);

  return (
    <div>
      {data?.count === 3 || data?.count === 4 ? (
        <SecondScreen />
      ) : (
        <FirstScreen />
      )}
    </div>
  );
}

export default Homepage;
