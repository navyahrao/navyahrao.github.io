import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="max-w-4xl py-16 px-4 mx-6 md:mx-auto pt-[90px]"
    >
      <div className="md:mx-auto rounded-2xl border border-gray-100 bg-white shadow-md p-8 md:p-16 md:mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-violet-500">About Me</h2>
          <h3 className="text-2xl mt-4">Navya Hanumantha Rao</h3>
          <div className="mt-4 md:text-lg text-gray-700">
            <div className="mt-2">
              I'm a passionate front-end developer specializing in building
              modern, responsive web applications.
            </div>
            <div className="mt-2">
              What excites me the most about web development is the opportunity
              to solve real-world problems by creating intuitive and efficient
              user interfaces.
            </div>
            <div className="mt-2">
              I believe in writing clean, maintainable code, and always putting
              the user first in every project I work on.
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://www.linkedin.com/in/navya-h-rao/"
              target="_blank"
              title="linkedin"
              rel="noopener noreferrer"
              className="mr-8 w-[50px] p-2 bg-white"
            >
              <div className="icon icon-linkedin cursor-pointer"></div>
            </a>
            <a
              href="https://github.com/navyahrao"
              target="_blank"
              rel="noopener noreferrer"
              title="github"
              className="mr-8 w-[50px] p-2  bg-white"
            >
              <div className="icon icon-githubLink cursor-pointer"></div>
            </a>
            <a
              href="mailto:navya.rao28@gmail.com"
              target="_blank"
              title="email"
              className="w-[50px] p-2 bg-white"
              rel="noreferrer"
            >
              <div className="icon icon-email cursor-pointer"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
