import React from "react";
import "./Home.css";

function Home(props) {
  const socialLinks =
    props.data &&
    props.data.social.map((entry) => {
      return (
        <li key={entry.name}>
          <a href={entry.url} target="_blank" rel="noopener noreferrer">
            <i className={entry.className} />
          </a>
        </li>
      );
    });

  return (
    <div id="home" className="Home__Wrap">
      <h1>hh ...</h1>
      <ul className="social">{socialLinks}</ul>
    </div>
  );
}

export default Home;
