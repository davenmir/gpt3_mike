import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          I would like to say I did this all on my own but mostly this is just
          copy paste and whatnot. My biggest lesson here is that there are tools
          that allow you to mock up designs and do all the css and styling for
          you without having to sit there and think it out while coding. I am a
          good coder, not a good designer.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="your email address" />
          <button type="button"> Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
