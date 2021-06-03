export const takeRandomElements = (numberOfElements, array) => {
    const result = []

    for (let i = 0; i <= numberOfElements;) {
        const randomElementIndex = Math.floor(Math.random() * array.length)
        if (!result.includes(array[randomElementIndex])) {
            result.push(array[randomElementIndex])
            i++
        }
    }
    return result
}

export const invertRussianEnglish = (array) => {
    return array.map(element => {
        return {
            russianWord: element.correctAnswer, correctAnswer: element.russianWord
        }
    })
}
