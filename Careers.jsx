import React from "react";
import { useRoute, Font, Nav, Footer } from "./shared";
import Home from "./pages/Home";
import SightpathPage from "./pages/SightpathPage";
import UMSPage from "./pages/UMSPage";
import { SolutionsHub, SolutionPage } from "./pages/Solutions";
import { Leadership, TeamPage } from "./pages/LeadershipTeam";
import { CareersHub, CareersBrand } from "./pages/Careers";
import News from "./pages/News";
import Contact from "./pages/Contact";

export default function App() {
  const { route, navigate } = useRoute();

  let page;
  if (route === "sightpath") page = <SightpathPage navigate={navigate} />;
  else if (route === "ums") page = <UMSPage navigate={navigate} />;
  else if (route === "solutions") page = <SolutionsHub navigate={navigate} />;
  else if (route.startsWith("sol-")) page = <SolutionPage navigate={navigate} route={route} />;
  else if (route === "leadership") page = <Leadership navigate={navigate} />;
  else if (route === "team-sightpath") page = <TeamPage navigate={navigate} brand="sightpath" />;
  else if (route === "team-ums") page = <TeamPage navigate={navigate} brand="ums" />;
  else if (route === "careers") page = <CareersHub navigate={navigate} />;
  else if (route === "careers-sightpath") page = <CareersBrand navigate={navigate} brand="sightpath" />;
  else if (route === "careers-ums") page = <CareersBrand navigate={navigate} brand="ums" />;
  else if (route === "news") page = <News navigate={navigate} />;
  else if (route === "contact") page = <Contact navigate={navigate} />;
  else page = <Home navigate={navigate} />;

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Font />
      <Nav route={route} navigate={navigate} />
      {page}
      <Footer navigate={navigate} />
    </div>
  );
}
