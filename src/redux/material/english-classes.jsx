const englishClasses = [
  {russianWord:   'selfish behavior',
   correctAnswer: 'selfish streak'
  },
  {russianWord:   'bright imagination',
   correctAnswer: 'vivid imagination'
  },
  {russianWord:   'smart',
   correctAnswer: 'razor sharp mind'
  },
  {russianWord:   'cruelly, strongly',
   correctAnswer: 'fiercely'
  },
  {russianWord:   'quick decisions',
   correctAnswer: 'snap decisions'
  },
  {russianWord:   'took offense',
   correctAnswer: 'bear a grudge'
  },
  {russianWord:   'nature',
   correctAnswer: 'temper'
  },
  {russianWord:   'sure',
   correctAnswer: 'confident'
  },
  {russianWord:   'keep cool',
   correctAnswer: 'keep your temper'
  },
  {russianWord:   'I like',
   correctAnswer: 'I am fond of'
  },
  {russianWord:   'exceedingly',
   correctAnswer: 'supremely'
  },
  {russianWord:   'hysterical',
   correctAnswer: 'throw a tantrum'
  },
  {russianWord:   'abide, keep calm about smth',
   correctAnswer: 'come to terms with'
  },
  {russianWord:   'to fraud smb',
   correctAnswer: 'deceive'
  },
  {russianWord:   'to worry and suffer because of something that one did',
   correctAnswer: 'to stew in one`s own juices'
  },
  {russianWord:   'to be in a small or tight space between two people',
   correctAnswer: 'to be sandwiched'
  },
  {russianWord:   'make superficially attractive or acceptable',
   correctAnswer: 'to sugarcoat smth'
  },
  {russianWord:   'a rich older man who lavishes gifts on a young woman',
   correctAnswer: 'sugar daddy'
  },
  {russianWord:   'a position in which a person or group receives excessive and unjustified money with no effort',
   correctAnswer: 'to be on a gravy train'
  },
  {russianWord:   'lazy person',
   correctAnswer: 'lazy bone / coach potato'
  },
  {russianWord:   'schedule (something) to take place at a particular time',
   correctAnswer: 'timetable'
  },
  {russianWord:   'a round stone fruit with juicy yellow flesh and downy pinkish-yellow skin',
   correctAnswer: 'peach'
  },
  {russianWord:   'an edible soft fruit related to the blackberry, consisting of a cluster of reddish-pink drupelets',
   correctAnswer: 'raspberries'
  },
  {russianWord:   'to become very excited or angry',
   correctAnswer: 'go bananas'
  },
  {russianWord:   'use your brain, dummy',
   correctAnswer: 'to use your noodles'
  },
  {russianWord:   'not what one likes or is interested in',
   correctAnswer: 'not my cup of tea'
  },
  {russianWord:   'calm and relaxed',
   correctAnswer: 'as cool as a cucumber'
  },
  {russianWord:   'lively; in high spirits',
   correctAnswer: 'full of beans'
  },
  {russianWord:   'take small bites out of',
   correctAnswer: 'nibble'
  },
  {russianWord:   'eat (something) steadily and often audibly',
   correctAnswer: 'munch'
  },
  {russianWord:   'eat (food or prey) hungrily or quickly',
   correctAnswer: 'devour'
  },
  {russianWord:   'eject saliva forcibly from one\'s mouth',
   correctAnswer: 'spit'
  },
  {russianWord:   'eat very little',
   correctAnswer: 'eat like a bird'
  },
  {russianWord:   'a poor piece of work; a mess',
   correctAnswer: 'dog breakfast'
  },
  {russianWord:   'vulgar',
   correctAnswer: 'very rude'
  },
  {russianWord:   'brief',
   correctAnswer: 'very short'
  },
  {russianWord:   'dull',
   correctAnswer: 'very boring/stupid'
  },
  {russianWord:   'superb',
   correctAnswer: 'very good'
  },
  {russianWord:   'scalding',
   correctAnswer: 'very hot'
  },
  {russianWord:   'freezing',
   correctAnswer: 'very cold'
  },
  {russianWord:   'ravenous',
   correctAnswer: 'very hungry'
  },
  {russianWord:   'sluggish',
   correctAnswer: 'very slow'
  },
  {russianWord:   'rapid',
   correctAnswer: 'very fast'
  },
  {russianWord:   'exhausted',
   correctAnswer: 'very tired'
  },
  {russianWord:   'destitute',
   correctAnswer: 'very poor'
  },
  {russianWord:   'wealthy / well off',
   correctAnswer: 'very rich'
  },
  {russianWord:   'drink in large gulps',
   correctAnswer: 'swig'
  },
  {russianWord:   'drink/eat greedily',
   correctAnswer: 'guzzle'
  },
  {russianWord:   'have a drink in a bar',
   correctAnswer: 'Take shot in a bar'
  },
  {russianWord:   'kind of drink (напиток)',
   correctAnswer: 'kind of beverage'
  },
  {russianWord:   'cola, sprite etc',
   correctAnswer: 'soft drinks/pop'
  },
  {russianWord:   'a person who never drinks alcohol',
   correctAnswer: 'teetotaler'
  },
  {russianWord:   'you do not want to eat',
   correctAnswer: 'be of your food'
  },
  {russianWord:   'shortage / shortfall',
   correctAnswer: 'smth cannot be obtained in sufficient amounts'
  },
  {russianWord:   'make someone long for or desire something',
   correctAnswer: 'make my mouth water'
  },
  {russianWord:   'cause or allow (liquid) to flow over the edge of its container',
   correctAnswer: 'spill'
  },
  {russianWord:   'strong alcoholic drink',
   correctAnswer: 'stiff drink / hard liquor'
  },
  {russianWord:   'how do you do?',
   correctAnswer: 'how is it rolling?'
  },
  {russianWord:   'how are you?',
   correctAnswer: 'how are you holding up?'
  },
  {russianWord:   'very busy',
   correctAnswer: 'have a lot on my plate'
  },
  {russianWord:   'all well',
   correctAnswer: 'everything is on a track'
  },
  {russianWord:   'deadlines drive me nut',
   correctAnswer: 'deadlines make me go bananas'
  },
  {russianWord:   'what did you do?',
   correctAnswer: 'what have you been up to?'
  },
  {russianWord:   'big portion[of food]',
   correctAnswer: 'substantial'
  },
  {russianWord:   'food likely to decay or go bad quickly.',
   correctAnswer: 'perishable'
  },
  {russianWord:   'decompose / wither',
   correctAnswer: 'decay'
  },
  {russianWord:   'good taste/moral integrity[person]',
   correctAnswer: 'decent'
  },
  {russianWord:   'a connoisseur of good food; a person with a discerning palate',
   correctAnswer: 'gourmet'
  },
  {russianWord:   '(meal or celebration) large and sumptuous',
   correctAnswer: 'slap-up meal'
  },
  {russianWord:   'strong alcohol',
   correctAnswer: 'stiff drink'
  },
  {russianWord:   'dodge',
   correctAnswer: 'duck out'
  },
  {russianWord:   'clean / neatly',
   correctAnswer: 'tidy'
  },
  {russianWord:   'feeling or showing a lack of ambition',
   correctAnswer: 'unambitious'
  },
  {russianWord:   'inconsiderate and harsh to others',
   correctAnswer: 'unkind'
  },
  {russianWord:   'thoughtlessly causing hurt or inconvenience to others',
   correctAnswer: 'inconsiderate'
  },
  {russianWord:   'strict ',
   correctAnswer: 'harsh'
  },
  {russianWord:   'willing to put the needs of others before one\'s own',
   correctAnswer: 'unselfish'
  },
  {russianWord:   'not enjoying to behave sociably',
   correctAnswer: 'unsociable'
  },
  {russianWord:   'not arranged neatly and in order',
   correctAnswer: 'untidy'
  },
  {russianWord:   'put (things) in a neat, attractive, or required order',
   correctAnswer: 'arrange'
  },
  {russianWord:   'not fully developed',
   correctAnswer: 'immature'
  },
  {russianWord:   'having or showing a tendency to be quickly irritated',
   correctAnswer: 'impatient'
  },
  {russianWord:   'person not showing a proper sense of responsibility',
   correctAnswer: 'irresponsible'
  },
  {russianWord:   'showing or feeling no concern for others\' feelings',
   correctAnswer: 'insensitive'
  },
  {russianWord:   'anxiety / worry',
   correctAnswer: 'concern'
  },
  {russianWord:   'lacking in consideration for others',
   correctAnswer: 'thoughtlessly'
  },
  {russianWord:   'careful thought, typically over a period of time',
   correctAnswer: 'consideration'
  },
  {russianWord:   'an idea or opinion produced by thinking',
   correctAnswer: 'thought'
  },
  {russianWord:   'luxurious / deluxe',
   correctAnswer: 'sumptuous'
  },
  {russianWord:   'make angry or excited / cause to stop sleeping',
   correctAnswer: 'rouse'
  },
  {russianWord:   'a noisy argument or fight / one after another without a break',
   correctAnswer: 'row'
  },
  {russianWord:   'regarded with great fear or apprehension.',
   correctAnswer: 'dreaded'
  },
  {russianWord:   'anxiety or fear that something bad or unpleasant will happen',
   correctAnswer: 'apprehension / misgiving'
  },
  {russianWord:   'consider or think of in a specified way',
   correctAnswer: 'regarded'
  },
  {russianWord:   'accept (a belief, theory, or change) willingly and enthusiastically',
   correctAnswer: 'embrace'
  },
  {russianWord:   'an expert judge in matters of taste',
   correctAnswer: 'connoisseur [конесэ]'
  },
  {russianWord:   'a person\'s ability to distinguish between and appreciate different flavours',
   correctAnswer: 'palate'
  },
  {russianWord:   'having or showing good judgement',
   correctAnswer: 'discerning'
  },
  {russianWord:   'bestow something in generous or extravagant quantities on',
   correctAnswer: 'lavish'
  },
  {russianWord:   'grant/confer or present (an honour, right, or gift)',
   correctAnswer: 'bestow'
  },
  {russianWord:   'covered with fine, soft hair or feathers',
   correctAnswer: 'downy'
  },
  {russianWord:   'fit or suitable to be eaten',
   correctAnswer: 'edible'
  },
  {russianWord:   'having a red tinge; slightly red',
   correctAnswer: 'reddish'
  },
  {russianWord:   'any of the small individual drupes forming a fleshy aggregate fruit such as a blackberry or raspberry',
   correctAnswer: 'drupelets'
  },
  {russianWord:   'colour slightly',
   correctAnswer: 'tinge'
  },
  {russianWord:   'simple fleshy fruit that usually contains a single seed',
   correctAnswer: 'drupe'
  },
  {russianWord:   'in a regular and even manner',
   correctAnswer: 'steadily '
  },
  {russianWord:   'watery liquid secreted into the mouth by glands',
   correctAnswer: 'saliva'
  },
  {russianWord:   'An odd-eccentric or insane person',
   correctAnswer: 'nutbag'
  },
  {russianWord:   'different to what is usual or expected; strange',
   correctAnswer: 'odd'
  },
  {russianWord:   'having or showing no pity or compassion for others',
   correctAnswer: 'ruthless'
  },
  {russianWord:   'a dishonest or unscrupulous person; a rogue',
   correctAnswer: 'scoundrel'
  },
  //////////////////
  // Family topic //
  //////////////////
  {russianWord:   'easy going',
   correctAnswer: 'friendly'
  },
  {russianWord:   'bossy',
   correctAnswer: 'fond of giving people orders; domineering'
  },
  {russianWord:   'moody',
   correctAnswer: '(of a person) given to unpredictable changes of mood, especially sudden bouts of gloominess or sullenness.'
  },
  {russianWord:   'competitive',
   correctAnswer: 'relating to or characterized by competition'
  },
  {russianWord:   'mean',
   correctAnswer: 'being unkind to another person'
  },
  {russianWord:   'close-knit family',
   correctAnswer: 'bound together by intimate social or cultural ties or by close economic or political ties'
  },
  {russianWord:   'nuclear family',
   correctAnswer: 'a couple and their dependent children, regarded as a basic social unit'
  },
  {russianWord:   'estranged husband',
   correctAnswer: 'a husband who no longer lives with his wife'
  },
  {russianWord:   'deprived home',
   correctAnswer: 'lacking important things like food and water'
  },
  {russianWord:   'spinster',
   correctAnswer: 'confirmed bachelor [woman]'
  },
  {russianWord:   'custody',
   correctAnswer: 'the protective care or guardianship of someone or something / imprisonment'
  },
  {russianWord:   'provide for family',
   correctAnswer: 'earn money for family'
  },
  {russianWord:   'distant relatives',
   correctAnswer: 'relative who is not closely related to you'
  },
  {russianWord:   'dysfunctional family',
   correctAnswer: 'family is characterized by “conflict, misbehavior, or abuse” '
  },
  {russianWord:   'late wife',
   correctAnswer: 'wife has passed away'
  },
  {russianWord:   'set up home',
   correctAnswer: 'start a family'
  },
  {russianWord:   'expect a baby',
   correctAnswer: 'pregnant woman'
  },
  {russianWord:   'baby due to come',
   correctAnswer: 'baby will born'
  },
  {russianWord:   'bring up a child',
   correctAnswer: 'raise a child'
  },
  {russianWord:   'collocation',
   correctAnswer: 'habitual juxtaposition of a particular word with another word'
  },
  {russianWord:   'bout',
   correctAnswer: 'a short period of intense activity of a specified kind'
  },
  {russianWord:   'gloominess ',
   correctAnswer: 'a feeling of melancholy apprehension'
  },
  {russianWord:   'sullenness',
   correctAnswer: 'showing irritation or ill humor by a gloomy silence or reserve'
  },
  {russianWord:   'intimate',
   correctAnswer: 'private and personal / closely acquainted; familiar'
  },
  {russianWord:   'acquaint',
   correctAnswer: 'make someone aware of or familiar with'
  },
  {russianWord:   'bitter',
   correctAnswer: 'having a sharp, pungent taste or smell; not sweet'
  },
  {russianWord:   'acrimonious',
   correctAnswer: '(typically of speech or discussion) angry and bitter'
  },
  {russianWord:   'juxtaposition',
   correctAnswer: 'the fact of two things being seen or placed close together with contrasting effect'
  },
  {russianWord:   'make friends',
   correctAnswer: 'establish a relationship or relationships based on mutual affection'
  },
  {russianWord:   'strike up a friendship',
   correctAnswer: 'start a friendship'
  },
  {russianWord:   'mutual',
   correctAnswer: '(of a feeling or action) experienced or done by each of two or more parties towards the other or others'
  },
  {russianWord:   'casual acquaintances',
   correctAnswer: 'someone you know a little'
  },
  {russianWord:   'keep in contact',
   correctAnswer: 'to maintain (close) contact (with someone)'
  },
  {russianWord:   'affair',
   correctAnswer: 'a sexual relationship between two people, one or both of whom are married to someone else'
  },
  //////////////////////
  // Describe peoples //
  //////////////////////
  {russianWord:   'fishy',
   correctAnswer: 'arousing feelings of doubt or suspicion'
  },
  {russianWord:   'something fishy going on',
   correctAnswer: 'smth suspicion going on'
  },
  {russianWord:   'backstabber / snake',
   correctAnswer: 'one who betrays a trust or an allegiance'
  },
  {russianWord:   'allegiance',
   correctAnswer: 'loyalty or commitment to a superior or to a group or cause'
  },
  {russianWord:   'sheepish',
   correctAnswer: 'showing or feeling embarrassment from shame or a lack of self-confidence'
  },
  {russianWord:   'do you have a beef with me',
   correctAnswer: 'outstanding or unsettled dispute or disagreement with someone'
  },
  {russianWord:   'squirrelly',
   correctAnswer: 'restless, nervous, or unpredictable'
  },
  {russianWord:   'asinine / donkey',
   correctAnswer: 'stupid'
  },
  {russianWord:   'take instant dislike',
   correctAnswer: 'do not like smb'
  },
  {russianWord:   'tough',
   correctAnswer: 'able to endure hardship or pain / a rough and violent man'
  },
  {russianWord:   'inevitable',
   correctAnswer: 'certain to happen; unavoidable'
  },
  {russianWord:   'put a strain',
   correctAnswer: 'place an undue or overwhelming burden on someone\'s or something\'s resources or ability to cope'
  },
  {russianWord:   'stick up',
   correctAnswer: 'staying aloof from others because one thinks one is superior'
  },
  {russianWord:   'settle down',
   correctAnswer: 'become quiet, calm'
  },
  {russianWord:   'burden',
   correctAnswer: 'a load, typically a heavy one'
  },
  {russianWord:   'cope',
   correctAnswer: '(of a person) deal effectively with something difficult'
  },
  {russianWord:   'undue',
   correctAnswer: 'unwarranted or inappropriate because excessive or disproportionate'
  },
  {russianWord:   'strain',
   correctAnswer: 'a force tending to pull or stretch something to an extreme or damaging degree'
  },
  {russianWord:   'to stick up for smb',
   correctAnswer: 'to support someone or something'
  },
  {russianWord:   'aloof',
   correctAnswer: 'not friendly or forthcoming; cool and distant'
  },
  {russianWord:   'whoop',
   correctAnswer: 'a loud cry of joy or excitement'
  },
  {russianWord:   'ruck',
   correctAnswer: 'a tightly packed crowd of people'
  },
  {russianWord:   'muck',
   correctAnswer: 'dirt, rubbish, or waste matter'
  },
  {russianWord:   'ruck the muck',
   correctAnswer: 'remove dirt / make clean'
  },
  {russianWord:   'phony',
   correctAnswer: 'having a misleading appearance'
  },
  {russianWord:   'pass the torch',
   correctAnswer: 'to give one\'s job, duties, etc'
  },
  {russianWord:   'hinge on it ',
   correctAnswer: 'to be determined or decided by (something)'
  },
  {russianWord:   'rotten',
   correctAnswer: 'suffering from decay / very bad'
  },
  {russianWord:   'look up',
   correctAnswer: '(of a situation) improve / search for and find a piece of information in a book or database'
  },
  {russianWord:   'reluctant',
   correctAnswer: 'unwilling and hesitant; disinclined'
  },
  {russianWord:   'fault',
   correctAnswer: 'responsibility for an accident or misfortune'
  },
  {russianWord:   'screw up',
   correctAnswer: 'cause something to fail or go wrong'
  },
  {russianWord:   'culprit',
   correctAnswer: 'a person who is responsible for a crime or other misdeed'
  },
  {russianWord:   'chatterbox',
   correctAnswer: 'one who engages in much idle talk / talkative'
  },
  {russianWord:   'idle',
   correctAnswer: '(of a person) avoiding work; lazy / without purpose or effect; pointless'
  },
  {russianWord:   'make up your mind',
   correctAnswer: 'make a decision; decide'
  },
  {russianWord:   'make of somebody',
   correctAnswer: 'understand a person or thing\'s meaning or character'
  },
  {russianWord:   'come across',
   correctAnswer: '(of a person) appear or sound in a specified way; give a specified impression'
  },
  {russianWord:   'timid',
   correctAnswer: '(neutral) a person who is nervous and shy'
  },
  {russianWord:   'come across',
   correctAnswer: 'give a specified impression'
  },
  {russianWord:   'conscientious [коншиеншес]',
   correctAnswer: 'wishing to do one\'s work or duty well and thoroughly'
  },
  {russianWord:   'take to someone',
   correctAnswer: 'you like someone, especially after knowing someone for only a short time'
  },
  {russianWord:   'strike someone as confident',
   correctAnswer: 'make someone have particular opinion or feeling [impress as confident]'
  },
  {russianWord:   'envy',
   correctAnswer: 'a feeling of discontented or resentful longing aroused by someone else\'s possessions, qualities, or luck'
  },
  {russianWord:   'coward',
   correctAnswer: 'a person who is contemptibly lacking in the courage to do or endure dangerous or unpleasant things'
  },
  {russianWord:   'cupboard',
   correctAnswer: 'a recess or piece of furniture with a door and typically shelves, used for storage'
  },
  {russianWord:   'discontented',
   correctAnswer: 'dissatisfied, especially with one\'s circumstances'
  },
  ////////////
  // Idioms //
  ////////////
  {russianWord:   'be at loggerheads',
   correctAnswer: 'disagree strongly with each other'
  },
  {russianWord:   'be at cross-purposes',
   correctAnswer: 'not understand each other because they are trying to say different things'
  },
  {russianWord:   'have it in for someone',
   correctAnswer: 'be determined to criticise or harm someone'
  },
  {russianWord:   'have it out with someone',
   correctAnswer: 'talk to someone about something they have done in order to solve the problem'
  },
  {russianWord:   'rub someone up the wrong way',
   correctAnswer: 'irritate someone'
  },
  {russianWord:   'two-time someone',
   correctAnswer: 'have a romantic or sexual relationship with 2 people at the same time'
  },
  {russianWord:   'keep someone/smth at bay ',
   correctAnswer: 'prevent smone/smth from coming near or harming you'
  },
  {russianWord:   'keep yourself to yourself',
   correctAnswer: 'prefer to be on your own and avoid talking with other people'
  },
  {russianWord:   'be in someone`s good books` ',
   correctAnswer: 'some person is pleased with you'
  },
  {russianWord:   'get on like a house on fire',
   correctAnswer: 'get an extremely well with someone'
  },
  {russianWord:   'make it up to someone',
   correctAnswer: 'do smth good for someone after you did smth bad in past / compensate'
  },
  {russianWord:   'take a shine to',
   correctAnswer: 'to like someone immediately [informal]'
  },
  {russianWord:   'have a soft spot for',
   correctAnswer: 'feel a lot of affection for one particular person'
  },
  {russianWord:   'affection',
   correctAnswer: 'a gentle feeling of fondness or liking'
  },
  {russianWord:   'chimney',
   correctAnswer: 'a vertical channel or pipe which conducts smoke and combustion gases up from a fire'
  },
  {russianWord:   'roast',
   correctAnswer: 'cook (food, especially meat) by prolonged exposure to heat in an oven or over a fire'
  },
  {russianWord:   'mayhem',
   correctAnswer: 'violent or extreme disorder; chaos'
  },
  {russianWord:   'grumpy',
   correctAnswer: 'bad-tempered and irritable'
  },
  {russianWord:   'penny-pinching',
   correctAnswer: 'unwilling to spend money; miserly'
  },
  {russianWord:   'loath',
   correctAnswer: 'reluctant; unwilling'
  },
  {russianWord:   'guinea pig',
   correctAnswer: 'a person or thing used as a subject for experiment'
  },
  {russianWord:   'admission',
   correctAnswer: 'a statement acknowledging the truth of something'
  },
  ///////////
  // Money //
  ///////////
  {russianWord:   'borrow',
   correctAnswer: 'take and use (something belonging to someone else) with the intention of returning it'
  },
  {russianWord:   'lend',
   correctAnswer: 'grant to (someone) the use of (something) on the understanding that it will be returned'
  },
  {russianWord:   'owe / get into debt',
   correctAnswer: 'have an obligation to pay or repay (something, especially money) in return for something received'
  },
  {russianWord:   'charge [for]',
   correctAnswer: 'a price asked for goods or services'
  },
  {russianWord:   'stink',
   correctAnswer: 'have a strong unpleasant smell'
  },
  {russianWord:   'put some money aside',
   correctAnswer: 'to save or keep (something, such as money) to be used at a later time'
  },
  {russianWord:   'to be worth about',
   correctAnswer: 'equivalent in value to the sum or item specified'
  },
  {russianWord:   'get into debt [дэт] whole',
   correctAnswer: 'to come to be in a position of owing money to someone'
  },
  {russianWord:   'mortgage [могич]',
   correctAnswer: 'a legal agreement by which a bank, building society, etc. lends money at interest in exchange for taking title of the debtor\'s property'
  },
  {russianWord:   'spend money on smth',
   correctAnswer: 'to pay out for'
  },
  {russianWord:   'to cost a fortune',
   correctAnswer: 'to cost a lot of money'
  },
  {russianWord:   'throw money at',
   correctAnswer: 'spend excess money, trying to solve a problem'
  },
  {russianWord:   'throw money around',
   correctAnswer: 'waste money'
  },
  {russianWord:   'rock-bottom prices',
   correctAnswer: 'very low'
  },
  {russianWord:   'soar',
   correctAnswer: 'fly or rise high in the air'
  },
  {russianWord:   'money was always tight',
   correctAnswer: 'wasn`t much money'
  },
  {russianWord:   'sky-rocket prices',
   correctAnswer: 'very high'
  },
  {russianWord:   'make money / earn / raise money',
   correctAnswer: 'make a profit'
  },
  {russianWord:   'to make a [small] fortune',
   correctAnswer: 'raise a lot of money'
  },
  {russianWord:   'bargain',
   correctAnswer: 'a thing bought or offered for sale much more cheaply than is usual or expected'
  },
  {russianWord:   'getting by / make ends meet',
   correctAnswer: 'manage with difficulty to live or accomplish something'
  },
  {russianWord:   'scrape by / live on a shoestring',
   correctAnswer: 'to live with barely enough money'
  },
  {russianWord:   'feed as a fiddle',
   correctAnswer: 'in good physical condition'
  },
  {russianWord:   'save up / sock away',
   correctAnswer: 'accumulate something for a particular purpose [big purchase]'
  },
  {russianWord:   'fork over / out',
   correctAnswer: 'to give something, especially money to someone, especially when you do not want to'
  },
  {russianWord:   'cough up',
   correctAnswer: 'give something reluctantly, especially money or information that is due or required'
  },
  {russianWord:   'shell out',
   correctAnswer: 'pay a specified amount of money, especially an amount that is resented as being excessive'
  },
  {russianWord:   'dip into',
   correctAnswer: 'withdraw something in small amounts, usually money'
  },
  {russianWord:   'break into [savings]',
   correctAnswer: 'to start to spend money that you did not want to spend [savings disappears]'
  },
  {russianWord:   'pay back',
   correctAnswer: 'repay a loan to someone'
  },
  {russianWord:   'pay off / pick up the bill',
   correctAnswer: 'pay a debt in full'
  },
  {russianWord:   'mental wellbeing',
   correctAnswer: 'mental health'
  },
  {russianWord:   'take money out / pull money',
   correctAnswer: 'withdraw money'
  },
  {russianWord:   'cut back on / cut down on',
   correctAnswer: 'reduce an expenses'
  },
  {russianWord:   'interest rate',
   correctAnswer: 'the proportion of a loan that is charged as interest to the borrower'
  },
  {russianWord:   'take back',
   correctAnswer: 'reclaim possession of something'
  },
  {russianWord:   'reluctantly',
   correctAnswer: 'in an unwilling and hesitant way'
  },
  {russianWord:   'superficially',
   correctAnswer: 'lacking in depth or solidity'
  },
  {russianWord:   'sort out',
   correctAnswer: 'resolve a problem or difficulty'
  },
  {russianWord:   'rip off',
   correctAnswer: 'cheat someone, especially financially'
  },
  {russianWord:   'pick up',
   correctAnswer: 'take hold of and lift or move someone or something'
  },
  {russianWord:   'write off',
   correctAnswer: 'dismiss someone or something as insignificant'
  },
  {russianWord:   'tide over',
   correctAnswer: 'help someone through a difficult period, especially with financial assistance'
  },
  {russianWord:   'sell out',
   correctAnswer: 'an event for which all tickets are sold'
  },
  {russianWord:   'skimp on',
   correctAnswer: 'you use less time, money, or material for it than you really need, so that the result is not good enough'
  },
  {russianWord:   'bail out',
   correctAnswer: 'rescue someone from a difficult situation, especially by providing money'
  },
  {russianWord:   'hint at smth',
   correctAnswer: 'to talk about (something) in an indirect way'
  },
  {russianWord:   'breadwinner / bring home the bacon',
   correctAnswer: 'a person who earns money to support their family, typically the sole one'
  },
  {russianWord:   'cash cow',
   correctAnswer: 'a business, investment, or product that provides a steady income or profit'
  },
  {russianWord:   'sell for a song',
   correctAnswer: 'very cheaply, for little money, especially for less than something is worth'
  },
  {russianWord:   'outgoings',
   correctAnswer: 'a person`s regular expenditure'
  },
  {russianWord:   'promptly',
   correctAnswer: 'with little or no delay; immediately'
  },
  {russianWord:   'mount up',
   correctAnswer: 'to get much larger'
  },
  {russianWord:   'surplus',
   correctAnswer: 'an amount of something left over when requirements have been met'
  },
  {russianWord:   'have never done it',
   correctAnswer: 'never did it'
  },
  {russianWord:   'relief',
   correctAnswer: 'a feeling of reassurance and relaxation following release from anxiety or distress'
  },
  {russianWord:   'famine',
   correctAnswer: 'extreme scarcity of food'
  },
  {russianWord:   'sweep',
   correctAnswer: 'clean (an area) by brushing away dirt or litter'
  },
  {russianWord:   'sweat',
   correctAnswer: 'moisture exuded through the pores of the skin, typically in profuse quantities as a reaction to heat'
  },
  {russianWord:   'set off',
   correctAnswer: 'begin a journey'
  },
  {russianWord:   'end up',
   correctAnswer: 'to reach or come to a place, condition, or situation that was not planned or expected'
  },
  {russianWord:   'run out of something',
   correctAnswer: 'to finish, use, or sell all of something, so that there is none left'
  },
  {russianWord:   'lorry',
   correctAnswer: 'a large, heavy motor vehicle for transporting goods or troops; a truck'
  },
  {russianWord:   'buddy',
   correctAnswer: 'a close friend'
  },
  {russianWord:   'satnav',
   correctAnswer: 'navigation dependent on information received from satellites'
  },
  {russianWord:   'drop off',
   correctAnswer: 'fall asleep easily, especially without intending to'
  },
  {russianWord:   'litter',
   correctAnswer: 'rubbish such as paper, cans, and bottles left lying in an open or public place'
  },
  {russianWord:   'tram',
   correctAnswer: 'a passenger vehicle powered by electricity conveyed by overhead cables, and running on rails laid in a public road'
  },
  {russianWord:   'coach',
   correctAnswer: 'a comfortably equipped single-decker bus used for longer journeys'
  },
  {russianWord:   'ferry',
   correctAnswer: 'a boat or ship for conveying passengers and goods, especially over a relatively short distance and as a regular service'
  },
  {russianWord:   'traffic jam',
   correctAnswer: 'a situation in which a long line of vehicles on a road have stopped moving'
  },
  {russianWord:   'pavement',
   correctAnswer: 'a raised paved or asphalted path for pedestrians at the side of a road'
  },
  ////////////////////////////
  // From diversity courses //
  ////////////////////////////
  {russianWord:   'shaping up',
   correctAnswer: 'develop or progress in a particular way'
  },
  {russianWord:   'topple over',
   correctAnswer: 'to stop being steady and fall'
  },
  {russianWord:   'accomplish',
   correctAnswer: 'achieve or complete successfully'
  },
  {russianWord:   'runoff',
   correctAnswer: 'a further competition, election, race, etc., after a tie or inconclusive result'
  },
  {russianWord:   'suffice [сэфайс]',
   correctAnswer: 'be enough or adequate'
  },
  {russianWord:   'inmate',
   correctAnswer: 'a person confined to an institution such as a prison or hospital.'
  },
  {russianWord:   'ample',
   correctAnswer: 'enough or more than enough; plentiful'
  },
  {russianWord:   'bias [байас]',
   correctAnswer: 'inclination or prejudice for or against one person or group, unfair'
  },
  {russianWord:   'tick',
   correctAnswer: 'a mark (✓) used to indicate that an item in a list or text is correct or has been chosen, checked, or dealt with'
  },
  {russianWord:   'cross',
   correctAnswer: 'a mark, object, or figure formed by two short intersecting lines or pieces (+ or ×)'
  },
  {russianWord:   'rural',
   correctAnswer: 'in, relating to, or characteristic of the countryside rather than the town'
  },
  {russianWord:   'tribe',
   correctAnswer: 'a social division in a traditional society consisting of families or communities'
  },
  {russianWord:   'amygdala',
   correctAnswer: 'amygdala, region of the brain primarily associated with emotional processes'
  },
  {russianWord:   'affinity',
   correctAnswer: 'a natural liking for and understanding of someone or something'
  },
  {russianWord:   'confine',
   correctAnswer: 'keep or restrict someone or something within certain limits of (space, scope, or time)'
  },
  ///////////////////
  // Phrasal verbs //
  ///////////////////
  {russianWord:   'catch up with',
   correctAnswer: 'succeed in reaching a person who is ahead of one'
  },
  {russianWord:   'drop off',
   correctAnswer: 'an act of taking people, goods, mail, etc. to a place'
  },
  {russianWord:   'keep up with',
   correctAnswer: 'move or progress at the same rate as someone or something else'
  },
  {russianWord:   'make for',
   correctAnswer: '(make for something) to move towards a place'
  },
  {russianWord:   'pull in',
   correctAnswer: '(of a vehicle) move to the side of or off the road'
  },
  {russianWord:   'run over',
   correctAnswer: '(of a vehicle) knock a person or animal down and pass over their body'
  },
  {russianWord:   'see off',
   correctAnswer: 'to go to an airport, train station, etc., with (someone who is leaving) in order to say goodbye'
  },
  {russianWord:   'set out/off',
   correctAnswer: 'intransitive to start a journey, or to start going in a particular direction'
  },
  {russianWord:   'take off',
   correctAnswer: '(of an aircraft or bird) become airborne / remove clothing from ones body'
  },
  {russianWord:   'turn round',
   correctAnswer: 'move so as to face in the opposite direction'
  },
  {russianWord:   'snail',
   correctAnswer: 'a mollusc with a single spiral shell '
  },
  {russianWord:   'slippery',
   correctAnswer: 'of a surface or object) difficult to hold firmly or stand on because it is smooth, wet, or slimy'
  },
  {russianWord:   'slid',
   correctAnswer: 'move smoothly along a surface while maintaining continuous contact with it.'
  },
  {russianWord:   'seaward',
   correctAnswer: 'towards the sea'
  },
  {russianWord:   'Arrange with someone',
   correctAnswer: 'make plans with them to do it'
  },
  {russianWord:   'pull away',
   correctAnswer: '(of a vehicle) start moving'
  },
  {russianWord:   'steer',
   correctAnswer: 'guide or control the movement of (a vehicle, vessel, or aircraft), for example by turning a wheel or operating a rudder'
  },
  {russianWord:   'accelerate',
   correctAnswer: '(especially of a vehicle) begin to move more quickly'
  },
  {russianWord:   'put on the brakes',
   correctAnswer: 'to slow or stop the progress of something or someone'
  },
  {russianWord:   'reverse',
   correctAnswer: 'move backwards'
  },
  {russianWord:   'swerve',
   correctAnswer: 'an abrupt change of direction'
  },
  {russianWord:   'skid',
   correctAnswer: '(of a vehicle) slide, typically sideways or obliquely, on slippery ground or as a result of stopping or turning too quickly'
  },
  {russianWord:   'overtake',
   correctAnswer: 'catch up with and pass while travelling in the same direction'
  },
  {russianWord:   'gear',
   correctAnswer: 'a toothed wheel that works with others to alter the relation between the speed of a driving mechanism (such as the engine of a vehicle)'
  },
  {russianWord:   'on the lookout for',
   correctAnswer: 'to watch or search for (something or someone)'
  },
  {russianWord:   'abrupt',
   correctAnswer: 'sudden and unexpected'
  },
  {russianWord:   'be on the right track',
   correctAnswer: 'following a course that will lead to success/failure'
  },
  {russianWord:   'uphill battle',
   correctAnswer: 'a very difficult struggle'
  },
  {russianWord:   'gone downhill',
   correctAnswer: 'deteriorate, worsen'
  },
  {russianWord:   'off the beaten track',
   correctAnswer: 'in or into an isolated place'
  },
  {russianWord:   'to be at a crossroads',
   correctAnswer: ' at a point of decision or a critical juncture'
  },
  {russianWord:   'dead end',
   correctAnswer: 'an end of a road or passage from which no exit is possible / hard situation'
  },
  {russianWord:   'hit the road',
   correctAnswer: 'start journey / set out on a journey'
  },
  {russianWord:   'juncture',
   correctAnswer: 'a place where things join'
  },
  {russianWord:   'stuck in a rut',
   correctAnswer: 'you\'ve been doing the same old thing for too long'
  },
  {russianWord:   'drive me round the bend',
   correctAnswer: 'it makes you really bored or angry'
  },
  {russianWord:   'right up your street',
   correctAnswer: 'perfect for you'
  },
  {russianWord:   'middle of the road',
   correctAnswer: 'neutral'
  },
  {russianWord:   'swift',
   correctAnswer: 'happening quickly or promptly [light action]'
  },
  {russianWord:   'rapid',
   correctAnswer: 'happening in a short time or at a great rate'
  },
  {russianWord:   'brisk',
   correctAnswer: 'active and energetic [оживленный]'
  },
  {russianWord:   'hasty',
   correctAnswer: 'done with excessive speed or urgency; hurried [поспешный]'
  },
  {russianWord:   'stand still',
   correctAnswer: 'a state characterized by absence of motion or of progress'
  },
  {russianWord:   'decline',
   correctAnswer: '(typically of something regarded as good) become smaller, fewer, or less; decrease.'
  },
  {russianWord:   'in an unhurried manner',
   correctAnswer: 'relaxed and leisurely; without hurry or haste'
  },
  {russianWord:   'leisurely',
   correctAnswer: 'acting or done at leisure; unhurried or relaxed'
  },
  {russianWord:   'make / take a detour',
   correctAnswer: 'a deviation from a direct course or the usual procedure especially'
  },
  {russianWord:   'steering wheel',
   correctAnswer: 'a device that a driver rotates in order to steer a vehicle.'
  },
  {russianWord:   'steer a conversation away',
   correctAnswer: 'when there\'s something that you want to talk about, or something that you want to avoid talking about.'
  },
  {russianWord:   'turn upside down',
   correctAnswer: 'put in disorder, mix or mess up'
  },
  {russianWord:   'go astray',
   correctAnswer: '(of an object) become lost or mislaid'
  },
  {russianWord:   '',
   correctAnswer: ''
  },
  {russianWord:   '',
   correctAnswer: ''
  },
  {russianWord:   '',
   correctAnswer: ''
  },
  {russianWord:   '',
   correctAnswer: ''
  },
  {russianWord:   '',
   correctAnswer: ''
  },
  ]

export default englishClasses