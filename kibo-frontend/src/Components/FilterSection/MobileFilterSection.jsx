import { Box, Button, Select, Text, HStack, Divider } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function MobileFilterSection({ data, onFilter }) {
    const [category, setCategory] = useState("");
    const [size, setSize] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [lowToHigh, setLowToHigh] = useState(null);

    useEffect(() => {
        filterData();
    }, [category, size, brand, color,lowToHigh]);

    const filterData = () => {
        let filtered = [...data]; 
        
        if (category) {
            filtered = filtered.filter((item) => item.name === category);
        }
        if (size) {
            filtered = filtered.filter((item) => item.size === size);
        }
        if (brand) {
            filtered = filtered.filter((item) => item.brand === brand);
        }
        if (color) {
            filtered = filtered.filter((item) => item.review === color);
        }
        if (lowToHigh !== null) {
            filtered.sort((a, b) => {
                return lowToHigh ? a.rate - b.rate : b.rate - a.rate;
            });
        }
        console.log(filtered)
        onFilter(filtered);
    };

    const handleReset = () => {
        setCategory("");
        setSize("");
        setBrand("");
        setColor("");
        onFilter(data);
        setLowToHigh(null);
    };
    const handleSort = (e) => {
        const value = e.target.value;
        setLowToHigh(value === "lth");
    };

    return (
        <Box px={2} py={2}>
            <HStack justify="space-between" py={2} px={4} flexWrap={"wrap"}>
                <Text fontWeight="bold" fontSize="20px">Filters</Text>
                <Button variant="outline" borderRadius="3xl" onClick={handleReset}>Reset</Button>
            
            <Select placeholder="Select Category" size="sm" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="men_products">Men</option>
                <option value="women_products">Women</option>
            </Select>
            <Select placeholder="Select Size" size="sm" value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
            </Select>
            <Select placeholder="Select Brand" size="sm" value={brand} onChange={(e) => setBrand(e.target.value)}>
                <option value="Nike">Nike</option>
                <option value="Zara">Zara</option>
                <option value="Luios V">Luios V</option>
                <option value="Wildcraft">Wildcraft</option>
                <option value="Diesel">Diesel</option>
                <option value="Zudio">Zudio</option>
            </Select>
            <Select placeholder="Sort By Rating" size="sm" value={color} onChange={(e) => setColor(parseInt(e.target.value))}>
                    <option value="1">Rating 1</option>
                    <option value="2">Rating 2</option>
                    <option value="3">Rating 3</option>
                    <option value="4">Rating 4</option>
                    <option value="5">Rating 5</option>
                </Select>
            <Select placeholder="Sort By Price" size="sm" onChange={(e) => handleSort(e)}>
                    <option value="lth">Low To High</option>
                    <option value="htl">High To Low</option>
                </Select>
            </HStack>
        </Box>
    );
};
