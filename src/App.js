import React, { useState} from "react";
import "./App.css";
import Card from "./components/imageCard/card";


function Slider(props) {
 
  const [startX, setStart]= useState(0);
  const [isDown, setIsDown]= useState(false);
  const [scrollLeft, setScrollLeft]= useState(0);
  

  
    const mouseDown = (e) => {
      setIsDown(true)
      setStart(e.pageX - e.target.offsetLeft) 
      setScrollLeft(e.target.scrollLeft);
    }

    const MouseLeave = () =>  {
      setIsDown(false);
    }

    const MouseUp = () => {
      setIsDown(false)
    }
    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - e.target.offsetLeft;
      const walk = (x - startX) * 2 ; 
      e.target.scrollLeft = scrollLeft - walk;
    }
  
  

  return (
    <div className="App" onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseLeave={MouseLeave} onMouseUp={MouseUp}>
      {props.items.map((el, index) => {
        return <Card key={index} item={el}  />;
      })}
    </div>
  );
}

export default Slider;
