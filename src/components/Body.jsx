import React from "react";

function Content() {
  return (
    <body>
      <div className="content">
        <h1 className="content-greet">Greetings! 👋</h1>
        <p className="content-introduction">
          I'm
          <span className="content-name"> Nor Aiman Akashah</span>, an aspiring
          web developer with a passion for creating dynamic and user-friendly
          websites. Currently, I am a recent graduate from
          <a
            className="content-certificate"
            href="https://www.udemy.com/certificate/UC-b9390cce-1227-40a6-b339-2bdb50248132/"
          >
            {" "}
            Udemy Web Development Bootcamp
          </a>
          , and I'm excited to embark on my journey in the tech industry. I love
          diving into both front-end and back-end development, and I enjoy
          working with technologies like{" "}
          <span class="content-skills">HTML</span>,{" "}
          <span class="content-skills">CSS</span>,{" "}
          <span class="content-skills">JavaScript</span>, and{" "}
          <span class="content-skills">React</span>. On the back-end, I'm
          proficient with <span class="content-skills">Node.js</span>,{" "}
          <span class="content-skills">Express</span>, and{" "}
          <span class="content-skills">PostgreSQL</span>, and I'm always eager
          to learn new tools and frameworks.
        </p>
      </div>
    </body>
  );
}

export default Content;
