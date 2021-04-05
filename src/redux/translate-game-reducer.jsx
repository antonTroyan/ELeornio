const initialState = {

    tasks : [
        {taskId : 1, russianWord: 'привет', correctAnswer: 'hello'},
        {taskId : 1, russianWord: 'стол', correctAnswer: 'table'},
        {taskId : 1, russianWord: 'стул', correctAnswer: 'chair'},
        {taskId : 1, russianWord: 'монитор', correctAnswer: 'monitor'},
        {taskId : 1, russianWord: 'колонки', correctAnswer: 'dynamics'},
        {taskId : 1, russianWord: 'мышь', correctAnswer: 'mouse'},
        {taskId : 1, russianWord: 'книга', correctAnswer: 'book'},
        {taskId : 1, russianWord: 'пульт', correctAnswer: 'pult'},
        {taskId : 1, russianWord: 'ручка', correctAnswer: 'pen'},
        {taskId : 1, russianWord: 'кружка', correctAnswer: 'cup'},
        {taskId : 1, russianWord: 'шторм', correctAnswer: 'storm'},
        {taskId : 1, russianWord: 'доступен', correctAnswer: 'available'},
        {taskId : 1, russianWord: 'обновление', correctAnswer: 'update'}
    ]
}

export const translateGameReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}