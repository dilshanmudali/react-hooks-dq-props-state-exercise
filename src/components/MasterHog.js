import React, { useState } from "react";
import Master from "../assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function MasterHog() {
  //changed eyecolor of state to nothing cos 
  const [eyeColor, setEyeColor] = useState(null);

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  const hogObj = offspring.map(hog => <BabyHog hog={hog} eyeColor={eyeColor} key={hog.id} /> )

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Master Blaster</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="masters-domicile">
        <img id="master-blaster" src={Master} alt="" />
      </div>
      <ul className="hoglist">
        {hogObj}
      </ul>
    </div>
  );
}

export default MasterHog;
