/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false,
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Damanpreet Grewal",
  logo_name: "damanpreet.grewal()",
  nickname: "dpsg",
  full_name: "Damanpreet Singh Grewal",
  subTitle: "Full Stack Developer, MERN Stack Developer 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1NZCnCqmNoK3TQqrscPJMsFhPvwL9RQFO/view?usp=sharing",
  mail: "mailto:damanpreetsinghgrewal92@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/damanpreetgrewal/",
  linkedin: "https://www.linkedin.com/in/damanpreetgrewal/",
  gmail: "damanpreetsinghgrewal92@gmail.com",
  gitlab: "https://gitlab.com/damanpreetsinghgrewal92/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications in Android Studio",
        "⚡ Integration of third party services such as Firebase/Heroku",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Conestoga College , Kitchener , Ontario , Canada",
      subtitle: "Post Graduate Diploma in Web Design and Development",
      logo_path: "conestoga.png",
      alt_name: "PGD",
      duration: "May'21 - Aug'22",
      descriptions: [
        "⚡ I have studied core subjects like Responsive Site Design, Advanced JavaScript Programming, UI/UX Design, Advanced Database Design (Sql/NoSql), Content Management Systems, Capstone Project",
        "⚡ I have also studied specialized courses like Full Stack Programming (MEAN/MERN) , Mobile Application Development (Android), SEO/Google Analytics , Website Security, Advanced Programming with .NET",
        "⚡ I have implemented several projects based on what I've leart under my Web Development course",
      ],
      website_link: "https://www.conestogac.on.ca/fulltime/web-development/",
    },
    {
      title: "Vellore Institute of Technology , TamilNadu , India",
      subtitle: "BTech in Electronics and Instrumentation Engineering",
      logo_path: "vit.png",
      alt_name: "VIT",
      duration: "2010 - 2014",
      descriptions: [
        "⚡ I have studied core subjects like Engineering Electromagnetics, Signals and Systems, Semiconductor Devices and Circuits, Digital Signal Processing etc",
        "⚡ I have also studied elective courses like Embedded System Design, Robotics and Control, Fiber Optic Sensors, Industrial Automation  etc.",
        "⚡ My Final Engineering Project was a Fall Detection System based on Neural Fuzzy Networks",
      ],
      website_link:
        "https://vit.ac.in/schools/school-of-electrical-engineering-for-ug-courses/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/14Ka8_1Am1FBBEDPxrKRfxY3J_CE4dxLA/view?usp=sharing",
      alt_name: "MongoDB University",
      color_code: "#47A048",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/1usdYucXW6tgUsq4IOBagmdgEx2Pn73CO/view?usp=sharing",
      alt_name: "MongoDB University",
      color_code: "#47A048",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1BUP7d1gqoC1eLvjl2y0jS_G5Kis-N1q0/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1hi--w92uVtuPd5szjQMQ9WOEO9zzQ55H/view?usp=sharing",
      alt_name: "Flutter Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "MS Azure",
      subtitle: "Microsoft Azure Essentials",
      logo_path: "msazure.png",
      certificate_link:
        "https://olympus1.mygreatlearning.com/course_certificate/UTSIUNZK",
      alt_name: "Microsoft Azure Essentials",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description: `Over 6 years of experience as a Java Full Stack Developer in IT industry. Extensively experienced in Software Analysis, 
    Design, Development, Implementation and Testing of Object-Oriented Applications and Web based Enterprise Applications 
    using java/J2EE along with Modern Javascript frameworks like React.js and Next.js`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Technology Analyst",
          company: "Infosys",
          company_url: "https://www.infosys.com/",
          logo_path: "Infosys.png",
          duration: "Jan 2020 - Feb 2021",
          location: "Pune , India",
          description: `Client : UBS AG - Asset Management - Pre/Post Trading Ops
          •	Worked on applications that performed duties like Portfolio Onboarding, Institutional Client Account Setup, Billing, Performance Measurement, Client Reporting, Portfolio and Order Management, and Global Benchmarks Management.
          •	Exhibited skills in React JS, Redux, Webpack, ES6, Styled Components, React-Bootstrap, NPM, React JS, Redux, Webpack, ES6, Styled Components, Bootstrap, Axios/Fetch API, Java, NodeJS and JavaScript, HTML5, CSS3, Oracle PLSQL, Informatica, SAP Crystal Reports, Java.
          •	Worked on responsive design and developed responsive reusable components using React Bootstrap.
          •	Worked on Redux Library for state Management.
          •	Used Sequelize, object /relational mapping (ORM) package, to connect Oracle DBs with Node/Express based backend.
          •	Used Jest, Mocha & Chai for mocking functions, writing Unit/Integration Tests and perform TDD.
          •	Hands on experience in Node.js development using Express framework to create RESTful APIs.
          •	Tested Rest web services using postman.
          •	Used GIT to maintain the version of the files and took the responsibility to do the code merges from branch to trunk and creating new branch when new feature implementation starts.
          `,
          color: "#0071C5",
        },
        {
          title: "Senior Systems Engineer",
          company: "Infosys",
          company_url: "https://www.infosys.com/",
          logo_path: "Infosys.png",
          duration: "Oct 2016 - Dec 2019",
          location: "Zurich , Switzerland",
          description: `Client : UBS AG - Asset Management - Pre/Post Trading Ops
          • Developed Complex database objects like Stored Procedures, Functions, Packages and Triggers using SQL and PL/SQL and oracle tools like Toad, SQL Developer and SQL* plus.
          •	Performed L3 Production support worked on Incident Requests, and Problem Tasks deployed Break fixes, created knowledge articles, participated in Release/Change Management activities.
          •	Monitoring the offshore work and providing technical help to the offshore team for their JIRA tickets.
          •	Implemented JWT signing and encryption mechanism for the required services.
          •	Performs code reviews on the code delivered by the rest of the team.
          •	Worked on technical specifications into project scopes of work and product requirements while spearheading design and development of databases and enterprise solutions.
          •	Worked in Agile (Scrum) environment for the entire application development and used Jira/Confluence for user story tracking processes and streamlining agile planning.
          •	Understand business challenges, translate them into technical solutions and provide leadership during the analysis, design and build.
          •	Work with the Technology Project Manager, Technology Business Analysts, and other team members to define metrics and performance goals for the application.
          `,
          color: "#EE3C26",
        },
        {
          title: "Systems Engineer",
          company: "Infosys",
          company_url: "https://www.infosys.com/",
          logo_path: "Infosys.png",
          duration: "Sep 2014 - Sep 2016",
          location: "Pune , India",
          description: `Client : UBS AG - Asset Management - Pre/Post Trading Ops
          •	Developed GUI using JavaScript, HTML, CSS, JSPs and JavaScript/JQuery applying best standards
          •	Involved in fixing several bugs for JavaScript, HTML, and CSS.
          •	Responsible for migrating from old look of the application to Web components and widgets using AJAX, JavaScript.
          •	Worked with several cross-browser compatibilities.
          • Performed EOL Migrations like Oracle 11g to 18c, RHEL 6 to 7, SAP BO Crystal Reports 3.1 to 4.1, Java 1.7 to 1.8 , Autosys R11 to R11.3.6.

          `,
          color: "#26d8ee",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Campus Hustler",
          company: "Skillenza",
          company_url: "https://skillenza.com/",
          logo_path: "skillenza.png",
          duration: "Feb 2021 - Present",
          location: "Work from Home",
          description:
            "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
          color: "#196acf",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Vanilla JS and React Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "damanpreet.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Damanpreet92/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "react-twitter-clone",
      url: "https://github.com/damanpreetgrewal/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "1",
      name: "top-crypto-gainers",
      url: "https://github.com/damanpreetgrewal/top-crypto-gainers",
      description:
        "A top high price changed crypto coins wring 24 hours A sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "2",
      name: "personal-portfolio",
      url: "https://github.com/damanpreetgrewal/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "node_express_crud_api_starter",
      url: "https://github.com/damanpreetgrewal/node_express_crud_api_starter",
      description: "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "damanpreetgrewal.github.io",
      url: "https://github.com/damanpreetgrewal/damanpreetgrewal.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. It is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "5",
      name: "Netflix top series",
      url: "https://github.com/damanpreetgrewal/netflix-top-series",
      description: "List of Top Netflix Series which is deployed to vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "6",
      name: "COVID-19 Tracker",
      url: "https://github.com/damanpreetgrewal/Covid19TrackerReact",
      description: "Simple Covid-19 Tracker made using React.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "7",
      name: "Food Order Static Website",
      url: "https://github.com/damanpreetgrewal/Food-Order-Website-PHP",
      description:
        "A simple static website related to food restaurants service. this is reasponsive as well.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
