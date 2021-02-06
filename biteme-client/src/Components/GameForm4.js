import React, {useState} from 'react'; 
import Axios from "axios";
import "./App.css";

const Form = () => {  
    const [gameState, setGameState] = useState([
      {time: '', duration: '', game: '' },
    ]);

    return (        
      <form>            
        <label htmlFor="time">Time</label>   
        <input type="Date" name="game time" id="time" /> 
        <label htmlFor="duration">Duration</label> 
        <input type="text" name="duration" id="duration" />
        <input type="button" value="Add New Game" />      
        {
          gameState.map((val, idx) => {
            const timeId = `time-${idx}`;
            const durationId = `duration-${idx}`;
            return (
              <div key={`cat-${idx}`}>
                <label htmlFor={timeId}>{`Cat #${idx + 1}`}</label>
                <input
                  type="text"
                  name={timeId}
                  data-idx={idx}
                  id={timeId}
                  className="time" 
                />
                <label htmlFor={durationId}>Age</label>
                <input
                  type="text"
                  name={durationId}
                  data-idx={idx}
                  id={durationId}
                  className="duration"
                />
              </div>
            );      
          })
        }
        <input type="submit" value="Submit" />        
      </form>   
    );
  };
  export default Form;