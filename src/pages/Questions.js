import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import useAxios from '../hooks/useAxios'
import { useSelector } from 'react-redux'

const Questions = () => {

    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score
    } = useSelector(state => state)

    let apiUrl = `/api.php?amount=10`

    const { response, error, loading } = useAxios({ url: apiUrl })

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