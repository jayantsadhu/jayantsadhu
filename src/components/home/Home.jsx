import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import jayant from "./../../jayant.jpg";

const Home = () => {
  return (
    <Box padding={{ xs: "50px 0px 50px 0px", sm: "60px 0px 100px 0px" }}>
      <Container
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
          margin: "0 auto",
        }}
      >
        <Grid
          container
          spacing={3}
          padding={{ xs: "10px 0px", sm: "20px 0px" }}
        >
          <Grid xs={12} md={6} margin={"0 auto"}>
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                maxWidth: "100%", // Ensures the Box doesn't overflow
                overflow: "hidden", // Prevents any overflow
              }}
            >
              <img
                src={jayant}
                alt="Profile"
                style={{
                  maxWidth: "350px",
                  maxHeight: "350px",
                  width: "100%",
                  height: "auto", // Maintains aspect ratio
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6} margin={"0 auto"}>
            <Box
              sx={{
                padding: "20px 0px",
                display: "grid",
                placeItems: "center",
                maxWidth: "450px",
                width: "100%",
              }}
              color={"white"}
              margin={"0 auto"}
            >
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    fontFamily: "Moul, serif;",
                    fontStyle: "normal",
                  }}
                >
                  Full-Stack Java Developer
                </Typography>
                <Typography color="#a0aec0">
                  Hello, I'm{" "}
                  <span style={{ color: "#9E77ED", fontWeight: "bold" }}>
                    Jayant Kumar Sadhu
                  </span>
                  . A passionate Android, Full-Stack Java Developer and blog
                  writer based in India📍. Feel most satisfaction and thrive on
                  new challenges, keeping the learning curve exponent.
                </Typography>
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <HomeIcon />
                    <Typography>Bangalore, India</Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={1}>
                    <WorkIcon />
                    <Typography>Software Engineer in Samsung</Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={1}>
                    <SchoolIcon />
                    <Typography>Jadavpur University, 2022</Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={1}>
                    <CodeIcon />
                    <Typography>LeetCode (1726)</Typography>
                  </Stack>
                </Box>
                <Box>
                  <Stack
                    spacing={2}
                    direction={"row"}
                    justifyContent={"center"}
                    sx={{ margin: "10px auto" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/jayant-kumar-sadhu-a747731b3/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Avatar>
                        <LinkedInIcon
                          fontSize="large"
                          sx={{ color: "black" }}
                        />
                      </Avatar>
                    </a>
                    <a
                      href="https://github.com/jayantsadhu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Avatar>
                        <GitHubIcon fontSize="large" sx={{ color: "black" }} />
                      </Avatar>
                    </a>
                  </Stack>
                </Box>
                <Stack spacing={1} direction={{ xs: "column", md: "row" }}>
                  <Button
                    variant="contained"
                    sx={{
                      margin: "8px 0px",
                      width: "100%",
                      padding: { xs: "0.3rem 0.5rem", md: "0.4rem 0.5rem" },
                    }}
                  >
                    CONTACT ME HERE{" "}
                    <ArrowRightAltIcon
                      sx={{ marginLeft: "8px", marginRight: "" }}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      margin: "8px 0px",
                      width: "100%",
                      padding: { xs: "0.3rem 0.5rem", md: "0.4rem 0.5rem" },
                      backgroundColor: "#112743",
                      "&:hover": {
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    DOWNLOAD CV{" "}
                    <DownloadForOfflineIcon sx={{ marginLeft: "8px" }} />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
