import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <h1 color={logoColor} style={{fontSize:"30px"}}>ManageMaster</h1>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
