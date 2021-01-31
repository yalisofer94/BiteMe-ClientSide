import React, { Component } from "react";
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import Axios from "axios";
import "./App.css";

// class Game extends Component{
//     constructor(props) {
//         super(props);
//     }

//         render() {
//             return(
//                 <>
//                 <Logo />
//                     <div className="home-content" >
//                         <Grid container alignItems="center" justify="center" spacing={0} direction="column">
//                             <h1>Show Us What You Got</h1>
//                             <form>
//                                 <Button variant="contained" color="primary" style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>NEXT</b></Button>
//                             </form>
//                         </Grid>
//                 <Footer />
//             </div>
//             </>  
//         )
//     }
// }

// export default Game;

export default function Game() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [data, setData] = useState({});
    
    const questions = [];

    useEffect(() => {
        async function fetchData() {
          const res = await fetch(`http://localhost:4000/api/game/${1}`);
          res
            .json()
            .then(res => setData(res))
            .catch(err => console.log(err));
        }
     
        fetchData();
      });

    // fetch(`http://localhost:4000/api/game/${1}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data.game[1].options[1].answer));


    
    // useEffect(() => {
	// 	console.log('mounted');
	// 	let data = [];
	// 	data = fetch(`http://localhost:4000/api/game/${1}`)
    //             .then(data.map(item => console.log(item)));
	//   }, [])

	//   const getData = async () => {
	// 	const users = await Axios.get(`http://localhost:4000/api/game/${1}`);
	// 	console.log(users);
	// 	setData(users.game);
	// 	console.log(data)
	//    };
	//    useEffect(() => {
	// 	getData();
	//    }, []);


    ////////////////////////////////
    // Axios({
    //         method: "GET",
    //         withCredentials: true,
    //         url: `http://localhost:4000/api/game/${1}`,
    //       }).then((res) => {
    //           console.log(res.data.game);
    //           if(res.status === 200) {
    //             res.data.game.map(item => console.log(item)); /*setData(data => [...data, item])*/
    //           }
    //           console.log(data);
    //       });
    ///////////////////////////////

    
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    };


    const qs = JSON.stringify(data["game"]);


    // return(
    //     data.map((questions) => {
    //         return (
    //             <div className='app'>
    //                 {showScore ? (
    //                     <div className='score-section'>
    //                         You scored {score} out of {questions.length}
    //                     </div>
    //                 ) : (
    //                     <>
    //                         <div className='question-section'>
    //                             <div className='question-count'>
    //                                 <span>Question {currentQuestion + 1}</span>/{questions.length}
    //                             </div>
    //                             <div className='question-text'>{questions[currentQuestion].question}</div>
    //                         </div>
    //                         <div className='answer-section'>
    //                             {questions[currentQuestion].options.map((option) => (
    //                                 <button onClick={() => handleAnswerOptionClick(option.isCorrect)}>{option.answer}</button>
    //                             ))}
    //                         </div>
    //                     </>
    //                 )}
    //             </div>
    //         );
    //     })
    // )
    return (
        <div>
          {qs}
        </div>
      );
}