import React from "react";

const Skills = () => {
  const data = [
    {
      name: "REACT.JS",
      percentage: "80",
    },
    {
      name: "JAVASCRIPT",
      percentage: "80",
    },
    {
      name: "NODE.JS",
      percentage: "70",
    },
    {
        name: "MONGODB",
        percentage: "70",
    },
    {
        name: "EXPRESS",
        percentage: "65",
    },
    {
      name: "HTML5",
      percentage: "90",
    },
    {
      name: "CSS3",
      percentage: "90",
    },
    {
      name: "BOOTSTRAP",
      percentage: "90",
    },
    {
      name: "TAILWIND",
      percentage: "90",
    },
    {
      name: "FIREBASE AUTH",
      percentage: "90",
    },
    {
      name: "C & C++",
      percentage: "60",
    },
    {
      name: "PYTHON",
      percentage: "50",
    },
  ];
  return (
    <div className="mt-10 lg:h-screen" id="Skills">
      <div className="h-full flex justify-center items-center">
        <div className="bg-base-100 w-full py-20">
          <p className="text-3xl mb-3 font-bold text-primary text-center">
            MY SKILLS
          </p>
                  <div className='grid lg:grid-cols-3 grid-cols-2 gap-2'>
                      {
                          data.map(skill => {
                              return (
                                <>
                                  <div data-aos="zoom-in" className="px-5 my-4">
                                    <div className="flex justify-between">
                                      <p className="lg:text-xl font-bold">
                                        {skill.name}
                                      </p>
                                      <p className="lg:text-xl font-bold text-warning">
                                        {skill.percentage}%
                                      </p>
                                    </div>
                                    <progress
                                      className="progress progress-accent w-full"
                                      value={skill.percentage}
                                      max="100"
                                    ></progress>
                                  </div>
                                </>
                              );
                          })
                      }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
