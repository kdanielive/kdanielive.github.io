import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const SpinningRecord = styled.img`
  max-height: 40vh;
  max-width: 30vw;

  margin-top: 30vh;
  animation: rotation 6s infinite linear;

  border: solid;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const ProfilePic = styled.img`
  box-shadow: inset 0px 0px 100px 100px rgb(0, 49, 83);

  max-height: 40vh;
  max-width: 30vw;
`;
