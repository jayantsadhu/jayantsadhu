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
    <Stack sx={{ backgroundColor: "#0e1320" }}>
      <MyNavbar />
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ContactMe />
      <Footer />
    </Stack>
  );
};
// export default Layout;
