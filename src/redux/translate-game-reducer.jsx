const initialState = {

    tasks : [
        {taskId : 1, russianWord: 'привет', correctAnswer: 'hello'},
        {taskId : 2, russianWord: 'стол', correctAnswer: 'table'},
        {taskId : 3, russianWord: 'стул', correctAnswer: 'chair'},
        {taskId : 4, russianWord: 'монитор', correctAnswer: 'monitor'},
        {taskId : 5, russianWord: 'колонки', correctAnswer: 'dynamics'},
        {taskId : 6, russianWord: 'мышь', correctAnswer: 'mouse'},
        {taskId : 7, russianWord: 'книга', correctAnswer: 'book'},
        {taskId : 8, russianWord: 'пульт', correctAnswer: 'pult'},
        {taskId : 9, russianWord: 'ручка', correctAnswer: 'pen'},
        {taskId : 10, russianWord: 'кружка', correctAnswer: 'cup'}
    ]
}

export const translateGameReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}