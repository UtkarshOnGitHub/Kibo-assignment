import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

const PaginationContainer = ({ data, currentPage, pageSize, onPageChange,totalPages }) => {
  const totalItems = data.length;
//   const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <Flex
      as="nav"
      aria-label="Pagination"
      w="full"
      justifyContent="center"
      alignItems="center"
      mt={{ base: 3, md: 0 }}
      mb={4}
    >
      {new Array(totalPages).fill(1).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <PaginationButton
            key={pageNumber}
            isActive={currentPage === pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        );
      })}
    </Flex>
  );
};

const PaginationButton = ({ children, isDisabled, isActive,onClick, ...props }) => {
  const activeStyle = {
    bg: useColorModeValue('gray.300', 'gray.700')
  };

  return (
    <Flex
      p={3}
      px={4}
      fontSize="md"
      fontWeight="500"
      lineHeight={0.8}
      opacity={isDisabled && 0.7}
      _hover={!isDisabled && activeStyle}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      border="1px solid"
      mr="-1px"
      onClick={onClick}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      {...(isActive && activeStyle)}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default PaginationContainer;
