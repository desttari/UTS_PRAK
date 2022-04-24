import React from 'react';
import './Cards.sass';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>It's Bear Buddy Journey!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div class="card text-center">
            <div class="card-header pala">
              Last Journey 
            </div>
            <div class="card-body">
              <h5 class="card-title">The Best Jurney Ever!</h5>
              <p class="card-text">Just like mornings, evenings have also been wonderful. I used to keep my head on my grandma’s 
              lap and she used to tell me several interesting stories. We used to sleep on the terrace, gazing sparkling and beautiful 
              stars all night. Sleeping under the infinite blue sky while enjoying the cool breeze was an incredible experience for me. 
              It is not possible to get such kind of experience in the city.</p>
            </div>
            <div class="card-footer bawa">
              03-03-2022 on North Ave
            </div>
          </div>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/21.png'
              text='Its Me Bear Buddy'
              label='Selfie'
              path=''
            />
            <CardItem
              src='images/22.png'
              text='Experience with Grandma in the side of Forest'
              label='Adventure'
              path=''
            />
            <CardItem
              src='images/23.png'
              text='Ride through the Ave Forest on a exploring magical landscape'
              label='Adrenaline'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
