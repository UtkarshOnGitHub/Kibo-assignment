'use client'

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import { FaMoon } from "react-icons/fa";
import { FiSun } from 'react-icons/fi';



export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Image src="https://kibocommerce.com/wp-content/uploads/2022/12/logo-kibo-ForDarkBG.svg"/></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <FaMoon /> : <FiSun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}