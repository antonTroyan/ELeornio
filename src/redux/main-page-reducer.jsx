
const createYouTubeImageLink = (videoId) => {
    return 'https://img.youtube.com/vi/' + videoId + '/hqdefault.jpg'
}

const initialState = {
    materials: [
        {
            key: 0,
            hint: 'What It Takes for a Man to Get Called Crazy - Whitney Cummings',
            image: createYouTubeImageLink('yOgWRpTiKzE'),
            mainText: 'What It Takes for a Man to Get Called Crazy - Whitney Cummings',
            title: '',
            linkToMaterial: 'https://www.youtube.com/watch?v=yOgWRpTiKzE',
            tasks: [
                {russianWord: 'тусоваться', correctAnswer: 'hang out'},
                {russianWord: 'преследование', correctAnswer: 'stalking'},
                {russianWord: 'одержимый', correctAnswer: 'obsessed'},
                {russianWord: 'самый подлый', correctAnswer: 'meanest'},
                {russianWord: 'раздражительный ', correctAnswer: 'irritable'},
                {russianWord: 'обиженный', correctAnswer: 'resentful'},
                {russianWord: 'вдыхать', correctAnswer: 'inhale'},
                {russianWord: 'зажигать', correctAnswer: 'lit up'},
                {russianWord: 'пытка', correctAnswer: 'torture'},
                {russianWord: 'обратный огонь', correctAnswer: 'backfiring'},
                {russianWord: 'голодающий', correctAnswer: 'starving'},
                {russianWord: 'страстный', correctAnswer: 'passionate'},
                {russianWord: 'консервная банка', correctAnswer: 'tin can'},
                {russianWord: 'стержень', correctAnswer: 'rod'},
                {russianWord: 'брюшной', correctAnswer: 'abdominal'},
                {russianWord: 'сводит меня с ума', correctAnswer: 'drive me nuts'},
                {russianWord: 'оскорбительный', correctAnswer: 'insulting'},
                {russianWord: 'потомство', correctAnswer: 'offspring'},
            ]
        },
        {
            key: 1,
            hint: 'Getting Pushed Off After Sex - Whitney Cummings',
            image: createYouTubeImageLink('F5hA5vuQ9AM'),
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
        {
            key: 3,
            hint: 'The McDonald’s Commercial White People Have Never Seen - Roy Wood Jr.',
            image: createYouTubeImageLink('I_nXmYxsiag'),
            mainText: 'The McDonald’s Commercial White People Have Never Seen - Roy Wood Jr.',
            title: '',
            linkToMaterial: 'https://www.youtube.com/watch?v=I_nXmYxsiag&ab_channel=ComedyCentralStand-Up',
            tasks: [
                {russianWord: 'жесткий', correctAnswer: 'tough'},
                {russianWord: 'возмущение', correctAnswer: 'outrage'},
                {russianWord: 'пропитание', correctAnswer: 'sustenance'},
                {russianWord: 'высокомерный', correctAnswer: 'arrogant'},
                {russianWord: 'царапины', correctAnswer: 'scratching'},
                {russianWord: 'ловкий', correctAnswer: 'slick'},
                {russianWord: 'резюмировать', correctAnswer: 'recap'},
                {russianWord: 'кувырок', correctAnswer: 'flip'},
                {russianWord: 'коммерческий', correctAnswer: 'commercial'},
                {russianWord: 'тезка', correctAnswer: 'namesake'},
                {russianWord: 'игральная кость', correctAnswer: 'dice'},
                {russianWord: 'наркотик', correctAnswer: 'dope'},
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