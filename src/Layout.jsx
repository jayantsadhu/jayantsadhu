import { Stack } from "@mui/material";
import Home from "./components/home/Home";
import MyNavbar from "./components/navbar/Navbar";
import AboutMe from "./components/about/AboutMe";
import Experience from "./components/experience/Experience";

export const Layout = () => {
  return (
    <Stack sx={{ backgroundColor: "#0e1320" }}>
      <MyNavbar />
      <Home />
      <AboutMe />
      <Experience />
    </Stack>
  );
};
// export default Layout;
