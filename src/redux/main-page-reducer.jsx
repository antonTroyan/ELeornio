import cloneDeep from 'lodash/cloneDeep';

const createYouTubeImageLink = (videoId) => {
return 'https://img.youtube.com/vi/' + videoId + '/hqdefault.jpg'
}

const initialState = {
score: 0,
materials: [
{
key: 0,
image: 'https://media.istockphoto.com/vectors/shuffle-icon-filled-shuffle-icon-for-website-design-and-mobile-app-vector-id1168505957?b=1&k=6&m=1168505957&s=612x612&w=0&h=qtf1JFqKkv4UqsXcbhw7GHJrJXxzrSLGfxvztP1tVhI=',
title: 'Shuffle',
linkToMaterial: 'https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%84%D1%84%D0%BB',
tasks: []
},

{
key: 1,
image: 'https://image.shutterstock.com/z/stock-photo-child-english-classes-learn-english-491958946.jpg',
title: 'Godel classes',
linkToMaterial: '',
tasks: [
{russianWord: 'selfish behavior', correctAnswer: 'selfish streak', complexity: 60},
{russianWord: 'bright imagination', correctAnswer: 'vivid imagination', complexity: 60},
{russianWord: 'smart', correctAnswer: 'razor sharp mind', complexity: 60},
{russianWord: 'cruelly, strongly', correctAnswer: 'fiercely', complexity: 60},
{russianWord: 'quick decisions', correctAnswer: 'snap decisions', complexity: 60},
{russianWord: 'took offense', correctAnswer: 'bear a grudge', complexity: 60},
{russianWord: 'nature', correctAnswer: 'temper', complexity: 60},
{russianWord: 'sure', correctAnswer: 'confident', complexity: 60},
{russianWord: 'keep cool', correctAnswer: 'keep your temper', complexity: 60},
{russianWord: 'I like', correctAnswer: 'I am fond of', complexity: 60},
{russianWord: 'exceedingly', correctAnswer: 'supremely', complexity: 60},
{russianWord: 'hysterical', correctAnswer: 'throw a tantrum', complexity: 60},
{russianWord: 'abide, keep calm about smth', correctAnswer: 'come to terms with', complexity: 60},
{russianWord: 'to fraud smb', correctAnswer: 'deceive', complexity: 60},
{russianWord: 'to worry and suffer because of something that one did', correctAnswer: 'to stew in one`s own juices', complexity: 60},
{russianWord: 'to be in a small or tight space between two people', correctAnswer: 'to be sandwiched', complexity: 60},
{russianWord: 'make superficially attractive or acceptable', correctAnswer: 'to sugarcoat smth', complexity: 60},
{russianWord: 'a rich older man who lavishes gifts on a young woman', correctAnswer: 'sugar daddy', complexity: 60},
{russianWord: 'a position in which a person or group receives excessive and unjustified money with no effort', correctAnswer: 'to be on a gravy train', complexity: 60},
{russianWord: 'lazy person', correctAnswer: 'lazy bone / coach potato', complexity: 60},
{russianWord: 'schedule (something) to take place at a particular time', correctAnswer: 'timetable', complexity: 60},
{russianWord: 'a round stone fruit with juicy yellow flesh and downy pinkish-yellow skin', correctAnswer: 'peach', complexity: 60},
{russianWord: 'an edible soft fruit related to the blackberry, consisting of a cluster of reddish-pink drupelets', correctAnswer: 'raspberries', complexity: 60},
{russianWord: 'to become very excited or angry', correctAnswer: 'go bananas', complexity: 60},
{russianWord: 'use your brain, dummy', correctAnswer: 'to use your noodles', complexity: 60},
{russianWord: 'not what one likes or is interested in', correctAnswer: 'not my cup of tea', complexity: 60},
{russianWord: 'calm and relaxed', correctAnswer: 'as cool as a cucumber', complexity: 60},
{russianWord: 'lively; in high spirits', correctAnswer: 'full of beans', complexity: 60},
{russianWord: 'take small bites out of', correctAnswer: 'nibble', complexity: 60},
{russianWord: 'eat (something) steadily and often audibly', correctAnswer: 'munch', complexity: 60},
{russianWord: 'eat (food or prey) hungrily or quickly', correctAnswer: 'devour', complexity: 60},
{russianWord: 'eject saliva forcibly from one\'s mouth', correctAnswer: 'spit', complexity: 60},
{russianWord: 'eat very little', correctAnswer: 'eat like a bird', complexity: 60},
{russianWord: 'a poor piece of work; a mess', correctAnswer: 'dog breakfast', complexity: 60},
{russianWord: 'vulgar', correctAnswer: 'very rude', complexity: 60},
{russianWord: 'brief', correctAnswer: 'very short', complexity: 60},
{russianWord: 'dull', correctAnswer: 'very boring/stupid', complexity: 60},
{russianWord: 'superb', correctAnswer: 'very good', complexity: 60},
{russianWord: 'scalding', correctAnswer: 'very hot', complexity: 60},
{russianWord: 'freezing', correctAnswer: 'very cold', complexity: 60},
{russianWord: 'ravenous', correctAnswer: 'very hungry', complexity: 60},
{russianWord: 'sluggish', correctAnswer: 'very slow', complexity: 60},
{russianWord: 'rapid', correctAnswer: 'very fast', complexity: 60},
{russianWord: 'exhausted', correctAnswer: 'very tired', complexity: 60},
{russianWord: 'destitute', correctAnswer: 'very poor', complexity: 60},
{russianWord: 'wealthy', correctAnswer: 'very rich', complexity: 60},
{russianWord: 'drink in large gulps', correctAnswer: 'swig', complexity: 60},
{russianWord: 'drink/eat greedily', correctAnswer: 'guzzle', complexity: 60},
{russianWord: 'have a drink in a bar', correctAnswer: 'Take shot in a bar', complexity: 60},
{russianWord: 'kind of drink (напиток)', correctAnswer: 'kind of beverage', complexity: 60},
{russianWord: 'cola, sprite etc', correctAnswer: 'soft drinks/pop', complexity: 60},
{russianWord: 'a person who never drinks alcohol', correctAnswer: 'teetotaler', complexity: 60},
{russianWord: 'you do not want to eat', correctAnswer: 'be of your food', complexity: 60},
{russianWord: 'smth cannot be obtained in sufficient amounts', correctAnswer: 'shortage', complexity: 60},
{russianWord: 'make someone long for or desire something', correctAnswer: 'make my mouth water', complexity: 60},
{russianWord: 'cause or allow (liquid) to flow over the edge of its container', correctAnswer: 'spill', complexity: 60},
{russianWord: 'strong alcoholic drink', correctAnswer: 'stiff drink / hard liquor', complexity: 60},
{russianWord: 'how do you do?', correctAnswer: 'how is it rolling?', complexity: 60},
{russianWord: 'how are you?', correctAnswer: 'how are you holding up?', complexity: 60},
{russianWord: 'very busy', correctAnswer: 'have a lot on my plate', complexity: 60},
{russianWord: 'all well', correctAnswer: 'everything is on a track', complexity: 60},
{russianWord: 'deadlines drive me nut', correctAnswer: 'deadlines make me go bananas', complexity: 60},
{russianWord: 'what did you do?', correctAnswer: 'what have you been up to?', complexity: 60},
{russianWord: 'big portion[of food]', correctAnswer: 'substantial', complexity: 60},
{russianWord: 'food likely to decay or go bad quickly.', correctAnswer: 'perishable', complexity: 60},
{russianWord: 'decompose / wither', correctAnswer: 'decay', complexity: 60},
{russianWord: 'good taste/moral integrity[person]', correctAnswer: 'decent', complexity: 60},
{russianWord: 'a connoisseur of good food; a person with a discerning palate', correctAnswer: 'gourmet', complexity: 60},
{russianWord: '(meal or celebration) large and sumptuous', correctAnswer: 'slap-up meal', complexity: 60},
{russianWord: 'strong alcohol', correctAnswer: 'stiff drink', complexity: 60},
{russianWord: 'dodge', correctAnswer: 'duck out', complexity: 60},
{russianWord: 'clean / neatly', correctAnswer: 'tidy', complexity: 60},
{russianWord: 'feeling or showing a lack of ambition', correctAnswer: 'unambitious', complexity: 60},
{russianWord: 'inconsiderate and harsh to others', correctAnswer: 'unkind', complexity: 60},
{russianWord: 'thoughtlessly causing hurt or inconvenience to others', correctAnswer: 'inconsiderate', complexity: 60},
{russianWord: 'strict ', correctAnswer: 'harsh', complexity: 60},
{russianWord: 'willing to put the needs of others before one\'s own', correctAnswer: 'unselfish', complexity: 60},
{russianWord: 'not enjoying to behave sociably', correctAnswer: 'unsociable', complexity: 60},
{russianWord: 'not arranged neatly and in order', correctAnswer: 'untidy', complexity: 60},
{russianWord: 'put (things) in a neat, attractive, or required order', correctAnswer: 'arrange', complexity: 60},
{russianWord: 'not fully developed', correctAnswer: 'immature', complexity: 60},
{russianWord: 'having or showing a tendency to be quickly irritated', correctAnswer: 'impatient', complexity: 60},
{russianWord: 'person not showing a proper sense of responsibility', correctAnswer: 'irresponsible', complexity: 60},
{russianWord: 'showing or feeling no concern for others\' feelings', correctAnswer: 'insensitive', complexity: 60},
{russianWord: 'anxiety / worry', correctAnswer: 'concern', complexity: 60},
{russianWord: 'lacking in consideration for others', correctAnswer: 'thoughtlessly', complexity: 60},
{russianWord: 'careful thought, typically over a period of time', correctAnswer: 'consideration', complexity: 60},
{russianWord: 'an idea or opinion produced by thinking', correctAnswer: 'thought', complexity: 60},
{russianWord: 'luxurious / deluxe', correctAnswer: 'sumptuous', complexity: 60},
{russianWord: 'make angry or excited / cause to stop sleeping', correctAnswer: 'rouse', complexity: 60},
{russianWord: 'a noisy argument or fight / one after another without a break', correctAnswer: 'row', complexity: 60},
{russianWord: 'regarded with great fear or apprehension.', correctAnswer: 'dreaded', complexity: 60},
{russianWord: 'anxiety or fear that something bad or unpleasant will happen', correctAnswer: 'apprehension ', complexity: 60},
{russianWord: 'consider or think of in a specified way', correctAnswer: 'regarded', complexity: 60},
{russianWord: 'accept (a belief, theory, or change) willingly and enthusiastically', correctAnswer: 'embrace', complexity: 60},
{russianWord: 'an expert judge in matters of taste', correctAnswer: 'connoisseur', complexity: 60},
{russianWord: 'a person\'s ability to distinguish between and appreciate different flavours', correctAnswer: 'palate', complexity: 60},
{russianWord: 'having or showing good judgement', correctAnswer: 'discerning', complexity: 60},
{russianWord: 'bestow something in generous or extravagant quantities on', correctAnswer: 'lavish', complexity: 60},
{russianWord: 'grant/confer or present (an honour, right, or gift)', correctAnswer: 'bestow', complexity: 60},
{russianWord: 'covered with fine, soft hair or feathers', correctAnswer: 'downy', complexity: 60},
{russianWord: 'fit or suitable to be eaten', correctAnswer: 'edible', complexity: 60},
{russianWord: 'having a red tinge; slightly red', correctAnswer: 'reddish', complexity: 60},
{russianWord: 'any of the small individual drupes forming a fleshy aggregate fruit such as a blackberry or raspberry', correctAnswer: 'drupelets', complexity: 60},
{russianWord: 'colour slightly', correctAnswer: 'tinge', complexity: 60},
{russianWord: 'drupe, in botany, simple fleshy fruit that usually contains a single seed', correctAnswer: 'drupe', complexity: 60},
{russianWord: 'in a regular and even manner', correctAnswer: 'steadily ', complexity: 60},
{russianWord: 'watery liquid secreted into the mouth by glands', correctAnswer: 'saliva', complexity: 60},
{russianWord: 'An odd-eccentric or insane person', correctAnswer: 'nutbag', complexity: 60},
{russianWord: 'different to what is usual or expected; strange', correctAnswer: 'odd', complexity: 60},
{russianWord: 'having or showing no pity or compassion for others', correctAnswer: 'ruthless', complexity: 60},
{russianWord: 'a dishonest or unscrupulous person; a rogue', correctAnswer: 'scoundrel', complexity: 60},
{russianWord: '', correctAnswer: '', complexity: 60},
]
},

{
key: 2,
image: 'https://assets.gqindia.com/photos/5cdc0cd562fe407c3d83f8c4/master/pass/netflix-shows-amazon-prime-series-best-shows-on-hotstar-premium-sonlyliv1.jpg',
title: 'Series',
linkToMaterial: '',
tasks: [

]
},

{
key: 3,
image: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/10/10-Pieces-of-Movie-Artwork-Every-Fan-Must-Own.jpg',
title: 'Films',
linkToMaterial: 'https://en.wikipedia.org/wiki/Computer_programming',
tasks: [

]
},

{
key: 4,
image: 'https://i.pinimg.com/474x/b8/a5/8c/b8a58cc88ce4f5f31cdb222ef925cb6e--artist-sketchbook-sketchbook-ideas.jpg',
title: 'Books',
linkToMaterial: '',
tasks: [

]
},

{
key: 5,
image: 'https://habrastorage.org/webt/vs/pj/b8/vspjb8cc5wxheixgc52g-46yjfo.jpeg',
title: 'Internet',
linkToMaterial: '',
tasks: [

]
},

]
}

