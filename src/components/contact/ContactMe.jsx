import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

const ContactMe = () => {
  return (
    <Box margin={{ xs: "25px 10px", sm: "50px 10px" }}>
      <Stack
        sx={{ width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" } }}
        margin={"0 auto"}
        spacing={3}
      >
        <Typography
          fontSize={"1.7rem"}
          lineHeight={0.8}
          fontWeight={"bold"}
          textAlign={"center"}
          color={"white"}
        >
          CONTACT ME
        </Typography>
        <Box>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <FormLabel sx={{ color: "white" }}>Full Name*</FormLabel>
              <InputBase
                name="name"
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
                      color: "#7e8fa6",
                      opacity: 0.5,
                    },
                    color: "#7e8fa6",
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ color: "white" }}>Email*</FormLabel>
              <InputBase
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
                      color: "#7e8fa6",
                      opacity: 0.5,
                    },
                    color: "#7e8fa6",
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ color: "white" }}>Subject*</FormLabel>
              <InputBase
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
                      color: "#7e8fa6",
                      opacity: 0.5,
                    },
                    color: "#7e8fa6",
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ color: "white" }}>Message</FormLabel>
              <InputBase
                multiline
                rows={6}
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
                      color: "#7e8fa6",
                      opacity: 0.5,
                    },
                    color: "#7e8fa6",
                  },
                }}
              />
            </FormControl>
            <Button variant="contained">
              Send Message <TelegramIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactMe;
