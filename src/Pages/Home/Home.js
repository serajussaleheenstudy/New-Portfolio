import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resume from "../../assets/files/CV-4 (New).pdf";

const Home = () => {
  return (
    <div id="home" className="h-screen">
      <div className="h-full flex flex-col items-center justify-center">
        <div>
          <p className="text-center">Hello, My Name is</p>
          <TypeAnimation
            sequence={[
              "..Serajus Saleheen..", // Types 'One'
              5000, // Waits 1s
              " ", // Deletes 'One' and types 'Two'
              // 2000, // Waits 2s
              // "Hasan", // Types 'Three' without deleting 'Two'
              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="lg:text-6xl text-3xl text-primary font-bold text-center"
          />
          <p className="font-bold text-3xl text-center">
            MERN-Stack Developer || ReactJS || Front-End Developer
          </p>
          
            <p className="lg:text-xl text-xs text-center mx-5 my-5">
              “Success is peace of mind, which is a direct result of
              self-satisfaction in knowing you made the effort to become the
              best of which you are capable.” —John Wooden
            </p>
          
        </div>
        <div className="flex">
          <ul className="flex">
            <li className="p-2">
              <a
                className="text-4xl"
                href="https://www.linkedin.com/in/serajus-saleheen-8667731a6/"
              >
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li className="p-2">
              <a className="text-4xl" href="https://github.com/serajussaleheenstudy">
                <FaGithubSquare></FaGithubSquare>
              </a>
            </li>
            <li className="p-2">
              <a
                className="text-4xl"
                href="https://www.facebook.com/profile.php?id=100011630264869"
              >
                <FaFacebookSquare></FaFacebookSquare>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
