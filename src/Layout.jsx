import { Stack } from "@mui/material";
import Home from "./components/home/Home";
import MyNavbar from "./components/navbar/Navbar";
import AboutMe from "./components/about/AboutMe";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import ContactMe from "./components/contact/ContactMe";
import Footer from "./components/footer/Footer";

export const Layout = () => {
  return (
    <>
      <style>
        {`
        html {
          scroll-behavior: smooth;
        }
      `}
      </style>
      <Stack sx={{ backgroundColor: "#0e1320" }}>
        <MyNavbar />
        <div id="home">
          <Home />
        </div>
        <div id="about me">
          <AboutMe />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="contact me">
          <ContactMe />
        </div>
        <Footer />
      </Stack>
    </>
  );
};
// export default Layout;
