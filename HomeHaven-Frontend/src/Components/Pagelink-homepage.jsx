import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiPackage } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { GiWashingMachine, GiOfficeChair } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import { RiEBikeLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { Link } from "react-router-dom";
import furniture from "../assets/furnish.jpg";
import appliances from "../assets/appliances.png";

export const Pagelinkhomepage = () => {
  return (
    <Flex
      marginTop={"7rem"}
      padding="5px"
      gap="20px"
      flexDirection={"row"}
      justifyContent="space-between"
      transform={"translate(0%, -50%)"}
      
      // border={"1px solid red"}
    >
      {/* <Link to={`/products/${"packages"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <BiPackage size={"60px"} />
          <Text>Package</Text>
        </Box>
      </Link> */}

      <Link to={`/products/${"furniture"}`} style={{width:"50%"}}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          height="8rem"
          // flex="1"
          backgroundImage={`linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${furniture})`}
          backgroundSize="cover"
          backgroundPosition="center"
          fontSize="30px"
          fontWeight="700"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          {/* <IoBedOutline size={"60px"} /> */}
          <Text>Furniture</Text>
        </Box>
      </Link>

      <Link to={`/products/${"appliances"}`} style={{width:"50%"}} >
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          height="8rem"
          // backgroundImage={appliances}
          backgroundImage={`linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${appliances})`}
          backgroundSize="cover"
          backgroundPosition="center"
          fontWeight="700"
          cursor="pointer"
          padding="30px 40px 15px 40px"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
          fontSize="30px"
        >
          {/* <GiWashingMachine size={"60px"} /> */}
          <Text>Appliances</Text>
        </Box>
      </Link>

      {/* <Link to={`/products/${"electronics"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <AiOutlineMobile size={"60px"} />
          <Text>Electronics</Text>
        </Box>
      </Link>
      <Link to={`/products/${"WFHEssentials"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <RiEBikeLine size={"60px"} />
          <Text>Bikes</Text>
        </Box>
      </Link>

      <Link to={`/products/${"fitness"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <CgGym size={"60px"} />
          <Text>Fitness</Text>
        </Box>
      </Link>

      <Link to={`/products/${"WFHEssentials"}`}>
        <Box
          border={"1px solid grey"}
          borderRadius="10px"
          padding="30px 40px 15px 40px"
          cursor="pointer"
          _hover={{
            transition: "transform .5s, box-shadow 1s",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
          }}
        >
          <GiOfficeChair size={"60px"} />
          <Text margin={"0"}>WFH Essentials</Text>
        </Box>
      </Link> */}
    </Flex>
  );
};
