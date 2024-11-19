import food_curves from "./food_curves.jpg";
import news_app from "./news_app.jpg";
import conduit_app from "./conduit_app.jpg";
import java from "./java_logo.png";
import android from "./android.png";
import kotlin from "./kotlin_logo.png";
import python from "./python_logo.png";
import django from "./django_badge.png";
import reactjs from "./react_js_logo.png";
import mongodb from "./mongo_db_logo.png";
import springboot from "./spring_boot_logo.png";
import juniv from "./jadavpur_uni_logo.png";
import pkroy from "./pk_roy_logo.jpeg";
import jac from "./jac_logo.jpeg";

export const COLORS = {
  PUPLE_HIGHLIGHT: "#9E77ED",
  CARD_SHADE: "#111927",
  TEXT_SHADE: "#A0AEC0",
  TEXT: "#FFFFFF",
  HEADING_SHADE: "#7E8FA6",
};

export const EMAILJS = {
  SERVICE_ID: "service_pes2r8m",
  TEMPLATE_ID: "template_jkyhvnk",
  USER_ID: "8Dk8tFuB_gzmAK5O9",
};

export const PAGES = [
  "HOME",
  "ABOUT",
  "EXPERIENCE",
  "PROJECTS",
  "SKILLS",
  "EDUCATION",
  "CONTACT ME",
];

export const ABOUTME =
  "I am a Java Full-Stack and Kotlin Android Developer with over 4 years of experience in this domain and over 2.5 years of experience as a working Professional in programming. My passion for problem-solving and learning new things has led me to become proficient in various technologies, including React.js, Java, SpringBoot, Kotlin, Django, MongoDB, and MySQL. Additionally, I am a team player who enjoys collaborating with cross-functional teams to create exceptional web applications.";

export const EXPERIENCES = [
  {
    title: "Samsung R&D Institute India Bangalore",
    designation: "Senior Engineer",
    dates: "Apr 2024 - Present",
    description:
      "I am working as one of the key members in the development and maintenance of the Client-core module of the SmartThings Android app, implemented the Android Repository Design Pattern in the Client-core module. SmartThings is Samsung’s smart home platform for connecting various IoT devices.",
  },
  {
    title: "Samsung R&D Institute India Bangalore",
    designation: "Engineer",
    dates: "Jul 2022 - Mar 2024",
    description:
      "Developed an end-to-end Samsung QC collaboration dashboard using Django and React.js frameworks, facilitating smoother and faster production fixes for flagship SMRs. Also, Implemented Qualcomm modem code integration logic for Samsung production, carefully handling severe conflicts and build failures using Python.",
  },
  {
    title: "Zemoso Technologies",
    designation: "Software Engineer Intern",
    dates: "Mar 2022 - Jun 2022",
    description:
      "Worked in a full-stack team to develop key features of a production site. Learnt SOLID properties and best design practices. Key tech stacks used Java, Spring Boot and react.js.",
  },
];

export const PROJECTS = [
  {
    projectName: "Food Curves",
    projectDescription:
      "Developed this food delivery Android application, facilitating orders from diverse restaurants, featuring an extensive list of food selections, using Java in Android Studio.",
    image: food_curves,
  },
  {
    projectName: "NewsX",
    projectDescription:
      "Developed this news android app that integrates REST APIs to fetch and display real-time news updates. Implemented seamless UI components for an engaging user experience and efficient data handling",
    image: news_app,
  },
  {
    projectName: "Conduit",
    projectDescription:
      "An application for content writers to share their knowledge on specific topics, along with comments and follow options for users to save and comeback later. It is similar to Medium blog writing application",
    image: conduit_app,
  },
];

export const SKILLS = [
  {
    skill: "Java",
    image: java,
  },
  {
    skill: "Android",
    image: android,
  },
  {
    skill: "Kotlin",
    image: kotlin,
  },
  {
    skill: "Python",
    image: python,
  },
  {
    skill: "Django",
    image: django,
  },
  {
    skill: "Spring Boot",
    image: springboot,
  },
  {
    skill: "React.js",
    image: reactjs,
  },
  {
    skill: "Mongo DB",
    image: mongodb,
  },
];

export const EDUCATION = [
  {
    school: "Jadavpur University (Tier-1)",
    degree: "Bachelor of Engineering",
    dept: "Electronics and Telecommunication",
    location: "Kolkata, India",
    dates: "2018-2022",
    grade: "CGPA: 9.2",
    image: juniv,
    link: "https://jadavpuruniversity.in/",
  },
  {
    school: "P K Roy Memorial College",
    degree: "ISC",
    dept: "Science",
    location: "Dhanbad, India",
    dates: "2015-2017",
    grade: "First class",
    image: pkroy,
    link: "https://dhanbad.nic.in/public-utility/p-k-roy-memorial-college-dhanbad/",
  },
  {
    school: "S Y High School",
    degree: "Matric",
    dept: "General",
    location: "Dalahi",
    dates: "2013-2015",
    grade: "First class",
    image: jac,
    link: "https://jac.jharkhand.gov.in/jac/",
  },
];
