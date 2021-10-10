const createYouTubeImageLink = (videoId) => {
    return 'https://img.youtube.com/vi/' + videoId + '/hqdefault.jpg'
}

const initialState = {
    score: 0,
    materials: [
        {
            key: 0,
            hint: 'Shuffle',
            image: 'https://media.istockphoto.com/vectors/shuffle-icon-filled-shuffle-icon-for-website-design-and-mobile-app-vector-id1168505957?b=1&k=6&m=1168505957&s=612x612&w=0&h=qtf1JFqKkv4UqsXcbhw7GHJrJXxzrSLGfxvztP1tVhI=',
            mainText: 'Shuffle',
            title: '',
            linkToMaterial: 'https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%84%D1%84%D0%BB',
            tasks: []
        },
        {
            key: 1,
            hint: 'Programming dictionary',
            image: 'https://repository-images.githubusercontent.com/155638338/82ecf400-6f73-11e9-8908-dfadfe1aa923',
            mainText: 'Programming dictionary',
            title: '',
            linkToMaterial: 'https://en.wikipedia.org/wiki/Computer_programming',
            tasks: [
                 {russianWord: 'надежный', correctAnswer: 'robust'},
                 {russianWord: 'устойчивый', correctAnswer: 'resilient'},
                 {russianWord: 'выставить', correctAnswer: 'expose'},
                 {russianWord: 'крупнозернистый', correctAnswer: 'coarse-grained'},
                 {russianWord: 'мелкозернистый', correctAnswer: 'fine-grained'},
                 {russianWord: 'переборка', correctAnswer: 'bulkhead'},
                 {russianWord: 'разделять', correctAnswer: 'compartmentalize'},
                 {russianWord: 'галстук, привязать', correctAnswer: 'tie'},
                 {russianWord: 'безжалостно', correctAnswer: 'ruthlessly'},
                 {russianWord: 'связанный', correctAnswer: 'coupled'},
                 {russianWord: 'предусмотрительность', correctAnswer: 'forethought'},
                 {russianWord: 'огромный', correctAnswer: 'tremendous'},
                 {russianWord: 'быть похороненным', correctAnswer: 'getting buried'},
                 {russianWord: 'специальный', correctAnswer: 'ad hoc'},
                 {russianWord: 'свидетель', correctAnswer: 'witness'},
                 {russianWord: 'кусок', correctAnswer: 'chunk'},
                 {russianWord: 'разъединять', correctAnswer: 'tease apart'},
                 {russianWord: 'болтливый', correctAnswer: 'chatty'},
                 {russianWord: 'подрыв', correctAnswer: 'subvert'},
                 {russianWord: 'разрастание', correctAnswer: 'sprawl'},
                 {russianWord: 'огромный', correctAnswer: 'tremendous'},
                 {russianWord: 'избегать', correctAnswer: 'eschew [эшеф]'},
                 {russianWord: 'строгость', correctAnswer: 'rigor'},
                 {russianWord: 'снесённый', correctAnswer: 'torn down'},
                 {russianWord: 'сборка', correctAnswer: 'assembly'},
                 {russianWord: 'перебои в работе', correctAnswer: 'outage'},
                 {russianWord: 'поверхность', correctAnswer: 'surface'},
                 {russianWord: 'невыполнимо', correctAnswer: 'unfeasible'},
                 {russianWord: 'задержка', correctAnswer: 'latency'},
                 {russianWord: 'одноразовый', correctAnswer: 'disposable'},
                 {russianWord: 'обманчиво', correctAnswer: 'deceptively'},
                 {russianWord: 'узкий', correctAnswer: 'narrow'},
                 {russianWord: 'границы', correctAnswer: 'boundaries'},
                 {russianWord: 'обыденное', correctAnswer: 'mundane'},
            ]
        },
        {
            key: 2,
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
                {russianWord: 'странный', correctAnswer: 'weird'},
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
                {russianWord: 'потомство', correctAnswer: 'offspring'}
            ]
        },
        {
            key: 3,
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
                {russianWord: 'жесткий', correctAnswer: 'tough'},
                {russianWord: 'возмущение', correctAnswer: 'outrage'},
                {russianWord: 'пропитание', correctAnswer: 'sustenance'},
                {russianWord: 'высокомерный', correctAnswer: 'arrogant'},
                {russianWord: 'царапины', correctAnswer: 'scratching'},
                {russianWord: 'ловкий', correctAnswer: 'slick'},
                {russianWord: 'резюмировать', correctAnswer: 'recap'},
                {russianWord: 'кувырок', correctAnswer: 'flip'},
                {russianWord: 'тезка', correctAnswer: 'namesake'},
                {russianWord: 'игральная кость', correctAnswer: 'dice'},
                {russianWord: 'наркотик', correctAnswer: 'dope'},
            ]
        },
        {
            key: 4,
            hint: 'Godel english lessons',
            image: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/1162486-520708-34.jpg?v=2',
            mainText: 'Godel english lessons',
            title: '',
            linkToMaterial: '',
            tasks: [
                {russianWord: 'selfish behavior', correctAnswer: 'selfish streak'},
                {russianWord: 'bright imagination', correctAnswer: 'vivid imagination'},
                {russianWord: 'smart', correctAnswer: 'razor sharp mind'},
                {russianWord: 'cruelly, strongly', correctAnswer: 'fiercely'},
                {russianWord: 'quick decisions', correctAnswer: 'snap decisions'},
                {russianWord: 'took offense', correctAnswer: 'bear a grudge'},
                {russianWord: 'nature', correctAnswer: 'temper'},
                {russianWord: 'sure', correctAnswer: 'confident'},
                {russianWord: 'keep cool', correctAnswer: 'keep your temper'},
                {russianWord: 'I like', correctAnswer: 'I am fond of'},
                {russianWord: 'exceedingly', correctAnswer: 'supremely'},
                {russianWord: 'hysterical', correctAnswer: 'throw a tantrum'},
                {russianWord: 'abide, keep calm about smth', correctAnswer: 'come to terms with'},
                {russianWord: 'to fraud smb', correctAnswer: 'deceive'},
            ]
        },
        {
            key: 5,
            hint: 'Joe List: I Hate Myself - Full Special',
            image: createYouTubeImageLink('odtAJ2kPdqc'),
            mainText: 'Joe List: I Hate Myself - Full Special',
            title: '',
            linkToMaterial: 'https://www.youtube.com/watch?v=odtAJ2kPdqc&t=134s&ab_channel=ComedyCentralStand-Up',
            tasks: [
                {russianWord: 'шея', correctAnswer: 'neck'},
                {russianWord: 'леденец', correctAnswer: 'lollipop'},
                {russianWord: 'разорванный', correctAnswer: 'torn'},
                {russianWord: 'виновный', correctAnswer: 'guilty'},
                {russianWord: 'зевать', correctAnswer: 'yawn [ён]'},
                {russianWord: 'скончаться', correctAnswer: 'pass away'},
                {russianWord: 'нервирующий', correctAnswer: 'unnerving'},
                {russianWord: 'расслабиться ', correctAnswer: 'ease back'},
                {russianWord: 'одеяло', correctAnswer: 'blanket'},
                {russianWord: 'бесить', correctAnswer: 'piss off'},
                {russianWord: 'похмелье ', correctAnswer: 'hangover'},
                {russianWord: 'связь', correctAnswer: 'bond'},
                {russianWord: 'вопиющий', correctAnswer: 'egregious'},
                {russianWord: 'осмотрительность', correctAnswer: 'discretion'},
                {russianWord: 'выскочить', correctAnswer: 'pop out'},
                {russianWord: 'крендель', correctAnswer: 'pretzel'},
                {russianWord: 'салфетка', correctAnswer: 'napkin'},
                {russianWord: 'приучать', correctAnswer: 'accustom'},
                {russianWord: 'закрасить', correctAnswer: 'paint off'},
                {russianWord: 'глотать', correctAnswer: 'swallow'},
                {russianWord: 'пердеть', correctAnswer: 'fart'},
                {russianWord: 'кишечник', correctAnswer: 'bowel'},
                {russianWord: 'беспокойство', correctAnswer: 'anxiety'},
                {russianWord: 'пшеница', correctAnswer: 'wheat'},
                {russianWord: 'жевать', correctAnswer: 'chew'},
                {russianWord: 'азартная игра', correctAnswer: 'gamble'},
                {russianWord: 'соленые огурцы', correctAnswer: 'pickles'},
                {russianWord: 'гул', correctAnswer: 'buzz'},
                {russianWord: 'ноготь', correctAnswer: 'nail'},
                {russianWord: 'прикус', correctAnswer: 'overbite'},
                {russianWord: 'терроризировать', correctAnswer: 'bully'},
                {russianWord: 'оцепенелый', correctAnswer: 'numb'},
                {russianWord: 'приблизительный', correctAnswer: 'ballpark'},
                {russianWord: 'шишка', correctAnswer: 'nub'},
                {russianWord: 'парик', correctAnswer: 'wig'},
                {russianWord: 'объявиться', correctAnswer: 'show up'},
                {russianWord: 'заряжать', correctAnswer: 'charge up'},
                {russianWord: 'плавать', correctAnswer: 'float'},
                {russianWord: 'телятина', correctAnswer: 'veal'},
                {russianWord: 'метамфетамин', correctAnswer: 'meth'},
                {russianWord: 'солдат', correctAnswer: 'trooper'},
            ]
        },
        {
            key: 6,
            hint: 'Nick Thune: Good Guy - Full Special',
            image: createYouTubeImageLink('HnMSJVRgopc'),
            mainText: 'Nick Thune: Good Guy - Full Special',
            title: '',
            linkToMaterial: 'https://www.youtube.com/watch?v=HnMSJVRgopc',
            tasks: [
                {russianWord: 'установка ', correctAnswer: 'setting up'},
                {russianWord: 'вроде', correctAnswer: 'kinda'},
                {russianWord: 'ключ к разгадке', correctAnswer: 'clue'},
                {russianWord: 'горшок', correctAnswer: 'pot'},
                {russianWord: 'подонок', correctAnswer: 'scumbag'},
                {russianWord: 'выдуманный', correctAnswer: 'coined'},
                {russianWord: 'дверная ручка', correctAnswer: 'doorknob'},
                {russianWord: 'ужалить', correctAnswer: 'sting'},
                {russianWord: 'головорез', correctAnswer: 'cutthroat'},
                {russianWord: 'пирожное', correctAnswer: 'brownie'},
                {russianWord: 'фургон', correctAnswer: 'van'},
                {russianWord: 'проститутка', correctAnswer: 'hooker'},
                {russianWord: 'хвастовство', correctAnswer: 'bragging'},
                {russianWord: 'раковина', correctAnswer: 'sink'},
                {russianWord: 'развод', correctAnswer: 'divorce'},
                {russianWord: 'разрастаться', correctAnswer: 'sprawl out'},
                {russianWord: 'трезвый', correctAnswer: 'sober'},
                {russianWord: 'тонкий', correctAnswer: 'subtle'},
                {russianWord: 'бездельничать', correctAnswer: 'bum out'},
                {russianWord: 'мрачный', correctAnswer: 'somber'},
                {russianWord: 'негодяй', correctAnswer: 'rascal'},
                {russianWord: 'вещи', correctAnswer: 'stuff'},
                {russianWord: 'предвидеть', correctAnswer: 'foresee'},
                {russianWord: 'винт', correctAnswer: 'screw'},
                {russianWord: 'пошел вон', correctAnswer: 'screw you'},
                {russianWord: 'лужайка', correctAnswer: 'lawn'},
                {russianWord: 'размышлять', correctAnswer: 'ponder'},
                {russianWord: 'выпускник ', correctAnswer: 'alumnus [эламнэс]'},
                {russianWord: 'равный', correctAnswer: 'peer'},
                {russianWord: 'сверстники', correctAnswer: 'peers'},
                {russianWord: 'придурок', correctAnswer: 'dork'},
                {russianWord: 'проповедь', correctAnswer: 'sermon'},
                {russianWord: 'лапша', correctAnswer: 'noodles'},
                {russianWord: 'палец на ноге ', correctAnswer: 'toe [тоу]'},
            ]
        },
        {
            key: 7,
            hint: 'Английский по песням',
            image: 'https://avatars.yandex.net/get-music-content/2110367/30528cde.a.9340513-1/m1000x1000',
            mainText: 'Английский по песням',
            title: '',
            linkToMaterial: 'https://music.yandex.by/album/9340513',
            tasks: [
                {russianWord: 'отвечать на телефон', correctAnswer: 'pick up the phone'},
                {russianWord: 'впустить кого то', correctAnswer: 'to let someone in'},
                {russianWord: 'выкинуть кого то', correctAnswer: 'to kick someone out'},
                {russianWord: 'прийти в себя после чего то', correctAnswer: 'to get over something'},
                {russianWord: 'уходи', correctAnswer: 'get gone'},
                {russianWord: 'привычное дело', correctAnswer: 'second nature'},
                {russianWord: 'отшутиться', correctAnswer: 'to laugh something off'},
                {russianWord: 'поддерживать кого то', correctAnswer: 'to get someones back'},
                {russianWord: 'ерунда', correctAnswer: 'no big deal'},
                {russianWord: 'быть в приподнятом настроении', correctAnswer: 'to be up'},
                {russianWord: 'быть в подавленном настроении', correctAnswer: 'to be down'},
                {russianWord: 'терять контроль', correctAnswer: 'to go off the deep end'},
                {russianWord: 'перевернуть ситуацию в свою пользу', correctAnswer: 'to flip the script'},
                {russianWord: 'устроить разборку', correctAnswer: 'to have a bone to pick'},
                {russianWord: 'не повезло [вытянуть короткую спичку]', correctAnswer: 'to get short end of stick'},
                {russianWord: 'поступать подло', correctAnswer: 'to move low'},
                {russianWord: 'детка, малышка', correctAnswer: 'shorty'},
                {russianWord: 'ярый фанат, фанатеть', correctAnswer: 'stan'},
                {russianWord: 'затемнять, омрачать', correctAnswer: 'to cloud'},
                {russianWord: 'оторвать что-нибудь со стены', correctAnswer: 'to rip something off the wall'},
                {russianWord: 'быть польщенным', correctAnswer: 'to be flattered'},
                {russianWord: 'что то закончилось', correctAnswer: 'to be out of something'},
                {russianWord: 'дама в беде', correctAnswer: 'damsel in distress'},
                {russianWord: 'усмирять, приручать', correctAnswer: 'tame'},
                {russianWord: 'неудачник, кто плохо вписывается', correctAnswer: 'misfit'},
                {russianWord: 'запутано, переплетено', correctAnswer: 'twisted'},
                {russianWord: 'сойти с ума', correctAnswer: 'to go out of one\'s mind'},
                {russianWord: 'смотреть пристально', correctAnswer: 'to look  stare'},
                {russianWord: 'елка', correctAnswer: 'spruce'},
                {russianWord: 'омела', correctAnswer: 'mistletoe'},
                {russianWord: 'согласие', correctAnswer: 'consent'},
                {russianWord: 'составлять список', correctAnswer: 'to make a list'},
                {russianWord: 'бодрствовать', correctAnswer: 'to stay awake'},
                {russianWord: 'сани', correctAnswer: 'sleigh [слей]'},
                {russianWord: 'ничего не могу поделать', correctAnswer: 'I cant help it'},
                {russianWord: 'тусовщик', correctAnswer: 'party animal'},
                {russianWord: 'опрокинуть [рюмку]', correctAnswer: 'push it down'},
                {russianWord: 'быть в полном раздрае', correctAnswer: 'to be a mess'},
                {russianWord: 'неподвижный', correctAnswer: 'numb'},
                {russianWord: 'лучшее впереди', correctAnswer: 'the best is yet to come'},
                {russianWord: 'нравится кому то', correctAnswer: 'apeal at someone'},
                {russianWord: 'стоять на месте, бездействовать', correctAnswer: 'stand still'},
                {russianWord: 'очаровательный', correctAnswer: 'adorable'},
            ]
        },
        {
            key: 8,
            hint: 'Mark Normand: Out To Lunch - Full Special',
            image: createYouTubeImageLink('tDolNU89SXI'),
            mainText: 'Mark Normand: Out To Lunch - Full Special',
            title: '',
            linkToMaterial: 'https://www.youtube.com/watch?v=tDolNU89SXI',
            tasks: [
                {russianWord: 'расщепление, декольте', correctAnswer: 'cleavage'},
                {russianWord: 'тучный', correctAnswer: 'obese'},
                {russianWord: 'пойманный', correctAnswer: 'catfished'},
                {russianWord: 'черты', correctAnswer: 'traits'},
                {russianWord: 'подшучивать ', correctAnswer: 'banter'},
                {russianWord: 'облажаться', correctAnswer: 'screw ups'},
                {russianWord: 'выпивка', correctAnswer: 'booze'},
                {russianWord: 'неблагополучная семья', correctAnswer: 'broken home'},
                {russianWord: 'крах', correctAnswer: 'meltdown'},
                {russianWord: 'больной', correctAnswer: 'sore'},
                {russianWord: 'рассеянный', correctAnswer: 'dispelled'},
                {russianWord: 'пятно', correctAnswer: 'stain'},
                {russianWord: 'морщинистый', correctAnswer: 'crinkly'},
                {russianWord: 'ожирение', correctAnswer: 'obesity'},
                {russianWord: 'снисходить', correctAnswer: 'condescend'},
                {russianWord: 'убогий', correctAnswer: 'miserable'},
                {russianWord: 'выявить', correctAnswer: 'elicit'},
                {russianWord: 'намерение', correctAnswer: 'intent'},
                {russianWord: 'наклониться вперед', correctAnswer: 'bend over'},
                {russianWord: 'карлики', correctAnswer: 'midgets'},
                {russianWord: 'потолок', correctAnswer: 'ceiling'},
                {russianWord: 'источает', correctAnswer: 'exudes'},
                {russianWord: 'ряд', correctAnswer: 'aisle [айл]'},
                {russianWord: 'признавать', correctAnswer: 'admit'},
                {russianWord: 'кран', correctAnswer: 'faucet [фосет]'},
                {russianWord: 'жаждущий', correctAnswer: 'thirsty'},
                {russianWord: 'чистить (напр фрукты)', correctAnswer: 'peeling'},
                {russianWord: 'палочка для еды', correctAnswer: 'chopstick'},
                {russianWord: 'головы вниз, оценки вверх', correctAnswer: 'head down grades up'},
                {russianWord: 'прослушка ', correctAnswer: 'bugging'},
                {russianWord: 'булавка', correctAnswer: 'pin'},
                {russianWord: 'меньшинства', correctAnswer: 'minorities'},
                {russianWord: 'дерьмо', correctAnswer: 'crap'},
                {russianWord: 'получить ножевое ранение', correctAnswer: 'get stabbed'},
                {russianWord: 'нетерпимый', correctAnswer: 'bigoted (биготед)'},
                {russianWord: 'подозрительный', correctAnswer: 'sketchy'},
                {russianWord: 'возбужденный ', correctAnswer: 'aroused'},
                {russianWord: 'вытащить это', correctAnswer: 'whip it out'},
                {russianWord: 'смелый', correctAnswer: 'bold'},
                {russianWord: 'призрак', correctAnswer: 'spoke'},
                {russianWord: 'напуганный', correctAnswer: 'spooked'},
                {russianWord: 'разгромить, подавить', correctAnswer: 'crack down'},
                {russianWord: 'попрошайничество', correctAnswer: 'begging'},
                {russianWord: 'ласкать', correctAnswer: 'caress'},
                {russianWord: 'пуповина', correctAnswer: 'umbilical cord'},
                {russianWord: 'шалость', correctAnswer: 'skank'},
                {russianWord: 'извращенец ', correctAnswer: 'kinki'},
                {russianWord: 'мучить', correctAnswer: 'torment'},
                {russianWord: 'устаревший', correctAnswer: 'antiquated'},
                {russianWord: 'резвиться', correctAnswer: 'frolic'},
                {russianWord: 'отвали', correctAnswer: 'back off'},
                {russianWord: 'буквальный ', correctAnswer: 'literal'},
                {russianWord: 'набраться смелости', correctAnswer: 'took guts'},
                {russianWord: 'ворваться', correctAnswer: 'kick in'},
                {russianWord: 'каблуки ', correctAnswer: 'heels'},
                {russianWord: 'шутка ', correctAnswer: 'jiving'},
                {russianWord: 'рекламировать', correctAnswer: 'advertise'},
                {russianWord: 'сексуально возбужденный', correctAnswer: 'horny'},
                {russianWord: 'порог', correctAnswer: 'porch'},
                {russianWord: 'заработная плата', correctAnswer: 'wage'},
                {russianWord: 'эрекция', correctAnswer: 'boner'},
                {russianWord: 'неглубокий', correctAnswer: 'shallow'},
                {russianWord: 'внезапно', correctAnswer: 'sudden'},
                {russianWord: 'молочные продукты', correctAnswer: 'dairy'},
                {russianWord: 'позор', correctAnswer: 'taint'},
                {russianWord: 'смыв', correctAnswer: 'flush'},
                {russianWord: 'мешок', correctAnswer: 'sack'},
                {russianWord: 'внезапно', correctAnswer: 'sudden'},

            ]
        },
        {
            key: 9,
            hint: 'George Carlin - Stand Up About Religion',
            image: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/mjycm-30306751993-Full-Image_GalleryBackground-en-US-1504731917884._VzoEB8K222xNIheAn2gfh5zUtqg7HuV08_SX1080_.jpg',
            mainText: 'George Carlin - Stand Up About Religion',
            title: '',
            linkToMaterial: 'https://www.youtube.com/watch?v=2tp0UNcjzl8&t',
            tasks: [
                {russianWord: 'священнослужитель', correctAnswer: 'clergyman'},
                {russianWord: 'благоговение', correctAnswer: 'awe'},
                {russianWord: 'конкурс', correctAnswer: 'contest'},
                {russianWord: 'убедить', correctAnswer: 'convince'},
                {russianWord: 'мучения', correctAnswer: 'anguish'},
                {russianWord: 'жуткий', correctAnswer: 'spooky'},
                {russianWord: 'поклонник', correctAnswer: 'worshipper'},
                {russianWord: 'доверие', correctAnswer: 'credibility'},
                {russianWord: 'распятие', correctAnswer: 'crucifix'},
                {russianWord: 'конкурсы', correctAnswer: 'pageantry'},
                {russianWord: 'предположить', correctAnswer: 'presume'},
                {russianWord: 'промежность', correctAnswer: 'crotch'},
                {russianWord: 'преувеличивать', correctAnswer: 'exaggerate'},
                {russianWord: 'божественный', correctAnswer: 'divine'},
                {russianWord: 'лай', correctAnswer: 'bark'},
                {russianWord: 'выполнить', correctAnswer: 'accomplish'},
                {russianWord: 'ставка', correctAnswer: 'stake'},
                {russianWord: 'судорога', correctAnswer: 'cramp'},
                {russianWord: 'преподобный', correctAnswer: 'reverend'},
                {russianWord: 'поступление', correctAnswer: 'admission'},
                {russianWord: 'уничтожить', correctAnswer: 'wipe out'},
                {russianWord: 'бред', correctAnswer: 'delusion'},
                {russianWord: 'расплывчатый', correctAnswer: 'vague'},
                {russianWord: 'ругаться, присягать', correctAnswer: 'swear'},
                {russianWord: 'предписания', correctAnswer: 'stipulations'},
                {russianWord: 'вылететь из головы', correctAnswer: 'slip his mind'},
                {russianWord: 'скука', correctAnswer: 'boredom'},
                {russianWord: 'заповедь', correctAnswer: 'commandment'},
                {russianWord: 'преднамеренно', correctAnswer: 'deliberately'},
                {russianWord: 'верность', correctAnswer: 'fidelity'},
                {russianWord: 'жаждать', correctAnswer: 'covet'},
                {russianWord: 'плод', correctAnswer: 'fetus'},
            ]
        },
        {
            key: 10,
            hint: 'Вот это английский! Интервью',
            image: 'https://headlineplanet.com/home/wp-content/uploads/2019/10/Natalie-Portman-Fallon-2-1-e1570065821181-1280x720.jpg',
            mainText: 'Вот это английский! Интервью',
            title: '',
            linkToMaterial: 'https://www.youtube.com/playlist?list=PLOheXwuTHHNQ22sSu3jd8D0Gc55Rt-A_V',
            tasks: [
                {russianWord: 'великолепно, шикарно', correctAnswer: 'gorgeous [горджес]'},
                {russianWord: 'шокирующий, сногсшибательный', correctAnswer: 'stunning'},
                {russianWord: 'это началось давно', correctAnswer: 'it goes back a while'},
                {russianWord: 'впоследствии', correctAnswer: 'afterward[s]'},
                {russianWord: 'хозяин, ведущий', correctAnswer: 'host'},
                {russianWord: 'французский поцелуй', correctAnswer: 'french'},
                {russianWord: 'кто либо из нас', correctAnswer: 'either of us'},
                {russianWord: 'иду по улице', correctAnswer: 'walking down the street'},
                {russianWord: 'хорошо сложен', correctAnswer: 'well put together'},
                {russianWord: 'сдержанный', correctAnswer: 'restrained'},
                {russianWord: 'хорошие манеры', correctAnswer: 'well-mannered'},
                {russianWord: 'признавать', correctAnswer: 'acknowledge'},
                {russianWord: 'скупой', correctAnswer: 'mean'},
                {russianWord: 'привыкнуть', correctAnswer: 'to be used to'},
                {russianWord: 'пресс конференция', correctAnswer: 'press'},
                {russianWord: 'неожиданно, из неоткуда', correctAnswer: 'out of nowhere'},
                {russianWord: 'вызвать у кого то мурашки', correctAnswer: 'to give someone chill'},
                {russianWord: 'раздражающе', correctAnswer: 'irritating'},
                {russianWord: 'сделать что то очень удачное', correctAnswer: 'to hit a home run'},
                {russianWord: 'удовлетворяющее', correctAnswer: 'gratifying'},
                {russianWord: 'предпосылка', correctAnswer: 'premise'},
                {russianWord: 'реклама', correctAnswer: 'advertisement [ad]'},
                {russianWord: 'подбегать', correctAnswer: 'run up'},
                {russianWord: 'бросать косые взгляды', correctAnswer: 'side-eying each other'},
                {russianWord: 'вставать', correctAnswer: 'get up'},
                {russianWord: 'душить', correctAnswer: 'strangle'},
                {russianWord: 'обнять', correctAnswer: 'give a hug'},
                {russianWord: 'намного лучше', correctAnswer: 'way better'},
                {russianWord: 'большой, главный', correctAnswer: 'major'},
                {russianWord: 'сжимать, сдавливать', correctAnswer: 'squeeze'},
                {russianWord: 'признание', correctAnswer: 'confession'},
                {russianWord: 'ерзать', correctAnswer: 'squirm [скворм]'},
                {russianWord: 'без отдыха', correctAnswer: 'restlessly'},
                {russianWord: 'считать, почтение', correctAnswer: 'regard'},
                {russianWord: 'не иметь дурных намерений', correctAnswer: 'mean no harm'},
                {russianWord: 'внезапно', correctAnswer: 'all of a sudden'},
                {russianWord: 'запоминать', correctAnswer: 'memorize'},
                {russianWord: 'предполагается', correctAnswer: 'suppose'},
                {russianWord: 'узнать настроения собеседников', correctAnswer: 'read a room'},
                {russianWord: 'широкий диапазон', correctAnswer: 'broad band'},
                {russianWord: 'вводить в заблуждение', correctAnswer: 'misrepresent'},
                {russianWord: 'искажать', correctAnswer: 'distort'},
                {russianWord: 'я тоже нет', correctAnswer: 'neither do I'},
                {russianWord: 'перевернуться', correctAnswer: 'flip out'},
                {russianWord: 'прошло много времени', correctAnswer: 'it`s been a while'},
                {russianWord: 'младенец', correctAnswer: 'toddler'},
                {russianWord: 'увлекаться чем то', correctAnswer: 'to be into smthg'},
                {russianWord: 'лапа', correctAnswer: 'paw'},
                {russianWord: 'ты пробовал что то?', correctAnswer: 'have you done smthg?'},
                {russianWord: 'притворяться', correctAnswer: 'act out'},
                {russianWord: 'отстой, мусор', correctAnswer: 'rubbish'},
                {russianWord: 'отругать кого то', correctAnswer: 'tell someone off'},
                {russianWord: 'привыкнуть', correctAnswer: 'get used to'},
                {russianWord: 'облом', correctAnswer: 'bummer [баммер]'},
                {russianWord: 'если мы заходим так далеко', correctAnswer: 'if we are going that far'},
                {russianWord: 'постоянно', correctAnswer: 'consistently'},
                {russianWord: 'захват, хват', correctAnswer: 'grip'},
                {russianWord: 'действовать так как будто', correctAnswer: 'act as if'},
                {russianWord: 'мы в ударе', correctAnswer: 'we are killing it'},
                {russianWord: 'собеседование', correctAnswer: 'audition'},
                {russianWord: 'предъявлять права на что то', correctAnswer: 'stake claim on smth'},
                {russianWord: 'предположительно', correctAnswer: 'supposedly'},
                {russianWord: 'правдоподобный', correctAnswer: 'plausible'},
                {russianWord: 'ты к чему?', correctAnswer: 'where are you going with this?'},
                {russianWord: 'родственники, народ', correctAnswer: 'folks'},
                {russianWord: 'быть зависимым', correctAnswer: 'be addicted'},
                {russianWord: 'снимать фильм', correctAnswer: 'to shoot a film'},
                {russianWord: 'смягчать, добираться до работы', correctAnswer: 'commute'},
                {russianWord: 'man that make drinks in a bar', correctAnswer: 'bartender'},
                {russianWord: 'my friends', correctAnswer: 'couple friends of mine'},
                {russianWord: 'seemed to be true, is likely', correctAnswer: 'apparently'},
                {russianWord: 'threat', correctAnswer: 'menace'},
                {russianWord: 'average, disgusting', correctAnswer: 'mean'},
                {russianWord: 'remove problem', correctAnswer: 'so relieved'},
                {russianWord: 'students, followers', correctAnswer: 'disciples'},
                {russianWord: 'сериал', correctAnswer: 'series'},
                {russianWord: '', correctAnswer: ''},
                {russianWord: '', correctAnswer: ''},
                {russianWord: '', correctAnswer: ''},

            ]
        },
        {
            key: 11,
            hint: 'Вот это английский! Новости',
            image: 'https://i.pinimg.com/originals/12/2d/8d/122d8d2269116d702b730a263b2a4141.jpg',
            mainText: 'Вот это английский! Новости',
            title: '',
            linkToMaterial: 'https://www.youtube.com/watch?v=-FSngDXo6io&list=PLOheXwuTHHNSoe_SAput7WsbnCF-_Z9yb&index=1',
            tasks: [
                {russianWord: 'тревожащие картины', correctAnswer: 'disturbing images'},
                {russianWord: 'солдаты', correctAnswer: 'troops'},
                {russianWord: 'посередине', correctAnswer: 'amid'},
                {russianWord: 'давка толпы', correctAnswer: 'crush [stampedes]'},
                {russianWord: 'десятки тысяч', correctAnswer: 'tens of thousands'},
                {russianWord: 'отчаянный', correctAnswer: 'desperate'},
                {russianWord: 'следовать', correctAnswer: 'ensue'},
                {russianWord: 'последующая', correctAnswer: 'ensuing'},
                {russianWord: 'изъятие, вывод войск', correctAnswer: 'withdrawal'},
                {russianWord: 'руководить', correctAnswer: 'preside over'},
                {russianWord: 'показывать по телевизору', correctAnswer: 'televise'},
                {russianWord: 'обращение', correctAnswer: 'address'},
                {russianWord: 'клятва, пообещать', correctAnswer: 'vow'},
                {russianWord: 'цитата', correctAnswer: 'quote'},
                {russianWord: 'конец цитаты', correctAnswer: 'unquote'},
                {russianWord: 'хребет', correctAnswer: 'backbone'},
                {russianWord: 'осуществить', correctAnswer: 'carry out'},
                {russianWord: 'охотиться', correctAnswer: 'hunt down'},
                {russianWord: 'доказательства', correctAnswer: 'proof'},
                {russianWord: 'идти против чего то', correctAnswer: 'come up against sth'},
                {russianWord: 'сомнения', correctAnswer: 'hesitation'},
                {russianWord: 'преодолеть', correctAnswer: 'overcome'},
                {russianWord: 'подавляющее большинство сомневающихся', correctAnswer: 'vast majority of hesitant'},
                {russianWord: 'быть одержимым кем то', correctAnswer: 'to be obsessed with smone'},
                {russianWord: 'с тех самых пор', correctAnswer: 'ever since'},
                {russianWord: 'управлять мотоциклом', correctAnswer: 'to ride a motorcycle'},
                {russianWord: 'меня спрашивают', correctAnswer: 'I get asked'},
                {russianWord: 'нестись (двигаться очень быстро)', correctAnswer: 'hurtling down [хертлин]'},
                {russianWord: 'шестеренка, передача', correctAnswer: 'gear'},
                {russianWord: 'бурчание', correctAnswer: 'rumbling'},
                {russianWord: 'понятно, очевидно', correctAnswer: 'clearly'},
                {russianWord: 'избирательный участок', correctAnswer: 'polling station'},
                {russianWord: 'передача', correctAnswer: 'transmission'},
                {russianWord: 'биллютень', correctAnswer: 'ballot'},
                {russianWord: 'проголосовать', correctAnswer: 'cast a ballot'},
                {russianWord: 'утверждать', correctAnswer: 'to allege'},
                {russianWord: 'вмешиваться', correctAnswer: 'interfere'},
                {russianWord: 'сомнительный', correctAnswer: 'doubtful'},
                {russianWord: '', correctAnswer: ''},
                {russianWord: '', correctAnswer: ''},
            ]
        },
    ]
}

const INCREMENT_SCORE = "INCREMENT_SCORE"
const RESET_SCORE = "RESET_SCORE"

export const mainPageReducer = (state = initialState, action) => {

    switch (action.type) {

       case INCREMENT_SCORE: {
            return {...state, score: state.score + 1}
       }

       case RESET_SCORE: {
            return {...state, score: 0}
       }

       default:
            return state;
    }
}

export const incrementScoreActionCreator = () => ({type: INCREMENT_SCORE})
export const resetScoreActionCreator = () => ({type: RESET_SCORE})