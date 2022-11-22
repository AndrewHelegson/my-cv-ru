import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Contacts from "./Sections/Contacts";
import Education from "./Sections/Education";
import Experience from "./Sections/Experience";
import Portfolio from "./Sections/Portfolio";
import TechStack from "./Sections/TechStack";
import Title from "./Sections/Title";

function App() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginLeft: "20px",
          marginRight: "20px"
        }}
      >
        <Title />
        <Experience />
        <Education />
        <TechStack />
        <Portfolio />
        <Contacts />
      </Box>
    </>
  );
}

export default App;
