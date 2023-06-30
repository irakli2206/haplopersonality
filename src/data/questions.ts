import { HaplogroupWithMulitplier, QuizQuestion } from "../types";

//
export const questions: QuizQuestion[] = [
    {
        question: 'Is it justified to hit a woman?',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 5 },
            { haplogroup: 'J2', multiplier: 4 },
            { haplogroup: 'I2', multiplier: 3 },
            { haplogroup: 'I1', multiplier: 1 },
            { haplogroup: 'R1b', multiplier: 2 },
            { haplogroup: 'R1a', multiplier: 5 },
            { haplogroup: 'G2a', multiplier: 2 },
            { haplogroup: 'N', multiplier: 2 },
            { haplogroup: 'Q', multiplier: 3 },
        ]
    },
    {
        question: 'Do you see any point to hiking in nature?',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 4 },
            { haplogroup: 'J2', multiplier: 3 },
            { haplogroup: 'I2', multiplier: 4 },
            { haplogroup: 'I1', multiplier: 5 },
            { haplogroup: 'R1b', multiplier: 4.5 },
            { haplogroup: 'R1a', multiplier: 3.5 },
            { haplogroup: 'G2a', multiplier: 3 },
            { haplogroup: 'N', multiplier: 1 },
            { haplogroup: 'Q', multiplier: 1 },
        ]
    },
    {
        question: 'Should you give your seat to the elderly?',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 5 },
            { haplogroup: 'J2', multiplier: 4 },
            { haplogroup: 'I2', multiplier: 3.5 },
            { haplogroup: 'I1', multiplier: 1 },
            { haplogroup: 'R1b', multiplier: 2 },
            { haplogroup: 'R1a', multiplier: 3 },
            { haplogroup: 'G2a', multiplier: 4 },
            { haplogroup: 'N', multiplier: 3 },
            { haplogroup: 'Q', multiplier: 5 },
        ]
    },

]