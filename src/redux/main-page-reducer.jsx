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
            hint: 'this is hint 2',
            image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
            mainText: 'test main text 2',
            title: 'this is test title 2',
            tasks: [
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},
                {russianWord: '!!!', correctAnswer: '!!!!!'},

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