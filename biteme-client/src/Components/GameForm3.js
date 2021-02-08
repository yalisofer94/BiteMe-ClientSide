import React, { useState } from "react";
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Logo from './Logo';
import Axios from "axios";
import "./App.css";

const GameForm = () => {
    let num = 0;
    let quest = "";
    let anst1 = "";
    let anst2 = "";
    let anst3 = "";
    let anst4 = "";
    let btnValue = "";
    const [currentStep, setCurrentStep] = useState(0);
    const [question1, setQuestion1] = useState('');
   const [ready, setReady] = useState(false);
    const [answer11, setAnswer11] = useState('');
    const [answer12, setAnswer12] = useState('');
    const [answer13, setAnswer13] = useState('');
    const [answer14, setAnswer14] = useState('');

    const [choose11, setChoose11] = useState(false);
    const [choose12, setChoose12] = useState(false);
    const [choose13, setChoose13] = useState(false);
    const [choose14, setChoose14] = useState(false);
    // Button value state
    const [buttonValue1, setButtonValue1] = useState("");
    // Game duration state
    const [durationss, setDuration] = useState(0);

    // Game state
    const [questionNum1, setQuestionNum1] = useState({});
    const [questionNum2, setQuestionNum2] = useState({});
    const [questionNum3, setQuestionNum3] = useState({});

    const gameForEntry = [];

    async function sendForm (e) {
        const game = {
            duration: durationss,
            game: [questionNum1, questionNum2, questionNum3],
        };

        console.log(game);
        Axios({
            method: "POST",
            data: {
              game: game
            },
            withCredentials: true,
            url: "http://localhost:4000/api/game",
          }).then((res) => {
              if(res.status === 200) {
                  window.location = '/home';
              }
          }).catch(err => console.log(err));
    }
  
const inputChange = (info) => {
    let {name, value, value1} = info.target;
    console.log(name,value, value1);
    console.log(this.state);
}

function SubmitButton(){
    if (gameForEntry.length === 3 ) {
            return <Button variant="contained" color="primary" onClick={sendForm} style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>CREATE</b></Button>
    } else {
        return <Button variant="contained" disabled style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>FILL ALL!</b></Button>
    };
  };
  
// Entering duration (First step) 
const durationClick = (e) => {
    setDuration(num);
    setCurrentStep(currentStep+1);
  }

  async function checkRadioButtons(e) {
    if(btnValue !== '' && quest !== '' && anst1 !== '' && anst2 !== '' && anst3 !== '' && anst4 !== ''){
    console.log("In checkRadioButtons - ", btnValue.length, "C".length, quest, anst1, anst2, anst3, anst4)
    setButtonValue1(btnValue);
    setChoose11(btnValue == "A");
    setChoose12(btnValue == "B");
    setChoose13(btnValue == "C");
    setChoose14(btnValue == "D");
    setQuestion1(quest);
    setAnswer11(anst1);
    setAnswer12(anst2);
    setAnswer13(anst3);
    setAnswer14(anst4);
    console.log("In CheckRadioButtons1 - ", buttonValue1, question1, answer11, answer12, answer13, answer14);
    setReady(true);
    } else { console.log("Trying to enter empty strings!")}
    return;
};

async function onClickQuestion() {
    await checkRadioButtons();
    if(ready){
    if (question1 && answer11 && answer12 && answer13 && answer14 ) {
        
        const q1 = {
            question: question1,
            options:[
                {
                    answer: answer11,
                    isCorrect: choose11
                },
                {
                    answer: answer12,
                    isCorrect: choose12
                },
                {
                    answer: answer13,
                    isCorrect: choose13
                },
                {
                    answer: answer14,
                    isCorrect: choose14
                }]
        }
     
        if(currentStep === 1){
            setQuestionNum1(q1);
            setCurrentStep(currentStep+1);
        }
        if(currentStep === 2){
            setQuestionNum2(q1);
            setCurrentStep(currentStep+1);
        }
        if(currentStep === 3){
            setQuestionNum3(q1);
            setCurrentStep(currentStep+1);
            sendForm()
        }
        console.log(questionNum1,questionNum2,questionNum3);
        
        setReady(false);
    } else { 
        alert("Fill all field!");
    };
}
}

  const Step0 = (props) => {
    if (currentStep !== 0) {
        return null
    }
    return ( 
    <>
    <label>Game Duration: </label>
    <form>
        <TextField
          id="filled-number"
          label="minutes"
          type="number"
          onChange={(e) => num = e.target.value}
          inputProps={{ min: "5", max: "15", step: "1" }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <Button variant="contained" color="primary" onClick={durationClick} style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>NEXT</b></Button>
    </form>
    </>
    )
  }

  const Step1 = (props) => {
    if (currentStep !== 1) {
        return null
      } 
      return(
        <div className="home-content" >
        <Grid container alignItems="center" justify="center" spacing={0} direction="column">
      <form>
        <label>Question {currentStep}: </label>
        <TextField type="text" name='question1' onChange={(e) => quest = e.target.value} style={{backgroundColor:'white', width: '80%', height: '25px'}} placeholder="Highest building in the world.."/>
        <div style={{marginTop: '3%'}}>
            <label>Answer A: </label>
            <TextField style={{height: '25px'}} name='answer1' onChange={(e) => anst1 = e.target.value} placeholder="text"/>
            <label>Answer B: </label>
            <TextField style={{height: '25px'}}  placeholder="text" onChange={(e) => anst2 = e.target.value}/>
            <label>Answer C: </label>
            <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => anst3 = e.target.value}/>
            <label>Answer D: </label>
            <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => anst4 = e.target.value}/>
        </div>
        <FormControl component="fieldset">
        <InputLabel id="Gender">Answer to question {currentStep}</InputLabel>
            <Select 
              labelId="Gender" 
              id="Gender"
              defaultValue={"A"}
              onChange={e => btnValue = e.target.value}
              fullWidth
              >
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
              <MenuItem value={"C"}>C</MenuItem>
              <MenuItem value={"D"}>D</MenuItem>
            </Select>
          </FormControl>
                <Button variant="contained" color="primary" onClick={onClickQuestion} style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>NEXT</b></Button>
            <SubmitButton/>
            </form>
            </Grid>
            </div>
        )
    }
    const Step2 = (props) => {
        if (currentStep !== 2) {
            return null
          } 
          return(
            <div className="home-content" >
            <Grid container alignItems="center" justify="center" spacing={0} direction="column">
          <form>
            <label>Question {currentStep}: </label>
            <TextField type="text" name='question1' onChange={(e) => quest = e.target.value} style={{backgroundColor:'white', width: '80%', height: '25px'}} placeholder="Highest building in the world.."/>
            <div style={{marginTop: '3%'}}>
                <label>Answer A: </label>
                <TextField style={{height: '25px'}} name='answer1' onChange={(e) => anst1 = e.target.value} placeholder="text"/>
                <label>Answer B: </label>
                <TextField style={{height: '25px'}}  placeholder="text" onChange={(e) => anst2 = e.target.value}/>
                <label>Answer C: </label>
                <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => anst3 = e.target.value}/>
                <label>Answer D: </label>
                <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => anst4 = e.target.value}/>
            </div>
            <FormControl component="fieldset">
            <InputLabel id="Gender">Answer to question {currentStep}</InputLabel>
                <Select 
                  labelId="Gender" 
                  id="Gender"
                  defaultValue={"A"}
                  onChange={e => btnValue = e.target.value}
                  fullWidth
                  >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                  <MenuItem value={"D"}>D</MenuItem>
                </Select>
              </FormControl>
                    <Button variant="contained" color="primary" onClick={onClickQuestion} style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>NEXT</b></Button>
                <SubmitButton/>
                </form>
                </Grid>
                </div>
            )
      }
      const Step3 = (props) => {
        if (currentStep !== 3) {
            return null
          } 
          return(
            <div className="home-content" >
            <Grid container alignItems="center" justify="center" spacing={0} direction="column">
          <form>
            <label>Question {currentStep}: </label>
            <TextField type="text" name='question1' onChange={(e) => quest = e.target.value} style={{backgroundColor:'white', width: '80%', height: '25px'}} placeholder="Highest building in the world.."/>
            <div style={{marginTop: '3%'}}>
                <label>Answer A: </label>
                <TextField style={{height: '25px'}} name='answer1' onChange={(e) => anst1 = e.target.value} placeholder="text"/>
                <label>Answer B: </label>
                <TextField style={{height: '25px'}}  placeholder="text" onChange={(e) => anst2 = e.target.value}/>
                <label>Answer C: </label>
                <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => anst3 = e.target.value}/>
                <label>Answer D: </label>
                <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => anst4 = e.target.value}/>
            </div>
            <FormControl component="fieldset">
            <InputLabel id="Gender">Answer to question {currentStep}</InputLabel>
                <Select 
                  labelId="Gender" 
                  id="Gender"
                  defaultValue={"A"}
                  onChange={e => btnValue = e.target.value}
                  fullWidth
                  >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                  <MenuItem value={"D"}>D</MenuItem>
                </Select>
              </FormControl>
                    <Button variant="contained" color="primary" onClick={onClickQuestion} style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>NEXT</b></Button>
                <SubmitButton/>
                </form>
                </Grid>
                </div>
            )
      }
    return(
        <>
        <Logo />
            <div className="home-content" >
                <Grid container alignItems="center" justify="center" spacing={0} direction="column">
                    <h1>Add New Game</h1>
                    <p>Step {currentStep} </p> 
                    <form>
                    <Step0 
                        currentStep={currentStep} 
                        //handleChange={inputChange}
                        //email={this.state.email}
                        />
                    <Step1 
                        currentStep={currentStep} 
                        handleChange={inputChange}
                        //email={this.state.email}
                        />
                        <Step2 
                        currentStep={currentStep} 
                        handleChange={inputChange}
                        //username={this.state.username}
                        />
                        <Step3 
                        currentStep={currentStep} 
                        handleChange={inputChange}
                        //password={this.state.password}
                    />
                    </form>
                </Grid>
        <Footer />
    </div>
    </>  
    );
}


export default GameForm;