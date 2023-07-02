import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import useAxios from '../hooks/useAxios'

const Questions = () => {

    let apiUrl = `/api.php?amount=10`

    const { response, error, loading } = useAxios({ url: apiUrl })
    console.log(response)

    return (
        <Box>
            <Typography variant='h4'>Questions 1</Typography>
            <Typography mt={5}>This is Questions</Typography>
            <Box mt={2}>
                <Button variant='contained'>Answer 1</Button>
            </Box>
            <Box mt={2}>
                <Button variant='contained'>Answer 2</Button>
            </Box>
            <Box mt={5}>
                Score: 2/6
            </Box>
        </Box>
    )
}

export default Questions