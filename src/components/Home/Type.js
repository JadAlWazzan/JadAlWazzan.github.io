import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Full Stack Engineer",
          "Data Analyst",
          "Cyber Security Analyst",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,

      }}
    />
  );
}

export default Type;
