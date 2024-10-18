import { Box, Button, Select, Text, HStack, Divider } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function FilterSection({ data, onFilter }) {
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState([1, 500]);
    const [size, setSize] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        filterData();
    }, [category, priceRange, size, brand, color]);

    const filterData = () => {
        let filtered = data;
        
        if (category) {
            filtered = filtered.filter((item) => item.name === category);
        }
        if (priceRange) {
            filtered = filtered.filter((item) => item.rate >= priceRange[0] && item.rate <= priceRange[1]);
        }
        if (size) {
            filtered = filtered.filter((item) => item.size === size);
        }
        if (brand) {
            filtered = filtered.filter((item) => item.brand === brand);
        }
        if (color) {
            filtered = filtered.filter((item) => item.color === color);
        }
        console.log(filtered)
        onFilter(filtered);
    };

    const handleReset = () => {
        setCategory("");
        setPriceRange([1, 500]);
        setSize("");
        setBrand("");
        setColor("");
        onFilter(data);
    };

    return (
        <Box px={2} py={2}>
            <HStack justify="space-between" py={2} px={4}>
                <Text fontWeight="bold" fontSize="20px">Filter</Text>
                <Button variant="outline" borderRadius="3xl" onClick={handleReset}>Reset</Button>
            </HStack>
            <Select placeholder="Select Category" size="sm" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="men_products">Men</option>
                <option value="women_products">Women</option>
            </Select>
            <Divider m={2} />
            <Select placeholder="Select Price Range" size="sm" value={priceRange} onChange={(e) => setPriceRange(e.target.value.split('-').map(Number))}>
                <option value="41-50">41-50</option>
                <option value="51-60">51-60</option>
                <option value="61-70">61-70</option>
                <option value="71-80">71-80</option>
            </Select>
            <Divider m={2} />
            <Select placeholder="Select Size" size="sm" value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
            </Select>
            <Divider m={2} />
            <Select placeholder="Select Brand" size="sm" value={brand} onChange={(e) => setBrand(e.target.value)}>
                <option value="Nike">Nike</option>
                <option value="Zara">Zara</option>
                <option value="Luios V">Luios V</option>
                <option value="Wildcraft">Wildcraft</option>
                <option value="Diesel">Diesel</option>
                <option value="Zudio">Zudio</option>
            </Select>
            <Divider m={2} />
            <Select placeholder="Select Color" size="sm" value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
            </Select>
        </Box>
    );
};
