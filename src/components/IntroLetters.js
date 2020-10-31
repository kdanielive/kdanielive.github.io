import React, { Component } from "react";
import anime from "animejs";
import styled from "styled-components";

const IntroText = styled.p`
  position: absolute;
  top: 40%;
  align-self: center;
  font-weight: 900;
  font-size: 4vw;
  color: white;
  text-align: center;
`;

const IntroQ = styled.p`
  position: absolute;
  align-self: center;
  top: 100%;

  text-align: center;
  color: white;
  font-size: 4vw;
  font-weight: 900;
`;

const Instruction = styled.p`
  position: absolute;
  align-self: center;
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 3vw;

  top: 50vh;
`;

export class IntroLetters extends Component {
  componentDidMount() {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".letter",
        opacity: [0, 1],
        easing: "easeInOutExpo",
        delay: (_, i) => 60 * (i + 1)
      })
      .add({
        targets: ".header",
        translateY: [0, "10vh"],
        duration: 500
      })
      .add({
        targets: ".header",
        translateY: [0, "-60vh"]
      })
      .add({
        targets: ".introQ",
        translateY: [0, "-60vh"]
      })
      .add({
        targets: ".instruction",
        easing: "easeInOutExpo",
        opacity: [0, 0.6],
        duration: 1000
      });
  }

  render() {
    return (
      <React.Fragment>
        <IntroText className="header">
          {this.props.text.split("").map((v, index) => (
            <span className="letter" key={index}>
              {v}
            </span>
          ))}
        </IntroText>
        <IntroQ className="introQ">Choose Your Interest</IntroQ>
        <Instruction className="instruction"> Choose an arrow </Instruction>
      </React.Fragment>
    );
  }
}
