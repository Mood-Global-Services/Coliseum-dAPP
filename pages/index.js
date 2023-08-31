import Navbar from "../components/navbar";
import Homes from "../components/home";
import About from "../components/about";
import Video from "../components/video";
import Benefit from "../components/benefits";
import Lastfoot from '../components/Lastfoot';
import '../styles/Home.module.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homes />
      <About />
      <Video />
      <Benefit />
      <Lastfoot />
    </main>
  );
}
