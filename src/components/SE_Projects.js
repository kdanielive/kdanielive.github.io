import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import leftArrow from "../util/left-arrow.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftArrow = styled.button`
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
  margin-left: 10px;

  display: flex;
  flex-direction: column;
  overflow-y: auto;

  height: 97vh;
  width: 100vw;
`;

const IndividualProjectBox = styled.div`
  width: 100%;

  margin-bottom: 30px;
  padding-top: 30px;
  border-top: white solid 1px;
  border-left: white solid 1px;
`;

const CategoryHeader = styled.h2`
  text-align: right;
  padding-right: 20px;
  color: white;
  text-decoration: dotted underline;
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

export default class SE_Projects extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">
          <LeftArrow img={leftArrow} />
        </Link>
        <ProjectWrapper>
          <CategoryHeader>iOS Development</CategoryHeader>
          <IndividualProjectBox>
            <ProjectPhoto src={leftArrow} />
            <DescriptionList>
              <li style={{ fontWeight: "bolder" }}>
                Hotchkiss Parents Weekend App
              </li>
              <li>Developed in 2016 Summer, 2017 Summer</li>
              <li>
                A navigation/scheduling app for Hotchkiss (boarding school)
                parents during Hotchkiss Parents Weekend.
              </li>
              <li>
                Features include
                <ul style={{ listStyle: "' - '" }}>
                  <li>
                    An in-app camera with an AR bearing helper that always
                    positions itself in the direction of the Main Building
                  </li>
                  <li>
                    A QR code reader with automatic checklist function for the
                    Landmark Challenge
                  </li>
                  <li>Simplified event schedule and school map pdf viewer</li>
                </ul>
              </li>
            </DescriptionList>
          </IndividualProjectBox>
          <IndividualProjectBox>
            <ProjectPhoto src={leftArrow} />
            <DescriptionList>
              <li style={{ fontWeight: "bolder" }}>OK4U</li>
              <li>
                Developed between 2019.09.04~2019.11.09 and
                2020.01.05~2020.01.20
              </li>
              <li>
                Event-purpose developed app, with event alerts and raffle number
                generator.
              </li>
              <li>
                Features include
                <ul style={{ listStyle: "' - '" }}>
                  <li>
                    A random raffle number generator used for public club events
                  </li>
                  <li>
                    Custom TableView / TableViewControler for event list view,
                    with data managed by Firebase Firestore / RDS
                  </li>
                </ul>
              </li>
            </DescriptionList>
          </IndividualProjectBox>
          <IndividualProjectBox>
            <ProjectPhoto src={leftArrow} />
            <DescriptionList>
              <li style={{ fontWeight: "bolder" }}>LIPE</li>
              <li>Development Period: 2019.07.30~2019.08.22</li>
              <li>
                A front-end skeleton developed during Hanwha New Business
                Development Internship. Was used for the final demonstration to
                Hanwha's Chief Digital Officer / Head of Global Business. An
                educational video platform with all the essential features for a
                video service app.
              </li>
              <li>
                Features include
                <ul style={{ listStyle: "' - '" }}>
                  <li>
                    Custom AVPlayerViewController with customized icons,
                    functionalities, etc
                  </li>
                  <li>
                    Horizontal scrolling window, custom segues, custom
                    NSConstraints, Google login, notification systems, etc
                  </li>
                </ul>
              </li>
            </DescriptionList>
          </IndividualProjectBox>
          <IndividualProjectBox>
            <ProjectPhoto src={leftArrow} />
            <DescriptionList>
              <li style={{ fontWeight: "bolder" }}>RemCal</li>
              <li>Developed bewteen 2020.01.26~2020.02.03</li>
              <li>
                Final app developed up to the day right before enlistment with
                the purpose of showcasing custom UI/UX component development
                skills.
              </li>
              <li>
                Features include
                <ul style={{ listStyle: "' - '" }}>
                  <li>
                    Hovering (fixed) button that displays navigation options
                    when pressed
                  </li>
                  <li>
                    Heavily customized UITableView / UITableViewController /
                    UITableViewCell
                  </li>
                </ul>
              </li>
            </DescriptionList>
          </IndividualProjectBox>
        </ProjectWrapper>
      </Wrapper>
    );
  }
}
