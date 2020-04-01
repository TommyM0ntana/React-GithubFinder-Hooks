import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1 style={title}>About this App</h1>
      <p style={par}>
        This WebApp was created By Tommy Montana to help recruiter and
        developers to make faster all their research about candidates and
        software developers faster and to get access to all their repos, are
        they hireable, location, and all the info that the account gives.
      </p>
    </Fragment>
  );
};
const title = {
  color: "black",
  padding: "80px 30px 10px 30px"
};
const par = {
  padding: "10px 30px"
};
export default About;
