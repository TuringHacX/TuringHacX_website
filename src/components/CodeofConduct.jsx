import React from 'react';

const conductData = [
    {
      order: 1,
      quote: 'Respectful Behavior',
      description:
        'Treat all participants, mentors, judges, and organizers with respect and courtesy, regardless of their background, identity, or expertise. Avoid offensive language, personal attacks, and any form of harassment or discrimination.',
    },
    {
      order: 2,
      quote: 'Inclusive Environment',
      description:
        'Embrace diversity and inclusivity. Create an environment where individuals of all backgrounds feel welcome and valued. Avoid engaging in any behavior that could make others uncomfortable or excluded.',
    },
    {
      order: 3,
      quote: 'Collaboration and Openness',
      description:
        'Encourage collaboration and open communication among all participants. Respect differing opinions and approaches, and engage in constructive discussions.',
    },
    {
      order: 4,
      quote: 'Integrity and Fair Play',
      description:
        'Uphold the highest standards of integrity and fair play in all interactions. Do not engage in cheating, plagiarism, or any unethical behavior that compromises the spirit of the hackathon.',
    },
    {
      order: 5,
      quote: 'Compliance with Laws',
      description:
        'Comply with all applicable laws and regulations. Do not engage in any illegal activity or conduct that could harm the hackathon or its participants.',
    },
    {
      order: 6,
      quote: 'Safety and Security',
      description:
        'Prioritize the safety and security of all participants and their belongings. Report any safety concerns or incidents to the event organizers immediately.',
    },
    {
      order: 7,
      quote: 'Confidentiality and Intellectual Property',
      description:
        'Respect the confidentiality and intellectual property of others, including the ideas and projects presented at the hackathon. Obtain proper permissions before using or sharing others\' work.',
    },
    {
      order: 8,
      quote: 'Consequences of Violations',
      description:
        'Violations of this code of conduct may result in consequences such as warnings, removal from the event, or disqualification from the hackathon, as determined by the event organizers.',
    },
    {
      order: 9,
      quote: 'Adherence to Rules and Guidelines',
      description:
        'Follow all rules, guidelines, and instructions provided by the event organizers. Any violations of the hackathon rules may result in disqualification.',
    },
    {
      order: 10,
      quote: 'Zero Tolerance for Harassment',
      description:
        'Harassment, including but not limited to verbal, written, or physical conduct that discriminates or intimidates others, will not be tolerated. If you experience or witness harassment, please report it to the event organizers immediately.',
    },
    {
      order: 11,
      quote: 'Reporting Violations',
      description:
        'If you experience or witness any behavior that violates this code of conduct, please notify the event organizers promptly. You can reach out in person or through designated communication channels.',
    },
    {
        order: '',
        quote: '',
        description:
          '',
      },
  ];

const CodeofConduct = () => {
  return (
    <div
      id='code-of-conduct'
      className='flex flex-col mt-44 text-center gap-y-4'
    >
      <div>
        <h1
          className='text-zinc-100 text-5xl font-bold'
        >
          Code of Conduct
        </h1>
      </div>
      <div  className="grid mb-8 w-8/12 mx-auto mt-5 opacity-80 bg-black rounded-lg border border-white shadow-sm md:mb-12 md:grid-cols-2">
        {conductData.map((item, index) => (
          <figure
            key={index}
            className={`flex flex-col items-center justify-center p-8 text-center backdrop-blur-3xl ${
              index === conductData.length - 1 ? 'rounded-b-lg' : 'border-r'
            } dark:backdrop-blur-3xl`}
          >
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.quote}
              </h3>
              <p className="my-4">{item.description}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
            
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>{item.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.role}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default CodeofConduct;
