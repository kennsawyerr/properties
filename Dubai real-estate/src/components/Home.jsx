import Landingpage from "./Landingpage";
import Property from "./Property";
import LandingPageTwo from "./landingPageTwo";


//animation
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {

    useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Landingpage />
      <LandingPageTwo />
      <Property />
    </>
  );
};

export default Home;
