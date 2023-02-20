import React from "react";
import mypic from "../../assets/images/pic.jpg";
import resume from "../../assets/files/CV-4 (New).pdf";
const About = () => {
  return (
    <div className="lg:flex lg:h-screen" id="About">
      <div className="lg:w-2/5 flex justify-center items-center">
        <div className="avatar mx-4" data-aos="fade-up">
          <div className="rounded-full">
            <img className="w-full rounded-full" src={mypic} alt="image" />
          </div>
        </div>
      </div>
      <div className="lg:w-3/5 flex justify-center items-center bg-base-100">
        <div className="px-7 lg:py-0 py-10">
          <p className="text-3xl mb-3 font-bold text-primary text-center">
            About
          </p>
          <p>
            I'm Serajus Saleheen from Rangpur, Bangladesh. I completed my B.Sc in
            Computer Science and Engineering (CSE) from Bangladesh Army
            University of Science and Technology (BAUST), Saidpur. My current goal is to work in
            an organization that allows me to expand my skills and knowledges
            while contributing to the company's success.
          </p>
          <p>
            Six months of experience as a Full-Stack development learner on the
            learning platform and through self-study. I learned leadership
            skills by heading varsity project teams and "Pitha Utshab Ceremony". I also
            learned managerial skills via our Hall Manager and the varsity's farewell
            program. And the most crucial aspect of my life is time management.
            The most exciting aspect of coding is dealing with errors. It
            awakens two reactions in us. The first is terror, and the second is
            happiness. What I learned from this is how to handle a negative
            circumstance and turn it into a positive one. Claiming the mind is
            the most important thing when we encounter a problem, and I am the
            best at it since I have experienced this issue many times and
            battled it back.
          </p>
          <div className="mt-5">
            <a href={resume} download="Saleheen_Resume" class="btn btn-secondary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
