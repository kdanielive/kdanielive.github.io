import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import rightArrow from "../util/right-arrow.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightArrow = styled.button`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;

  background-position: center;

  height: 100vh;
  width: 30px;

  background-color: transparent;
  border: none;

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
`;

const ProjectWrapper = styled.div`
  margin-left: 0;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  direction: rtl;

  height: 97vh;
  width: 100vw;
`;

const IndividualProjectBox = styled.div`
  width: 100%;
  direction: ltr;
  margin-bottom: 30px;
  padding-top: 30px;
  border-top: white solid 1px;
  border-right: white solid 1px;
`;

const CategoryHeader = styled.h2`
  padding-left: 20px;
  color: white;
  direction: ltr;
  text-decoration: underline dotted;
  margin-bottom: 30px;
`;

const ProjectPhoto = styled.img`
  width: 100%;
  max-height: 200px;

  object-fit: contain;
  object-position: center;
`;

const DescriptionList = styled.ul`
  list-style: circle outside;
  padding-left: 30px;
  color: white;
`;

const ExternalLink = styled.a`
  color: white;
  margin-left: 5px;
  margin-right: 5px;
`;

export default class DS_Projects extends React.Component {
  render() {
    return (
      <Wrapper>
        <ProjectWrapper>
          <CategoryHeader>Data Science</CategoryHeader>
          <IndividualProjectBox>
            <ProjectPhoto src={rightArrow} />
            <DescriptionList>
              <li style={{ fontWeight: "bolder" }}>LoL Match Prediction</li>
              <li>Development between 2019.07.11~2019.10.27</li>
              <li>
                A very rudimentary usage of neural network to predict the
                outcome of a popular video game called League of Legends.
              </li>
              <li>
                Worth noting
                <ul style={{ listStyle: "' - '" }}>
                  <li>
                    About 70% accuracy in predicting match outcome using only
                    pre-match data
                  </li>
                  <li>
                    Only utilizes basic tflearn / Keras feedforward neural
                    network models, and uses sklearn Kmeans clustering function
                    to limited effectiveness
                  </li>
                </ul>
                <li>
                  Links
                  <ul style={{ listStyle: "' - '" }}>
                    <li>
                      <ExternalLink href="https://towardsdatascience.com/match-prediction-in-league-of-legends-using-vanilla-deep-neural-network-7cadc6fce7dd">
                        Match Prediction in League of Legends Using Vanilla Deep
                        Neural Network
                      </ExternalLink>
                    </li>
                    <li>
                      <ExternalLink href="https://towardsdatascience.com/the-suspected-ineffectiveness-of-champion-class-composition-in-league-of-legends-match-prediction-81d239e7d9b3">
                        The Suspected Ineffectiveness of Champion Class
                        Composition in League of Legends Match Prediction
                      </ExternalLink>
                    </li>
                  </ul>
                </li>
              </li>
            </DescriptionList>
          </IndividualProjectBox>
          <IndividualProjectBox>
            <ProjectPhoto src={rightArrow} />
            <DescriptionList>
              <li style={{ fontWeight: "bolder" }}>
                Equity Market Technical Analysis Using Feedforward Neural Nets
              </li>
              <li>Development period between 2020.05.29~2020.08.18</li>
              <li>
                Inspired by Irene Aldridge's
                <ExternalLink href="https://api.semanticscholar.org/CorpusID:209080352">
                  paper
                </ExternalLink>
                on the place of neural networks in prediction future returns, a
                research aimed to disclose the limitations of neural networks in
                prediction future returns using technical indicators alone
              </li>
              <li>
                Worth noting
                <ul style={{ listStyle: "' - '" }}>
                  <li>
                    Zero or close to zero data leak, look-ahead bias,
                    survivorship bias that are so common in most other
                    researches that show astounding prediction results
                  </li>
                </ul>
                <li>
                  Links
                  <ul style={{ listStyle: "' - '" }}>
                    <li>
                      <ExternalLink href="https://towardsdatascience.com/the-effectiveness-of-feed-forward-neural-networks-in-trend-based-trading-1-4074912cf5cd">
                        The Effectiveness of Feed-forward Neural Networks in
                        Trend-based Trading (1)
                      </ExternalLink>
                    </li>
                  </ul>
                </li>
              </li>
            </DescriptionList>
          </IndividualProjectBox>
        </ProjectWrapper>
        <Link to="/">
          <RightArrow img={rightArrow} />
        </Link>
      </Wrapper>
    );
  }
}
