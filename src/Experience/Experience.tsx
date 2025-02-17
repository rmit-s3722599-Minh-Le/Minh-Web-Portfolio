import React from 'react';
import './Experience.css';

function Experience() {

    function listPoint(a: string) {
      return(
        <li>
          {a}
        </li>
      )
    } 
    return (
    <div className="Homepage">
      <div className="Experience">
        <h1>
          My experiences
        </h1>
        <h2>
            National Australia Bank (NAB) 
        </h2>
        <div>
          <h3>
            2023 - FULL TIME JUNIOR DEVOPS 
          </h3>
          <p>
            Driven through the Scrum framework and an Agile mindset.  
          </p>
          <ul>
              {listPoint("Troubleshooted failing AWS and CI/CD Jenkins services such as ECS Cluster tasks and EC2 Instances that were causing bottlenecks in developments. Was highly regarded by developers by tackling issues quickly.")}
              {listPoint("Developed multiple documents outlining common errors with their corresponding solutions in Confluence, enhancing team efficiency through utilization by the team.")}
              {listPoint("Built Jenkins jobs to automate tasks, such as renewing certificates with Venafi. Was constantly utilized by other DevOps and developers to reduce human error and increase performance.")}
              {listPoint("Upgraded front-end and back-end codes to be compatible for Harness.")}
              {listPoint("Minimalized vulnerabilities by continuously monitoring and updating the key packages and resources.")}
          </ul>
        </div>
        <div>
          <h3>
            2020-2023 - FULL TIME JUNIOR Frontend Developer 
          </h3>
          <p>
            Helped develop a portal (https://nabhive.nab.com.au/login was the prod version of the portal) for merchant customers.  
          </p>
          <ul>
              {listPoint(`Delivery of features (Using React/Typescript, CSS, Javscript, HTML and Node.JS) with constant 
                communication with UI/UX team, Backend team and other Front-end teams.`)}
              {listPoint("Implemented mobile/tablet responsiveness to web pages and features like menu bar becoming hamburger menu through breakpoints.")}
              {listPoint("Experienced with unit testing with Jest/React Testing Library, providing coverage to code.")}
              {listPoint("CI/CD, frequently deploying to non-production/production using Jenkins/Harness pipeline.")}
              {listPoint("Monitored and frequently updated the packages and the portal, ensuring potential minimal issues.")}
              {listPoint("Taught co-workers the necessary steps with documentations in order to develop, update and troubleshoot the front-end code.")}
              {listPoint("Immediately identified and fixed defects, ensuring seamless usability for merchants.")}
          </ul>
        </div>       
      </div>
    </div>
  );
}

export default Experience;
