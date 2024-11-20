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
import { COLORS, EMAILJS } from "../../configs";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = ({ id }) => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const isNameSubjectValid = (name) => {
    return name.length === 0 || name.length >= 3;
  };

  const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.length === 0 || regex.test(email);
  };

  const isFormValid = () => {
    return (
      formData.name.length >= 3 &&
      formData.subject.length >= 5 &&
      isEmailValid(formData.email) &&
      formData.email.length > 0
    );
  };

  const onSubmit = () => {
    try {
      if (isFormValid()) {
        emailjs
          .send(
            EMAILJS.SERVICE_ID,
            EMAILJS.TEMPLATE_ID,
            formData,
            EMAILJS.USER_ID
          )
          .then(
            (resp) => {
              alert("Message has been sent successfully");
              setFormdata({
                name: "",
                email: "",
                subject: "",
                message: "",
              });
            },
            (error) => {
              alert("Failed to send message, please use direct mailing!");
            }
          );
      }
    } catch (err) {
      console.log("error during message submission!", err);
    }
  };

  return (
    <Box
      id={id}
      sx={{
        scrollMarginTop: { xs: "400px", md: "100px" },
      }}
      margin={{ xs: "25px 10px", sm: "50px 10px" }}
    >
      <Stack
        sx={{ width: { xs: "95%", sm: "90%", lg: "70%" } }}
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
                  error={formData.name.length < 3}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="eg: Joy"
                  sx={{
                    border: "1px solid",
                    borderColor: isNameSubjectValid(formData.name)
                      ? "gray"
                      : "red",
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
                <FormLabel sx={{ color: COLORS.TEXT }}>Email*</FormLabel>
                <InputBase
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="eg: email@example.com"
                  sx={{
                    border: "1px solid",
                    borderColor: isEmailValid(formData.email) ? "gray" : "red",
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
                    borderColor: isNameSubjectValid(formData.subject)
                      ? "gray"
                      : "red",
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
              <Button variant="contained" onClick={onSubmit}>
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
