import { Box, Stack, Avatar, Typography, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { COLORS } from "../../configs";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: COLORS.CARD_SHADE }}
      padding={{ xs: "50px", sm: "100px" }}
    >
      <Stack
        color={COLORS.TEXT}
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent={"space-evenly"}
      >
        <Stack
          spacing={2}
          direction={"row"}
          justifyContent={"center"}
          sx={{ margin: "10px auto", order: { xs: 1, sm: 2 } }}
        >
          <a
            href="https://www.linkedin.com/in/jayant-kumar-sadhu-a747731b3/"
            target="_blank"
            rel="noreferrer"
          >
            <Avatar>
              <LinkedInIcon fontSize="large" sx={{ color: "black" }} />
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
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ margin: "10px auto", order: { xs: 2, sm: 1 } }}
        >
          <Typography fontWeight={"bold"}>
            Jayant{" "}
            <span style={{ color: COLORS.PUPLE_HIGHLIGHT }}>Kumar Sadhu</span>
          </Typography>
          <Typography color={COLORS.TEXT_SHADE} fontSize={"0.8rem"}>
            Professional software developer
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ margin: "50px 0 20px 0" }} color={COLORS.TEXT_SHADE} />
      <Typography
        textAlign={"center"}
        color={COLORS.TEXT_SHADE}
        fontSize={"0.8rem"}
      >
        &copy; 2024, All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
