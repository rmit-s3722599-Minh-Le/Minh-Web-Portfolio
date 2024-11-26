import React from 'react';
// import logo from './logo.svg';
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
      {/* This is the page content. This will used as the template */}
      <div className="Experience">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
            Built a portal (https://nabhive.nab.com.au/login was the prod version of the portal) for merchant customers.  
          </p>
          <ul>
              {listPoint("Developed 70% of the front-end login page, including the hamburger menu and the portal.")}
              {listPoint("Was highlighted for my contributions toward the front-end login page by the microservice team.")}
              {listPoint("Acknowledged by the UX/UI and the back-end team for continuing to ensure the required features were developed as intended.")}
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
