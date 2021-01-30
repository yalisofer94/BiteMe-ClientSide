import React, { Component } from "react";
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Logo from './Logo'
import "./App.css";

class GameForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            q1:{
                question1: '',
                options:[
                {
                    answer1: '',
                    isCorrect: false
                },
                {
                    answer2: '',
                    isCorrect: false
                },
                {
                    answer3: '',
                    isCorrect: false
                },
                {
                    answer4: '',
                    isCorrect: false
                },
                {
                    answer5: '',
                    isCorrect: false
                }],
            },
            game:[{
                question1: '',
                options:[
                {
                    answer1: '',
                    isCorrect: false
                },
                {
                    answer2: '',
                    isCorrect: false
                },
                {
                    answer3: '',
                    isCorrect: false
                },
                {
                    answer4: '',
                    isCorrect: false
                },
                {
                    answer5: '',
                    isCorrect: false
                }],
            },
            {
                question2: '',
                options:[
                {
                    answer1: '',
                    isCorrect: false
                },
                {
                    answer2: '',
                    isCorrect: false
                },
                {
                    answer3: '',
                    isCorrect: false
                },
                {
                    answer4: '',
                    isCorrect: false
                },
                {
                    answer5: '',
                    isCorrect: false
                }],
            },
            {
                question3: '',
                options:[
                {
                    answer1: '',
                    isCorrect: false
                },
                {
                    answer2: '',
                    isCorrect: false
                },
                {
                    answer3: '',
                    isCorrect: false
                },
                {
                    answer4: '',
                    isCorrect: false
                },
                {
                    answer5: '',
                    isCorrect: false
                }],
            },
            {
                question4: '',
                options:[
                {
                    answer1: '',
                    isCorrect: false
                },
                {
                    answer2: '',
                    isCorrect: false
                },
                {
                    answer3: '',
                    isCorrect: false
                },
                {
                    answer4: '',
                    isCorrect: false
                },
                {
                    answer5: '',
                    isCorrect: false
                }],
            },
            {
                question5: '',
                options:[
                {
                    answer1: '',
                    isCorrect: false
                },
                {
                    answer2: '',
                    isCorrect: false
                },
                {
                    answer3: '',
                    isCorrect: false
                },
                {
                    answer4: '',
                    isCorrect: false
                },
                {
                    answer5: '',
                    isCorrect: false
                }]
            }]
        }
        this.inputChange = this.inputChange.bind(this);
    }

    sendForm = () => {
        
    }

  handleChange = (event) => {
    this.setState.value = event.target.value;
  };
  
  inputChange(info){
    let {name, value, value1} = info.target;
    console.log(name,value, value1);
    
    this.setState(prevState => ({
        q1: {
            [name]:value
        }}))
        // game: [
        //     ...prevState.game, {
        //         [name]:value
        //     }]}))
    console.log(this.state);
}

        render() {
            return(
                <>
                <Logo />
                    <div className="home-content" >
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column">
                            <h1>Add New Game</h1>
                            <form>
                                    <label>Question 1: </label>
                                    <TextField type="text" name='question1' value1='q1' onChange={this.inputChange} style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}} placeholder="Highest building in the world.."/>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}} name='answer1' placeholder="text"/>
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value1='q1' value={this.value} onChange={this.handleChange} row>
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                                </FormControl>
                                <div>
                                    <label>Question 2: </label>
                                    <TextField type="text" name='question2' style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}}  placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value={this.value} onChange={this.handleChange} row>
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                                </FormControl>
                                <div>
                                    <label>Question 3: </label>
                                    <TextField type="text" name='question3' style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value={this.value} onChange={this.handleChange} row>
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                                </FormControl>
                                <div>
                                    <label>Question 4: </label>
                                    <TextField type="text" name='question4' style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value={this.value} onChange={this.handleChange} row>
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                                </FormControl>
                                <div>
                                    <label>Question 5: </label>
                                    <TextField type="text" name='question5' style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer A: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer B: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer C: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer D: </label>
                                    <TextField style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Answer to question 1:</FormLabel>
                                <RadioGroup aria-label="gender" name="question1" value={this.value} onChange={this.handleChange} row>
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                                </FormControl>
                                <Button variant="contained" color="primary" onClick={this.sendForm} style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>CREATE</b></Button>
                            </form>
                        </Grid>
                <Footer />
            </div>
            </>  
            )
    }
}

export default GameForm;