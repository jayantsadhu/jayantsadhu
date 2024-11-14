import { Box, Link, Stack } from "@mui/material";

const MyNavbar = () => {
  return (
    <Box margin={"20px 10px"}>
      <Stack padding={2} alignItems={"center"}>
        <Stack direction="row" spacing={3} justifyContent={"space-arround"}>
          <Link underline="none" href="#">
            HOME
          </Link>
          <Link underline="none" href="#">
            ABOUT
          </Link>
          <Link underline="none" href="#">
            PROJECTS
          </Link>
          <Link underline="none" href="#">
            EXPERIENCE
          </Link>
          <Link underline="none" href="#">
            HOME
          </Link>
          <Link underline="none" href="#">
            EDUCATION
          </Link>
          <Link underline="none" href="#">
            SKILLS
          </Link>
          <Link underline="none" href="#">
            CONTACT ME
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};
export default MyNavbar;
