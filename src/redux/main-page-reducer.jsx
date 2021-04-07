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
            linkToMaterial: 'https://www.youtube.com/watch?v=F5hA5vuQ9AM&ab_channel=ComedyCentralStand-Up',
            tasks: [
                {russianWord: 'интенсивный', correctAnswer: 'intense'},
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
        {
            key: 2,
            hint: 'Alexandr Hamilton Main Song',
            image: 'https://media.vanityfair.com/photos/55a6a0fe9e9755183d972088/16:9/w_1280,c_limit/t-culture-list-hamilton.jpg',
            mainText: 'Alexandr Hamilton Main Song',
            title: '',
            linkToMaterial: 'https://music.yandex.ru/album/2972890/track/25250614',
            tasks: [
                {russianWord: 'сирота', correctAnswer: 'orphan'},
                {russianWord: 'убожество ', correctAnswer: 'squalor'},
                {russianWord: 'бедный ', correctAnswer: 'impoverished'},
                {russianWord: 'самоучка', correctAnswer: 'self-starter'},
                {russianWord: 'устав', correctAnswer: 'charter'},
                {russianWord: 'быть настороже', correctAnswer: 'keep his guard up'},
                {russianWord: 'опустошение ', correctAnswer: 'devastation'},
                {russianWord: 'капать', correctAnswer: 'drip'},
                {russianWord: 'канализация', correctAnswer: 'drain'},
                {russianWord: 'припев', correctAnswer: 'refrain'},
                {russianWord: 'завещание', correctAnswer: 'testament'},
                {russianWord: 'погрязший в долгах', correctAnswer: 'debt-ridden'},
                {russianWord: 'прикованный к постели ', correctAnswer: 'bed-ridden'},
                {russianWord: 'запах', correctAnswer: 'scent'},
                {russianWord: 'покончить жизнь самоубийством', correctAnswer: 'commit suicide'},
                {russianWord: 'постоять за себя', correctAnswer: 'fend for yourself'},
                {russianWord: 'научный труд', correctAnswer: 'treatise'},
                {russianWord: 'проницательный', correctAnswer: 'astute'},
                {russianWord: 'обездоленный', correctAnswer: 'destitute'},
                {russianWord: 'сахарный тростник', correctAnswer: 'sugar cane'},
                {russianWord: 'гавань', correctAnswer: 'harbor'},
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