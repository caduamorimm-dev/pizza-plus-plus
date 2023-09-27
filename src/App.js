import { Header } from "./Header";
import { Footer } from "./Footer";
import Box from "@mui/material/Box";
import background from "./Images/background.png";

import { Home } from "./Components/Home";
import { Schedule } from "./Components/Schedule";
import { Location } from "./Components/Location";
import { SponsorSlider } from "./Components/SponsorSlider";

import congenial from "./Images/Patrocinadores/congenial-dark.svg";
import suprema from "./Images/Patrocinadores/suprema.png";
import cadeado from "./Images/Patrocinadores/cadeado.png";

const sponsors = [
  { name: "Congenial", logoUrl: congenial },
  { name: "Cadeado", logoUrl: suprema },
  { name: "Cadeado", logoUrl: cadeado },
  { name: "Cadeado", logoUrl: cadeado },
  { name: "Cadeado", logoUrl: cadeado },
  { name: "Cadeado", logoUrl: cadeado },
];

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        overflowX:"hidden"
      }}
    >
      <Box>
        <Header />
        <section id="home">
          <Home />
        </section>

        <Box
          sx={{
            height: "25vh",
            width: "100vw",
            display: "flex",
            background: "white",
            overflowX:"hidden"
          }}
          marginTop={15}
        >
          <SponsorSlider sponsors={sponsors} />
        </Box>

        <section id="schedule">
          <Schedule />
        </section>

        <section id="location">
          <Location />
        </section>

        <section id="footer" style={{ width: "100vw",overflowX:"hidden" }}>
          <Footer />
        </section>
      </Box>
    </Box>
  );
}

export default App;
