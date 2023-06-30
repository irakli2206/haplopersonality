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