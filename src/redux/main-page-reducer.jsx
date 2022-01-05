import cloneDeep from 'lodash/cloneDeep';
import books from "../resources/books.jpg";
import english from "../resources/english.jpg";
import films from "../resources/films.jpg";
import internet from "../resources/internet.jpg";
import series from "../resources/series.jpg";
import shuffle from "../resources/shuffle.jpg";

const initialState = {
    score: 0,
    materials: [
        {
            key: 0,
            image: shuffle,
            title: 'Shuffle',
            linkToMaterial: 'https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%84%D1%84%D0%BB',
            tasks: []
        },

        {
            key: 1,
            image: english,
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
                {
                    russianWord: 'to worry and suffer because of something that one did',
                    correctAnswer: 'to stew in one`s own juices',
                    complexity: 60
                },
                {
                    russianWord: 'to be in a small or tight space between two people',
                    correctAnswer: 'to be sandwiched',
                    complexity: 60
                },
                {
                    russianWord: 'make superficially attractive or acceptable',
                    correctAnswer: 'to sugarcoat smth',
                    complexity: 60
                },
                {
                    russianWord: 'a rich older man who lavishes gifts on a young woman',
                    correctAnswer: 'sugar daddy',
                    complexity: 60
                },
                {
                    russianWord: 'a position in which a person or group receives excessive and unjustified money with no effort',
                    correctAnswer: 'to be on a gravy train',
                    complexity: 60
                },
                {russianWord: 'lazy person', correctAnswer: 'lazy bone / coach potato', complexity: 60},
                {
                    russianWord: 'schedule (something) to take place at a particular time',
                    correctAnswer: 'timetable',
                    complexity: 60
                },
                {
                    russianWord: 'a round stone fruit with juicy yellow flesh and downy pinkish-yellow skin',
                    correctAnswer: 'peach',
                    complexity: 60
                },
                {
                    russianWord: 'an edible soft fruit related to the blackberry, consisting of a cluster of reddish-pink drupelets',
                    correctAnswer: 'raspberries',
                    complexity: 60
                },
                {russianWord: 'to become very excited or angry', correctAnswer: 'go bananas', complexity: 60},
                {russianWord: 'use your brain, dummy', correctAnswer: 'to use your noodles', complexity: 60},
                {
                    russianWord: 'not what one likes or is interested in',
                    correctAnswer: 'not my cup of tea',
                    complexity: 60
                },
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
                {
                    russianWord: 'smth cannot be obtained in sufficient amounts',
                    correctAnswer: 'shortage',
                    complexity: 60
                },
                {
                    russianWord: 'make someone long for or desire something',
                    correctAnswer: 'make my mouth water',
                    complexity: 60
                },
                {
                    russianWord: 'cause or allow (liquid) to flow over the edge of its container',
                    correctAnswer: 'spill',
                    complexity: 60
                },
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
                {
                    russianWord: 'a connoisseur of good food; a person with a discerning palate',
                    correctAnswer: 'gourmet',
                    complexity: 60
                },
                {
                    russianWord: '(meal or celebration) large and sumptuous',
                    correctAnswer: 'slap-up meal',
                    complexity: 60
                },
                {russianWord: 'strong alcohol', correctAnswer: 'stiff drink', complexity: 60},
                {russianWord: 'dodge', correctAnswer: 'duck out', complexity: 60},
                {russianWord: 'clean / neatly', correctAnswer: 'tidy', complexity: 60},
                {russianWord: 'feeling or showing a lack of ambition', correctAnswer: 'unambitious', complexity: 60},
                {russianWord: 'inconsiderate and harsh to others', correctAnswer: 'unkind', complexity: 60},
                {
                    russianWord: 'thoughtlessly causing hurt or inconvenience to others',
                    correctAnswer: 'inconsiderate',
                    complexity: 60
                },
                {russianWord: 'strict ', correctAnswer: 'harsh', complexity: 60},
                {
                    russianWord: 'willing to put the needs of others before one\'s own',
                    correctAnswer: 'unselfish',
                    complexity: 60
                },
                {russianWord: 'not enjoying to behave sociably', correctAnswer: 'unsociable', complexity: 60},
                {russianWord: 'not arranged neatly and in order', correctAnswer: 'untidy', complexity: 60},
                {
                    russianWord: 'put (things) in a neat, attractive, or required order',
                    correctAnswer: 'arrange',
                    complexity: 60
                },
                {russianWord: 'not fully developed', correctAnswer: 'immature', complexity: 60},
                {
                    russianWord: 'having or showing a tendency to be quickly irritated',
                    correctAnswer: 'impatient',
                    complexity: 60
                },
                {
                    russianWord: 'person not showing a proper sense of responsibility',
                    correctAnswer: 'irresponsible',
                    complexity: 60
                },
                {
                    russianWord: 'showing or feeling no concern for others\' feelings',
                    correctAnswer: 'insensitive',
                    complexity: 60
                },
                {russianWord: 'anxiety / worry', correctAnswer: 'concern', complexity: 60},
                {russianWord: 'lacking in consideration for others', correctAnswer: 'thoughtlessly', complexity: 60},
                {
                    russianWord: 'careful thought, typically over a period of time',
                    correctAnswer: 'consideration',
                    complexity: 60
                },
                {russianWord: 'an idea or opinion produced by thinking', correctAnswer: 'thought', complexity: 60},
                {russianWord: 'luxurious / deluxe', correctAnswer: 'sumptuous', complexity: 60},
                {russianWord: 'make angry or excited / cause to stop sleeping', correctAnswer: 'rouse', complexity: 60},
                {
                    russianWord: 'a noisy argument or fight / one after another without a break',
                    correctAnswer: 'row',
                    complexity: 60
                },
                {russianWord: 'regarded with great fear or apprehension.', correctAnswer: 'dreaded', complexity: 60},
                {
                    russianWord: 'anxiety or fear that something bad or unpleasant will happen',
                    correctAnswer: 'apprehension / misgiving',
                    complexity: 60
                },
                {russianWord: 'consider or think of in a specified way', correctAnswer: 'regarded', complexity: 60},
                {
                    russianWord: 'accept (a belief, theory, or change) willingly and enthusiastically',
                    correctAnswer: 'embrace',
                    complexity: 60
                },
                {russianWord: 'an expert judge in matters of taste', correctAnswer: 'connoisseur', complexity: 60},
                {
                    russianWord: 'a person\'s ability to distinguish between and appreciate different flavours',
                    correctAnswer: 'palate',
                    complexity: 60
                },
                {russianWord: 'having or showing good judgement', correctAnswer: 'discerning', complexity: 60},
                {
                    russianWord: 'bestow something in generous or extravagant quantities on',
                    correctAnswer: 'lavish',
                    complexity: 60
                },
                {
                    russianWord: 'grant/confer or present (an honour, right, or gift)',
                    correctAnswer: 'bestow',
                    complexity: 60
                },
                {russianWord: 'covered with fine, soft hair or feathers', correctAnswer: 'downy', complexity: 60},
                {russianWord: 'fit or suitable to be eaten', correctAnswer: 'edible', complexity: 60},
                {russianWord: 'having a red tinge; slightly red', correctAnswer: 'reddish', complexity: 60},
                {
                    russianWord: 'any of the small individual drupes forming a fleshy aggregate fruit such as a blackberry or raspberry',
                    correctAnswer: 'drupelets',
                    complexity: 60
                },
                {russianWord: 'colour slightly', correctAnswer: 'tinge', complexity: 60},
                {
                    russianWord: 'simple fleshy fruit that usually contains a single seed',
                    correctAnswer: 'drupe',
                    complexity: 60
                },
                {russianWord: 'in a regular and even manner', correctAnswer: 'steadily ', complexity: 60},
                {
                    russianWord: 'watery liquid secreted into the mouth by glands',
                    correctAnswer: 'saliva',
                    complexity: 60
                },
                {russianWord: 'An odd-eccentric or insane person', correctAnswer: 'nutbag', complexity: 60},
                {russianWord: 'different to what is usual or expected; strange', correctAnswer: 'odd', complexity: 60},
                {
                    russianWord: 'having or showing no pity or compassion for others',
                    correctAnswer: 'ruthless',
                    complexity: 60
                },
                {
                    russianWord: 'a dishonest or unscrupulous person; a rogue',
                    correctAnswer: 'scoundrel',
                    complexity: 60
                },

                // family topic
                {russianWord: 'easy going', correctAnswer: 'friendly', complexity: 60},
                {russianWord: 'bossy', correctAnswer: 'fond of giving people orders; domineering', complexity: 60},
                {russianWord: 'moody', correctAnswer: '(of a person) given to unpredictable changes of mood, especially sudden bouts of gloominess or sullenness.', complexity: 60},
                {russianWord: 'competitive', correctAnswer: 'relating to or characterized by competition', complexity: 60},
                {russianWord: 'mean', correctAnswer: 'being unkind to another person', complexity: 60},
                {russianWord: 'close-knit family', correctAnswer: 'bound together by intimate social or cultural ties or by close economic or political ties', complexity: 60},
                {russianWord: 'nuclear family', correctAnswer: 'a couple and their dependent children, regarded as a basic social unit', complexity: 60},
                {russianWord: 'estranged husband', correctAnswer: 'a husband who no longer lives with his wife', complexity: 60},
                {russianWord: 'deprived home', correctAnswer: 'lacking important things like food and water', complexity: 60},
                {russianWord: 'spinster', correctAnswer: 'confirmed bachelor [woman]', complexity: 60},
                {russianWord: 'custody', correctAnswer: 'the protective care or guardianship of someone or something / imprisonment', complexity: 60},
                {russianWord: 'provide for family', correctAnswer: 'earn money for family', complexity: 60},
                {russianWord: 'distant relatives', correctAnswer: 'relative who is not closely related to you', complexity: 60},
                {russianWord: 'dysfunctional family', correctAnswer: 'family is characterized by “conflict, misbehavior, or abuse” ', complexity: 60},
                {russianWord: 'late wife', correctAnswer: 'wife has passed away', complexity: 60},
                {russianWord: 'set up home', correctAnswer: 'start a family', complexity: 60},
                {russianWord: 'expect a baby', correctAnswer: 'pregnant woman', complexity: 60},
                {russianWord: 'baby due to come', correctAnswer: 'baby will born', complexity: 60},
                {russianWord: 'bring up a child', correctAnswer: 'raise a child', complexity: 60},
                {russianWord: 'collocation', correctAnswer: 'habitual juxtaposition of a particular word with another word', complexity: 60},
                {russianWord: 'bout', correctAnswer: 'a short period of intense activity of a specified kind', complexity: 60},
                {russianWord: 'gloominess ', correctAnswer: 'a feeling of melancholy apprehension', complexity: 60},
                {russianWord: 'sullenness', correctAnswer: 'showing irritation or ill humor by a gloomy silence or reserve', complexity: 60},
                {russianWord: 'intimate', correctAnswer: 'private and personal / closely acquainted; familiar', complexity: 60},
                {russianWord: 'acquaint', correctAnswer: 'make someone aware of or familiar with', complexity: 60},
                {russianWord: 'bitter', correctAnswer: 'having a sharp, pungent taste or smell; not sweet', complexity: 60},
                {russianWord: 'acrimonious', correctAnswer: '(typically of speech or discussion) angry and bitter', complexity: 60},
                {russianWord: 'juxtaposition', correctAnswer: 'the fact of two things being seen or placed close together with contrasting effect', complexity: 60},
                {russianWord: 'make friends', correctAnswer: 'establish a relationship or relationships based on mutual affection', complexity: 60},
                {russianWord: 'strike up a friendship', correctAnswer: 'start a friendship', complexity: 60},
                {russianWord: 'mutual', correctAnswer: '(of a feeling or action) experienced or done by each of two or more parties towards the other or others', complexity: 60},
                {russianWord: 'casual acquaintances', correctAnswer: 'someone you know a little', complexity: 60},
                {russianWord: 'keep in contact', correctAnswer: 'to maintain (close) contact (with someone)', complexity: 60},
                {russianWord: 'affair', correctAnswer: 'a sexual relationship between two people, one or both of whom are married to someone else', complexity: 60},
                // describe peoples
                {russianWord: 'fishy', correctAnswer: 'arousing feelings of doubt or suspicion', complexity: 60},
                {russianWord: 'something fishy going on', correctAnswer: 'smth suspicion going on', complexity: 60},
                {russianWord: 'backstabber / snake', correctAnswer: 'one who betrays a trust or an allegiance', complexity: 60},
                {russianWord: 'allegiance', correctAnswer: 'loyalty or commitment to a superior or to a group or cause', complexity: 60},
                {russianWord: 'sheepish', correctAnswer: 'showing or feeling embarrassment from shame or a lack of self-confidence', complexity: 60},
                {russianWord: 'do you have a beef with me', correctAnswer: 'outstanding or unsettled dispute or disagreement with someone', complexity: 60},
                {russianWord: 'squirrelly', correctAnswer: 'restless, nervous, or unpredictable', complexity: 60},
                {russianWord: 'asinine / donkey', correctAnswer: 'stupid', complexity: 60},
                {russianWord: 'take instant dislike', correctAnswer: 'do not like smb', complexity: 60},
                {russianWord: 'tough', correctAnswer: 'able to endure hardship or pain / a rough and violent man', complexity: 60},
                {russianWord: 'inevitable', correctAnswer: 'certain to happen; unavoidable', complexity: 60},
                {russianWord: 'put a strain', correctAnswer: 'place an undue or overwhelming burden on someone\'s or something\'s resources or ability to cope', complexity: 60},
                {russianWord: 'stick up', correctAnswer: 'staying aloof from others because one thinks one is superior', complexity: 60},
                {russianWord: 'settle down', correctAnswer: 'become quiet, calm', complexity: 60},
                {russianWord: 'burden', correctAnswer: 'a load, typically a heavy one', complexity: 60},
                {russianWord: 'cope', correctAnswer: '(of a person) deal effectively with something difficult', complexity: 60},
                {russianWord: 'undue', correctAnswer: 'unwarranted or inappropriate because excessive or disproportionate', complexity: 60},
                {russianWord: 'strain', correctAnswer: 'a force tending to pull or stretch something to an extreme or damaging degree', complexity: 60},
                {russianWord: 'to stick up for smb', correctAnswer: 'to support someone or something', complexity: 60},
                {russianWord: 'aloof', correctAnswer: 'not friendly or forthcoming; cool and distant', complexity: 60},
                {russianWord: 'whoop', correctAnswer: 'a loud cry of joy or excitement', complexity: 60},
                {russianWord: 'ruck', correctAnswer: 'a tightly packed crowd of people', complexity: 60},
                {russianWord: 'muck', correctAnswer: 'dirt, rubbish, or waste matter', complexity: 60},
                {russianWord: 'ruck the muck', correctAnswer: 'remove dirt / make clean', complexity: 60},
                {russianWord: 'phony', correctAnswer: 'having a misleading appearance', complexity: 60},
                {russianWord: 'pass the torch', correctAnswer: 'to give one\'s job, duties, etc', complexity: 60},
                {russianWord: 'hinge on it ', correctAnswer: 'to be determined or decided by (something)', complexity: 60},
                {russianWord: 'rotten', correctAnswer: 'suffering from decay / very bad', complexity: 60},
                {russianWord: 'look up', correctAnswer: '(of a situation) improve / search for and find a piece of information in a book or database', complexity: 60},
                {russianWord: 'reluctant', correctAnswer: 'unwilling and hesitant; disinclined', complexity: 60},
                {russianWord: 'fault', correctAnswer: 'responsibility for an accident or misfortune', complexity: 60},
                {russianWord: 'screw up', correctAnswer: 'cause something to fail or go wrong', complexity: 60},
                {russianWord: 'culprit', correctAnswer: 'a person who is responsible for a crime or other misdeed', complexity: 60},
                {russianWord: 'chatterbox', correctAnswer: 'one who engages in much idle talk / talkative', complexity: 60},
                {russianWord: 'idle', correctAnswer: '(of a person) avoiding work; lazy / without purpose or effect; pointless', complexity: 60},
                {russianWord: 'make up your mind', correctAnswer: 'make a decision; decide', complexity: 60},
                {russianWord: 'make of somebody', correctAnswer: 'understand a person or thing\'s meaning or character', complexity: 60},
                {russianWord: 'come across', correctAnswer: '(of a person) appear or sound in a specified way; give a specified impression', complexity: 60},
                {russianWord: 'timid', correctAnswer: '(neutral) a person who is nervous and shy', complexity: 60},
                {russianWord: 'come across', correctAnswer: 'give a specified impression', complexity: 60},
                {russianWord: 'conscientious [коншиеншес]', correctAnswer: 'wishing to do one\'s work or duty well and thoroughly', complexity: 60},
                {russianWord: 'take to someone', correctAnswer: 'you like someone, especially after knowing someone for only a short time', complexity: 60},
                {russianWord: 'strike someone as confident', correctAnswer: 'make someone have particular opinion or feeling [impress as confident]', complexity: 60},
                {russianWord: 'envy', correctAnswer: 'a feeling of discontented or resentful longing aroused by someone else\'s possessions, qualities, or luck', complexity: 60},
                {russianWord: 'coward', correctAnswer: 'a person who is contemptibly lacking in the courage to do or endure dangerous or unpleasant things', complexity: 60},
                {russianWord: 'cupboard', correctAnswer: 'a recess or piece of furniture with a door and typically shelves, used for storage', complexity: 60},
                {russianWord: 'discontented', correctAnswer: 'dissatisfied, especially with one\'s circumstances', complexity: 60},
                // idioms
                {russianWord: 'be at loggerheads', correctAnswer: 'disagree strongly with each other', complexity: 60},
                {russianWord: 'be at cross-purposes', correctAnswer: 'not understand each other because they are trying to say different things', complexity: 60},
                {russianWord: 'have it in for someone', correctAnswer: 'be determined to criticise or harm someone', complexity: 60},
                {russianWord: 'have it out with someone', correctAnswer: 'talk to someone about something they have done in order to solve the problem', complexity: 60},
                {russianWord: 'rub someone up the wrong way', correctAnswer: 'irritate someone', complexity: 60},
                {russianWord: 'two-time someone', correctAnswer: 'have a romantic or sexual relationship with 2 people at the same time', complexity: 60},
                {russianWord: 'keep someone/smth at bay ', correctAnswer: 'prevent smone/smth from coming near or harming you', complexity: 60},
                {russianWord: 'keep yourself to yourself', correctAnswer: 'prefer to be on your own and avoid talking with other people', complexity: 60},
                {russianWord: 'be in someone\`s good books` ', correctAnswer: 'some person is pleased with you', complexity: 60},
                {russianWord: 'get on like a house on fire', correctAnswer: 'get an extremely well with someone', complexity: 60},
                {russianWord: 'make it up to someone', correctAnswer: 'do smth good for someone after you did smth bad in past / compensate', complexity: 60},
                {russianWord: 'take a shine to', correctAnswer: 'to like someone immediately [informal]', complexity: 60},
                {russianWord: 'have a soft spot for', correctAnswer: 'feel a lot of affection for one particular person', complexity: 60},
                {russianWord: 'affection', correctAnswer: 'a gentle feeling of fondness or liking', complexity: 60},
                {russianWord: 'chimney', correctAnswer: 'a vertical channel or pipe which conducts smoke and combustion gases up from a fire', complexity: 60},
                {russianWord: 'roast', correctAnswer: 'cook (food, especially meat) by prolonged exposure to heat in an oven or over a fire', complexity: 60},
                {russianWord: 'mayhem', correctAnswer: 'violent or extreme disorder; chaos', complexity: 60},
                {russianWord: 'grumpy', correctAnswer: 'bad-tempered and irritable', complexity: 60},
                {russianWord: 'penny-pinching', correctAnswer: 'unwilling to spend money; miserly', complexity: 60},
                {russianWord: 'loath', correctAnswer: 'reluctant; unwilling', complexity: 60},
                {russianWord: 'guinea pig', correctAnswer: 'a person or thing used as a subject for experiment', complexity: 60},
                {russianWord: 'admission', correctAnswer: 'a statement acknowledging the truth of something', complexity: 60},
                // money
                {russianWord: 'borrow', correctAnswer: 'take and use (something belonging to someone else) with the intention of returning it', complexity: 60},
                {russianWord: 'lend', correctAnswer: 'grant to (someone) the use of (something) on the understanding that it will be returned', complexity: 60},
                {russianWord: 'owe / get into debt', correctAnswer: 'have an obligation to pay or repay (something, especially money) in return for something received', complexity: 60},
                {russianWord: 'charge [for]', correctAnswer: 'a price asked for goods or services', complexity: 60},
                {russianWord: 'stink', correctAnswer: 'have a strong unpleasant smell', complexity: 60},
                {russianWord: 'put some money aside', correctAnswer: 'to save or keep (something, such as money) to be used at a later time', complexity: 60},
                {russianWord: 'to be worth about', correctAnswer: 'equivalent in value to the sum or item specified', complexity: 60},
                {russianWord: 'get into debt [дэт] whole', correctAnswer: 'to come to be in a position of owing money to someone', complexity: 60},
                {russianWord: 'mortgage [могич]', correctAnswer: 'a legal agreement by which a bank, building society, etc. lends money at interest in exchange for taking title of the debtor\'s property', complexity: 60},
                {russianWord: 'spend money on smth', correctAnswer: 'to pay out for', complexity: 60},
                {russianWord: 'to cost a fortune', correctAnswer: 'to cost a lot of money', complexity: 60},
                {russianWord: '', correctAnswer: '', complexity: 60},
                {russianWord: '', correctAnswer: '', complexity: 60},
            ]
        },

        {
            key: 2,
            image: series,
            title: 'Series',
            linkToMaterial: '',
            tasks: [
                // Cowboy Bebop 2021
                {russianWord: 'team up', correctAnswer: 'to join with someone to work together', complexity: 60},
                {
                    russianWord: 'tie',
                    correctAnswer: 'a piece of string, cord, or similar used for fastening or tying something',
                    complexity: 60
                },
                {russianWord: 'fastening', correctAnswer: 'a device that closes or secures something', complexity: 60},
                {
                    russianWord: 'cord',
                    correctAnswer: 'thin, flexible string or rope made from several twisted strands',
                    complexity: 60
                },
                {
                    russianWord: 'string',
                    correctAnswer: 'material consisting of threads of cotton, hemp, or other material twisted together to form a thin length.',
                    complexity: 60
                },
                {
                    russianWord: 'hemp',
                    correctAnswer: 'the cannabis plant, especially when grown for fibre',
                    complexity: 60
                },
                {
                    russianWord: 'thin',
                    correctAnswer: 'with opposite surfaces or sides that are close or relatively close together',
                    complexity: 60
                },
                {russianWord: 'nab', correctAnswer: 'catch (someone) doing something wrong', complexity: 60},
                {
                    russianWord: 'contempt',
                    correctAnswer: 'the feeling that a person or a thing is worthless or beneath consideration',
                    complexity: 60
                },
                {russianWord: 'chump', correctAnswer: 'a foolish or easily deceived person', complexity: 60},
                {
                    russianWord: 'chump change',
                    correctAnswer: 'a small or insignificant amount of money',
                    complexity: 60
                },
                {
                    russianWord: 'chop',
                    correctAnswer: 'cut (something) into pieces with repeated sharp blows of an axe or knife',
                    complexity: 60
                },
                {
                    russianWord: 'mole',
                    correctAnswer: 'a small burrowing mammal with dark velvety fur, a long muzzle, and very small eyes',
                    complexity: 60
                },
                {
                    russianWord: 'burrow',
                    correctAnswer: '(of an animal) make a hole or tunnel, typically for use as a dwelling',
                    complexity: 60
                },
                {russianWord: 'dwelling', correctAnswer: 'a house, flat, or other place of residence', complexity: 60},
                {russianWord: 'nickel and dime', correctAnswer: 'unimportant / insignificant', complexity: 60},
                {
                    russianWord: 'mercenary',
                    correctAnswer: 'primarily concerned with making money at the expense of ethics',
                    complexity: 60
                },
                {russianWord: 'vile', correctAnswer: 'morally bad; wicked', complexity: 60},
                {
                    russianWord: 'moniker',
                    correctAnswer: 'a person\'s name, especially a nickname or alias',
                    complexity: 60
                },
                {
                    russianWord: 'loofah',
                    correctAnswer: 'the fibrous interior of a fruit that resembles a marrow, dried and used as a sponge for washing the body',
                    complexity: 60
                },
                {russianWord: 'duct tape', correctAnswer: 'strong cloth-backed waterproof adhesive tape', complexity: 60},
                {russianWord: 'tape', correctAnswer: 'a narrow strip of material, typically used to hold or fasten something.', complexity: 60},
                {russianWord: 'adhesive', correctAnswer: 'a substance used for sticking objects or materials together; glue', complexity: 60},
                {russianWord: 'wrench', correctAnswer: 'adjustable metal tool used for tightening or loosening metal nuts of different sizes. ', complexity: 60},
                {russianWord: 'ham', correctAnswer: 'salted or smoked meat from the upper part of a pig\'s leg', complexity: 60},
                {russianWord: 'rustle up', correctAnswer: 'to make, find, or prepare something quickly', complexity: 60},
                {russianWord: 'scam', correctAnswer: 'a dishonest scheme; a fraud', complexity: 60},
                {russianWord: 'pipe dream', correctAnswer: 'an unattainable or fanciful hope or scheme', complexity: 60},
                {russianWord: 'hustle', correctAnswer: 'a state of great activity', complexity: 60},
                {russianWord: 'interstellar', correctAnswer: 'occurring or situated between stars', complexity: 60},
                {russianWord: 'kink', correctAnswer: 'a sharp twist or curve in something that is otherwise straight', complexity: 60},
                {russianWord: 'recital', correctAnswer: 'a performance of a programme of music', complexity: 60},
                {russianWord: 'be on the lam ', correctAnswer: 'running away / in escape status.', complexity: 60},
                {russianWord: 'lewd', correctAnswer: 'crude and offensive in a sexual way', complexity: 60},
                {russianWord: 'vagary', correctAnswer: 'an unexpected and inexplicable change in a situation or in someone\'s behaviour', complexity: 60},
                {russianWord: 'minutiae', correctAnswer: 'the small, precise, or trivial details of something', complexity: 60},
                // Witcher
                {russianWord: 'lodgings', correctAnswer: 'temporary accommodation', complexity: 60},
                {russianWord: 'keep low profile', correctAnswer: 'stay out of public notice, avoid attracting attention to oneself', complexity: 60},
                {russianWord: 'bliss', correctAnswer: 'perfect happiness; great joy', complexity: 60},
                {russianWord: 'chap', correctAnswer: 'guy or a fellow — a boy or man who\'s a friend, acquaintance, or a friendly stranger', complexity: 60},
                {russianWord: 'lame', correctAnswer: '(especially of an animal) unable to walk without difficulty as the result of an injury', complexity: 60},
                {russianWord: 'redeem', correctAnswer: 'compensate for the faults or bad aspects of', complexity: 60},
                {russianWord: 'den', correctAnswer: 'a wild mammal\'s hidden home; a lair', complexity: 60},
                {russianWord: 'codger', correctAnswer: 'a man, esp an old or eccentric one', complexity: 60},
                {russianWord: 'beg', correctAnswer: 'ask someone earnestly or humbly for something', complexity: 60},
                {russianWord: 'hesitation', correctAnswer: 'the action of pausing before saying or doing something', complexity: 60},
                {russianWord: 'lurk', correctAnswer: 'be or remain hidden so as to wait in ambush for someone or something', complexity: 60},
                {russianWord: 'ambush', correctAnswer: 'a surprise attack by people lying in wait in a concealed position', complexity: 60},
                {russianWord: 'concealed', correctAnswer: 'kept secret; hidden', complexity: 60},
                {russianWord: 'hatred', correctAnswer: 'intense dislike; hate', complexity: 60},
                {russianWord: 'conduit', correctAnswer: 'a channel for conveying water or other fluid', complexity: 60},
                {russianWord: 'gossip', correctAnswer: 'casual conversation about other people, typically involving details that are not confirmed as being true', complexity: 60},
                {russianWord: 'flee', correctAnswer: 'run away from a place or situation of danger', complexity: 60},
                {russianWord: '', correctAnswer: '', complexity: 60},
                {russianWord: '', correctAnswer: '', complexity: 60},
                {russianWord: '', correctAnswer: '', complexity: 60},
                {russianWord: '', correctAnswer: '', complexity: 60},
            ]
        },

        {
            key: 3,
            image: films,
            title: 'Films',
            linkToMaterial: 'https://en.wikipedia.org/wiki/Computer_programming',
            tasks: [
                // Don't Look Up 2021
                {russianWord: 'inquiry', correctAnswer: 'an act of asking for information', complexity: 60},
                {russianWord: 'tenured professor', correctAnswer: 'with permanent job contract', complexity: 60},
                {russianWord: 'heavy hitter', correctAnswer: 'a very important or influential person', complexity: 60},
                {russianWord: 'gesture', correctAnswer: 'a movement of part of the body, especially a hand or the head, to express an idea or meaning', complexity: 60},
                {russianWord: 'soothe', correctAnswer: 'gently calm (a person or their feelings)', complexity: 60},
                {russianWord: 'fruition', correctAnswer: 'the realization or fulfilment of a plan or project', complexity: 60},
                {russianWord: 'relieved', correctAnswer: 'no longer feeling distressed or anxious; reassured', complexity: 60},
                // Red notice 2021
                {russianWord: 'sought after', correctAnswer: 'much in demand; generally desired', complexity: 60},
                {russianWord: 'bejewel', correctAnswer: 'cover or adorn with jewels', complexity: 60},
                {russianWord: 'adorn', correctAnswer: 'make more beautiful or attractive', complexity: 60},
                {russianWord: 'chaps', correctAnswer: 'leather trousers without a seat, worn by a cowboy over ordinary trousers to protect the legs', complexity: 60},
                {russianWord: 'ingress', correctAnswer: 'the action or fact of going in or entering; the capacity or right of entrance', complexity: 60},
                {russianWord: 'compel', correctAnswer: 'force or oblige (someone) to do something', complexity: 60},
                {russianWord: 'kinks', correctAnswer: 'a mental or physical peculiarity : eccentricity, quirk', complexity: 60},
                {russianWord: 'peculiarity', correctAnswer: 'a strange or unusual feature or habit', complexity: 60},
                {russianWord: 'quirk', correctAnswer: 'a peculiar aspect of a person\'s character or behaviour', complexity: 60},
                {russianWord: 'sparkly', correctAnswer: 'shining with glittering flashes of light / bright', complexity: 60},
                {russianWord: 'convict', correctAnswer: 'someone to be guilty of a criminal offence by the verdict of a jury or the decision of a judge in a court of law', complexity: 60},
                // Die hard 1988
                {russianWord: 'tape deck', correctAnswer: 'a device used to play back and often to record on magnetic tape that usually has to be connected to an audio system', complexity: 60},
                {russianWord: 'as tough as nails', correctAnswer: '(of a person) very strong and resilient in the face of hardship or pain', complexity: 60},
                {russianWord: 'conceivable', correctAnswer: 'capable of being imagined or grasped mentally', complexity: 60},
                {russianWord: 'to be in charge', correctAnswer: 'having control of or responsibility for (something)', complexity: 60},
                {russianWord: '', correctAnswer: '', complexity: 60},

            ]
        },

//         {
//             key: 4,
//             image: books,
//             title: 'Books',
//             linkToMaterial: '',
//             tasks: []
//         },
//
//         {
//             key: 5,
//             image: internet,
//             title: 'Internet',
//             linkToMaterial: '',
//             tasks: []
//         },

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