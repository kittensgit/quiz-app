import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {

    const history = useNavigate()

    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score
    } = useSelector(state => state)

    let apiUrl = `/api.php?amount=${amount_of_question}`
    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`)
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`)
    }

    const { response, error, loading } = useAxios({ url: apiUrl })
    const [questionIndex, setQuestionIndex] = useState(0)
    const [options, setOptions] = useState([])
    console.log(options)

    useEffect(() => {
        if (response?.results.length) {
            const question = response.results[questionIndex]
            let answers = [...question.incorrect_answers]
            answers.slice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            )
            setOptions(answers)
        }
    }, [response, questionIndex])

    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    const handleClickAnswer = () => {
        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1)
        } else {
            history('/score')
        }
    }

    return (
        <Box>
            <Typography variant='h4'>Questions {questionIndex + 1}</Typography>
            <Typography mt={5}>{response.results[questionIndex].question}</Typography>
            {options.map((data, id) => (
                <Box mt={2} key={id}>
                    <Button onClick={handleClickAnswer} variant='contained'>{data}</Button>
                </Box>
            ))}
            <Box mt={5}>
                Score: {score}/{response.results.length}
            </Box>
        </Box>
    )
}

export default Questions