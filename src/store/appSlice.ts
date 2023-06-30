import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Answer } from '../types'

export type AnswerValue = {
    questionIndex: number
    answer: Answer
}

export type AnswerType = {
    value: Answer[]
}

const initialState: AnswerType = {
    value: [],
}



export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        chooseAnswer: (state, action: PayloadAction<AnswerValue>) => {
            state.value[action.payload.questionIndex] = action.payload.answer
        },

        reset: (state) => {
            state.value = []
        },
    },
})

export const { chooseAnswer } = appSlice.actions

export default appSlice.reducer