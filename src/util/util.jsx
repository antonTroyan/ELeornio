
const takeRandomElementsFromArray = (numberOfElements, array) => {
    const result = []

    for (let i = 0; i <= numberOfElements;){
        const randomElementIndex = Math.floor(Math.random() * array.length)
        if (!result.includes(array[randomElementIndex])){
            result.push(array[randomElementIndex])
            i++
        }
    }
    return result
}

export default takeRandomElementsFromArray