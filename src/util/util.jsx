export const takeRandomElements = (numberOfElements, array) => {
    const result = []

    for (let i = 0; i <= numberOfElements;) {
        const randomElementIndex = Math.floor(Math.random() * array.length)
        const randomElement = array[randomElementIndex]
        if (!result.includes(array[randomElementIndex]) && randomElement.correctAnswer !== '') {
            result.push(randomElement)
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
