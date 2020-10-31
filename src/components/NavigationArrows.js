import React from "react";
import styled from "styled-components";
import anime from "animejs";

import upArrow from "../util/up-arrow.png";
import bottomArrow from "../util/down-arrow.png";
import leftArrow from "../util/left-arrow.png";
import rightArrow from "../util/right-arrow.png";

import { Link } from "react-router-dom";

const InstructionDiv = styled.p`
  position: absolute;
  text-align: center;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  color: white;
`;

export const TopInstructionDiv = styled(InstructionDiv)`
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 100px;
  max-height: 50px;
`;

export const BottomInstructionDiv = styled(InstructionDiv)`
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 100px;
  max-height: 50px;
`;

const LeftInstructionDiv = styled(InstructionDiv)`
  text-align: right;
  bottom: 60px;
  height: 60px;
`;

const RightInstructionDiv = styled(InstructionDiv)`
  text-align: left;
  bottom: 60px;
  height: 60px;
  left: -30px;
`;

const ArrowDiv = styled.button`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;

  background-color: transparent;
  border: none;
`;

const TopArrowDiv = styled(ArrowDiv)`
  height: 40px;
  width: 100px;
  top: 10px;

  background-position: top;

  animation: topbobbing 0.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  @keyframes topbobbing {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 10px, 0);
    }
  }

  &:hover ${TopInstructionDiv} {
    opacity: 1;
  }
`;

export const BottomArrowDiv = styled(ArrowDiv)`
  position: absolute;
  align-self: center;
  height: 40px;
  width: 100px;
  bottom: 10px;

  background-position: bottom;

  animation: bottombobbing 0.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  @keyframes bottombobbing {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, -10px, 0);
    }
  }

  &:hover ${BottomInstructionDiv} {
    opacity: 1;
  }
`;

const LeftArrowDiv = styled(ArrowDiv)`
  position: absolute;
  height: 100px;
  width: 40px;
  left: 10px;
  top: calc(50vh - 50px);

  background-position: left;

  animation: leftbobbing 0.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  @keyframes leftbobbing {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(10px, 0, 0);
    }
  }

  &:hover ${LeftInstructionDiv} {
    opacity: 1;
  }
`;

const RightArrowDiv = styled(ArrowDiv)`
  position: absolute;
  height: 100px;
  width: 40px;
  right: 10px;
  top: calc(50vh - 50px);

  background-position: right;

  animation: rightbobbing 0.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  @keyframes rightbobbing {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-10px, 0, 0);
    }
  }

  &:hover ${RightInstructionDiv} {
    opacity: 1;
  }
`;

const TopBottomLink = styled(Link)`
  align-self: center;
`;

export class NavigationArrows extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopBottomLink to="/profile">
          <TopArrowDiv img={upArrow}>
            <TopInstructionDiv>Quick Profile</TopInstructionDiv>
          </TopArrowDiv>
        </TopBottomLink>
        {/*
        <BottomArrowDiv img={bottomArrow}>
          <BottomInstructionDiv>Placeholder</BottomInstructionDiv>
        </BottomArrowDiv>
        */}
        <Link to="/ds_projects">
          <LeftArrowDiv img={leftArrow}>
            <LeftInstructionDiv>Data Science Projects</LeftInstructionDiv>
          </LeftArrowDiv>
        </Link>
        <Link to="/se_projects">
          <RightArrowDiv img={rightArrow}>
            <RightInstructionDiv>
              Software Engineering Projects
            </RightInstructionDiv>
          </RightArrowDiv>
        </Link>
      </React.Fragment>
    );
  }
}
