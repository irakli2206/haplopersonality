import { questions } from "./data/questions"
import { Answer } from "./types"

type Result = {
    haplogroup: string
    score: number | null
}

export const calculateResult = (answers: Answer[]) => {
    let results: Result[] = questions[0].haplogroups
        .map(haplo => {
            let answersMultiplied = answers.map((answer, index) => {
                let questionSpecificHaplo = questions[index].haplogroups.find(h => h.haplogroup == haplo.haplogroup)
                return answer * questionSpecificHaplo!.multiplier
            })
            let answersSum = answersMultiplied.reduce((prev, cur) => cur + prev)
            return { haplogroup: haplo.haplogroup, score: answersSum }
        }
        )

    console.log(results)

    let primaryResult = results[0]
    results.forEach(r => {
        if ((r.score && primaryResult.score) && (r.score > primaryResult.score)) primaryResult = r
    })

    return { results, primaryResult }

}

//This is just for balancing purposes
export const calculateMultipliers = () => {
    let totals = [
        { haplogroup: 'J1', multiplier: 0 },
        { haplogroup: 'J2', multiplier: 0 },
        { haplogroup: 'I2', multiplier: 0 },
        { haplogroup: 'I1', multiplier: 0 },
        { haplogroup: 'R1b', multiplier: 0 },
        { haplogroup: 'R1a', multiplier: 0 },
        { haplogroup: 'G2a', multiplier: 0 },
        { haplogroup: 'N', multiplier: 0 },
        { haplogroup: 'Q', multiplier: 0 },
        { haplogroup: 'E', multiplier: 0 },
    ]
    totals.forEach(t => {
        let total = 0
        questions.forEach(q => {
            let found = q.haplogroups.find(h => h.haplogroup == t.haplogroup)
            total += found!.multiplier
        })
        t.multiplier = total
    })
    console.log(totals)
    
}