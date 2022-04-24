import React from 'react';
import '../App.sass';
import { Button } from './Button';
import './HeroSection.sass';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop unmuted />
      <h1>Bear Buddy Journey</h1> 
      <p>A Journey of Our Bear Buddy's Adventures</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        >
          LET'S FIND OUT
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
          onClick={console.log('hey')}
        >
          SUBSCRIBE <i className='far fa-bell fa-spin' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
