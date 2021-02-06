import React, { Component } from "react";
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import Axios from "axios";
import "./App.css";

export default function Game() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

    ///////////////////////////////
  useEffect(() => {
    async function callApi() {
      const res = await Axios.get(`http://localhost:4000/api/game/${1}`);
      const games = res?.data?.game;
      setDatas(games);
      console.log("this is ", datas[0]);
      setLoading(false);
    }
    callApi();
  }, []);
    
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < datas.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    };

    return(
        <>
        <Logo/>
        <div className='app'>
          {loading ? <h2>Loading</h2>:
          <div>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {datas.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{datas.length}
                        </div>
                        <div className='question-text'>{datas[currentQuestion].question}</div>
                    </div>
                    <div className='answer-section'>
                        {datas[currentQuestion].options.map((option) => (
                            <button onClick={() => handleAnswerOptionClick(option.isCorrect)}>{option.answer}</button>
                        ))}
                    </div>
                </>
            )}</div>
          }
        </div>
        <Footer/>
        </>
    );
}