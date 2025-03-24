import { experiences } from '../utils';
import React from 'react';

const Experience = () => {
  return (
    <div>
      <h4 className="text-2xl font-medium space-x-2 mb-4">Experience</h4>
      <div className="space-y-2 mb-4">
        {experiences.map(
          ({ company, location, position, date, skills }, index) => {
            return (
              <div key={index} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <h3 className="text-xl">{company}</h3>
                  <div className="text-tiny text-gray-lite md:ml-auto">
                    {location}
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-2 md:m-0 md:grid-cols-2">
                  <h4 className="font-medium text-md">{position}</h4>
                  <div className="text-tiny text-gray-lite md:ml-auto">
                    {date}
                  </div>
                </div>
                {skills.map(({ project, description }, i) => {
                  return (
                    <div
                      key={i}
                      className="rounded-lg py-4 pl-5 pr-3 space-y-2 bg-sky-50 mt-4 shadow-sm"
                    >
                      <h3 className="font-medium text-md">{project}</h3>
                      <ul role="list" className="list-disc pl-6">
                        {description.map((desc, i) => {
                          return <li key={i}>{desc}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Experience;
