import {Person} from "./person";

export const JAMES: Person = {

  firstName: "James",
  lastName: "Zimowsky",
  city: "Seattle",
  state: "WA",
  phone: "206-552-9511",
  email: "jameszimo@gmail.com",
  profile: "Self-motivated, hardworking, and dynamic team player who has a history of developing innovative technical solutions to complex problems. Culturally sensitive, well-traveled, and familiar working in diverse environments with both on-premise and off-shore teammates. In-depth knowledge of IT systems, the full development cycle, and numerous programming languages. Experience working with Lean and Agile methodologies in a high-energy environment with tight deadlines and exacting customers. Experience mentoring and coaching team members to ensure skills are passed on and that all team members feel included and empowered.",
  jobTitle: "Senior Software Developer",
  workExperience: [
    {
      company: "The Boeing Company",
      city: "Seattle, WA",
      dateRange: "2020 – present",
      title: "Senior Software Developer - Full Stack - Product Systems - Various Applications",
      description: "Developed a GitLab continuous integration and delivery (CICD) pipeline for the new Pivotal Cloud Foundry (PCF) based web application Maintenance Optimization System (MOS) including quality stages with SonarQube and Coverity|Developed the initial Java, Spring and Angular 10 based software for MOS using test driven development (TDD) and kept test coverage at 100% for backend microservices and frontend JavaScript code|Developed Authorization model and implemented SSO Authentication|Created a build monitor that showed real-time visibility for all 4 CICD pipelines and server health for deployed PCF environments|Paired with other developers to teach TDD and paired programming techniques",
      companyLink: "https://boeing.com"
    },
    {
      company: "The Boeing Company",
      city: "Seattle, WA",
      dateRange: "2018 – 2020",
      title: "Senior Software Developer - Full Stack - Digital Transformation Environment (DTE)",
      description: "Empower client development teams in modern software development practices by working with them side by side while developing software solutions for Cloud Foundry based web applications at multiple Boeing sites and at Pivotal Labs in Seattle|Practice pair programming, test driven development (TDD) and other eXtreme programming techniques on small balanced teams in order to accomplish iterative development and continuous delivery (CI/CD) of features and stories for end users while enabling client development teams|Lead a team as the 'Anchor' developer on an engagement with an HR IT team on a large project to replace an outgoing HR system, which involved interfacing with management and working with other senior developers in order to make technical architecture decisions and to provide leadership for the team",
      companyLink: "https://boeing.com"
    },
    {
      company: "The Boeing Company",
      city: "Seattle, WA",
      dateRange: "2017 - 2018",
      title: "Software Developer - Full Stack - Toolbox Project",
      description: "Developed software solutions for an Azure cloud based web application utilizing a microservices architecture|Practiced pair programming and test driven development (TDD) in an agile development setting to accomplish iterative and continuous delivery (CI/CD) of features and stories for end users|Worked with product owners, functional analysts, offshore and other on premise development teams, architects, and end users in order to coordinate development on various libraries and services for a complex cloud based web application",
      companyLink: "https://boeing.com"
    },
    {
      company: "The Boeing Company",
      city: "Seattle, WA",
      dateRange: "2004 – 2015",
      title: "Software Developer - Oracle Siebel CRM/Oracle Business Intelligence (OBIEE)",
      description: "Developed ETL, interactive dashboards, reports, and analysis templates using Oracle Business Intelligence Enterprise Edition (OBIEE)|Analyzed, designed, coded, and implemented complex solutions for an integrated Siebel CRM client/server information system|Developed and maintained a J2EE (Java) web service interface to Oracle Siebel CRM that allows an always available system even during Siebel outages|Worked with functional analysts, architects, offshore development and other IT groups in order to design changes to software applications and to minimize risk during the development lifecycle|Lead On-shore and off-shore resources in projects to develop technical solutions to highly complex business requirements|Automated common software development processes (repository export, compile, tests, server builds) in order to decrease errors and decrease software move time which saved countless rework hours and money. |Lead configuration management activity to implement ClearCase, then Subversion as source control and to automate code move activities in an effort to reduce errors and save time and money|Provided third level production support for an integrated Oracle Siebel CRM implementation",
      companyLink: "https://boeing.com"
    },
    {
      company: "The Boeing Company",
      city: "Seattle, WA",
      dateRange: "2015 - 2017",
      title: "Software Developer - Fleet Reliability Solutions Tool",
      description: "Developed and implemented software solutions for a J2EE (Java) based analytics application that presents report data from a data warehouse to airline customers and Boeing internal users|Worked with users, functional analysts, architects, offshore development and other IT groups in order to design changes to application and to minimize risk during the development lifecycle|Modernized development tools and methodology for legacy application to include Agile, Git, Maven, Artifactory, VersionOne and Rundeck|Determined specifications and requirements for upcoming changes with other integrated applications and future technology stack for application going forward|Conducted application architecture activities including security assessments, disaster recovery planning and participated in other IT compliance exercises|Coached and mentored team members to ensure skills were passed on and to set up team members for successful software development activities",
      companyLink: "https://boeing.com"
    }
  ],
  "educations": [
    {
      id: 1,
      degree: "Bachelor of Science, Chemistry",
      school: "University of Idaho",
      city: "Moscow",
      state: "Idaho",
      link: "https://www.uidaho.edu/"
    },
    {
      id: 2,
      degree: "Certificate, Java Programming",
      school: "University of Washington",
      city: "Seattle",
      state: "Washington",
      link: "https://www.pce.uw.edu/"
    }
  ],
  "competencies": [
    {
      id: 1,
      name: "Java",
      link: "https://openjdk.java.net/",
      imageName: "openJdk.jpg"
    },
    {
      id: 2,
      name: "Spring Boot",
      link: "https://spring.io/",
      imageName: "springBoot.png"
    },
    {
      id: 3,
      name: "Angular",
      link: "https://angular.io/",
      imageName: "angular.png"
    },
    {
      id: 4,
      name: "Git",
      link: "https://git-scm.com/",
      imageName: "git.png"
    },
    {
      id: 5,
      name: "SQL",
      link: "https://en.wikipedia.org/wiki/SQL",
      imageName: "sql.webp"
    },
    {
      id: 6,
      name: "React",
      link: "https://reactjs.org/",
      imageName: "react.png"
    },
    {
      id: 7,
      name: "Pair Programming",
      link: "https://en.wikipedia.org/wiki/Pair_programming",
      imageName: ""
    },
    {
      id: 8,
      name: "Typescript",
      link: "https://www.typescriptlang.org/",
      imageName: "typescript.svg"
    },
    {
      id: 9,
      name: "Scripting (Bash, Windows)",
      link: "https://en.wikipedia.org/wiki/Scripting_language",
      imageName: "bash.jpg"
    },
    {
      id: 10,
      name: "Pivotal Cloud Foundry (PCF)",
      link: "https://tanzu.vmware.com/tanzu/",
      imageName: "pcf.png"
    },
    {
      id: 11,
      name: "Test Driven Development (TDD)",
      link: "https://en.wikipedia.org/wiki/Test-driven_development",
      imageName: "tdd.jpeg"
    },
    {
      id: 12,
      name: "GitLab",
      link: "https://about.gitlab.com/",
      imageName: "gitlab.webp"
    },
    {
      id: 13,
      name: "Gradle",
      link: "https://gradle.org/",
      imageName: "gradle.png"
    },
    {
      id: 14,
      name: "JSON",
      link: "https://www.json.org/",
      imageName: "json.png"
    },
    {
      id: 15,
      name: "CI/CD",
      link: "https://en.wikipedia.org/wiki/CI/CD",
      imageName: ""
    },
    {
      id: 16,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      imageName: "javascript.png"
    },
    {
      id: 17,
      name: "Liquibase",
      link: "https://www.liquibase.org/",
      imageName: "liquibase.svg"
    },
    {
      id: 18,
      name: "Jira",
      link: "https://www.atlassian.com/software/jira",
      imageName: "jira.jpg"
    },
    {
      id: 19,
      name: "HTML",
      link: "https://en.wikipedia.org/wiki/HTML5",
      imageName: "html5.png"
    },
    {
      id: 20,
      name: "Microservices",
      link: "https://microservices.io/",
      imageName: ""
    },
    {
      id: 21,
      name: "PowerShell",
      link: "https://learn.microsoft.com/en-us/powershell/",
      imageName: "powershell.jpeg"
    },
    {
      id: 22,
      name: "Azure",
      link: "https://azure.microsoft.com/",
      imageName: "azure.jpeg"
    }
  ]
}
