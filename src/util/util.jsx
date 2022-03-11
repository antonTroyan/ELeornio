const DEFAULT_COMPLEXITY = 60

export const takeRandomElements = (numberOfElements, array) => {
    const result = []

    for (let i = 0; i <= numberOfElements;) {
        const randomElementIndex = Math.floor(Math.random() * array.length)
        const randomElement = array[randomElementIndex]
        randomElement.complexity = DEFAULT_COMPLEXITY
        if (!result.includes(array[randomElementIndex])
            && randomElement.correctAnswer !== ''
            && Math.floor(Math.random() * 100) < randomElement.complexity) {

            result.push(randomElement)
            i++
        }
    }
    return result
}

export const invertRussianEnglish = (array) => {
    return array.map(element => {
        return {
            russianWord: element.correctAnswer,
            correctAnswer: element.russianWord,
            complexity: element.complexity
        }
    })
}
