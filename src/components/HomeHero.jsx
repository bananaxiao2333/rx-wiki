import * as React from "react";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/joy";

export default function HomeHero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Box>
        <Typography color="primary" sx={{ fontSize: "lg", fontWeight: "lg" }}>
          The power of learning more.
        </Typography>
        <Typography
          level="h1"
          sx={{
            fontWeight: "xl",
            fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
          }}
        >
          A Wiki website designed for RXSEND players
        </Typography>
        <Typography
          textColor="text.secondary"
          sx={{ fontSize: "lg", lineHeight: "lg" }}
        >
          It's time for information to no longer rely on word-of-mouth but on
          individual links
        </Typography>
        <Button
          size="lg"
          onClick={() => (window.location = "/#/about")}
          endDecorator={<ArrowForward fontSize="xl" />}
        >
          Get Started
        </Button>
        <Typography>
          <br />
          View the materials directly?{" "}
          <Link
            onClick={() => (window.location = "/#/siteIndex")}
            sx={{ fontWeight: "lg" }}
          >
            Index Page
          </Link>
        </Typography>
      </Box>
      <Box
        style={{
          width: { sm: "80%", md: "50%" },
        }}
      >
        <img src="/rxwiki-icon.svg" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
}
