export type QuizQuestion = {
    question: string 
    haplogroups: HaplogroupWithMulitplier[]
}

export type HaplogroupWithMulitplier = {
    haplogroup: string 
    multiplier: number
}

export type Answer = 1 | 2 | 3 | 4 | 5