import {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({hog, eyeColor}) {

  const [weight, setWeight] = useState(210)
 
  function changeEyeColor() {
    if(eyeColor === 'blue'){
      return BlueBaby
    }
    else if(eyeColor === 'glowing'){
      return GlowingBaby
    }
    else if(eyeColor === 'sun'){
      return SunBaby
    }else{
      return normalBaby
    }
  }

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if(e.target.name === '+'){
      setWeight((prevState ) => prevState + 1)
    }
    else{
      setWeight((prevState) => prevState - 1)
    }
  }

  return (
    <li className="hogbabies">
      <h1>{hog.name}</h1>
      <h3>Weight: {weight} lbs</h3>
      <h3>{hog.hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button onClick = {handleChangeWeight} name="+">Increase Weight</button>
      <button onClick = {handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={changeEyeColor()}
          style={{ height: `${weight}px` }}
          alt={`${hog.name}`}
        />
      </div>
    </li>
  );
}

export default BabyHog;
