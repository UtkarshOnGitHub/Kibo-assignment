import { Box, SimpleGrid, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import FilterSection from '../FilterSection/FilterSection';
import PaginationContainer from '../Pagination/Pagination';
import SingleCard from '../Card/Card';

const getData = async () => {
    let res = await fetch("http://localhost:8080/");
    let data = await res.json();
    return data;
};

const ProductsDisplay = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        getData()
            .then((res) => {
                setData(res);
                setFilteredData(res);
                setTotalPage(Math.ceil(res.length / pageSize));
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const paginate = (data, page, pageSize) => {
        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / pageSize);
        const offset = (page - 1) * pageSize;
        const paginatedItems = data.slice(offset, offset + pageSize);

        return {
            totalItems,
            currentPage: page,
            pageSize,
            totalPages,
            items: paginatedItems,
        };
    };

    const paginatedData = paginate(filteredData, currentPage, pageSize).items;

    const handleFilter = (filteredProducts) => {
        setFilteredData(filteredProducts);
        setCurrentPage(1);
        setTotalPage(Math.ceil(filteredProducts.length / pageSize));
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "50px", padding: "20px" }}>
                <Box display={{ base: 'none', md: 'block' }} boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;" w="20%" height="70vh" position="sticky" top="2%" left={0}>
                    <FilterSection data={data} onFilter={handleFilter} />
                </Box>
                {paginatedData.length ? (
                    <SimpleGrid columns={[1, 2, 3, 4]} gap={2}>
                        {paginatedData.map((e) => (
                            <SingleCard key={e._id} data={e} />
                        ))}
                    </SimpleGrid>
                ) : (
                    <Box w="100%" display="flex" justifyContent="center">
                        <Image src="https://www.tradibha.com/images/empty_cart.png" />
                    </Box>
                )}
            </div>
            {paginatedData.length ? (
                <PaginationContainer
                    data={filteredData}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalPages={totalPage}
                    onPageChange={handlePageChange}
                />
            ) : null}
        </>
    );
};

export default ProductsDisplay;
