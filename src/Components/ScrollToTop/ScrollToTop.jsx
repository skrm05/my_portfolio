import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./ScrollToTop.css"; // We will create this file next

const ScrollToTop = () => {
  // State to track if the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const handleScroll = () => {
    // Show button if page is scrolled down more than 300px
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add and remove the scroll event listener
  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    // Only render the button if isVisible is true
    <>
      {isVisible && (
        <AnchorLink href="#home" className="scroll-to-top">
          ⬆️
        </AnchorLink>
      )}
    </>
  );
};

export default ScrollToTop;
