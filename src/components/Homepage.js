import React from "react";
import styled from "styled-components";
import anime from "animejs";

import { IntroLetters } from "./IntroLetters.js";
import { NavigationArrows } from "./NavigationArrows.js";

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

export default class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <IntroLetters text="Welcome to My Website" />
        <NavigationArrows />
      </React.Fragment>
    );
  }
}
