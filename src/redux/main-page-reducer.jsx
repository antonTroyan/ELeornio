const initialState = {
    materials: [
        {
            key: 0,
            hint: 'this is hint 1',
            image: 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424',
            mainText: 'test main text 1',
            title: 'this is test title 1',
            tasks: [
                {russianWord: 'привет', correctAnswer: 'hello'},
                {russianWord: 'стол', correctAnswer: 'table'},
                {russianWord: 'стул', correctAnswer: 'chair'},
                {russianWord: 'монитор', correctAnswer: 'monitor'},
                {russianWord: 'колонки', correctAnswer: 'dynamics'},
                {russianWord: 'мышь', correctAnswer: 'mouse'},
                {russianWord: 'книга', correctAnswer: 'book'},
                {russianWord: 'пульт', correctAnswer: 'pult'},
                {russianWord: 'ручка', correctAnswer: 'pen'},
                {russianWord: 'кружка', correctAnswer: 'cup'},
                {russianWord: 'шторм', correctAnswer: 'storm'},
                {russianWord: 'доступен', correctAnswer: 'available'},
                {russianWord: 'обновление', correctAnswer: 'update'}
            ]
        },
        {
            key: 1,
            hint: 'Getting Pushed Off After Sex - Whitney Cummings',
            image: 'https://api.time.com/wp-content/uploads/2014/06/whitney_cummings_iloveyou_still51_cc.jpg',
            mainText: 'Getting Pushed Off After Sex - Whitney Cummings',
            title: '',
            youtubeLink: 'https://www.youtube.com/watch?v=F5hA5vuQ9AM&ab_channel=ComedyCentralStand-Up',
            tasks: [
                {russianWord: 'интенсивный', correctAnswer: 'intense'},
                {russianWord: 'разобрался', correctAnswer: 'figured out'},
                {russianWord: 'скрученный', correctAnswer: 'twisted'},
                {russianWord: 'относиться', correctAnswer: 'treat'},
                {russianWord: 'спешиваться', correctAnswer: 'dismount'},
                {russianWord: 'вера', correctAnswer: 'faith'},
                {russianWord: 'связка', correctAnswer: 'bunch'},
                {russianWord: 'лазанья', correctAnswer: 'lasagna'},
                {russianWord: 'лодыжка', correctAnswer: 'ankle'},
                {russianWord: 'понимать', correctAnswer: 'figure out'},
                {russianWord: 'смущающий', correctAnswer: 'embarrasing'},
                {russianWord: 'странный', correctAnswer: 'weird'}
            ]
        },
    ]
}

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}