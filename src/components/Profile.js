import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bottomArrow from "../util/down-arrow.png";

/*
Atrributes:
Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Portfolio Design Inspiration:
https://www.shopify.com/partners/blog/web-design-portfolio-inspiration

Moving Letters:
https://tobiasahlin.com/moving-letters/

https://www.sitepoint.com/get-started-anime-js/

Bobbing animation:
https://codeburst.io/tutorial-make-a-bouncing-ball-entirely-with-css-1e7e3c853a50
*/

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  height: 97vh;
  width: 100vw;
`;

const TitularHeading = styled.h1`
  margin-top: 5vh;
  padding-left: 5vw;
  margin-bottom: 0px;

  color: white;
`;

const SummaryList = styled.ul`
  padding-left: 15vw;
  color: white;
  font-size: larger;
  margin-bottom: 0;
`;

const ProPic = styled.img`
  align-self: center;
  width: 33vw;
  max-width: 400px;
  max-height: 400px;
  margin-top: 10px;

  border-radius: 50%;
  border: solid white 4px;
`;

const DownArrowDiv = styled.button`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;

  background-position: center;

  margin-top: 20px;
  width: 100%;
  min-height: 30px;

  border: none;
  background-color: transparent;
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
`;

const ExternalLink = styled.a`
  color: white;
`;

export default class Profile extends React.Component {
  render() {
    return (
      <Wrapper>
        <ProPic
          src="https://dkwebsite.s3.amazonaws.com/79030241_2364255937019363_1169486695251312640_o.jpg"
          alt="Picture of Daniel Kim"
        />
        <TitularHeading>Currently a ___ </TitularHeading>
        <SummaryList>
          <li>ROK Soldier (release date: 2021.08.13)</li>
          <li>Frontend Developer</li>
          <li>Data Science Student</li>
        </SummaryList>
        <TitularHeading>Programming Background</TitularHeading>
        <SummaryList>
          <li>iOS Development (2016~Present)</li>
          <li>Front-end Web Development (2018~Present)</li>
          <li>Novice data science pet projects (2019~Present)</li>
        </SummaryList>
        <TitularHeading>Educational Background</TitularHeading>
        <SummaryList>
          <li>The Hotchkiss School (2014~2018)</li>
          <li>Columbia University in the City of New York (2018~Present)</li>
        </SummaryList>
        <TitularHeading>Work Experience</TitularHeading>
        <SummaryList>
          <li>Hanwha Life / Hanwha New Business Development Team</li>
          <li>BigTree AI Investment Startup</li>
        </SummaryList>
        <TitularHeading>Contacts</TitularHeading>
        <SummaryList>
          <li>
            <ExternalLink href="https://www.linkedin.com/in/seouk-jun-kim-a74921184/">
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://medium.com/@kdanielive">
              Medium
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/kdanielive">
              Github
            </ExternalLink>
          </li>
          <li>Gmail: kdanielive@gmail.com / sk4539@columbia.edu</li>
        </SummaryList>
        <Link to="/">
          <DownArrowDiv img={bottomArrow} />
        </Link>
      </Wrapper>
    );
  }
}
