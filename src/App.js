import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "../src/images/main-avocode.webp";
import Expertise from "../src/images/expertise-section.webp";
import projectsCompletedSection from "../src/images/projects-completed-section.webp";
import RecentWorks from "../src/images/recent-works.webp";
import Footer from "../src/images/footer.webp";
import AvocodeLogo from "../src/images/avocode-logo.webp";
import ExpertiseTabView from "../src/images/expertise-tab-view.webp";
import FooterTabView from "../src/images/footer-tab-veiw.webp";
import RecentWorksTabView from "../src/images/recent-works-tab-view.webp";
import SliderComponent from "./component/SliderComponent";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState({
    header: false,
    main: false,
    expertise: false,
    projectsCompleted: false,
    recentWorks: false,
    footer: false,
  });

  const [loading, setLoading] = useState(true);

  const handleImageLoad = (image) => {
    setImagesLoaded((prevState) => ({
      ...prevState,
      [image]: true,
    }));
  };

  useEffect(() => {
    const allImages = Object.values(imagesLoaded).every(Boolean);
    if (allImages) {
      setLoading(false);
    }
  }, [imagesLoaded]);
  // Add this to your component or in a useEffect hook
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault(); // Prevent the default right-click menu
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu); // Cleanup
    };
  }, []);

  return (
    <div className="App">
      {/* {loading && (
        <div className="logo-container">
          <img className="logo" src={AvocodeLogo} />
        </div>
      )} */}
      <div className={`header ${loading ? "hidden" : ""}`}>
        <div className="logo-text-wrapper">
          <img className="logo" src={AvocodeLogo} alt="Avocode-logo" />
        </div>
        <div>
          <a
            href="tel:+919961900094"
            style={{ textDecoration: "none", color: "black", padding: "10px" }}
            className="contact-avocode-header-button"
          >
            Contact Apphence
          </a>
        </div>
      </div>
      <img
        src={Main}
        onLoad={() => handleImageLoad("main")}
        className="main-image"
      />
      <div className="wrapper-second-button">
        <a
          href="tel:+919961900094"
          style={{ textDecoration: "none", color: "white" }}
          className="second-button-contact-avocode"
        >
          Contact Apphence
        </a>
      </div>
      <img
        src={Expertise}
        onLoad={() => handleImageLoad("expertise")}
        className={imagesLoaded.expertise ? "loaded" : "loading"}
        id="expertise-desktop"
      />
      <img
        src={ExpertiseTabView}
        onLoad={() => handleImageLoad("expertise")}
        className={imagesLoaded.expertise ? "loaded" : "loading"}
        id="expertise-tab-view-image"
      />
      <img
        src={projectsCompletedSection}
        className={`projects-completed ${
          imagesLoaded.projectsCompleted ? "loaded" : "loading"
        }`}
        onLoad={() => handleImageLoad("projectsCompleted")}
        id="expertise-desktop"
      />
      <img
        src={RecentWorks}
        onLoad={() => handleImageLoad("recentWorks")}
        className={imagesLoaded.recentWorks ? "loaded" : "loading"}
        id="expertise-desktop"
      />
      <img
        src={RecentWorksTabView}
        onLoad={() => handleImageLoad("recentWorks")}
        className={imagesLoaded.recentWorks ? "loaded" : "loading"}
        id="footer-tab-view-image"
      />

      <SliderComponent />

      <img
        src={Footer}
        onLoad={() => handleImageLoad("footer")}
        className={imagesLoaded.footer ? "loaded" : "loading"}
        id="expertise-desktop"
      />
      <div className="footer-tab-veiw-wrapper">
        <img
          src={FooterTabView}
          onLoad={() => handleImageLoad("footer")}
          className={imagesLoaded.footer ? "loaded" : "loading"}
          id="footer-tab-view-image"
        />
      </div>
    </div>
  );
}

export default App;
