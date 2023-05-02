import './App.css';
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';
import FooterSection from './Components/FooterSection';
import HeaderSection from './Components/HeaderSection';
import DrawerAppBar from './Components/Nav';
import PorfolioSection from './Components/PorfolioSection';

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <HeaderSection />
      <AboutSection />
      <PorfolioSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