const INCREMENT_SCORE = "INCREMENT_SCORE"
const RESET_SCORE = "RESET_SCORE"

const INCREASE_COMPLEXITY = "INCREASE_COMPLEXITY"
const DECREASE_COMPLEXITY = "DECREASE_COMPLEXITY"

const INCREASE_COMPLEXITY_STEP = 30
const DECREASE_COMPLEXITY_STEP = 30

export const mainPageReducer = (state = initialState, action) => {

switch (action.type) {

case INCREASE_COMPLEXITY: {
const result = cloneDeep(state)
result.materials.map(material => {
return material.tasks.map(wordPair => {
if (wordPair.russianWord === action.key || wordPair.correctAnswer === action.key) {
const increasedResult = wordPair.complexity + INCREASE_COMPLEXITY_STEP
if (increasedResult < 100) {
wordPair.complexity = increasedResult
}
}
return wordPair
})
})
return result;
}


case DECREASE_COMPLEXITY: {
const result = cloneDeep(state)
result.materials.map(material => {
return material.tasks.map(wordPair => {
if (wordPair.russianWord === action.key || wordPair.correctAnswer === action.key) {
const decreasedResult = wordPair.complexity - DECREASE_COMPLEXITY_STEP
if (decreasedResult > 1) {
wordPair.complexity = decreasedResult
}
}
return wordPair
})
})
return result;
}

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

export const increaseComplexityActionCreator = (key) => ({type: INCREASE_COMPLEXITY, key: key})
export const decreaseComplexityActionCreator = (key) => ({type: DECREASE_COMPLEXITY, key: key})

export const incrementScoreActionCreator = () => ({type: INCREMENT_SCORE})
export const resetScoreActionCreator = () => ({type: RESET_SCORE})