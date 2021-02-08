import { useState, useEffect } from 'react';
import {useTimer} from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: '100px'}}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
    );
  }
  
  export default function setTime() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    return (
      <div>
        <MyTimer expiryTimestamp={time} />
      </div>
    );
  }