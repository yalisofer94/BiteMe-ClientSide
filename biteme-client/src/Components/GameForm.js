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
import Logo from './Logo';
import Axios from "axios";
import "./App.css";

const GameForm = () => {
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');
    const [question5, setQuestion5] = useState('');
    const [answer11, setAnswer11] = useState('');
    const [answer12, setAnswer12] = useState('');
    const [answer13, setAnswer13] = useState('');
    const [answer14, setAnswer14] = useState('');
    const [answer21, setAnswer21] = useState('');
    const [answer22, setAnswer22] = useState('');
    const [answer23, setAnswer23] = useState('');
    const [answer24, setAnswer24] = useState('');
    const [answer31, setAnswer31] = useState('');
    const [answer32, setAnswer32] = useState('');
    const [answer33, setAnswer33] = useState('');
    const [answer34, setAnswer34] = useState('');
    const [answer41, setAnswer41] = useState('');
    const [answer42, setAnswer42] = useState('');
    const [answer43, setAnswer43] = useState('');
    const [answer44, setAnswer44] = useState('');
    const [answer51, setAnswer51] = useState('');
    const [answer52, setAnswer52] = useState('');
    const [answer53, setAnswer53] = useState('');
    const [answer54, setAnswer54] = useState('');

    const [choose11, setChoose11] = useState(false);
    const [choose12, setChoose12] = useState(false);
    const [choose13, setChoose13] = useState(false);
    const [choose14, setChoose14] = useState(false);
    const [choose21, setChoose21] = useState(false);
    const [choose22, setChoose22] = useState(false);
    const [choose23, setChoose23] = useState(false);
    const [choose24, setChoose24] = useState(false);
    const [choose31, setChoose31] = useState(false);
    const [choose32, setChoose32] = useState(false);
    const [choose33, setChoose33] = useState(false);
    const [choose34, setChoose34] = useState(false);
    const [choose41, setChoose41] = useState(false);
    const [choose42, setChoose42] = useState(false);
    const [choose43, setChoose43] = useState(false);
    const [choose44, setChoose44] = useState(false);
    const [choose51, setChoose51] = useState(false);
    const [choose52, setChoose52] = useState(false);
    const [choose53, setChoose53] = useState(false);
    const [choose54, setChoose54] = useState(false);


    const [buttonValue1, setbuttonValue1] = useState(false);
    const [buttonValue2, setbuttonValue2] = useState(false);
    const [buttonValue3, setbuttonValue3] = useState(false);
    const [buttonValue4, setbuttonValue4] = useState(false);
    const [buttonValue5, setbuttonValue5] = useState(false);
    const sendForm = (e) => {
        setChoose11(buttonValue1 === "A");
        setChoose12(buttonValue1 === "B");
        setChoose13(buttonValue1 === "C");
        setChoose14(buttonValue1 === "D");
        setChoose21(buttonValue2 === "A");
        setChoose22(buttonValue2 === "B");
        setChoose23(buttonValue2 === "C");
        setChoose24(buttonValue2 === "D");
        setChoose31(buttonValue3 === "A");
        setChoose32(buttonValue3 === "B");
        setChoose33(buttonValue3 === "C");
        setChoose34(buttonValue3 === "D");
        setChoose41(buttonValue4 === "A");
        setChoose42(buttonValue4 === "B");
        setChoose43(buttonValue4 === "C");
        setChoose44(buttonValue4 === "D");
        setChoose51(buttonValue5 === "A");
        setChoose52(buttonValue5 === "B");
        setChoose53(buttonValue5 === "C");
        setChoose54(buttonValue5 === "D");
        const game = [{
            question1: question1,
            options:[
            {
                answer1: answer11,
                isCorrect: choose11
            },
            {
                answer2: answer12,
                isCorrect: choose12
            },
            {
                answer3: answer13,
                isCorrect: choose13
            },
            {
                answer4: answer14,
                isCorrect: choose14
            }]
        },
        {
            question2: question2,
            options:[
            {
                answer1: answer21,
                isCorrect: choose21
            },
            {
                answer2: answer22,
                isCorrect: choose22
            },
            {
                answer3: answer23,
                isCorrect: choose23
            },
            {
                answer4: answer24,
                isCorrect: choose24
            }],
        },
        {
            question3: question3,
            options:[
            {
                answer1: answer31,
                isCorrect: choose31
            },
            {
                answer2: answer32,
                isCorrect: choose32
            },
            {
                answer3: answer33,
                isCorrect: choose33
            },
            {
                answer4: answer34,
                isCorrect: choose34
            }],
        },
        {
            question4: question4,
            options:[
            {
                answer1: answer41,
                isCorrect: choose41
            },
            {
                answer2: answer42,
                isCorrect: choose42
            },
            {
                answer3: answer43,
                isCorrect: choose43
            },
            {
                answer4: answer44,
                isCorrect: choose44
            }],
        },
        {
            question5: question5,
            options:[
            {
                answer1: answer51,
                isCorrect: choose51
            },
            {
                answer2: answer52,
                isCorrect: choose52
            },
            {
                answer3: answer53,
                isCorrect: choose53
            },
            {
                answer4: answer54,
                isCorrect: choose54
            }]
        }]
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
                  window.location = 'http://localhost:3000/';
              }
          });
    }
  
  const inputChange = (info) => {
    let {name, value, value1} = info.target;
    console.log(name,value, value1);
    
    
    console.log(this.state);
}
            return(
                <>
                <Logo />
                    <div className="home-content" >
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column">
                            <h1>Add New Game</h1>
                            <form>
                                    <label>Question 1: </label>
                                    <TextField type="text" name='question1' onChange={(e) => setQuestion1(e.target.value)} style={{backgroundColor:'white', width: '80%', height: '25px'}} placeholder="Highest building in the world.."/>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}} name='answer1' onChange={(e) => setAnswer11(e.target.value)} placeholder="text"/>
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => setAnswer12(e.target.value)}/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => setAnswer13(e.target.value)}/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => setAnswer14(e.target.value)}/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value={buttonValue1} onChange={(e) => setbuttonValue1(e.target.value)} row>
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                                </FormControl>
                                <div>
                                    <label>Question 2: </label>
                                    <TextField type="text" name='question2' onChange={(e) => setQuestion2(e.target.value)} style={{backgroundColor:'white', width: '80%', height: '25px'}}  placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => setAnswer21(e.target.value)} />
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => setAnswer22(e.target.value)}/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => setAnswer23(e.target.value)}/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} placeholder="text" onChange={(e) => setAnswer24(e.target.value)}/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value={buttonValue2} onChange={(e) => setbuttonValue2(e.target.value)} row>
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                                </FormControl>
                                <div>
                                    <label>Question 3: </label>
                                    <TextField type="text" name='question3' onChange={(e) => setQuestion3(e.target.value)} style={{backgroundColor:'white', width: '80%', height: '25px'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer31(e.target.value)} placeholder="text"/>
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer32(e.target.value)} placeholder="text"/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer33(e.target.value)} placeholder="text"/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer34(e.target.value)} placeholder="text"/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value={buttonValue3} onChange={(e) => setbuttonValue3(e.target.value)} row>
                                    <FormControlLabel value="A" control={<Radio />}  label="A" />
                                    <FormControlLabel value="B" control={<Radio />}  label="B" />
                                    <FormControlLabel value="C" control={<Radio />}  label="C" />
                                    <FormControlLabel value="D" control={<Radio />}  label="D" />
                                </RadioGroup>
                                </FormControl>
                                <div>
                                    <label>Question 4: </label>
                                    <TextField type="text" name='question4' onChange={(e) => setQuestion4(e.target.value)} style={{backgroundColor:'white', width: '80%', height: '25px'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}}onChange={(e) => setAnswer41(e.target.value)} placeholder="text"/>
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer42(e.target.value)} placeholder="text"/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer43(e.target.value)} placeholder="text"/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer44(e.target.value)} placeholder="text"/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value={buttonValue4} onChange={(e) => setbuttonValue4(e.target.value)} row>
                                    <FormControlLabel value="A" control={<Radio />}  label="A" />
                                    <FormControlLabel value="B" control={<Radio />}  label="B" />
                                    <FormControlLabel value="C" control={<Radio />}  label="C" />
                                    <FormControlLabel value="D" control={<Radio />}  label="D" />
                                </RadioGroup>
                                </FormControl>
                                <div>
                                    <label>Question 5: </label>
                                    <TextField type="text" name='question5' onChange={(e) => setQuestion5(e.target.value)} style={{backgroundColor:'white', width: '80%', height: '25px'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer51(e.target.value)} placeholder="text"/>
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer52(e.target.value)} placeholder="text"/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer53(e.target.value)} placeholder="text"/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} onChange={(e) => setAnswer54(e.target.value)} placeholder="text"/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value={buttonValue5} onChange={(e) => setbuttonValue5(e.target.value)} row>
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                                </FormControl>
                                <Button variant="contained" color="primary" onClick={sendForm} style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>CREATE</b></Button>
                            </form>
                        </Grid>
                <Footer />
            </div>
            </>  
            )
}

export default GameForm;