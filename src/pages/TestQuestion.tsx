import { ButtonGroup, Button, IconButton, Center, Text, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { questions } from '../data/questions';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { chooseAnswer } from '../store/appSlice';
import { Answer } from '../types';
import { useToast } from '@chakra-ui/react'


const TestQuestion = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const [chosenAnswer, setChosenAnswer] = useState<Answer | null>(null)
  const toast = useToast()


  let questionNumber = searchParams.get('question') as string
  let questionIndex = +questionNumber - 1

  const question = questions[questionIndex]

  const testAnswers = useSelector((state: RootState) => state.appReducer.value)
  const dispatch = useDispatch()

  console.log('answers', testAnswers)

  const onAnswer = (answer: Answer) => {
    setChosenAnswer(answer)
    dispatch(chooseAnswer({ questionIndex: questionIndex, answer: answer }))
  }

  const gotoPrevQuestion = () => {
    if (+questionNumber != 1) {
      setSearchParams({ question: String(+questionNumber - 1) })
    }
    else console.log('Start reached')
  }

  const gotoNextQuestion = () => {
    if (!chosenAnswer) {
      toast({
        title: 'Choose an answer first!',
        // description: "We've created your account for you.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    if (+questionNumber != questions.length) {
      setSearchParams({ question: String(+questionNumber + 1) })
    }
    else navigate('/result')
  }

  useEffect(() => {
    console.log(testAnswers[questionIndex])
    if (testAnswers[questionIndex]) {
      setChosenAnswer(testAnswers[questionIndex])
    }
    else setChosenAnswer(null)
  }, [searchParams])

  return (
    <Center h='100vh' w='full'>
      <Stack alignItems='center' gap={24}>
        <Text fontSize='4xl'>{question.question}</Text>
        <ButtonGroup size='lg' isAttached variant='outline' bg='white' rounded={'lg'} shadow={'lg'}>
          {[...Array(5).keys()].map((e: number) => {
            const buttonValue = e + 1
            return <Button onClick={() => onAnswer(buttonValue as Answer)}
              isActive={chosenAnswer == buttonValue}
            >{buttonValue}</Button>
          })}

        </ButtonGroup>
        <ButtonGroup size='lg' isAttached variant='outline' bg='white' mt={24}>
          <Button onClick={gotoPrevQuestion}>Previous</Button>
          <Button onClick={gotoNextQuestion}>Next</Button>
        </ButtonGroup>
      </Stack>
    </Center>
  )
}

export default TestQuestion