import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tech1 from "../../src/images/technologies/tech1.webp";
import Tech2 from "../../src/images/technologies/tech2.webp";
import Tech3 from "../../src/images/technologies/tech3.webp";
import Tech4 from "../../src/images/technologies/tech4.webp";
import Tech5 from "../../src/images/technologies/tech5.webp";
import Tech6 from "../../src/images/technologies/tech6.webp";
import Tech7 from "../../src/images/technologies/tech7.webp";
import Tech8 from "../../src/images/technologies/tech8.webp";
import Tech9 from "../../src/images/technologies/tech9.webp";
import Client1 from "../../src/images/technologies/client1.webp";
import Client2 from "../../src/images/technologies/client2.webp";
import Client3 from "../../src/images/technologies/client3.webp";
import Client4 from "../../src/images/technologies/client4.webp";
import Client5 from "../../src/images/technologies/client5.webp";



const technologies = [Tech1, Tech2, Tech3, Tech4, Tech5];
const technologies2 = [Tech6, Tech7, Tech8, Tech9];
const Clients = [Client1, Client2, Client3, Client4, Client5];


const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Inline styles
  const wrapperStyle = {
    margin: "20px",
    width: "97%",
  };

  const sliderItemStyle = {
    padding: "10px",
    boxSizing: "border-box",
  };

  return (
    <div style={wrapperStyle}>
      <p style={{ fontSize: "24px", fontWeight: "400" ,borderBottom:"1px solid #C9CACE"}}>
        Technologies we use
      </p>
      <Slider {...settings}>
        {technologies.map((image, index) => (
          <div key={index} style={sliderItemStyle}>
            <img
              src={image}
              alt={`Technology ${index + 1}`}
              style={{ height: "50px", width: "100px", objectFit: "contain" }}
            />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {technologies2.map((image, index) => (
          <div key={index} style={sliderItemStyle}>
            <img
              src={image}
              alt={`Technology ${index + 1}`}
              style={{ height: "70px", width: "130px", objectFit: "contain" }}
            />
          </div>
        ))}
      </Slider>
      <p style={{ fontSize: "24px", fontWeight: "400" ,borderBottom:"1px solid #C9CACE"}}>
        Our Clients
      </p>
      <Slider {...settings}>
        {Clients.map((image, index) => (
          <div key={index} style={sliderItemStyle}>
            <img
              src={image}
              alt={`Technology ${index + 1}`}
              style={{ height: "50px", width: "100px", objectFit: "contain" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
