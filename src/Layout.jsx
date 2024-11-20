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
        <Home id="home" />
        <AboutMe id="about me" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Education id="education" />
        <ContactMe id="contact me" />
        <Footer />
      </Stack>
    </>
  );
};
// export default Layout;
