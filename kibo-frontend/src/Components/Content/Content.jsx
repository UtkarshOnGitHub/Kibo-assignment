import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import SingleCard from '../Card/Card'

const Content = () => {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    return (
        <Box>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {arr.map((el,i)=>{
                    return <SingleCard key={i}/>
                })}
            </Grid>
        </Box>
    )
}

export default Content
