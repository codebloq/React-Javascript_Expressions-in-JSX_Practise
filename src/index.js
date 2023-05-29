//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.

import React from "react";
import ReactDOM from "react-dom";

const name = "lawyerWho";
var year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Javascript Expressions in JSX Practise.</h1>

    <hr />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt
      dui ut ornare lectus sit. Quis auctor elit sed vulputate mi sit amet
      mauris. Vel risus commodo viverra maecenas accumsan lacus. Nunc faucibus a
      pellentesque sit amet porttitor eget dolor morbi. Suspendisse interdum
      consectetur libero id faucibus nisl tincidunt eget. Nisl purus in mollis
      nunc sed id semper risus in. Lorem ipsum dolor sit amet. Faucibus
      scelerisque eleifend donec pretium vulputate. Lectus magna fringilla urna
      porttitor rhoncus dolor purus. Id donec ultrices tincidunt arcu non
      sodales neque. Consequat interdum varius sit amet mattis. Pretium quam
      vulputate dignissim suspendisse in.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis
      convallis convallis tellus id. Laoreet id donec ultrices tincidunt arcu
      non sodales neque. Vel risus commodo viverra maecenas accumsan lacus vel
      facilisis volutpat. Sit amet risus nullam eget felis eget nunc lobortis.
      Aliquet porttitor lacus luctus accumsan tortor posuere. Dolor sit amet
      consectetur adipiscing. At urna condimentum mattis pellentesque id. Vitae
      sapien pellentesque habitant morbi tristique senectus et. Cum sociis
      natoque penatibus et. Tempor commodo ullamcorper a lacus vestibulum sed.
    </p>

    <br></br>

    <p>Created by {name}.</p>

    <p>Copyright {year}.</p>
  </div>,
  document.getElementById("root")
);
