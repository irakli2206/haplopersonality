import { HaplogroupWithMulitplier, QuizQuestion } from "../types";

//
export const questions: QuizQuestion[] = [
    {
        question: 'It is sometimes justified to hit a woman.',
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
            { haplogroup: 'E', multiplier: 3.5 },
        ]
    },
    {
        question: 'Hiking in nature is not a waste of time.',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 2 },
            { haplogroup: 'J2', multiplier: 3 },
            { haplogroup: 'I2', multiplier: 3.5 },
            { haplogroup: 'I1', multiplier: 5 },
            { haplogroup: 'R1b', multiplier: 4.5 },
            { haplogroup: 'R1a', multiplier: 3.5 },
            { haplogroup: 'G2a', multiplier: 3 },
            { haplogroup: 'N', multiplier: 1 },
            { haplogroup: 'Q', multiplier: 1 },
            { haplogroup: 'E', multiplier: 1.5 },
        ]
    },
    {
        question: 'You should give your seat to the elderly.',
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
            { haplogroup: 'E', multiplier: 4 },
        ]
    },
    {
        question: 'Fish is tasty',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 2 },
            { haplogroup: 'J2', multiplier: 3 },
            { haplogroup: 'I2', multiplier: 3.5 },
            { haplogroup: 'I1', multiplier: 5 },
            { haplogroup: 'R1b', multiplier: 3.5 },
            { haplogroup: 'R1a', multiplier: 4 },
            { haplogroup: 'G2a', multiplier: 3 },
            { haplogroup: 'N', multiplier: 5 },
            { haplogroup: 'Q', multiplier: 3.5 },
            { haplogroup: 'E', multiplier: 2 },
        ]
    },
    {
        question: 'Fish is tasty',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 2 },
            { haplogroup: 'J2', multiplier: 3 },
            { haplogroup: 'I2', multiplier: 3.5 },
            { haplogroup: 'I1', multiplier: 5 },
            { haplogroup: 'R1b', multiplier: 3.5 },
            { haplogroup: 'R1a', multiplier: 4 },
            { haplogroup: 'G2a', multiplier: 3 },
            { haplogroup: 'N', multiplier: 5 },
            { haplogroup: 'Q', multiplier: 3.5 },
            { haplogroup: 'E', multiplier: 2 },
        ]
    },
    {
        question: 'I am antisemitic',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 5 },
            { haplogroup: 'J2', multiplier: 4 },
            { haplogroup: 'I2', multiplier: 2 },
            { haplogroup: 'I1', multiplier: 3.5 },
            { haplogroup: 'R1b', multiplier: 2 },
            { haplogroup: 'R1a', multiplier: 3 },
            { haplogroup: 'G2a', multiplier: 1 },
            { haplogroup: 'N', multiplier: 1 },
            { haplogroup: 'Q', multiplier: 2 },
            { haplogroup: 'E', multiplier: 3.5 },
        ]
    },
    {
        question: 'I believe the world should be united in one state',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 3 },
            { haplogroup: 'J2', multiplier: 2 },
            { haplogroup: 'I2', multiplier: 2 },
            { haplogroup: 'I1', multiplier: 3.5 },
            { haplogroup: 'R1b', multiplier: 5 },
            { haplogroup: 'R1a', multiplier: 2 },
            { haplogroup: 'G2a', multiplier: 3 },
            { haplogroup: 'N', multiplier: 4 },
            { haplogroup: 'Q', multiplier: 3 },
            { haplogroup: 'E', multiplier: 3 },
        ]
    },
    {
        question: 'Large cities are superior to towns',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 5 },
            { haplogroup: 'J2', multiplier: 4 },
            { haplogroup: 'I2', multiplier: 3.5 },
            { haplogroup: 'I1', multiplier: 2 },
            { haplogroup: 'R1b', multiplier: 3 },
            { haplogroup: 'R1a', multiplier: 3.5 },
            { haplogroup: 'G2a', multiplier: 3.5 },
            { haplogroup: 'N', multiplier: 4 },
            { haplogroup: 'Q', multiplier: 4 },
            { haplogroup: 'E', multiplier: 4 },
        ]
    },
    {
        question: 'Owning a detached house with a garden is a human right',
        haplogroups: [
            { haplogroup: 'J1', multiplier: 1 },
            { haplogroup: 'J2', multiplier: 2 },
            { haplogroup: 'I2', multiplier: 3 },
            { haplogroup: 'I1', multiplier: 5 },
            { haplogroup: 'R1b', multiplier: 4 },
            { haplogroup: 'R1a', multiplier: 3.5 },
            { haplogroup: 'G2a', multiplier: 3 },
            { haplogroup: 'N', multiplier: 2 },
            { haplogroup: 'Q', multiplier: 2 },
            { haplogroup: 'E', multiplier: 2 },
        ]
    },
]