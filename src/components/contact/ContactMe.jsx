import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputBase,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import TelegramIcon from "@mui/icons-material/Telegram";
import { COLORS } from "./../../userdata/configs";
import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box margin={{ xs: "25px 10px", sm: "50px 10px" }}>
      <Stack
        sx={{ width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" } }}
        margin={"0 auto"}
        spacing={3}
      >
        <Typography
          fontSize={"1.7rem"}
          //   lineHeight={0.8}
          fontWeight={"bold"}
          textAlign={"center"}
          color={COLORS.TEXT}
        >
          CONTACT ME
        </Typography>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              order: { xs: 1, md: 2 },
            }}
          >
            <Stack
              margin={{ xs: "0px auto", sm: "20px auto" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography color={COLORS.TEXT_SHADE}>
                For General queries please contact me directly at:
                <Link
                  href="mailto:jayantsadhu6@gmail.com"
                  sx={{ color: COLORS.PUPLE_HIGHLIGHT, fontWeight: "bold" }}
                >
                  jayantsadhu6@gmail.com
                </Link>
                , or through this form:
              </Typography>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              order: { xs: 2, md: 1 },
            }}
          >
            <Stack spacing={2}>
              <FormControl fullWidth>
                <FormLabel sx={{ color: COLORS.TEXT }}>Full Name*</FormLabel>
                <InputBase
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="eg: Joy"
                  sx={{
                    border: "1px solid",
                    borderColor: "gray",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    width: "100%",
                    // backgroundColor: "#edf2f7",
                    input: {
                      "&::placeholder": {
                        color: COLORS.HEADING_SHADE,
                        opacity: 0.5,
                      },
                      color: COLORS.HEADING_SHADE,
                    },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ color: COLORS.TEXT }}>Email*</FormLabel>
                <InputBase
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="eg: email@example.com"
                  sx={{
                    border: "1px solid",
                    borderColor: "gray",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    width: "100%",
                    input: {
                      "&::placeholder": {
                        color: COLORS.HEADING_SHADE,
                        opacity: 0.5,
                      },
                      color: COLORS.HEADING_SHADE,
                    },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ color: COLORS.TEXT }}>Subject*</FormLabel>
                <InputBase
                  value={formData.subject}
                  onChange={handleChange}
                  name="subject"
                  placeholder="Subject"
                  sx={{
                    border: "1px solid",
                    borderColor: "gray",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    width: "100%",
                    input: {
                      "&::placeholder": {
                        color: COLORS.HEADING_SHADE,
                        opacity: 0.5,
                      },
                      color: COLORS.HEADING_SHADE,
                    },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ color: COLORS.TEXT }}>Message</FormLabel>
                <InputBase
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  placeholder="Enter your message here..."
                  sx={{
                    border: "1px solid",
                    borderColor: "gray",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    width: "100%",
                    maxLines: 5,
                    textarea: {
                      "&::placeholder": {
                        color: COLORS.HEADING_SHADE,
                        opacity: 0.5,
                      },
                      color: COLORS.HEADING_SHADE,
                    },
                  }}
                />
              </FormControl>
              <Button variant="contained">
                Send Message <TelegramIcon sx={{ marginLeft: "10px" }} />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default ContactMe;
