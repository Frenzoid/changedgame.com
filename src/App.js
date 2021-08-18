// Utils
import { useState, useEffect } from 'react';

// Components
import Navbar from './components/navbar/Navbar.js'
import Footer from './components/footer/Footer.js'
import Changed from './components/main/Changed.js';
import ChangedSpecial from './components/main/ChangedSpecial.js';
import About from './components/main/About.js';

// Resources
import bgVideo from './video/bg.webm';
import locale from './locale/locale.js';

// CSS
import './App.css';

function App() {
  let [language, setLanguage] = useState()
  let [location, setLocation] = useState("changed");
  let [videoStyle, setVideostyle] = useState({});

  useEffect(() => {

    // If language state is not set, set it for the locale library, and don't update if language is manually changed.
    if (!language)
      locale.setLanguage(localStorage.getItem("locale") || locale.getInterfaceLanguage() || "en");

  });

  let changeLocale = (lang) => {
    locale.setLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("locale", lang);
    console.log("Locale changed to:", locale.getLanguage())
  }

  let switchPage = () => {
    switch (location) {
      case 'changed':
        return <Changed locale={locale}></Changed>;
      case 'changedSpecial':
        return <ChangedSpecial locale={locale}></ChangedSpecial>;
      case 'about':
        return <About locale={locale}></About>;
      default:
        return <h1>404 page not found, how did you get here?</h1>;
    }
  }

  return (
    <div>

      <video style={videoStyle} id="background-video"
        loop={true}
        autoPlay={true}
        muted={true}
        onLoadedData={() => setVideostyle({ display: "block" })}
      >
        <source src={bgVideo} type="video/webm"></source>
      </video>

      <Navbar
        locale={locale}
        changeLocale={changeLocale}
        location={location}
        setLocation={setLocation}
      ></Navbar>

      {switchPage()}

      <Footer locale={locale}></Footer>
    </div>
  );
}

export default App;
