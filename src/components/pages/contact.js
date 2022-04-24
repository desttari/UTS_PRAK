import React from 'react';
import '../../App.sass';
import './contact.sass';

 function contact() {

  return (
     <body className="conta">
       <form action="#">
         <div class="container2">
          <div class="contact-box">
            <div class="left"></div>
            <div class="right">
              <h2 className="hh2">Contact Us</h2>
              <input type="text" class="field" placeholder="Your Name" required/>
              <input type="email" class="field" placeholder="Your Email" required/>
              <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="field" placeholder="Phone ex. 123-12-123" required/>
              <textarea placeholder="Message" class="field" required></textarea>
              <button class="btnw" type="submit">Send</button>
            </div>
          </div>
        </div>
       </form>
      </body>
  );
  
 
}

export default contact;