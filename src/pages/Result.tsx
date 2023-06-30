import { Button, Center, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { calculateResult } from '../util'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts'
import { reset } from '../store/appSlice'
import { useNavigate } from 'react-router-dom'



const Result = () => {
    const navigate = useNavigate()
    const testAnswers = useSelector((state: RootState) => state.appReducer.value)
    const dispatch = useDispatch()

    let results = calculateResult(testAnswers)

    const data = results.results.map(r => ({ name: r.haplogroup, Score: r.score }))

    const onRestart = () => {
        dispatch(reset())
        navigate('/')
    }

    return (
        <Center minH='100vh' w='full'>
            <Stack alignItems='center' w='full' h={'full'} gap={20} p={12}>
                <Text fontSize='3xl'>Your Results</Text>
                <Text fontSize='9xl'>{results.primaryResult.haplogroup}</Text>
                <ResponsiveContainer width={'100%'} height={500}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}

                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Score" fill="grey" />
                    </BarChart>
                </ResponsiveContainer>

                <Button onClick={onRestart} size='lg' px={20} shadow='lg' >Restart</Button>
            </Stack>
        </Center>
    )
}

export default Result