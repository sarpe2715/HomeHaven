import React from "react";
import Carousel from "../Components/Crousel";
import { Pagelinkhomepage } from "../Components/Pagelink-homepage";
import SliderHome from "../Components/SliderHome";
import { Box } from "@chakra-ui/react";
import MyOwlCarousel from "../Components/myOwlCarousel";
import Reviews from "../Components/Reviews";
import Features from "../Components/Features";
import { BsFillChatQuoteFill } from "react-icons/bs";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Chatbox from "../Components/Chatbox";

const Homepage = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <Box width={"90%"} margin={"auto"}>
          <Carousel />
          <Pagelinkhomepage />
        </Box>
        <Box
          bg={"rgb(245,247,250)"}
          border="1px solid rgb(245,247,250)"
          marginTop="-50px"
        >
          {/* <SliderHome /> */}
        </Box>
        <h2 style={{fontSize:"40px", textAlign:"left", padding:"20px", fontWeight:"700", color:"#1a202c"}}>Home Furnitures</h2>
        <MyOwlCarousel />
        <h2 style={{fontSize:"40px", textAlign:"left", padding:"20px", fontWeight:"700", color:"#1a202c"}}>Home Appliances</h2>
        <MyOwlCarousel />

        {/* <Features /> */}
        <Reviews />
        {/* chat icon */}
        <Footer />
      </Box>
    
    </Box>
  );
};

export default Homepage;
