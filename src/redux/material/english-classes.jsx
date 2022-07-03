const englishClasses = [
  {primaryWord: 'selfish behavior',
   meaning:     'selfish streak'
  },
  {primaryWord: 'bright imagination',
   meaning:     'vivid imagination'
  },
  {primaryWord: 'smart',
   meaning:     'razor sharp mind'
  },
  {primaryWord: 'cruelly, strongly',
   meaning:     'fiercely'
  },
  {primaryWord: 'quick decisions',
   meaning:     'snap decisions'
  },
  {primaryWord: 'took offense',
   meaning:     'bear a grudge'
  },
  {primaryWord: 'nature',
   meaning:     'temper'
  },
  {primaryWord: 'sure',
   meaning:     'confident'
  },
  {primaryWord: 'keep cool',
   meaning:     'keep your temper'
  },
  {primaryWord: 'I like',
   meaning:     'I am fond of'
  },
  {primaryWord: 'exceedingly',
   meaning:     'supremely'
  },
  {primaryWord: 'hysterical',
   meaning:     'throw a tantrum'
  },
  {primaryWord: 'come to terms with',
   meaning:     'abide, keep calm about smth'
  },
  {primaryWord: 'to fraud smb',
   meaning:     'deceive'
  },
  {primaryWord: 'to stew in one`s own juices',
   meaning:     'to worry and suffer because of something that one did'
  },
  {primaryWord: 'to be sandwiched',
   meaning:     'to be in a small or tight space between two people'
  },
  {primaryWord: 'to sugarcoat smth',
   meaning:     'make superficially attractive or acceptable'
  },
  {primaryWord: 'sugar daddy',
   meaning:     'a rich older man who lavishes gifts on a young woman'
  },
  {primaryWord: 'to be on a gravy train',
   meaning:     'a position in which a person or group receives excessive and unjustified money with no effort'
  },
  {primaryWord: 'lazy bone / coach potato',
   meaning:     'lazy person'
  },
  {primaryWord: 'timetable',
   meaning:     'schedule (something) to take place at a particular time'
  },
  {primaryWord: 'peach',
   meaning:     'a round stone fruit with juicy yellow flesh and downy pinkish-yellow skin'
  },
  {primaryWord: 'raspberries',
   meaning:     'an edible soft fruit related to the blackberry, consisting of a cluster of reddish-pink drupelets'
  },
  {primaryWord: 'go bananas',
   meaning:     'to become very excited or angry'
  },
  {primaryWord: 'to use your noodles',
   meaning:     'use your brain, dummy'
  },
  {primaryWord: 'not my cup of tea',
   meaning:     'not what one likes or is interested in'
  },
  {primaryWord: 'cool as a cucumber',
   meaning:     'calm and relaxed'
  },
  {primaryWord: 'nibble',
   meaning:     'take small bites out of'
  },
  {primaryWord: 'munch',
   meaning:     'eat (something) steadily and often audibly'
  },
  {primaryWord: 'devour',
   meaning:     'eat (food or prey) hungrily or quickly'
  },
  {primaryWord: 'spit',
   meaning:     'eject saliva forcibly from one\'s mouth'
  },
  {primaryWord: 'eat like a bird',
   meaning:     'eat very little'
  },
  {primaryWord: 'dog breakfast',
   meaning:     'a poor piece of work; a mess'
  },
  {primaryWord: 'vulgar',
   meaning:     'very rude'
  },
  {primaryWord: 'brief',
   meaning:     'very short'
  },
  {primaryWord: 'dull',
   meaning:     'very boring/stupid'
  },
  {primaryWord: 'superb',
   meaning:     'very good'
  },
  {primaryWord: 'scalding',
   meaning:     'very hot'
  },
  {primaryWord: 'freezing',
   meaning:     'very cold'
  },
  {primaryWord: 'ravenous',
   meaning:     'very hungry'
  },
  {primaryWord: 'sluggish',
   meaning:     'very slow'
  },
  {primaryWord: 'rapid',
   meaning:     'very fast'
  },
  {primaryWord: 'exhausted',
   meaning:     'very tired'
  },
  {primaryWord: 'destitute',
   meaning:     'very poor'
  },
  {primaryWord: 'wealthy / well off',
   meaning:     'very rich'
  },
  {primaryWord: 'swig',
   meaning:     'drink in large gulps'
  },
  {primaryWord: 'guzzle',
   meaning:     'drink/eat greedily'
  },
  {primaryWord: 'Take shot in a bar',
   meaning:     'have a drink in a bar'
  },
  {primaryWord: 'kind of beverage',
   meaning:     'kind of drink (напиток)'
  },
  {primaryWord: 'soft drinks/pop',
   meaning:     'cola, sprite etc'
  },
  {primaryWord: 'teetotaler',
   meaning:     'a person who never drinks alcohol'
  },
  {primaryWord: 'smth cannot be obtained in sufficient amounts',
   meaning:     'shortage / shortfall'
  },
  {primaryWord: 'make my mouth water',
   meaning:     'make someone long for or desire something'
  },
  {primaryWord: 'spill',
   meaning:     'cause or allow (liquid) to flow over the edge of its container'
  },
  {primaryWord: 'stiff drink / hard liquor',
   meaning:     'strong alcoholic drink'
  },
  {primaryWord: 'have a lot on my plate',
   meaning:     'very busy'
  },
  {primaryWord: 'all well',
   meaning:     'everything is on a track'
  },
  {primaryWord: 'deadlines drive me nut',
   meaning:     'deadlines make me go bananas'
  },
  {primaryWord: 'what did you do?',
   meaning:     'what have you been up to?'
  },
  {primaryWord: 'big portion[of food]',
   meaning:     'substantial'
  },
  {primaryWord: 'food likely to decay or go bad quickly.',
   meaning:     'perishable'
  },
  {primaryWord: 'decompose / wither',
   meaning:     'decay'
  },
  {primaryWord: 'decent ',
   meaning:     'good taste/moral integrity[person]'
  },
  {primaryWord: 'gourmet',
   meaning:     'a connoisseur of good food; a person with a discerning palate'
  },
  {primaryWord: 'slap-up meal ',
   meaning:     '(meal or celebration) large and sumptuous'
  },
  {primaryWord: 'stiff drink',
   meaning:     'strong alcohol'
  },
  {primaryWord: 'dodge',
   meaning:     'duck out'
  },
  {primaryWord: 'tidy',
   meaning:     'clean / neatly'
  },
  {primaryWord: 'unambitious ',
   meaning:     'feeling or showing a lack of ambition'
  },
  {primaryWord: 'unkind',
   meaning:     'inconsiderate and harsh to others'
  },
  {primaryWord: 'inconsiderate',
   meaning:     'thoughtlessly causing hurt or inconvenience to others'
  },
  {primaryWord: 'harsh',
   meaning:     'strict'
  },
  {primaryWord: 'unselfish',
   meaning:     'willing to put the needs of others before one\'s own'
  },
  {primaryWord: 'unsociable',
   meaning:     'not enjoying to behave sociably'
  },
  {primaryWord: 'arrange',
   meaning:     'put (things) in a neat, attractive, or required order'
  },
  {primaryWord: 'immature',
   meaning:     'not fully developed'
  },
  {primaryWord: 'impatient',
   meaning:     'having or showing a tendency to be quickly irritated'
  },
  {primaryWord: 'irresponsible',
   meaning:     'person not showing a proper sense of responsibility'
  },
  {primaryWord: 'insensitive',
   meaning:     'showing or feeling no concern for others\' feelings'
  },
  {primaryWord: 'concern',
   meaning:     'anxiety / worry'
  },
  {primaryWord: 'thoughtlessly',
   meaning:     'lacking in consideration for others'
  },
  {primaryWord: 'consideration',
   meaning:     'careful thought, typically over a period of time'
  },
  {primaryWord: 'thought',
   meaning:     'an idea or opinion produced by thinking'
  },
  {primaryWord: 'sumptuous',
   meaning:     'luxurious / deluxe'
  },
  {primaryWord: 'rouse',
   meaning:     'make angry or excited / cause to stop sleeping'
  },
  {primaryWord: 'row',
   meaning:     'a noisy argument or fight / one after another without a break'
  },
  {primaryWord: 'dreaded',
   meaning:     'regarded with great fear or apprehension'
  },
  {primaryWord: 'apprehension / misgiving',
   meaning:     'anxiety or fear that something bad or unpleasant will happen'
  },
  {primaryWord: 'regarded',
   meaning:     'consider or think of in a specified way'
  },
  {primaryWord: 'embrace',
   meaning:     'accept (a belief, theory, or change) willingly and enthusiastically'
  },
  {primaryWord: 'connoisseur [конесэ]',
   meaning:     'an expert judge in matters of taste'
  },
  {primaryWord: 'palate',
   meaning:     'a person\'s ability to distinguish between and appreciate different flavours'
  },
  {primaryWord: 'discerning',
   meaning:     'having or showing good judgement'
  },
  {primaryWord: 'lavish ',
   meaning:     'bestow something in generous or extravagant quantities on'
  },
  {primaryWord: 'grant/confer or present (an honour, right, or gift)',
   meaning:     'bestow'
  },
  {primaryWord: 'covered with fine, soft hair or feathers',
   meaning:     'downy'
  },
  {primaryWord: 'edible',
   meaning:     'fit or suitable to be eaten'
  },
  {primaryWord: 'reddish having a red tinge; slightly red',
   meaning:     'reddish'
  },
  {primaryWord: 'drupelets',
   meaning:     'any of the small individual drupes forming a fleshy aggregate fruit such as a blackberry or raspberry'
  },
  {primaryWord: 'tinge',
   meaning:     'colour slightly'
  },
  {primaryWord: 'drupe',
   meaning:     'simple fleshy fruit that usually contains a single seed'
  },
  {primaryWord: 'steadily',
   meaning:     'in a regular and even manner'
  },
  {primaryWord: 'saliva',
   meaning:     'watery liquid secreted into the mouth by glands'
  },
  {primaryWord: 'nutbag',
   meaning:     'an odd-eccentric or insane person'
  },
  {primaryWord: 'odd',
   meaning:     'different to what is usual or expected; strange'
  },
  {primaryWord: 'ruthless ',
   meaning:     'having or showing no pity or compassion for others'
  },
  {primaryWord: 'scoundrel',
   meaning:     'a dishonest or unscrupulous person; a rogue'
  },
  //////////////////
  // Family topic //
  //////////////////
  {primaryWord: 'easy going',
   meaning:     'friendly'
  },
  {primaryWord: 'bossy',
   meaning:     'fond of giving people orders; domineering'
  },
  {primaryWord: 'moody',
   meaning:     '(of a person) given to unpredictable changes of mood, especially sudden bouts of gloominess or sullenness.'
  },
  {primaryWord: 'competitive',
   meaning:     'relating to or characterized by competition'
  },
  {primaryWord: 'mean',
   meaning:     'being unkind to another person'
  },
  {primaryWord: 'close-knit family',
   meaning:     'bound together by intimate social or cultural ties or by close economic or political ties'
  },
  {primaryWord: 'nuclear family',
   meaning:     'a couple and their dependent children, regarded as a basic social unit'
  },
  {primaryWord: 'estranged husband',
   meaning:     'a husband who no longer lives with his wife'
  },
  {primaryWord: 'deprived home',
   meaning:     'lacking important things like food and water'
  },
  {primaryWord: 'spinster',
   meaning:     'confirmed bachelor [woman]'
  },
  {primaryWord: 'custody',
   meaning:     'the protective care or guardianship of someone or something / imprisonment'
  },
  {primaryWord: 'provide for family',
   meaning:     'earn money for family'
  },
  {primaryWord: 'distant relatives',
   meaning:     'relative who is not closely related to you'
  },
  {primaryWord: 'dysfunctional family',
   meaning:     'family is characterized by “conflict, misbehavior, or abuse” '
  },
  {primaryWord: 'late wife',
   meaning:     'wife has passed away'
  },
  {primaryWord: 'set up home',
   meaning:     'start a family'
  },
  {primaryWord: 'expect a baby',
   meaning:     'pregnant woman'
  },
  {primaryWord: 'baby due to come',
   meaning:     'baby will born'
  },
  {primaryWord: 'bring up a child',
   meaning:     'raise a child'
  },
  {primaryWord: 'collocation',
   meaning:     'habitual juxtaposition of a particular word with another word'
  },
  {primaryWord: 'bout',
   meaning:     'a short period of intense activity of a specified kind'
  },
  {primaryWord: 'gloominess ',
   meaning:     'a feeling of melancholy apprehension'
  },
  {primaryWord: 'sullenness',
   meaning:     'showing irritation or ill humor by a gloomy silence or reserve'
  },
  {primaryWord: 'intimate',
   meaning:     'private and personal / closely acquainted; familiar'
  },
  {primaryWord: 'acquaint',
   meaning:     'make someone aware of or familiar with'
  },
  {primaryWord: 'bitter',
   meaning:     'having a sharp, pungent taste or smell; not sweet'
  },
  {primaryWord: 'acrimonious',
   meaning:     '(typically of speech or discussion) angry and bitter'
  },
  {primaryWord: 'juxtaposition',
   meaning:     'the fact of two things being seen or placed close together with contrasting effect'
  },
  {primaryWord: 'make friends',
   meaning:     'establish a relationship or relationships based on mutual affection'
  },
  {primaryWord: 'strike up a friendship',
   meaning:     'start a friendship'
  },
  {primaryWord: 'mutual',
   meaning:     '(of a feeling or action) experienced or done by each of two or more parties towards the other or others'
  },
  {primaryWord: 'casual acquaintances',
   meaning:     'someone you know a little'
  },
  {primaryWord: 'keep in contact',
   meaning:     'to maintain (close) contact (with someone)'
  },
  {primaryWord: 'affair',
   meaning:     'a sexual relationship between two people, one or both of whom are married to someone else'
  },
  //////////////////////
  // Describe peoples //
  //////////////////////
  {primaryWord: 'fishy',
   meaning:     'arousing feelings of doubt or suspicion'
  },
  {primaryWord: 'something fishy going on',
   meaning:     'smth suspicion going on'
  },
  {primaryWord: 'backstabber / snake',
   meaning:     'one who betrays a trust or an allegiance'
  },
  {primaryWord: 'allegiance',
   meaning:     'loyalty or commitment to a superior or to a group or cause'
  },
  {primaryWord: 'sheepish',
   meaning:     'showing or feeling embarrassment from shame or a lack of self-confidence'
  },
  {primaryWord: 'do you have a beef with me',
   meaning:     'outstanding or unsettled dispute or disagreement with someone'
  },
  {primaryWord: 'squirrelly',
   meaning:     'restless, nervous, or unpredictable'
  },
  {primaryWord: 'asinine / donkey',
   meaning:     'stupid'
  },
  {primaryWord: 'take instant dislike',
   meaning:     'do not like smb'
  },
  {primaryWord: 'tough',
   meaning:     'able to endure hardship or pain / a rough and violent man'
  },
  {primaryWord: 'inevitable',
   meaning:     'certain to happen; unavoidable'
  },
  {primaryWord: 'put a strain',
   meaning:     'place an undue or overwhelming burden on someone\'s or something\'s resources or ability to cope'
  },
  {primaryWord: 'stick up',
   meaning:     'staying aloof from others because one thinks one is superior'
  },
  {primaryWord: 'settle down',
   meaning:     'become quiet, calm'
  },
  {primaryWord: 'burden',
   meaning:     'a load, typically a heavy one'
  },
  {primaryWord: 'cope',
   meaning:     '(of a person) deal effectively with something difficult'
  },
  {primaryWord: 'undue',
   meaning:     'unwarranted or inappropriate because excessive or disproportionate'
  },
  {primaryWord: 'strain',
   meaning:     'a force tending to pull or stretch something to an extreme or damaging degree'
  },
  {primaryWord: 'to stick up for smb',
   meaning:     'to support someone or something'
  },
  {primaryWord: 'aloof',
   meaning:     'not friendly or forthcoming; cool and distant'
  },
  {primaryWord: 'whoop',
   meaning:     'a loud cry of joy or excitement'
  },
  {primaryWord: 'ruck',
   meaning:     'a tightly packed crowd of people'
  },
  {primaryWord: 'muck',
   meaning:     'dirt, rubbish, or waste matter'
  },
  {primaryWord: 'ruck the muck',
   meaning:     'remove dirt / make clean'
  },
  {primaryWord: 'phony',
   meaning:     'having a misleading appearance'
  },
  {primaryWord: 'pass the torch',
   meaning:     'to give one\'s job, duties, etc'
  },
  {primaryWord: 'hinge on it ',
   meaning:     'to be determined or decided by (something)'
  },
  {primaryWord: 'rotten',
   meaning:     'suffering from decay / very bad'
  },
  {primaryWord: 'look up',
   meaning:     '(of a situation) improve / search for and find a piece of information in a book or database'
  },
  {primaryWord: 'reluctant',
   meaning:     'unwilling and hesitant; disinclined'
  },
  {primaryWord: 'fault',
   meaning:     'responsibility for an accident or misfortune'
  },
  {primaryWord: 'screw up',
   meaning:     'cause something to fail or go wrong'
  },
  {primaryWord: 'culprit',
   meaning:     'a person who is responsible for a crime or other misdeed'
  },
  {primaryWord: 'chatterbox',
   meaning:     'one who engages in much idle talk / talkative'
  },
  {primaryWord: 'idle',
   meaning:     '(of a person) avoiding work; lazy / without purpose or effect; pointless'
  },
  {primaryWord: 'make up your mind',
   meaning:     'make a decision; decide'
  },
  {primaryWord: 'make of somebody',
   meaning:     'understand a person or thing\'s meaning or character'
  },
  {primaryWord: 'come across',
   meaning:     '(of a person) appear or sound in a specified way; give a specified impression'
  },
  {primaryWord: 'timid',
   meaning:     '(neutral) a person who is nervous and shy'
  },
  {primaryWord: 'come across',
   meaning:     'give a specified impression'
  },
  {primaryWord: 'conscientious [коншиеншес]',
   meaning:     'wishing to do one\'s work or duty well and thoroughly'
  },
  {primaryWord: 'take to someone',
   meaning:     'you like someone, especially after knowing someone for only a short time'
  },
  {primaryWord: 'strike someone as confident',
   meaning:     'make someone have particular opinion or feeling [impress as confident]'
  },
  {primaryWord: 'envy',
   meaning:     'a feeling of discontented or resentful longing aroused by someone else\'s possessions, qualities, or luck'
  },
  {primaryWord: 'coward',
   meaning:     'a person who is contemptibly lacking in the courage to do or endure dangerous or unpleasant things'
  },
  {primaryWord: 'cupboard',
   meaning:     'a recess or piece of furniture with a door and typically shelves, used for storage'
  },
  {primaryWord: 'discontented',
   meaning:     'dissatisfied, especially with one\'s circumstances'
  },
  ////////////
  // Idioms //
  ////////////
  {primaryWord: 'be at loggerheads',
   meaning:     'disagree strongly with each other'
  },
  {primaryWord: 'be at cross-purposes',
   meaning:     'not understand each other because they are trying to say different things'
  },
  {primaryWord: 'have it in for someone',
   meaning:     'be determined to criticise or harm someone'
  },
  {primaryWord: 'have it out with someone',
   meaning:     'talk to someone about something they have done in order to solve the problem'
  },
  {primaryWord: 'rub someone up the wrong way',
   meaning:     'irritate someone'
  },
  {primaryWord: 'two-time someone',
   meaning:     'have a romantic or sexual relationship with 2 people at the same time'
  },
  {primaryWord: 'keep someone/smth at bay ',
   meaning:     'prevent smone/smth from coming near or harming you'
  },
  {primaryWord: 'keep yourself to yourself',
   meaning:     'prefer to be on your own and avoid talking with other people'
  },
  {primaryWord: 'be in someone`s good books` ',
   meaning:     'some person is pleased with you'
  },
  {primaryWord: 'get on like a house on fire',
   meaning:     'get an extremely well with someone'
  },
  {primaryWord: 'make it up to someone',
   meaning:     'do smth good for someone after you did smth bad in past / compensate'
  },
  {primaryWord: 'take a shine to',
   meaning:     'to like someone immediately [informal]'
  },
  {primaryWord: 'have a soft spot for',
   meaning:     'feel a lot of affection for one particular person'
  },
  {primaryWord: 'affection',
   meaning:     'a gentle feeling of fondness or liking'
  },
  {primaryWord: 'chimney',
   meaning:     'a vertical channel or pipe which conducts smoke and combustion gases up from a fire'
  },
  {primaryWord: 'roast',
   meaning:     'cook (food, especially meat) by prolonged exposure to heat in an oven or over a fire'
  },
  {primaryWord: 'mayhem',
   meaning:     'violent or extreme disorder; chaos'
  },
  {primaryWord: 'grumpy',
   meaning:     'bad-tempered and irritable'
  },
  {primaryWord: 'penny-pinching',
   meaning:     'unwilling to spend money; miserly'
  },
  {primaryWord: 'loath',
   meaning:     'reluctant; unwilling'
  },
  {primaryWord: 'guinea pig',
   meaning:     'a person or thing used as a subject for experiment'
  },
  {primaryWord: 'admission',
   meaning:     'a statement acknowledging the truth of something'
  },
  ///////////
  // Money //
  ///////////
  {primaryWord: 'borrow',
   meaning:     'take and use (something belonging to someone else) with the intention of returning it'
  },
  {primaryWord: 'lend',
   meaning:     'grant to (someone) the use of (something) on the understanding that it will be returned'
  },
  {primaryWord: 'owe / get into debt',
   meaning:     'have an obligation to pay or repay (something, especially money) in return for something received'
  },
  {primaryWord: 'charge [for]',
   meaning:     'a price asked for goods or services'
  },
  {primaryWord: 'stink',
   meaning:     'have a strong unpleasant smell'
  },
  {primaryWord: 'put some money aside',
   meaning:     'to save or keep (something, such as money) to be used at a later time'
  },
  {primaryWord: 'to be worth about',
   meaning:     'equivalent in value to the sum or item specified'
  },
  {primaryWord: 'get into debt [дэт] whole',
   meaning:     'to come to be in a position of owing money to someone'
  },
  {primaryWord: 'mortgage [могич]',
   meaning:     'a legal agreement by which a bank, building society, etc. lends money at interest in exchange for taking title of the debtor\'s property'
  },
  {primaryWord: 'spend money on smth',
   meaning:     'to pay out for'
  },
  {primaryWord: 'to cost a fortune',
   meaning:     'to cost a lot of money'
  },
  {primaryWord: 'throw money at',
   meaning:     'spend excess money, trying to solve a problem'
  },
  {primaryWord: 'throw money around',
   meaning:     'waste money'
  },
  {primaryWord: 'rock-bottom prices',
   meaning:     'very low'
  },
  {primaryWord: 'soar',
   meaning:     'fly or rise high in the air'
  },
  {primaryWord: 'money was always tight',
   meaning:     'wasn`t much money'
  },
  {primaryWord: 'sky-rocket prices',
   meaning:     'very high'
  },
  {primaryWord: 'make money / earn / raise money',
   meaning:     'make a profit'
  },
  {primaryWord: 'to make a [small] fortune',
   meaning:     'raise a lot of money'
  },
  {primaryWord: 'bargain',
   meaning:     'a thing bought or offered for sale much more cheaply than is usual or expected'
  },
  {primaryWord: 'getting by / make ends meet',
   meaning:     'manage with difficulty to live or accomplish something'
  },
  {primaryWord: 'scrape by / live on a shoestring',
   meaning:     'to live with barely enough money'
  },
  {primaryWord: 'feed as a fiddle',
   meaning:     'in good physical condition'
  },
  {primaryWord: 'save up / sock away',
   meaning:     'accumulate something for a particular purpose [big purchase]'
  },
  {primaryWord: 'fork over / out',
   meaning:     'to give something, especially money to someone, especially when you do not want to'
  },
  {primaryWord: 'cough up',
   meaning:     'give something reluctantly, especially money or information that is due or required'
  },
  {primaryWord: 'shell out',
   meaning:     'pay a specified amount of money, especially an amount that is resented as being excessive'
  },
  {primaryWord: 'dip into',
   meaning:     'withdraw something in small amounts, usually money'
  },
  {primaryWord: 'break into [savings]',
   meaning:     'to start to spend money that you did not want to spend [savings disappears]'
  },
  {primaryWord: 'pay back',
   meaning:     'repay a loan to someone'
  },
  {primaryWord: 'pay off / pick up the bill',
   meaning:     'pay a debt in full'
  },
  {primaryWord: 'mental wellbeing',
   meaning:     'mental health'
  },
  {primaryWord: 'take money out / pull money',
   meaning:     'withdraw money'
  },
  {primaryWord: 'cut back on / cut down on',
   meaning:     'reduce an expenses'
  },
  {primaryWord: 'interest rate',
   meaning:     'the proportion of a loan that is charged as interest to the borrower'
  },
  {primaryWord: 'take back',
   meaning:     'reclaim possession of something'
  },
  {primaryWord: 'reluctantly',
   meaning:     'in an unwilling and hesitant way'
  },
  {primaryWord: 'superficially',
   meaning:     'lacking in depth or solidity'
  },
  {primaryWord: 'sort out',
   meaning:     'resolve a problem or difficulty'
  },
  {primaryWord: 'rip off',
   meaning:     'cheat someone, especially financially'
  },
  {primaryWord: 'pick up',
   meaning:     'take hold of and lift or move someone or something'
  },
  {primaryWord: 'write off',
   meaning:     'dismiss someone or something as insignificant'
  },
  {primaryWord: 'tide over',
   meaning:     'help someone through a difficult period, especially with financial assistance'
  },
  {primaryWord: 'sell out',
   meaning:     'an event for which all tickets are sold'
  },
  {primaryWord: 'skimp on',
   meaning:     'you use less time, money, or material for it than you really need, so that the result is not good enough'
  },
  {primaryWord: 'bail out',
   meaning:     'rescue someone from a difficult situation, especially by providing money'
  },
  {primaryWord: 'hint at smth',
   meaning:     'to talk about (something) in an indirect way'
  },
  {primaryWord: 'breadwinner / bring home the bacon',
   meaning:     'a person who earns money to support their family, typically the sole one'
  },
  {primaryWord: 'cash cow',
   meaning:     'a business, investment, or product that provides a steady income or profit'
  },
  {primaryWord: 'sell for a song',
   meaning:     'very cheaply, for little money, especially for less than something is worth'
  },
  {primaryWord: 'outgoings',
   meaning:     'a person`s regular expenditure'
  },
  {primaryWord: 'promptly',
   meaning:     'with little or no delay; immediately'
  },
  {primaryWord: 'mount up',
   meaning:     'to get much larger'
  },
  {primaryWord: 'surplus',
   meaning:     'an amount of something left over when requirements have been met'
  },
  {primaryWord: 'have never done it',
   meaning:     'never did it'
  },
  {primaryWord: 'relief',
   meaning:     'a feeling of reassurance and relaxation following release from anxiety or distress'
  },
  {primaryWord: 'famine',
   meaning:     'extreme scarcity of food'
  },
  {primaryWord: 'sweep',
   meaning:     'clean (an area) by brushing away dirt or litter'
  },
  {primaryWord: 'sweat',
   meaning:     'moisture exuded through the pores of the skin, typically in profuse quantities as a reaction to heat'
  },
  {primaryWord: 'set off',
   meaning:     'begin a journey'
  },
  {primaryWord: 'end up',
   meaning:     'to reach or come to a place, condition, or situation that was not planned or expected'
  },
  {primaryWord: 'run out of something',
   meaning:     'to finish, use, or sell all of something, so that there is none left'
  },
  {primaryWord: 'lorry',
   meaning:     'a large, heavy motor vehicle for transporting goods or troops; a truck'
  },
  {primaryWord: 'buddy',
   meaning:     'a close friend'
  },
  {primaryWord: 'satnav',
   meaning:     'navigation dependent on information received from satellites'
  },
  {primaryWord: 'drop off',
   meaning:     'fall asleep easily, especially without intending to'
  },
  {primaryWord: 'litter',
   meaning:     'rubbish such as paper, cans, and bottles left lying in an open or public place'
  },
  {primaryWord: 'tram',
   meaning:     'a passenger vehicle powered by electricity conveyed by overhead cables, and running on rails laid in a public road'
  },
  {primaryWord: 'coach',
   meaning:     'a comfortably equipped single-decker bus used for longer journeys'
  },
  {primaryWord: 'ferry',
   meaning:     'a boat or ship for conveying passengers and goods, especially over a relatively short distance and as a regular service'
  },
  {primaryWord: 'traffic jam',
   meaning:     'a situation in which a long line of vehicles on a road have stopped moving'
  },
  {primaryWord: 'pavement',
   meaning:     'a raised paved or asphalted path for pedestrians at the side of a road'
  },
  ////////////////////////////
  // From diversity courses //
  ////////////////////////////
  {primaryWord: 'shaping up',
   meaning:     'develop or progress in a particular way'
  },
  {primaryWord: 'topple over',
   meaning:     'to stop being steady and fall'
  },
  {primaryWord: 'accomplish',
   meaning:     'achieve or complete successfully'
  },
  {primaryWord: 'runoff',
   meaning:     'a further competition, election, race, etc., after a tie or inconclusive result'
  },
  {primaryWord: 'suffice [сэфайс]',
   meaning:     'be enough or adequate'
  },
  {primaryWord: 'inmate',
   meaning:     'a person confined to an institution such as a prison or hospital.'
  },
  {primaryWord: 'ample',
   meaning:     'enough or more than enough; plentiful'
  },
  {primaryWord: 'bias [байас]',
   meaning:     'inclination or prejudice for or against one person or group, unfair'
  },
  {primaryWord: 'tick',
   meaning:     'a mark (✓) used to indicate that an item in a list or text is correct or has been chosen, checked, or dealt with'
  },
  {primaryWord: 'cross',
   meaning:     'a mark, object, or figure formed by two short intersecting lines or pieces (+ or ×)'
  },
  {primaryWord: 'rural',
   meaning:     'in, relating to, or characteristic of the countryside rather than the town'
  },
  {primaryWord: 'tribe',
   meaning:     'a social division in a traditional society consisting of families or communities'
  },
  {primaryWord: 'amygdala',
   meaning:     'region of the brain primarily associated with emotional processes'
  },
  {primaryWord: 'affinity',
   meaning:     'a natural liking for and understanding of someone or something'
  },
  {primaryWord: 'confine',
   meaning:     'keep or restrict someone or something within certain limits of (space, scope, or time)'
  },
  ///////////////////
  // Phrasal verbs //
  ///////////////////
  {primaryWord: 'catch up with',
   meaning:     'succeed in reaching a person who is ahead of one'
  },
  {primaryWord: 'drop off',
   meaning:     'an act of taking people, goods, mail, etc. to a place'
  },
  {primaryWord: 'keep up with',
   meaning:     'move or progress at the same rate as someone or something else'
  },
  {primaryWord: 'make for',
   meaning:     '(make for something) to move towards a place'
  },
  {primaryWord: 'pull in',
   meaning:     '(of a vehicle) move to the side of or off the road'
  },
  {primaryWord: 'run over',
   meaning:     '(of a vehicle) knock a person or animal down and pass over their body'
  },
  {primaryWord: 'see off',
   meaning:     'to go to an airport, train station, etc., with (someone who is leaving) in order to say goodbye'
  },
  {primaryWord: 'set out/off',
   meaning:     'intransitive to start a journey, or to start going in a particular direction'
  },
  {primaryWord: 'take off',
   meaning:     '(of an aircraft or bird) become airborne / remove clothing from ones body'
  },
  {primaryWord: 'turn round',
   meaning:     'move so as to face in the opposite direction'
  },
  {primaryWord: 'snail',
   meaning:     'a mollusc with a single spiral shell '
  },
  {primaryWord: 'slippery',
   meaning:     'of a surface or object) difficult to hold firmly or stand on because it is smooth, wet, or slimy'
  },
  {primaryWord: 'slid',
   meaning:     'move smoothly along a surface while maintaining continuous contact with it.'
  },
  {primaryWord: 'seaward',
   meaning:     'towards the sea'
  },
  {primaryWord: 'Arrange with someone',
   meaning:     'make plans with them to do it'
  },
  {primaryWord: 'pull away',
   meaning:     '(of a vehicle) start moving'
  },
  {primaryWord: 'steer',
   meaning:     'guide or control the movement of (a vehicle, vessel, or aircraft), for example by turning a wheel or operating a rudder'
  },
  {primaryWord: 'accelerate',
   meaning:     '(especially of a vehicle) begin to move more quickly'
  },
  {primaryWord: 'put on the brakes',
   meaning:     'to slow or stop the progress of something or someone'
  },
  {primaryWord: 'reverse',
   meaning:     'move backwards'
  },
  {primaryWord: 'swerve',
   meaning:     'an abrupt change of direction'
  },
  {primaryWord: 'skid',
   meaning:     '(of a vehicle) slide, typically sideways or obliquely, on slippery ground or as a result of stopping or turning too quickly'
  },
  {primaryWord: 'overtake',
   meaning:     'catch up with and pass while travelling in the same direction'
  },
  {primaryWord: 'gear',
   meaning:     'a toothed wheel that works with others to alter the relation between the speed of a driving mechanism (such as the engine of a vehicle)'
  },
  {primaryWord: 'on the lookout for',
   meaning:     'to watch or search for (something or someone)'
  },
  {primaryWord: 'abrupt',
   meaning:     'sudden and unexpected'
  },
  {primaryWord: 'be on the right track',
   meaning:     'following a course that will lead to success/failure'
  },
  {primaryWord: 'uphill battle',
   meaning:     'a very difficult struggle'
  },
  {primaryWord: 'gone downhill',
   meaning:     'deteriorate, worsen'
  },
  {primaryWord: 'off the beaten track',
   meaning:     'in or into an isolated place'
  },
  {primaryWord: 'to be at a crossroads',
   meaning:     ' at a point of decision or a critical juncture'
  },
  {primaryWord: 'dead end',
   meaning:     'an end of a road or passage from which no exit is possible / hard situation'
  },
  {primaryWord: 'hit the road',
   meaning:     'start journey / set out on a journey'
  },
  {primaryWord: 'juncture',
   meaning:     'a place where things join'
  },
  {primaryWord: 'stuck in a rut',
   meaning:     'you\'ve been doing the same old thing for too long'
  },
  {primaryWord: 'drive me round the bend',
   meaning:     'it makes you really bored or angry'
  },
  {primaryWord: 'right up your street',
   meaning:     'perfect for you'
  },
  {primaryWord: 'middle of the road',
   meaning:     'neutral'
  },
  {primaryWord: 'swift',
   meaning:     'happening quickly or promptly [light action]'
  },
  {primaryWord: 'rapid',
   meaning:     'happening in a short time or at a great rate'
  },
  {primaryWord: 'brisk',
   meaning:     'active and energetic [оживленный]'
  },
  {primaryWord: 'hasty',
   meaning:     'done with excessive speed or urgency; hurried [поспешный]'
  },
  {primaryWord: 'stand still',
   meaning:     'a state characterized by absence of motion or of progress'
  },
  {primaryWord: 'decline',
   meaning:     '(typically of something regarded as good) become smaller, fewer, or less; decrease.'
  },
  {primaryWord: 'in an unhurried manner',
   meaning:     'relaxed and leisurely; without hurry or haste'
  },
  {primaryWord: 'leisurely',
   meaning:     'acting or done at leisure; unhurried or relaxed'
  },
  {primaryWord: 'make / take a detour',
   meaning:     'a deviation from a direct course or the usual procedure especially'
  },
  {primaryWord: 'steering wheel',
   meaning:     'a device that a driver rotates in order to steer a vehicle.'
  },
  {primaryWord: 'steer a conversation away',
   meaning:     'when there\'s something that you want to talk about, or something that you want to avoid talking about.'
  },
  {primaryWord: 'turn upside down',
   meaning:     'put in disorder, mix or mess up'
  },
  {primaryWord: 'go astray',
   meaning:     '(of an object) become lost or mislaid'
  },
  {primaryWord: 'hazard',
   meaning:     'a danger or risk'
  },
  {primaryWord: 'stopover',
   meaning:     'a break in a journey'
  },
  {primaryWord: 'berth',
   meaning:     'a fixed bunk on a ship, train, or other means of transport'
  },
  {primaryWord: 'crossing',
   meaning:     'a place where roads or railway lines cross'
  },
  {primaryWord: 'holiday of a lifetime',
   meaning:     'the best holiday/experience/chance etc that you will ever have'
  },
  {primaryWord: 'through train',
   meaning:     'scheduled destination without changing to another train'
  },
  {primaryWord: 'carriage / car',
   meaning:     'any of the separate sections of a train that carry passengers'
  },
  {primaryWord: 'inquiry office',
   meaning:     'which deals with inquiries or requests for information'
  },
  {primaryWord: 'compartment',
   meaning:     'a separate section or part of a structure or container'
  },
  {primaryWord: 'self-catering',
   meaning:     '(of a holiday or accommodation) offering facilities for people to cook their own meals'
  },
  {primaryWord: 'inn',
   meaning:     'a pub, typically one in the country, in some cases providing accommodation'
  },
  {primaryWord: 'guest house',
   meaning:     'a private house offering accommodation to paying guests'
  },
  {primaryWord: 'rough it',
   meaning:     'do without the usual comforts and conveniences'
  },
  {primaryWord: 'exhilarating experience',
   meaning:     'it makes you feel very happy and excited'
  },
  {primaryWord: 'to be out in the wild',
   meaning:     'live in a free and natural state and are not looked after by people'
  },
  {primaryWord: 'to lounge around',
   meaning:     'to pass time idly and indolently'
  },
  {primaryWord: 'idly',
   meaning:     'with no particular purpose, reason, or foundation'
  },
  {primaryWord: 'indolently',
   meaning:     'habitually lazy'
  },
  {primaryWord: 'cosy',
   meaning:     'giving a feeling of comfort, warmth, and relaxation'
  },
  {primaryWord: 'resort',
   meaning:     'a place that is frequented for holidays or recreation or for a particular purpose'
  },
  {primaryWord: 'run out of stream',
   meaning:     'lost energy or interest'
  },
  {primaryWord: 'tutor',
   meaning:     'a private teacher'
  },
  {primaryWord: 'down the line',
   meaning:     'later'
  },
  {primaryWord: 'at / behind the wheel',
   meaning:     'control situation'
  },
  {primaryWord: 'do a U-turn',
   meaning:     'a change of plan, especially a reversal of political policy'
  },
  {primaryWord: 'go / move / step up a gear',
   meaning:     'start to work more effectively'
  },
  {primaryWord: 'take a nosedive',
   meaning:     'to fall rapidly'
  },
  {primaryWord: 'nosedive',
   meaning:     'a steep downward plunge by an aircraft'
  },
  {primaryWord: 'come to a standstill',
   meaning:     'stopped'
  },
  {primaryWord: 'drift along',
   meaning:     'to live one\'s life without much effort or direction.'
  },
  {primaryWord: 'with flying colors',
   meaning:     'very successfully'
  },
  {primaryWord: 'miss the boat',
   meaning:     'miss the chance'
  },
  {primaryWord: 'go off the rails',
   meaning:     'start to behave in not normal way'
  },
  {primaryWord: 'tenant',
   meaning:     'a person who occupies land or property rented from a landlord'
  },
  {primaryWord: 'mouldy',
   meaning:     'covered with a fungal growth which causes decay, due to age or damp conditions'
  },
  {primaryWord: 'fungus',
   meaning:     'any of a group of spore-producing organisms feeding on organic matter, including moulds, yeast, mushrooms, and toadstools.'
  },
  {primaryWord: 'spotless',
   meaning:     'absolutely clean or pure; immaculate'
  },
  {primaryWord: 'snap up',
   meaning:     'to buy or take (something or someone) quickly or eagerly'
  },
  {primaryWord: 'vacate',
   meaning:     'leave (a place that one previously occupied)'
  },
  {primaryWord: 'amenity',
   meaning:     'a desirable or useful feature or facility of a building or place'
  },
  {primaryWord: 'fizzy',
   meaning:     '(of a drink) containing bubbles of gas / full of energy or exuberance'
  },
  {primaryWord: 'poured out',
   meaning:     'to freely express'
  },
  {primaryWord: 'thaw (co)',
   meaning:     'a period of warmer weather that thaws ice and snow'
  },
  {primaryWord: 'melt',
   meaning:     'make or become liquefied by heat'
  },
  {primaryWord: 'stifling',
   meaning:     'of heat, air, or a room) very hot and causing difficulties in breathing'
  },
  {primaryWord: 'muggy',
   meaning:     '(of the weather) unpleasantly warm and humid'
  },
  ////////////
  // HEALTH //
  ////////////
  {primaryWord: 'rash',
   meaning:     'breaking out of the skin with red spots (as from illness or an allergic reaction)'
  },
  {primaryWord: 'ankle',
   meaning:     'the joint connecting the foot with the leg.'
  },
  {primaryWord: 'unconscious',
   meaning:     'unconsciousness is when a person is unable to respond to people and activities'
  },
  {primaryWord: 'sprain',
   meaning:     'wrench or twist the ligaments of (an ankle, wrist, or other joint) violently so as to cause pain and swelling but not dislocation'
  },
  {primaryWord: 'choke',
   meaning:     '(of a person or animal) have severe difficulty in breathing because of a constricted or obstructed throat or a lack of air'
  },
  {primaryWord: 'swell',
   meaning:     '(especially of a part of the body) become larger or rounder in size, typically as a result of an accumulation of fluid.'
  },
  {primaryWord: 'faint / dizzy',
   meaning:     'feeling weak and dizzy and close to losing consciousness'
  },
  {primaryWord: 'blister',
   meaning:     'a small bubble on the skin filled with serum and caused by friction, burning, or other damage'
  },
  {primaryWord: 'pass out',
   meaning:     'become unconscious'
  },
  {primaryWord: 'throw up',
   meaning:     'vomit / abandon or give up something, especially one\'s job'
  },
  {primaryWord: 'twist',
   meaning:     'cause to rotate around a stationary point; turn'
  },
  {primaryWord: 'dislocation',
   meaning:     'injury or disability caused when the normal position of a joint or other part of the body is disturbed'
  },
  {primaryWord: 'ligaments',
   meaning:     'a membranous fold that supports an organ and keeps it in position'
  },
  {primaryWord: 'consciousness [коншиснес]',
   meaning:     'the state of being aware of and responsive to one\'s surroundings'
  },
  {primaryWord: 'fold',
   meaning:     'over or wrap something in (a soft or flexible material)'
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },
  {primaryWord: '',
   meaning:     ''
  },



]

export default englishClasses