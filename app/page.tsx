//server components
import LandingPageIntroText from "@/app/components/structural/landingPage_introText";

//client components
import CountBtn from "@/app/components/interaction/countBtn";

//MUI components
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", padding: 2 }}>
      <LandingPageIntroText />
      <CountBtn />
    </Box>
  );
}
