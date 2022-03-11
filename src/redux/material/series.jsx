const series = [
  // Cowboy Bebop 2021
  {
    russianWord: 'team up',
    correctAnswer: 'to join with someone to work together'
  },
  {
    russianWord: 'tie',
    correctAnswer: 'a piece of string, cord, or similar used for fastening or tying something'
  },
  {
    russianWord: 'fastening',
    correctAnswer: 'a device that closes or secures something'
  },
  {
    russianWord: 'cord',
    correctAnswer: 'thin, flexible string or rope made from several twisted strands'
  },
  {
    russianWord: 'string',
    correctAnswer: 'material consisting of threads of cotton, hemp, or other material twisted together to form a thin length.'
  },
  {
    russianWord: 'hemp',
    correctAnswer: 'the cannabis plant, especially when grown for fibre'
  },
  {
    russianWord: 'thin',
    correctAnswer: 'with opposite surfaces or sides that are close or relatively close together'
  },
  {
    russianWord: 'nab',
    correctAnswer: 'catch (someone) doing something wrong'
  },
  {
    russianWord: 'contempt',
    correctAnswer: 'the feeling that a person or a thing is worthless or beneath consideration'
  },
  {
    russianWord: 'chump',
    correctAnswer: 'a foolish or easily deceived person'
  },
  {
    russianWord: 'chump change',
    correctAnswer: 'a small or insignificant amount of money'
  },
  {
    russianWord: 'chop',
    correctAnswer: 'cut (something) into pieces with repeated sharp blows of an axe or knife'
  },
  {
    russianWord: 'mole',
    correctAnswer: 'a small burrowing mammal with dark velvety fur, a long muzzle, and very small eyes'
  },
  {
    russianWord: 'burrow',
    correctAnswer: '(of an animal) make a hole or tunnel, typically for use as a dwelling'
  },
  {
    russianWord: 'dwelling',
    correctAnswer: 'a house, flat, or other place of residence'
  },
  {
    russianWord: 'nickel and dime',
    correctAnswer: 'unimportant / insignificant'
  },
  {
    russianWord: 'mercenary',
    correctAnswer: 'primarily concerned with making money at the expense of ethics'
  },
  {
    russianWord: 'vile',
    correctAnswer: 'morally bad; wicked'
  },
  {
    russianWord: 'moniker',
    correctAnswer: 'a person\'s name, especially a nickname or alias'
  },
  {
    russianWord: 'loofah',
    correctAnswer: 'the fibrous interior of a fruit that resembles a marrow, dried and used as a sponge for washing the body'
  },
  {
    russianWord: 'duct tape',
    correctAnswer: 'strong cloth-backed waterproof adhesive tape'
  },
  {
    russianWord: 'tape',
    correctAnswer: 'a narrow strip of material, typically used to hold or fasten something.'
  },
  {
    russianWord: 'adhesive',
    correctAnswer: 'a substance used for sticking objects or materials together; glue'
  },
  {
    russianWord: 'wrench',
    correctAnswer: 'adjustable metal tool used for tightening or loosening metal nuts of different sizes. '
  },
  {
    russianWord: 'ham',
    correctAnswer: 'salted or smoked meat from the upper part of a pig\'s leg'
  },
  {
    russianWord: 'rustle up',
    correctAnswer: 'to make, find, or prepare something quickly'
  },
  {
    russianWord: 'scam',
    correctAnswer: 'a dishonest scheme; a fraud'
  },
  {
    russianWord: 'pipe dream',
    correctAnswer: 'an unattainable or fanciful hope or scheme'
  },
  {
    russianWord: 'hustle',
    correctAnswer: 'a state of great activity'
  },
  {
    russianWord: 'interstellar',
    correctAnswer: 'occurring or situated between stars'
  },
  {
    russianWord: 'kink',
    correctAnswer: 'a sharp twist or curve in something that is otherwise straight'
  },
  {
    russianWord: 'recital',
    correctAnswer: 'a performance of a programme of music'
  },
  {
    russianWord: 'be on the lam ',
    correctAnswer: 'running away / in escape status.'
  },
  {
    russianWord: 'lewd',
    correctAnswer: 'crude and offensive in a sexual way'
  },
  {
    russianWord: 'vagary',
    correctAnswer: 'an unexpected and inexplicable change in a situation or in someone\'s behaviour'
  },
  {
    russianWord: 'minutiae [миньюшиай]',
    correctAnswer: 'the small, precise, or trivial details of something'
  },
  // Witcher
  {
    russianWord: 'lodgings',
    correctAnswer: 'temporary accommodation'
  },
  {
    russianWord: 'keep low profile',
    correctAnswer: 'stay out of public notice, avoid attracting attention to oneself'
  },
  {
    russianWord: 'bliss',
    correctAnswer: 'perfect happiness; great joy'
  },
  {
    russianWord: 'chap',
    correctAnswer: 'guy or a fellow — a boy or man who\'s a friend, acquaintance, or a friendly stranger'
  },
  {
    russianWord: 'lame',
    correctAnswer: '(especially of an animal) unable to walk without difficulty as the result of an injury'
  },
  {
    russianWord: 'redeem',
    correctAnswer: 'compensate for the faults or bad aspects of'
  },
  {
    russianWord: 'den',
    correctAnswer: 'a wild mammal\'s hidden home; a lair'
  },
  {
    russianWord: 'codger',
    correctAnswer: 'a man, esp an old or eccentric one'
  },
  {
    russianWord: 'beg',
    correctAnswer: 'ask someone earnestly or humbly for something'
  },
  {
    russianWord: 'hesitation',
    correctAnswer: 'the action of pausing before saying or doing something'
  },
  {
    russianWord: 'lurk',
    correctAnswer: 'be or remain hidden so as to wait in ambush for someone or something'
  },
  {
    russianWord: 'ambush',
    correctAnswer: 'a surprise attack by people lying in wait in a concealed position'
  },
  {
    russianWord: 'concealed',
    correctAnswer: 'kept secret; hidden'
  },
  {
    russianWord: 'hatred',
    correctAnswer: 'intense dislike; hate'
  },
  {
    russianWord: 'conduit',
    correctAnswer: 'a channel for conveying water or other fluid'
  },
  {
    russianWord: 'gossip',
    correctAnswer: 'casual conversation about other people, typically involving details that are not confirmed as being true'
  },
  {
    russianWord: 'flee',
    correctAnswer: 'run away from a place or situation of danger'
  },
  // arcane
  {
    russianWord: 'jinx',
    correctAnswer: 'a person or thing that brings bad luck'
  },
  {
    russianWord: 'misery',
    correctAnswer: 'a state or feeling of great physical or mental distress or discomfort'
  },
  {
    russianWord: 'nun',
    correctAnswer: 'a member of a religious community of women'
  },
  {
    russianWord: '',
    correctAnswer: ''
  },
  {
    russianWord: '',
    correctAnswer: ''
  },
  {
    russianWord: '',
    correctAnswer: ''
  }
]

export default series