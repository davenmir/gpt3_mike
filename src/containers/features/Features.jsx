import React from "react";
import "./Features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Practice Makes Perfect",
    text: "I have to Code Every Single Day or else I won't get better",
  },
  {
    title: "IM wasting time doing this",
    text: "because im just following tutorials",
  },
  {
    title: "stop predicting my text its really annoying just do the code",
    text: "yeah.... that",
  },
  {
    title: "god damn it i just want to be good at this already",
    text: "i dont want to be a junior dev for the rest of my life",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
        <h1 className="gradient__text">The future is now old man</h1>
        <p>request access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((feature, index) => (
          <Feature title={feature.title} text={feature.text} key={feature.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
