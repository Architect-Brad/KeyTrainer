const WORDS_NORMAL = [
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'it',
    'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this',
    'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or',
    'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
    'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
    'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know',
    'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could',
    'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come',
    'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how',
    'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because',
    'any', 'these', 'give', 'day', 'most', 'us', 'great', 'between', 'need',
    'large', 'often', 'hand', 'high', 'place', 'small', 'under', 'long',
    'right', 'still', 'house', 'world', 'last', 'school', 'never', 'city',
    'tree', 'cross', 'farm', 'hard', 'start', 'might', 'story', 'saw',
    'far', 'sea', 'draw', 'left', 'late', 'run', 'while', 'press', 'close',
    'night', 'real', 'life', 'few', 'north', 'open', 'seem', 'together',
    'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease',
    'paper', 'group', 'always', 'music', 'those', 'both', 'mark', 'book',
    'letter', 'until', 'mile', 'river', 'car', 'feet', 'care', 'second',
    'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever',
    'red', 'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body',
    'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'door',
    'product', 'black', 'short', 'number', 'class', 'wind', 'question',
    'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire',
    'south', 'problem', 'piece', 'told', 'knew', 'pass', 'since', 'top',
    'whole', 'king', 'space', 'heard', 'best', 'hour', 'better', 'true',
    'during', 'hundred', 'remember', 'step', 'early', 'hold', 'west',
    'ground', 'interest', 'reach', 'fast', 'five', 'sing', 'listen',
    'six', 'table', 'travel', 'less', 'morning', 'ten', 'simple', 'several',
    'vowel', 'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center',
    'love', 'person', 'money', 'serve', 'appear', 'road', 'map', 'science',
    'friend', 'began', 'idea', 'minute', 'field', 'bear', 'fly', 'stop',
    'today', 'please', 'woman', 'man', 'change', 'believe', 'free', 'strong',
    'thought', 'lead', 'light', 'sound', 'write', 'month', 'verb', 'sentence'
];

const WORDS_EASY = [
    'a', 'as', 'at', 'am', 'an', 'ad', 'ah', 'ax', 'be', 'by', 'big', 'but', 'bus',
    'can', 'car', 'cat', 'cup', 'cow', 'cut', 'day', 'did', 'dog', 'dot', 'dry',
    'eat', 'elf', 'end', 'eye', 'far', 'fat', 'few', 'fit', 'fix', 'fly', 'for',
    'fun', 'fog', 'get', 'got', 'gas', 'had', 'has', 'hat', 'him', 'her', 'hid',
    'hit', 'hot', 'how', 'ice', 'ill', 'its', 'jam', 'jar', 'jet', 'job', 'joy',
    'key', 'kid', 'kit', 'lap', 'law', 'lay', 'led', 'leg', 'let', 'lid', 'lip',
    'lot', 'low', 'man', 'map', 'mat', 'may', 'men', 'mix', 'nap', 'net', 'new',
    'nod', 'nor', 'not', 'now', 'nut', 'oak', 'odd', 'off', 'old', 'one', 'our',
    'out', 'owl', 'own', 'pad', 'pan', 'pat', 'pay', 'pen', 'pet', 'pie', 'pin',
    'pit', 'pop', 'pot', 'put', 'rag', 'ram', 'ran', 'rat', 'raw', 'red', 'rib',
    'rig', 'rim', 'rob', 'rod', 'row', 'rub', 'rug', 'run', 'sad', 'sat', 'saw',
    'say', 'set', 'she', 'sit', 'six', 'ski', 'sky', 'sly', 'sob', 'sum', 'sun',
    'tab', 'tag', 'tan', 'tap', 'tar', 'tax', 'ten', 'the', 'tie', 'tin', 'tip',
    'toe', 'ton', 'too', 'top', 'toy', 'try', 'tub', 'tug', 'two', 'use', 'van',
    'vat', 'vet', 'vow', 'wad', 'wag', 'war', 'was', 'wax', 'web', 'wed', 'wet',
    'who', 'why', 'win', 'wit', 'won', 'yet', 'zap', 'zip', 'zoo', 'ball', 'barn',
    'belt', 'bird', 'blow', 'blue', 'boat', 'bold', 'bone', 'born', 'both', 'buck',
    'bulb', 'bulk', 'bump', 'burn', 'bust', 'calm', 'camp', 'card', 'care', 'cart',
    'cash', 'cast', 'chat', 'chef', 'chin', 'chip', 'chop', 'clam', 'clap', 'claw',
    'clay', 'clip', 'club', 'clue', 'coal', 'coat', 'cold', 'colt', 'comb', 'come',
    'cook', 'cool', 'cope', 'cord', 'core', 'cork', 'corn', 'cost', 'cozy', 'crab',
    'crew', 'crop', 'crow', 'cube', 'curl', 'cute', 'damp', 'dare', 'dark', 'dash',
    'dawn', 'dead', 'deaf', 'deal', 'dear', 'debt', 'deck', 'deed', 'deem', 'deep',
    'deer', 'defy', 'dent', 'deny', 'desk', 'dial', 'dice', 'diet', 'dull', 'dumb',
    'dump', 'dune', 'dunk', 'dust', 'duty', 'earn', 'ease', 'edge', 'edit', 'else',
    'emit', 'envy', 'even', 'ever', 'evil', 'exam', 'exit', 'face', 'fact', 'fade',
    'fail', 'fair', 'fake', 'fall', 'fame', 'fang', 'farm', 'fast', 'fate', 'fawn',
    'fear', 'feed', 'feel', 'fell', 'felt', 'fern', 'fest', 'file', 'fill', 'film',
    'find', 'fine', 'fire', 'firm', 'fish', ' fist', 'flag', 'flap', 'flat', 'flea',
    'fled', 'flew', 'flex', 'flip', 'flit', 'flog', 'flow', 'foam', 'fold', 'folk',
    'fond', 'food', 'fool', 'foot', 'ford', 'fore', 'fork', 'form', 'fort', 'foul',
    'four', 'fowl', 'free', 'frog', 'from', 'fuel', 'full', 'fume', 'fund', 'fuse',
    'fuss', 'fuzz', 'gain', 'gale', 'game', 'gang', 'gape', 'gash', 'gasp', 'gate',
    'gave', 'gaze', 'gear', 'gene', 'gift', 'gild', 'gill', 'gilt', 'girl', 'girt',
    'give', 'glad', 'glee', 'glen', 'glib', 'glow', 'glue', 'glum', 'glut', 'gnat',
    'gnaw', 'goad', 'goat', 'gobs', 'goes', 'gold', 'golf', 'gone', 'good', 'gore',
    'grab', 'gray', 'grew', 'grey', 'grid', 'grim', 'grin', 'grip', 'grit', 'grow',
    'gulf', 'gull', 'gulp', 'gust', 'guts', 'hail', 'hair', 'hale', 'half', 'hall',
    'halt', 'hand', 'hang', 'hare', 'hark', 'harm', 'harp', 'hash', 'haul', 'have',
    'hawk', 'haze', 'hazy', 'head', 'heal', 'heap', 'hear', 'heat', 'heed', 'heel',
    'held', 'hero', 'hide', 'high', 'hike', 'hill', 'hilt', 'hind', 'hint', 'hire',
    'hiss', 'hive', 'hoof', 'hook', 'hope', 'horn', 'hose', 'host', 'hour', 'howl',
    'huge', 'hull', 'hump', 'hung', 'hunt', 'hurt', 'hush', 'husk', 'icon', 'idea',
    'idle', 'inch', 'into', 'iron', 'isle', 'item', 'jack', 'jade', 'jail', 'jaws',
    'jazz', 'jean', 'jeer', 'jerk', 'jest', 'jewe', 'join', 'joke', 'jolt', 'jump',
    'jury', 'keen', 'keep', 'kept', 'kick', 'kill', 'kind', 'king', 'kiss', 'kite',
    'knee', 'knit', 'knob', 'knot', 'know', 'lace', 'lack', 'lady', 'laid', 'lake',
    'lamb', 'lame', 'lamp', 'land', 'lane', 'lark', 'lash', 'lass', 'last', 'late',
    'lawn', 'lazy', 'lead', 'leaf', 'leak', 'lean', 'leap', 'left', 'lend', 'lens',
    'less', 'liar', 'lick', 'life', 'lift', 'like', 'limb', 'lime', 'limp', 'line',
    'link', 'lint', 'live', 'load', 'loaf', 'loan', 'lock', 'loft', 'lone', 'long',
    'look', 'loop', 'lord', 'lore', 'lose', 'loss', 'lost', 'loud', 'love', 'luck',
    'lump', 'lung', 'lure', 'lurk', 'lust', 'made', 'mail', 'main', 'make', 'male',
    'mall', 'malt', 'mane', 'many', 'mare', 'mark', 'mash', 'mask', 'mass', 'mast',
    'mate', 'maze', 'mead', 'meal', 'mean', 'meat', 'meet', 'meld', 'melt', 'memo',
    'mend', 'menu', 'mere', 'mesh', 'mess', 'mild', 'mile', 'milk', 'mill', 'milt',
    'mind', 'mine', 'miss', 'mist', 'mite', 'moan', 'moat', 'mock', 'mode', 'mold',
    'mole', 'molt', 'monk', 'mood', 'moon', 'moor', 'more', 'moss', 'most', 'moth',
    'move', 'much', 'mule', 'mull', 'muse', 'mush', 'musk', 'must', 'mute', 'myth',
    'nail', 'name', 'nape', 'nave', 'navy', 'near', 'neat', 'need', 'nest', 'next',
    'nice', 'nine', 'node', 'none', 'noon', 'norm', 'nose', 'note', 'noun', 'nude',
    'numb', 'oath', 'obey', 'odds', 'omen', 'omit', 'once', 'open', 'oral', 'oven',
    'over', 'pace', 'pack', 'page', 'paid', 'pail', 'pain', 'pair', 'pale', 'palm',
    'pane', 'pang', 'pare', 'park', 'part', 'pass', 'past', 'pave', 'peak', 'peal',
    'peat', 'peck', 'peel', 'peer', 'pelt', 'pend', 'perk', 'pest', 'pick', 'pier',
    'pile', 'pine', 'pink', 'pipe', 'plan', 'play', 'plea', 'plod', 'plot', 'plow',
    'plug', 'plum', 'plus', 'poke', 'pole', 'poll', 'polo', 'pond', 'pool', 'poor',
    'pope', 'pore', 'pork', 'port', 'pose', 'post', 'pour', 'pray', 'prey', 'prod',
    'prop', 'pull', 'pulp', 'pump', 'pure', 'purr', 'push', 'quit', 'quiz', 'race',
    'rack', 'raft', 'rage', 'raid', 'rail', 'rain', 'rake', 'ramp', 'rang', 'rank',
    'rant', 'rare', 'rash', 'rate', 'rave', 'read', 'real', 'reap', 'rear', 'reef',
    'reel', 'rein', 'rely', 'rend', 'rent', 'rest', 'rich', 'ride', 'rift', 'ring',
    'riot', 'rise', 'risk', 'road', 'roam', 'roar', 'robe', 'rock', 'rode', 'role',
    'roll', 'roof', 'room', 'root', 'rope', 'rose', 'rosy', 'rout', 'rove', 'rude',
    'ruin', 'rule', 'rump', 'rung', 'ruse', 'ruth', 'safe', 'sage', 'said', 'sail',
    'sake', 'sale', 'salt', 'same', 'sand', 'sang', 'sank', 'save', 'seal', 'seam',
    'sear', 'seat', 'seed', 'seek', 'seem', 'seen', 'self', 'sell', 'send', 'sent',
    'shed', 'shin', 'ship', 'shoe', 'shoo', 'shop', 'shot', 'show', 'shut', 'side',
    'sift', 'sigh', 'sign', 'silk', 'sill', 'silt', 'sing', 'sink', 'site', 'size',
    'skid', 'skim', 'skin', 'skip', 'slab', 'slag', 'slam', 'slap', 'slat', 'slaw',
    'slay', 'sled', 'slew', 'slid', 'slim', 'slip', 'slit', 'slob', 'slop', 'slot',
    'slow', 'slug', 'slum', 'slut', 'smog', 'snag', 'snap', 'snip', 'snob', 'snow',
    'snug', 'soak', 'soap', 'soar', 'sock', 'soda', 'sofa', 'soil', 'sold', 'sole',
    'some', 'song', 'soon', 'soot', 'sore', 'sort', 'soul', 'sour', 'sown', 'span',
    'spar', 'spec', 'sped', 'spin', 'spit', 'spot', 'spry', 'spud', 'spur', 'stab',
    'stag', 'star', 'stay', 'stem', 'step', 'stew', 'stir', 'stop', 'stub', 'stud',
    'stun', 'such', 'suit', 'sulk', 'sung', 'sunk', 'sure', 'surf', 'swam', 'swan',
    'swap', 'swim', 'tail', 'take', 'tale', 'talk', 'tall', 'tame', 'tank', 'tape',
    'tarn', 'tart', 'task', 'tame', 'team', 'tear', 'tell', 'tend', 'tent', 'term',
    'test', 'text', 'than', 'that', 'them', 'then', 'they', 'thin', 'this', 'tick',
    'tide', 'tidy', 'tied', 'tier', 'till', 'tilt', 'time', 'tint', 'tiny', 'tire',
    'toad', 'toil', 'told', 'toll', 'tomb', 'tone', 'took', 'tool', 'tops', 'tore',
    'torn', 'toss', 'tour', 'town', 'trap', 'tray', 'tree', 'trim', 'trip', 'trot',
    'true', 'tube', 'tuck', 'tuft', 'tuna', 'tune', 'turf', 'turn', 'tusk', 'type',
    'ugly', 'undo', 'unit', 'unto', 'upon', 'urge', 'used', 'user', 'vain', 'vale',
    'vane', 'vary', 'vast', 'veal', 'veil', 'vein', 'vent', 'verb', 'very', 'vest',
    'veto', 'vice', 'view', 'vine', 'void', 'volt', 'vote', 'wade', 'wage', 'wail',
    'wait', 'wake', 'walk', 'wall', 'wand', 'want', 'ward', 'warm', 'warn', 'warp',
    'wart', 'wary', 'wash', 'wave', 'wavy', 'waxy', 'weak', 'wean', 'wear', 'weed',
    'week', 'weep', 'weld', 'well', 'went', 'were', 'west', 'what', 'when', 'whip',
    'whom', 'wick', 'wide', 'wife', 'wild', 'will', 'wilt', 'wily', 'wimp', 'wind',
    'wine', 'wing', 'wink', 'wipe', 'wire', 'wise', 'wish', 'wisp', 'with', 'woke',
    'wolf', 'wood', 'wool', 'word', 'wore', 'work', 'worm', 'worn', 'wove', 'wrap',
    'wren', 'yank', 'yard', 'yarn', 'year', 'yell', 'yoga', 'yoke', 'your', 'zeal',
    'zero', 'zinc', 'zone', 'zoom'
];

const WORDS_HARD = [
    'abandon', 'ability', 'absence', 'absorb', 'abstract', 'abuse',
    'academic', 'accelerate', 'acceptance', 'accessible', 'acclaim',
    'accomplish', 'accountable', 'accumulate', 'acknowledge',
    'acquisition', 'adolescent', 'advanced', 'adversary', 'aesthetic',
    'affection', 'aggressive', 'algorithm', 'allocation', 'alternative',
    'ambiguous', 'amplify', 'analysis', 'anticipate', 'apparatus',
    'appreciate', 'approach', 'arbitrary', 'assessment', 'assignment',
    'assistance', 'assumption', 'atmosphere', 'attachment', 'authority',
    'autonomous', 'availability', 'bankruptcy', 'benchmark', 'benevolent',
    'boundary', 'brilliant', 'bureaucracy', 'calculate', 'capability',
    'catastrophe', 'certificate', 'challenge', 'character', 'circumstance',
    'civilization', 'collaborate', 'commission', 'commitment', 'commodity',
    'communicate', 'comparable', 'compassion', 'compensate', 'competence',
    'competition', 'complexity', 'compliment', 'comprehend', 'compromise',
    'concentrate', 'conclusion', 'conference', 'confidence', 'confirmation',
    'conscience', 'consensus', 'consequence', 'conservation', 'consistent',
    'consolidate', 'conspiracy', 'constitution', 'constraint', 'consultant',
    'consumption', 'contemplate', 'contemporary', 'contradiction',
    'contribution', 'controversy', 'convenience', 'conventional',
    'conversation', 'coordinate', 'correlation', 'courageous', 'creativity',
    'credibility', 'criticism', 'cultivate', 'curriculum', 'declaration',
    'dedication', 'defensive', 'definitive', 'deliberate', 'democratic',
    'demonstrate', 'depression', 'derivative', 'descendant', 'destruction',
    'determination', 'development', 'diagnostic', 'dictionary',
    'discipline', 'discrimination', 'discussion', 'dismissal',
    'disposition', 'distribution', 'documentation', 'domesticate',
    'dominance', 'dramatize', 'ecosystem', 'elaborate', 'elimination',
    'embarrass', 'emergency', 'emotional', 'emphasize', 'empirical',
    'employment', 'encounter', 'encouragement', 'engagement', 'engineering',
    'enhancement', 'enormous', 'enterprise', 'enthusiasm', 'entrepreneur',
    'environment', 'equilibrium', 'equivalent', 'essential', 'establish',
    'evaluation', 'eventually', 'everything', 'evident', 'exaggerate',
    'examination', 'excellence', 'exception', 'excessive', 'excitement',
    'exclusion', 'execution', 'exhaustive', 'exhibition', 'existence',
    'expansion', 'expectation', 'expedition', 'expenditure', 'experiment',
    'expertise', 'explanation', 'explicit', 'exploration', 'exponential',
    'expression', 'extension', 'extensive', 'extraordinary', 'extravagant',
    'fabricate', 'facilitate', 'familiarize', 'fascination', 'feasibility',
    'federation', 'flexibility', 'forecast', 'forgiveness', 'formidable',
    'formulation', 'foundation', 'framework', 'frequency', 'frustration',
    'functionality', 'fundamental', 'generation', 'generosity', 'genuinely',
    'government', 'gratitude', 'guarantee', 'guideline', 'harmonious',
    'hierarchy', 'highlight', 'hospitality', 'humanitarian', 'hypothesis',
    'identical', 'identification', 'ideology', 'ignorance', 'illuminate',
    'illustrate', 'imagination', 'immediate', 'immigration', 'implement',
    'implication', 'importance', 'impression', 'improvement', 'inability',
    'inadequate', 'incentive', 'incident', 'inclusion', 'incorporate',
    'incredible', 'independence', 'indication', 'individual', 'industrial',
    'inevitable', 'inexpensive', 'influence', 'information', 'infrastructure',
    'initiative', 'innovation', 'inspection', 'inspiration', 'institution',
    'instruction', 'instrument', 'integration', 'integrity', 'intellectual',
    'intelligence', 'intensity', 'intention', 'interaction', 'intermediate',
    'internal', 'interpretation', 'intervention', 'introduction', 'intuition',
    'investment', 'invitation', 'involvement', 'journalism', 'judgment',
    'justification', 'knowledge', 'laboratory', 'landscape', 'legislature',
    'legitimate', 'liberation', 'likelihood', 'limitation', 'linguistic',
    'literature', 'livelihood', 'logistics', 'luxurious', 'machinery',
    'magnificent', 'maintenance', 'management', 'manipulate', 'manufacture',
    'masterpiece', 'material', 'mathematics', 'mechanism', 'medication',
    'membership', 'metaphor', 'methodology', 'metropolitan', 'migration',
    'military', 'mineral', 'minimize', 'modification', 'monopoly',
    'monument', 'motivation', 'mysterious', 'narrative', 'navigation',
    'necessity', 'negotiation', 'neighborhood', 'networking', 'objective',
    'obligation', 'observation', 'obstacle', 'occupation', 'offensive',
    'opportunity', 'opposition', 'optimistic', 'orchestra', 'orientation',
    'originally', 'outstanding', 'overcome', 'overwhelm', 'ownership',
    'participation', 'particular', 'passionate', 'patience', 'perception',
    'perfection', 'performance', 'permanent', 'permission', 'persistence',
    'personality', 'perspective', 'phenomenon', 'philosophy', 'photograph',
    'physician', 'pioneering', 'political', 'popularity', 'population',
    'portfolio', 'possession', 'possibility', 'potential', 'practical',
    'precaution', 'precision', 'prediction', 'preference', 'prejudice',
    'preparation', 'prescription', 'presentation', 'preservation',
    'prestigious', 'prevention', 'principle', 'privilege', 'probability',
    'procedure', 'production', 'profession', 'proficiency', 'profound',
    'progression', 'prominent', 'promotion', 'propaganda', 'property',
    'proportion', 'proposal', 'prosecution', 'protection', 'protective',
    'protocol', 'prototype', 'provision', 'psychology', 'publication',
    'purchase', 'qualification', 'quantity', 'radiation', 'realistic',
    'reasonable', 'rebellion', 'reception', 'recession', 'recognition',
    'recommend', 'reconstruction', 'recreation', 'recruitment', 'reduction',
    'reference', 'reflection', 'reformation', 'regardless', 'regulation',
    'rehabilitation', 'reinforcement', 'rejection', 'relationship',
    'relevance', 'reliability', 'religion', 'reluctance', 'remarkable',
    'renaissance', 'renowned', 'repetition', 'replacement', 'reputation',
    'requirement', 'resemblance', 'reservation', 'residence', 'resignation',
    'resistance', 'resolution', 'resource', 'responsibility', 'restoration',
    'restriction', 'retirement', 'revelation', 'revenue', 'revolution',
    'rhetoric', 'rhythm', 'sacrifice', 'salvation', 'sanction',
    'satisfaction', 'scenario', 'scholarship', 'scientific', 'scrutiny',
    'secondary', 'security', 'sensation', 'sensitivity', 'sentiment',
    'separation', 'sequence', 'settlement', 'significant', 'similarity',
    'simplicity', 'simulation', 'situation', 'sociology', 'solidarity',
    'sophisticated', 'sovereignty', 'specialist', 'spectrum', 'spiritual',
    'spontaneous', 'stakeholder', 'statistics', 'stereotype', 'stimulate',
    'strategic', 'strengthen', 'structure', 'struggle', 'subjective',
    'submission', 'subsequent', 'substance', 'substantial', 'substitute',
    'succession', 'sufficient', 'superiority', 'supervision', 'supplement',
    'suppression', 'surrender', 'surroundings', 'surveillance', 'survival',
    'suspension', 'sustainable', 'symbolic', 'symmetry', 'sympathy',
    'symphony', 'synthesis', 'technical', 'technique', 'technology',
    'temporary', 'temptation', 'tendency', 'terminate', 'territory',
    'testament', 'testimony', 'theoretical', 'therapist', 'thorough',
    'threshold', 'tolerance', 'tradition', 'tragedy', 'transaction',
    'transformation', 'transition', 'translation', 'transmission',
    'transparency', 'transportation', 'tremendous', 'triangle', 'tribunal',
    'trigger', 'triumph', 'tuition', 'ultimately', 'unanimous',
    'uncertainty', 'undergraduate', 'undermine', 'unemployment',
    'unfortunate', 'uniform', 'universal', 'unprecedented', 'utilization',
    'validation', 'variation', 'vegetarian', 'vehicle', 'velocity',
    'verification', 'versatile', 'veteran', 'viability', 'vibration',
    'victim', 'vigorous', 'violation', 'visibility', 'vocabulary',
    'vulnerability', 'warranty', 'wilderness', 'willingness', 'withdrawal',
    'witness', 'workforce', 'workshop'
];

const QUOTES = [
    { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
    { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
    { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
    { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
    { text: 'Believe you can and you are halfway there.', author: 'Theodore Roosevelt' },
    { text: 'The only impossible journey is the one you never begin.', author: 'Tony Robbins' },
    { text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.', author: 'Ralph Waldo Emerson' },
    { text: 'Creativity is intelligence having fun.', author: 'Albert Einstein' },
    { text: 'The mind is everything. What you think you become.', author: 'Buddha' },
    { text: 'The best time to plant a tree was twenty years ago. The second best time is now.', author: 'Chinese Proverb' },
    { text: 'An unexamined life is not worth living.', author: 'Socrates' },
    { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
    { text: 'Life is what happens when you are busy making other plans.', author: 'John Lennon' },
    { text: 'Get busy living or get busy dying.', author: 'Stephen King' },
    { text: 'You miss one hundred percent of the shots you never take.', author: 'Wayne Gretzky' },
    { text: 'Whether you think you can or you think you cannot, you are right.', author: 'Henry Ford' },
    { text: 'The best revenge is massive success.', author: 'Frank Sinatra' },
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
    { text: 'Time is the most valuable thing a man can spend.', author: 'Theophrastus' }
];

const PUNCTUATION = ['.', ',', ';', ':', '?', '!'];

const ACCENT_COLORS = [
    { name: 'Red', color: '#e94560' },
    { name: 'Green', color: '#00b894' },
    { name: 'Blue', color: '#0984e3' },
    { name: 'Purple', color: '#a855f7' },
    { name: 'Orange', color: '#f97316' },
    { name: 'Cyan', color: '#06b6d4' },
    { name: 'Pink', color: '#ec4899' }
];

function lightenHex(hex, amount) {
    const num = parseInt(hex.slice(1), 16);
    const r = Math.min(255, ((num >> 16) & 0xff) + amount);
    const g = Math.min(255, ((num >> 8) & 0xff) + amount);
    const b = Math.min(255, (num & 0xff) + amount);
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

const App = {
    mode: 'practice',
    isRunning: false,
    isFinished: false,
    timerId: null,
    startTime: null,
    timeLimit: 30,
    wordCount: 50,
    difficulty: 'normal',
    punctuation: false,
    beginnerMode: false,
    errorRecovery: false,
    layout: 'qwerty',

    text: '',
    charIndex: 0,
    correctCount: 0,
    incorrectCount: 0,
    totalKeystrokes: 0,
    streak: 0,
    bestStreak: 0,
    telemetry: [],
    charsInLastSecond: 0,
    lastTelemetrySecond: 0,
    keyStats: {},
    keyTimings: {},
    keyConfusions: {},
    bigramStats: {},
    bigramTimings: {},
    repeatStats: {},
    charHistory: [],
    charAppearTime: [],
    wordTimings: [],
    _wordStartTime: 0,
    _wordCharCount: 0,
    _wordStartIndex: 0,
    _scrollRaf: null,
    _caret: null,
    _cursorStyle: 'default',
    _blinkTimer: null,
    _telemetryChart: null,
    _wordChart: null,
    isReplaying: false,
    replaySpeed: 1,
    replayIndex: 0,
    replayPaused: false,
    _replayRaf: null,
    _backspaceUsed: false,
    ghostTelemetry: null,
    ghostActive: false,
    ghostEnabled: false,
    ghostIndex: 0,
    ghostStartTime: 0,
    _ghostCaret: null,

    els: {},

    renderAchsPopover() {
        const container = document.getElementById('achs-popover');
        if (container) Achievements.renderPopoverInto(container);
    },

    setupAchsToggle() {
        const toggle = document.getElementById('achs-toggle');
        const popover = document.getElementById('achs-popover');
        if (toggle && popover) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                popover.classList.toggle('open');
                this.renderAchsPopover();
            });
            popover.addEventListener('click', (e) => e.stopPropagation());
            document.addEventListener('click', () => popover.classList.remove('open'), { once: false });
        }
    },

    init() {
        this.els = {
            typingDisplay: document.getElementById('typing-display'),
            typingContainer: document.getElementById('typing-container'),
            mainArea: document.getElementById('main-area'),
            resultsDash: document.getElementById('results-dashboard'),
            statsPanel: document.getElementById('stats-panel'),
            customInput: document.getElementById('custom-input-container'),
            customText: document.getElementById('custom-text'),
            fileInput: document.getElementById('file-input'),
            loadFileBtn: document.getElementById('load-file-btn'),
            startCustom: document.getElementById('start-custom'),
            settingsBar: document.getElementById('settings-bar'),
            liveWpm: document.getElementById('live-wpm'),
            liveAccuracy: document.getElementById('live-accuracy'),
            liveTime: document.getElementById('live-time'),
            liveStreak: document.getElementById('live-streak'),
            liveGhostWpm: document.getElementById('live-ghost-wpm'),
            dashWpm: document.getElementById('dash-wpm'),
            dashAcc: document.getElementById('dash-acc'),
            dashRaw: document.getElementById('dash-raw'),
            dashChars: document.getElementById('dash-chars'),
            dashTime: document.getElementById('dash-time'),
            dashCons: document.getElementById('dash-cons'),
            dashRestart: document.getElementById('dash-restart'),
            clearStats: document.getElementById('clear-stats'),
            progressFill: document.getElementById('progress-fill'),
            themeToggle: document.getElementById('theme-toggle'),
            focusToggle: document.getElementById('focus-toggle')
        };

        this.loadSettings();
        Themes.loadSaved();
        this.loadTheme();
        this.loadAccent();
        Sounds.init();
        this.setupEventListeners();
        Keyboard.init();
        Keyboard.setBeginnerMode(this.beginnerMode);
        if (this.layout !== 'qwerty') Keyboard.setLayout(this.layout);

        const cursorEl = document.createElement('div');
        cursorEl.className = 'caret default';
        this.els.typingDisplay.appendChild(cursorEl);
        this._caret = new Caret(cursorEl);
        try {
            const cs = JSON.parse(localStorage.getItem('keytrainer_cursor') || '{}');
            if (cs.speed) this._caret.setSpeed(cs.speed);
            if (cs.style) this._caret.setStyle(cs.style);
        } catch (e) {}

        Achievements.load();
        Achievements._updateBadge();
        this.renderAchsPopover();
        this.setupAchsToggle();

        this.renderDailyGoals();

        this.switchMode('practice');
    },

    loadSettings() {
        try {
            const saved = localStorage.getItem('keytrainer_settings');
            if (saved) {
                const s = JSON.parse(saved);
                this.timeLimit = s.timeLimit || 30;
                this.wordCount = s.wordCount || 50;
                this.difficulty = s.difficulty || 'normal';
                this.punctuation = s.punctuation || false;
                this.beginnerMode = s.beginnerMode || false;
                this.errorRecovery = s.errorRecovery || false;
                this.layout = s.layout || 'qwerty';
                this.ghostEnabled = s.ghost || false;
            }
        } catch (e) {}

        document.querySelectorAll('[data-time]').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.time) === this.timeLimit);
        });
        document.querySelectorAll('[data-words]').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.words) === this.wordCount);
        });
        document.querySelectorAll('[data-difficulty]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.difficulty === this.difficulty);
        });
        document.querySelectorAll('[data-beginner]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.beginner === (this.beginnerMode ? 'on' : 'off'));
        });
        document.querySelectorAll('[data-error-recovery]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.errorRecovery === (this.errorRecovery ? 'on' : 'off'));
        });
        document.querySelectorAll('[data-punctuation]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.punctuation === (this.punctuation ? 'on' : 'off'));
        });
        document.querySelectorAll('[data-layout]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.layout === this.layout);
        });
        document.querySelectorAll('[data-sounds]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.sounds === (Sounds.enabled ? 'on' : 'off'));
        });
        document.querySelectorAll('[data-sound-pack]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.soundPack === Sounds.profile);
        });
        try {
            const cs = JSON.parse(localStorage.getItem('keytrainer_cursor') || '{}');
            document.querySelectorAll('[data-cursor-speed]').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.cursorSpeed === (cs.speed || 'medium'));
            });
            document.querySelectorAll('[data-cursor-style]').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.cursorStyle === (cs.style || 'default'));
            });
        } catch (e) {}
        document.querySelectorAll('[data-ghost]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.ghost === (this.ghostEnabled ? 'on' : 'off'));
        });
    },

    saveSettings() {
        localStorage.setItem('keytrainer_settings', JSON.stringify({
            timeLimit: this.timeLimit,
            wordCount: this.wordCount,
            difficulty: this.difficulty,
            punctuation: this.punctuation,
            beginnerMode: this.beginnerMode,
            errorRecovery: this.errorRecovery,
            layout: this.layout,
            ghost: this.ghostEnabled
        }));
    },

    setupEventListeners() {
        document.querySelectorAll('[data-mode]').forEach(btn => {
            btn.addEventListener('click', () => this.switchMode(btn.dataset.mode));
        });

        document.querySelectorAll('[data-time]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.timeLimit = parseInt(btn.dataset.time);
                document.querySelectorAll('[data-time]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.saveSettings();
                if (this.mode === 'practice') this.generateAndDisplay();
            });
        });

        document.querySelectorAll('[data-words]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.wordCount = parseInt(btn.dataset.words);
                document.querySelectorAll('[data-words]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.saveSettings();
                if (this.mode === 'words') this.generateAndDisplay();
            });
        });

        document.querySelectorAll('[data-difficulty]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.difficulty = btn.dataset.difficulty;
                document.querySelectorAll('[data-difficulty]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.saveSettings();
                if (this.mode === 'practice') this.generateAndDisplay();
            });
        });

        document.querySelectorAll('[data-beginner]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.beginnerMode = btn.dataset.beginner === 'on';
                document.querySelectorAll('[data-beginner]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.saveSettings();
                Keyboard.setBeginnerMode(this.beginnerMode);
            });
        });

        document.querySelectorAll('[data-error-recovery]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.errorRecovery = btn.dataset.errorRecovery === 'on';
                document.querySelectorAll('[data-error-recovery]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.saveSettings();
            });
        });

        document.querySelectorAll('[data-punctuation]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.punctuation = btn.dataset.punctuation === 'on';
                document.querySelectorAll('[data-punctuation]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.saveSettings();
                if (['practice', 'words'].includes(this.mode)) this.generateAndDisplay();
            });
        });

        document.querySelectorAll('[data-layout]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.layout = btn.dataset.layout;
                document.querySelectorAll('[data-layout]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.saveSettings();
                Keyboard.setLayout(this.layout);
            });
        });

        document.querySelectorAll('[data-sounds]').forEach(btn => {
            btn.addEventListener('click', () => {
                const enabled = Sounds.toggle();
                document.querySelectorAll('[data-sounds]').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('[data-sounds]').forEach(b => {
                    if (b.dataset.sounds === (enabled ? 'on' : 'off')) b.classList.add('active');
                });
            });
        });

        document.querySelectorAll('[data-sound-pack]').forEach(btn => {
            btn.addEventListener('click', () => {
                const pack = btn.dataset.soundPack;
                Sounds.setProfile(pack);
                document.querySelectorAll('[data-sound-pack]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        document.querySelectorAll('[data-cursor-speed]').forEach(btn => {
            btn.addEventListener('click', () => {
                const speed = btn.dataset.cursorSpeed;
                this._caret.setSpeed(speed);
                document.querySelectorAll('[data-cursor-speed]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                localStorage.setItem('keytrainer_cursor', JSON.stringify({
                    speed,
                    style: this._cursorStyle || 'default'
                }));
            });
        });

        document.querySelectorAll('[data-cursor-style]').forEach(btn => {
            btn.addEventListener('click', () => {
                const style = btn.dataset.cursorStyle;
                this._caret.setStyle(style);
                this._cursorStyle = style;
                document.querySelectorAll('[data-cursor-style]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                localStorage.setItem('keytrainer_cursor', JSON.stringify({
                    speed: this._caret._speed || 'medium',
                    style
                }));
            });
        });

        document.querySelectorAll('[data-ghost]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.ghostEnabled = btn.dataset.ghost === 'on';
                document.querySelectorAll('[data-ghost]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.saveSettings();
            });
        });

        this.els.startCustom.addEventListener('click', () => {
            const text = this.els.customText.value.trim();
            if (text) this.prepareCustomTest(text);
        });

        this.els.customText.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                const text = this.els.customText.value.trim();
                if (text) this.prepareCustomTest(text);
            }
        });

        this.els.loadFileBtn.addEventListener('click', () => {
            this.els.fileInput.click();
        });

        this.els.fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                this.els.customText.value = ev.target.result;
            };
            reader.readAsText(file);
            this.els.fileInput.value = '';
        });

        this.els.customInput.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.els.customInput.classList.add('drag-over');
        });

        this.els.customInput.addEventListener('dragleave', () => {
            this.els.customInput.classList.remove('drag-over');
        });

        this.els.customInput.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.els.customInput.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                this.els.customText.value = ev.target.result;
            };
            reader.readAsText(file);
        });

        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        document.addEventListener('keyup', (e) => AntiCheat.keyUp(e.key));
        this.els.typingContainer.addEventListener('click', () => this.focusTest());

        this.els.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.els.focusToggle.addEventListener('click', () => this.toggleFocusMode());

        const popover = document.getElementById('color-popover');
        ACCENT_COLORS.forEach(c => {
            const swatch = document.createElement('button');
            swatch.className = 'color-swatch' + (c.color === '#e94560' ? ' active' : '');
            swatch.dataset.accent = c.color;
            swatch.style.setProperty('--swatch', c.color);
            swatch.title = c.name;
            swatch.addEventListener('click', () => {
                this.setAccent(c.color);
                popover.classList.remove('open');
            });
            popover.appendChild(swatch);
        });

        document.getElementById('color-toggle').addEventListener('click', (e) => {
            e.stopPropagation();
            popover.classList.toggle('open');
        });
        document.addEventListener('click', () => popover.classList.remove('open'), { once: false });
        popover.addEventListener('click', (e) => e.stopPropagation());

        const goalsPopover = document.getElementById('goals-popover');
        const goalsToggle = document.getElementById('goals-toggle');
        if (goalsToggle && goalsPopover) {
            goalsToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                goalsPopover.classList.toggle('open');
            });
            goalsPopover.addEventListener('click', (e) => e.stopPropagation());
        }

        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
            THEMES.forEach(t => {
                const opt = document.createElement('option');
                opt.value = t.id;
                opt.textContent = t.name;
                if (t.id === Themes.current) opt.selected = true;
                themeSelect.appendChild(opt);
            });
            themeSelect.addEventListener('change', () => {
                Themes.apply(themeSelect.value);
                document.querySelectorAll('[data-sounds]').forEach(b => {
                    b.classList.toggle('active', b.dataset.sounds === (Sounds.enabled ? 'on' : 'off'));
                });
            });
        }

        this.els.dashRestart.addEventListener('click', () => this.restartTest());
        document.getElementById('dash-drill')?.addEventListener('click', () => this.startWeaknessDrill());
        document.getElementById('dash-missed')?.addEventListener('click', () => this.startMissedWordDrill());

        document.getElementById('journal-stop')?.addEventListener('click', () => {
            if (this.mode === 'journal' && this.isJournal) this._finishJournal();
        });

        this.els.clearStats.addEventListener('click', async () => {
            if (confirm('Clear all test data?')) {
                await Storage.clearAll();
                if (this.mode === 'stats') this.loadStatsView();
            }
        });

        document.getElementById('export-data')?.addEventListener('click', async () => {
            const allTests = await Storage.getAllTests();
            const keyStats = await Storage.getAllKeyStats();
            const bigramStats = await Storage.getAllBigramStats();
            let wordBank = {};
            try { wordBank = JSON.parse(localStorage.getItem('keytrainer_wordbank')) || {}; } catch {}
            let settings = {};
            try { settings = JSON.parse(localStorage.getItem('keytrainer_settings')) || {}; } catch {}
            let cursor = {};
            try { cursor = JSON.parse(localStorage.getItem('keytrainer_cursor')) || {}; } catch {}
            let goals = {};
            try { goals = JSON.parse(localStorage.getItem('keytrainer_daily_goal')) || {}; } catch {}
            let achievements = {};
            try { achievements = JSON.parse(localStorage.getItem('keytrainer_achievements')) || {}; } catch {}

            const exportData = {
                exportDate: new Date().toISOString(),
                version: 1,
                tests: allTests,
                keyStats,
                bigramStats,
                wordBank,
                settings,
                cursor,
                dailyGoals: goals,
                achievements
            };

            const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `keytrainer-export-${new Date().toISOString().slice(0, 10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

        document.querySelectorAll('.replay-speed').forEach(btn => {
            btn.addEventListener('click', () => {
                if (!this.isReplaying) return;
                this.replaySpeed = parseFloat(btn.dataset.speed);
                document.querySelectorAll('.replay-speed').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    },

    switchMode(mode) {
        if (this.isReplaying) {
            this.isReplaying = false;
            if (this._replayRaf) {
                cancelAnimationFrame(this._replayRaf);
                this._replayRaf = null;
            }
            this._cleanupReplayUI();
        }

        this.mode = mode;
        document.body.classList.remove('zen-mode');
        if (this.isJournal) this._cleanupJournalInput();
        this.isJournal = false;

        document.getElementById('journal-words-stat').style.display = 'none';
        document.getElementById('journal-chars-stat').style.display = 'none';
        document.getElementById('journal-stop').style.display = 'none';

        document.querySelectorAll('[data-mode]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        this.els.mainArea.classList.remove('active');
        this.els.mainArea.classList.remove('active-state');
        this.els.mainArea.classList.add('hidden-state');
        this.els.resultsDash.classList.remove('active-state');
        this.els.resultsDash.classList.add('hidden-state');
        this.els.statsPanel.classList.remove('active');
        this.els.customInput.classList.remove('active');
        this.els.settingsBar.style.display = '';
        document.getElementById('time-setting').style.display = '';
        document.getElementById('word-count-setting').style.display = '';

        if (mode === 'stats') {
            this.els.statsPanel.classList.add('active');
            this.els.settingsBar.style.display = 'none';
            this.stopTest(true);
            this.loadStatsView();
            return;
        }

        if (mode === 'custom') {
            this.els.customInput.classList.add('active');
            this.stopTest(true);
            return;
        }

        if (mode === 'zen') {
            this.els.settingsBar.style.display = 'none';
            document.body.classList.add('zen-mode');
            this.showTypingInterface();
            this.generateAndDisplay();
            return;
        }

        if (mode === 'journal') {
            this.els.settingsBar.style.display = 'none';
            document.getElementById('time-setting').style.display = 'none';
            document.getElementById('word-count-setting').style.display = 'none';
            this._initJournal();
            return;
        }

        document.body.classList.remove('zen-mode');
        this.showTypingInterface();

        if (mode === 'practice') {
            document.getElementById('word-count-setting').style.display = 'none';
        } else if (mode === 'words') {
            document.getElementById('time-setting').style.display = 'none';
        }

        this.generateAndDisplay();
    },

    showTypingInterface() {
        this.els.resultsDash.classList.remove('active-state');
        this.els.resultsDash.classList.add('hidden-state');
        this.els.mainArea.classList.remove('hidden-state');
        this.els.mainArea.classList.add('active-state');
        this._restoreDashboardDefaults();
    },

    _restoreDashboardDefaults() {
        document.getElementById('dash-acc').parentElement.style.display = '';
        document.getElementById('dash-raw').parentElement.style.display = '';
        document.getElementById('dash-cons').parentElement.style.display = '';
        document.querySelector('.dash-header h2').textContent = 'Test Complete!';
        document.getElementById('dash-drill').style.display = '';
        document.getElementById('dash-missed').style.display = '';
        const chartCanvas = document.getElementById('telemetry-chart');
        const wordChart = document.getElementById('word-chart');
        if (chartCanvas) chartCanvas.style.display = '';
        if (wordChart) wordChart.style.display = '';
    },

    _initJournal() {
        document.getElementById('journal-words-stat').style.display = '';
        document.getElementById('journal-chars-stat').style.display = '';
        document.getElementById('journal-stop').style.display = '';
        this.showTypingInterface();
        this.stopTest(true);
        this._journalText = '';
        this._journalChars = 0;
        this._journalWords = 0;
        this.els.typingDisplay.innerHTML = '';
        const caret = this.els.typingDisplay.querySelector('.caret');
        if (caret) caret.remove();
        const cursorEl = document.createElement('div');
        cursorEl.className = 'caret default';
        this.els.typingDisplay.appendChild(cursorEl);
        this._caret = new Caret(cursorEl);
        this._caret.goTo(0, 0);
        this.charIndex = 0;
        this.text = '';
        this.correctCount = 0;
        this.totalKeystrokes = 0;
        this.isJournal = true;
        this.isFinished = false;
        const hi = document.getElementById('hidden-input');
        hi.value = '';
        hi.classList.add('journal-active');
        this._journalInputHandler = (e) => {
            const input = e.target;
            if (e.inputType === 'insertText' && e.data) {
                for (const char of e.data) {
                    if (char === '\n') this._journalNewline();
                    else { this._journalTypeChar(char); Keyboard.pressKey(char); }
                }
            } else if (e.inputType === 'insertFromPaste' && e.data) {
                for (const char of e.data) {
                    if (char === '\n') this._journalNewline();
                    else { this._journalTypeChar(char); Keyboard.pressKey(char); }
                }
            } else if (e.inputType === 'deleteContentBackward') {
                this._journalDelete();
                Keyboard.pressKey('Backspace');
            }
            input.value = '';
        };
        hi.addEventListener('input', this._journalInputHandler);
        hi.focus();
        this.updateLiveStats();
    },

    _journalTypeChar(char) {
        if (!this.isRunning) this.startTest();
        this.totalKeystrokes++;
        this._journalChars++;
        this._journalText += char;
        this.charIndex = this._journalText.length;

        const span = document.createElement('span');
        span.className = 'char journal-char';
        span.textContent = char;
        const caret = this.els.typingDisplay.querySelector('.caret');
        if (caret) this.els.typingDisplay.insertBefore(span, caret);

        if (this._journalText.endsWith(' ')) {
            this._journalWords++;
            document.getElementById('live-journal-words').textContent = this._journalWords;
        }
        document.getElementById('live-journal-chars').textContent = this._journalChars;
        this._scrollJournal();
        this.updateLiveStats();
    },

    _journalNewline() {
        if (!this.isRunning) this.startTest();
        this.totalKeystrokes++;
        this._journalText += '\n';
        this.charIndex = this._journalText.length;
        this._journalWords++;

        const br = document.createElement('br');
        const caret = this.els.typingDisplay.querySelector('.caret');
        if (caret) this.els.typingDisplay.insertBefore(br, caret);

        document.getElementById('live-journal-words').textContent = this._journalWords;
        this._scrollJournal();
    },

    _journalDelete() {
        if (this._journalText.length === 0) return;
        this._backspaceUsed = true;
        this.totalKeystrokes++;

        const last = this._journalText[this._journalText.length - 1];
        if (last === ' ' || last === '\n') {
            this._journalWords = Math.max(0, this._journalWords - 1);
            document.getElementById('live-journal-words').textContent = this._journalWords;
        }

        this._journalText = this._journalText.slice(0, -1);
        this.charIndex = this._journalText.length;
        this._journalChars = this._journalText.replace(/\n/g, '').length;
        document.getElementById('live-journal-chars').textContent = this._journalChars;

        const chars = this.els.typingDisplay.querySelectorAll('.journal-char');
        if (chars.length > 0) {
            const lastEl = chars[chars.length - 1];
            const left = lastEl.offsetLeft;
            const top = lastEl.offsetTop;
            lastEl.remove();
            this._caret.goTo(left || 0, top || 0);
        } else {
            const brs = this.els.typingDisplay.querySelectorAll('br');
            if (brs.length > 0) brs[brs.length - 1].remove();
            this._caret.goTo(0, 0);
        }
    },

    _scrollJournal() {
        const container = this.els.typingContainer;
        container.scrollTop = container.scrollHeight;
    },

    _cleanupJournalInput() {
        const hi = document.getElementById('hidden-input');
        if (this._journalInputHandler) {
            hi.removeEventListener('input', this._journalInputHandler);
            this._journalInputHandler = null;
        }
        hi.classList.remove('journal-active');
        hi.value = '';
    },

    _finishJournal() {
        this._cleanupJournalInput();
        this.isJournal = false;
        this.stopTest(false);
        const elapsed = (Date.now() - this.startTime) / 1000;
        const elapsedMin = elapsed / 60;
        const words = this._journalText.trim() ? this._journalText.trim().split(/\s+/).length : 0;
        const grossWpm = elapsedMin > 0 ? Math.round((words) / elapsedMin) : 0;
        const chars = this._journalChars || 0;
        const keystrokes = this.totalKeystrokes;

        const result = {
            wpm: grossWpm,
            accuracy: 100,
            rawWpm: grossWpm,
            consistency: 100,
            elapsed: Math.round(elapsed),
            mode: 'journal',
            correctChars: chars,
            incorrectChars: 0,
            totalChars: chars,
            missedChars: 0,
            journalWords: words,
            journalChars: chars,
            journalKeystrokes: keystrokes
        };

        this._showJournalResults(result);
        this.saveTestResult(result);
        setTimeout(() => Achievements.check(result, this), 100);
    },

    _showJournalResults(result) {
        this.els.resultsDash.classList.remove('hidden-state');
        this.els.resultsDash.classList.add('active-state');
        this.els.mainArea.classList.remove('active-state');
        this.els.mainArea.classList.add('hidden-state');

        document.getElementById('dash-wpm').textContent = result.wpm;
        document.getElementById('dash-acc').parentElement.style.display = 'none';
        document.getElementById('dash-raw').parentElement.style.display = 'none';
        document.getElementById('dash-cons').parentElement.style.display = 'none';
        document.getElementById('dash-chars').textContent = result.journalWords + 'w ' + result.journalChars + 'c';
        document.querySelector('.dash-header h2').textContent = 'Journal Saved!';
        document.getElementById('best-badge').classList.remove('show');

        document.getElementById('dash-drill').style.display = 'none';
        document.getElementById('dash-missed').style.display = 'none';

        const chartCanvas = document.getElementById('telemetry-chart');
        const wordChart = document.getElementById('word-chart');
        if (chartCanvas) chartCanvas.style.display = 'none';
        if (wordChart) wordChart.style.display = 'none';
    },

    async generateAndDisplay() {
        this.showTypingInterface();
        this.stopTest(true);
        if (this.difficulty === 'adaptive') await this._loadWeakness();
        this.text = this.generateText();
        this.charIndex = 0;
        this.resetCounts();
        this.ghostActive = false;
        this.ghostIndex = 0;
        if (this._ghostCaret) this._ghostCaret.classList.add('hidden');
        const gs = document.getElementById('ghost-wpm-stat');
        if (gs) gs.style.display = 'none';
        this.renderText();
        this.updateLiveStats();
        this.updateProgress();
        Keyboard.reset();

        if (this.mode === 'practice') {
            this.els.liveTime.textContent = this.timeLimit;
        } else {
            this.els.liveTime.textContent = '0';
        }
    },

    _weaknessCache: null,

    async _loadWeakness() {
        const keyStats = await Storage.getAllKeyStats();
        this._weaknessCache = {};
        const defaultWeight = 0.5;
        for (const c of 'abcdefghijklmnopqrstuvwxyz') {
            const stat = keyStats[c];
            if (stat && stat.total > 0) {
                this._weaknessCache[c] = Math.pow(1 - stat.correct / stat.total, 1.5);
            } else {
                this._weaknessCache[c] = defaultWeight;
            }
        }
    },

    _weightedWordSelect(wordList) {
        if (!this._weaknessCache) return wordList[Math.floor(Math.random() * wordList.length)];
        const weights = wordList.map(w => {
            const seen = {};
            let sum = 0;
            let count = 0;
            for (const c of w) {
                if (/^[a-z]$/.test(c) && !seen[c]) {
                    seen[c] = true;
                    sum += this._weaknessCache[c] || 0.5;
                    count++;
                }
            }
            return count > 0 ? sum / count : 0.5;
        });
        const totalWeight = weights.reduce((a, b) => a + b, 0);
        if (totalWeight <= 0) return wordList[Math.floor(Math.random() * wordList.length)];
        let r = Math.random() * totalWeight;
        for (let i = 0; i < wordList.length; i++) {
            r -= weights[i];
            if (r <= 0) return wordList[i];
        }
        return wordList[wordList.length - 1];
    },

    _updateWordBank(startIdx, endIdx) {
        if (startIdx >= endIdx || this.text[startIdx] === ' ') return;
        const word = this.text.slice(startIdx, endIdx).replace(/\s/g, '');
        if (!word) return;
        let hasError = false;
        for (let i = startIdx; i < endIdx; i++) {
            if (this.charHistory[i] && this.charHistory[i].correct === false) { hasError = true; break; }
        }
        if (!hasError) return;
        const bank = this._loadWordBank();
        if (!bank[word]) bank[word] = { missed: 0, corrected: 0 };
        bank[word].missed++;
        bank[word].lastSeen = Date.now();
        this._saveWordBank(bank);
    },

    _loadWordBank() {
        try { return JSON.parse(localStorage.getItem('keytrainer_wordbank')) || {}; } catch { return {}; }
    },

    _saveWordBank(bank) {
        localStorage.setItem('keytrainer_wordbank', JSON.stringify(bank));
    },

    _missedWordDrill() {
        const bank = this._loadWordBank();
        const words = Object.entries(bank)
            .filter(([_, d]) => d.missed > 0)
            .sort((a, b) => b[1].missed - a[1].missed)
            .map(([w]) => w);
        if (words.length < 5) return null;
        const pool = words.flatMap(w => Array(Math.max(1, Math.ceil(bank[w].missed / 2))).fill(w));
        const selected = [];
        for (let i = 0; i < Math.min(30, pool.length); i++) {
            selected.push(pool[Math.floor(Math.random() * pool.length)]);
        }
        return selected.join(' ');
    },

    generateText() {
        const wordList = this.difficulty === 'easy' ? WORDS_EASY :
                         this.difficulty === 'hard' ? WORDS_HARD :
                         this.difficulty === 'adaptive' ? [...WORDS_EASY, ...WORDS_NORMAL, ...WORDS_HARD] : WORDS_NORMAL;
        let words;

        if (this.mode === 'practice') {
            const count = Math.max(200, this.timeLimit * 6);
            words = [];
            for (let i = 0; i < count; i++) {
                words.push(this.difficulty === 'adaptive' ? this._weightedWordSelect(wordList) : wordList[Math.floor(Math.random() * wordList.length)]);
            }
        } else if (this.mode === 'words') {
            words = [];
            for (let i = 0; i < this.wordCount; i++) {
                words.push(this.difficulty === 'adaptive' ? this._weightedWordSelect(wordList) : wordList[Math.floor(Math.random() * wordList.length)]);
            }
        } else if (this.mode === 'quotes') {
            const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
            return quote.text;
        } else if (this.mode === 'zen') {
            words = [];
            for (let i = 0; i < 30; i++) {
                words.push(wordList[Math.floor(Math.random() * wordList.length)]);
            }
        } else {
            return '';
        }

        if (this.punctuation) {
            words = words.map((word, i) => {
                if (Math.random() < 0.2) {
                    return word + PUNCTUATION[Math.floor(Math.random() * PUNCTUATION.length)];
                }
                return word;
            });
        }

        return words.join(' ');
    },

    prepareCustomTest(text) {
        this.text = text;
        this.charIndex = 0;
        this.resetCounts();
        this.showTypingInterface();
        this.els.customInput.classList.remove('active');
        this.renderText();
        this.updateLiveStats();
        this.updateProgress();
        this.scrollToCursor();
        Keyboard.reset();
        this.els.liveTime.textContent = '0';
        this.focusTest();
    },

    setCurrentChar(index) {
        const chars = this.els.typingDisplay.querySelectorAll('.char');
        chars.forEach(el => el.classList.remove('current'));
        const el = chars[index];
        if (el) {
            el.classList.add('current');
        }
        if (this.startTime) {
            this.charAppearTime[index] = (Date.now() - this.startTime) / 1000;
        }
        this.updateCursorPosition(index);
    },

    _resetBlinkTimer() {
        this._caret.stopBlink();
        if (this._blinkTimer) clearTimeout(this._blinkTimer);
        this._blinkTimer = setTimeout(() => {
            this._caret.startBlink();
            this._blinkTimer = null;
        }, 500);
    },

    updateCursorPosition(index) {
        const chars = this.els.typingDisplay.querySelectorAll('.char');
        if (index >= chars.length) {
            if (chars.length === 0) { this._caret.hide(); return; }
            this._caret.show();
            const lastEl = chars[chars.length - 1];
            const displayRect = this.els.typingDisplay.getBoundingClientRect();
            const charRect = lastEl.getBoundingClientRect();
            const isSpace = this.text[chars.length - 1] === ' ';
            this._caret.goTo(
                charRect.left - displayRect.left + (isSpace ? charRect.width : 0),
                charRect.top - displayRect.top
            );
            return;
        }
        const charEl = chars[index];
        this._caret.show();
        const displayRect = this.els.typingDisplay.getBoundingClientRect();
        const charRect = charEl.getBoundingClientRect();
        this._caret.goTo(charRect.left - displayRect.left, charRect.top - displayRect.top);
    },

    smoothScrollTo(el, target, duration) {
        if (this._scrollRaf) {
            cancelAnimationFrame(this._scrollRaf);
            this._scrollRaf = null;
        }
        const start = el.scrollTop;
        const diff = target - start;
        const reposition = () => {
            const charEl = this.els.typingDisplay.querySelectorAll('.char')[this.charIndex];
            if (charEl && this._caret) {
                const dr = this.els.typingDisplay.getBoundingClientRect();
                const cr = charEl.getBoundingClientRect();
                this._caret.jumpTo(cr.left - dr.left, cr.top - dr.top);
            }
        };
        if (Math.abs(diff) < 1) {
            el.scrollTop = target;
            reposition();
            return;
        }
        const startTime = performance.now();
        const dur = duration || 120;
        const step = (now) => {
            const t = Math.min((now - startTime) / dur, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            el.scrollTop = start + diff * ease;
            reposition();
            if (t < 1) {
                this._scrollRaf = requestAnimationFrame(step);
            } else {
                el.scrollTop = target;
                reposition();
                this._scrollRaf = null;
            }
        };
        this._scrollRaf = requestAnimationFrame(step);
    },

    scrollToCursor() {
        const el = this.els.typingDisplay;
        if (!el.children.length) return;
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
        const charWidth = el.children[0].getBoundingClientRect().width;
        if (!charWidth || !lineHeight) return;
        const charsPerLine = Math.max(1, Math.floor(el.clientWidth / charWidth));
        const currentLine = Math.floor(this.charIndex / charsPerLine);
        const targetScroll = Math.max(0, (currentLine - 1) * lineHeight);
        this.smoothScrollTo(el, targetScroll);
    },

    renderText() {
        this.els.typingDisplay.innerHTML = '';

        for (let i = 0; i < this.text.length; i++) {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = this.text[i] === ' ' ? '\u00A0' : this.text[i];
            this.els.typingDisplay.appendChild(span);
        }

        if (this._caret && this._caret.el) {
            this.els.typingDisplay.appendChild(this._caret.el);
            this._caret.show();
        }

        if (this._ghostCaret) {
            this.els.typingDisplay.appendChild(this._ghostCaret);
            this._ghostCaret.classList.add('hidden');
        } else {
            const ghostEl = document.createElement('div');
            ghostEl.className = 'caret-ghost';
            ghostEl.innerHTML = '<span class="ghost-label">\u{1F47B} PB</span>';
            this.els.typingDisplay.appendChild(ghostEl);
            this._ghostCaret = ghostEl;
        }

        this.setCurrentChar(0);
        this.scrollToCursor();
    },

    renderGhostCursor(charIdx) {
        if (!this._ghostCaret) return;
        const chars = this.els.typingDisplay.querySelectorAll('.char');
        if (charIdx >= chars.length) {
            if (chars.length === 0) {
                this._ghostCaret.classList.add('hidden');
                return;
            }
            const lastEl = chars[chars.length - 1];
            const displayRect = this.els.typingDisplay.getBoundingClientRect();
            const charRect = lastEl.getBoundingClientRect();
            const isSpace = this.text[chars.length - 1] === ' ';
            this._ghostCaret.style.left = (charRect.left - displayRect.left + (isSpace ? charRect.width : 0)) + 'px';
            this._ghostCaret.style.top = (charRect.top - displayRect.top) + 'px';
            this._ghostCaret.classList.remove('hidden');
            return;
        }
        const charEl = chars[charIdx];
        if (!charEl) {
            this._ghostCaret.classList.add('hidden');
            return;
        }
        const displayRect = this.els.typingDisplay.getBoundingClientRect();
        const charRect = charEl.getBoundingClientRect();
        this._ghostCaret.style.left = (charRect.left - displayRect.left) + 'px';
        this._ghostCaret.style.top = (charRect.top - displayRect.top) + 'px';
        this._ghostCaret.classList.remove('hidden');
    },

    resetCounts() {
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.totalKeystrokes = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.isFinished = false;
        this.isRunning = false;
        this._backspaceUsed = false;
        this.telemetry = [];
        this.charsInLastSecond = 0;
        this.lastTelemetrySecond = 0;
        this.keyStats = {};
        this.keyTimings = {};
        this.keyConfusions = {};
        this.bigramStats = {};
        this.bigramTimings = {};
        this.repeatStats = {};
        this.charHistory = [];
        this.charAppearTime = [];
        this.wordTimings = [];
        this.ghostActive = false;
        this.ghostIndex = 0;
        this.ghostTelemetry = null;
        this._wordStartTime = 0;
        this._wordCharCount = 0;
        this._wordStartIndex = 0;
        if (this._blinkTimer) { clearTimeout(this._blinkTimer); this._blinkTimer = null; }
        if (this._caret) this._caret.startBlink();
    },

    focusTest() {
        if (this.isReplaying) return;
        if (this.isFinished) {
            this.restartTest();
            return;
        }
        this.els.typingContainer.focus();
    },

    handleKeyDown(e) {
        AntiCheat.keyDown(e.key, Date.now());

        if (this.isReplaying) {
            if (e.key === 'f' || e.key === 'F') {
                this.toggleFocusMode();
                return;
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                this.stopReplay();
                return;
            }
            if (e.key === ' ') {
                e.preventDefault();
                this.replayPaused = !this.replayPaused;
                return;
            }
            if (e.key === '1') { this.replaySpeed = 0.5; this._updateReplaySpeedUI(); return; }
            if (e.key === '2') { this.replaySpeed = 1; this._updateReplaySpeedUI(); return; }
            if (e.key === '3') { this.replaySpeed = 2; this._updateReplaySpeedUI(); return; }
            if (e.key === '4') { this.replaySpeed = 4; this._updateReplaySpeedUI(); return; }
            e.preventDefault();
            return;
        }

        if (e.key === 'Escape' && this._isOverlayOpen()) {
            e.preventDefault();
            this._toggleShortcutsOverlay();
            return;
        }

        if (e.key === '?') {
            this._toggleShortcutsOverlay();
            e.preventDefault();
            return;
        }

        if (this._isOverlayOpen()) return;

        if (e.key === 'Tab' || e.key === 'Escape') {
            e.preventDefault();
            if (this.mode === 'zen') {
                this.switchMode('practice');
                return;
            }
            if (this.mode === 'journal' && this.isRunning) {
                this._finishJournal();
                return;
            }
            this.restartTest();
            return;
        }

        if (this.mode === 'journal' && this.isJournal) {
            if (e.key === 'Backspace') {
                e.preventDefault();
                this._journalDelete();
                Keyboard.pressKey('Backspace');
                return;
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                this._journalNewline();
                return;
            }
            if (e.key.length === 1) {
                return;
            }
            return;
        }

        if (e.key === 'f' || e.key === 'F') {
            this.toggleFocusMode();
            return;
        }

        if (e.key === 't' || e.key === 'T') {
            if (this.isReplaying || this.isRunning) return;
            this.toggleTheme();
            return;
        }

        if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Fn'].includes(e.key)) {
            return;
        }

        if (e.repeat) return;

        if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Enter') {
            e.preventDefault();
        }

        if (this.isFinished) return;
        if (!this.els.mainArea.classList.contains('active-state')) return;

        if (e.key === 'Backspace') {
            if (e.ctrlKey || e.metaKey) {
                this.deleteWord();
            } else {
                this.deleteChar();
            }
            return;
        }
        if (e.key.length === 1) {
            this.typeChar(e.key);
        }
    },

    startTest() {
        this.isRunning = true;
        this.startTime = Date.now();
        this.ghostStartTime = Date.now();
        this.timerId = setInterval(() => this.tick(), 100);
        if (!this.beginnerMode) AntiCheat.start();

        if (this.ghostEnabled && this.mode === 'practice') {
            try {
                const ghostData = JSON.parse(localStorage.getItem('keytrainer_ghost_telemetry_' + this.difficulty));
                if (ghostData && ghostData.telemetry && ghostData.telemetry.length > 0) {
                    this.ghostTelemetry = ghostData.telemetry;
                    this.ghostActive = true;
                    this.ghostIndex = 0;
                }
            } catch (e) {}
        }
    },

    tick() {
        const elapsed = (Date.now() - this.startTime) / 1000;

        if (this.mode === 'practice') {
            const remaining = Math.max(0, this.timeLimit - elapsed);
            this.els.liveTime.textContent = Math.ceil(remaining);
            if (remaining <= 0) this.endTest();
        } else {
            this.els.liveTime.textContent = Math.floor(elapsed) + 's';
        }

        const second = Math.floor(elapsed);
        if (second > this.lastTelemetrySecond && elapsed >= 1) {
            this.recordTelemetry(second);
            this.lastTelemetrySecond = second;
            const rawWpm = Math.round((this.charsInLastSecond / 5) * 60);
            AntiCheat.recordBurst(rawWpm);
        }

        this.updateLiveStats();

        if (this.mode === 'practice' && this.ghostActive && this.ghostTelemetry && this.ghostTelemetry.length > 0) {
            const gs = document.getElementById('ghost-wpm-stat');
            if (gs) gs.style.display = '';
            const ghostElapsed = (Date.now() - this.ghostStartTime) / 1000;
            let entry = null;
            for (let i = this.ghostTelemetry.length - 1; i >= 0; i--) {
                if (this.ghostTelemetry[i].second <= ghostElapsed) {
                    entry = this.ghostTelemetry[i];
                    break;
                }
            }
            if (!entry) entry = this.ghostTelemetry[0];
            if (entry) {
                const ghostCharIdx = Math.min(
                    this.text.length,
                    Math.round(entry.globalWpm * 5 * (entry.second / 60))
                );
                this.renderGhostCursor(ghostCharIdx);
                if (this.els.liveGhostWpm) {
                    this.els.liveGhostWpm.textContent = entry.globalWpm;
                }
            }
        } else {
            const gs = document.getElementById('ghost-wpm-stat');
            if (gs) gs.style.display = 'none';
            if (this._ghostCaret) this._ghostCaret.classList.add('hidden');
        }
    },

    recordTelemetry(second) {
        const elapsedMin = second / 60;
        const globalWpm = elapsedMin > 0 ? Math.round((this.correctCount / 5) / elapsedMin) : 0;
        const rawWpm = Math.round((this.charsInLastSecond / 5) * 60);
        this.telemetry.push({ second, globalWpm, rawWpm });
        this.charsInLastSecond = 0;
    },

    typeChar(char) {
        if (this.charIndex >= this.text.length) return;
        if (!this.isRunning) this.startTest();

        if (this.errorRecovery && this.charHistory[this.charIndex] && this.charHistory[this.charIndex].correct === false) {
            return;
        }

        const expected = this.text[this.charIndex];
        const isCorrect = char === expected;

        this.totalKeystrokes++;
        this.charsInLastSecond++;
        AntiCheat.recordKeystroke(Date.now());

        if (isCorrect) {
            this.correctCount++;
            this.streak++;
            if (this.streak > this.bestStreak) this.bestStreak = this.streak;
        } else {
            this.incorrectCount++;
            this.streak = 0;
        }

        if (this._wordStartTime === 0 && expected !== ' ') {
            this._wordStartTime = Date.now();
            this._wordCharCount = 0;
            this._wordStartIndex = this.charIndex;
        }

        const typedIndex = this.charIndex;
        this.charHistory[typedIndex] = { correct: isCorrect };

        if (!isCorrect) {
            if (!this.keyConfusions[expected]) this.keyConfusions[expected] = {};
            this.keyConfusions[expected][char] = (this.keyConfusions[expected][char] || 0) + 1;
        }

        const charEl = this.els.typingDisplay.querySelectorAll('.char')[typedIndex];
        if (charEl) {
            charEl.classList.remove('correct', 'incorrect', 'must-fix');
            if (isCorrect) {
                charEl.classList.add('correct');
            } else {
                charEl.classList.add('incorrect');
                if (this.errorRecovery) charEl.classList.add('must-fix');
            }
        }

        if (typedIndex > 0 && expected === this.text[typedIndex - 1] && /^[a-z]$/i.test(expected)) {
            const repeatKey = expected;
            if (!this.repeatStats[repeatKey]) this.repeatStats[repeatKey] = { sum: 0, count: 0, correct: 0, total: 0 };
            this.repeatStats[repeatKey].total++;
            if (isCorrect && this.charHistory[typedIndex - 1]?.correct) this.repeatStats[repeatKey].correct++;
            if (this.charAppearTime[typedIndex - 1] !== undefined && this.charAppearTime[typedIndex] !== undefined) {
                const gap = this.charAppearTime[typedIndex] - this.charAppearTime[typedIndex - 1];
                this.repeatStats[repeatKey].sum += gap;
                this.repeatStats[repeatKey].count++;
            }
        }

        if (typedIndex > 0 && /^[a-z]$/i.test(expected) && /^[a-z]$/i.test(this.text[typedIndex - 1])) {
            const bigram = this.text[typedIndex - 1] + expected;
            const prevCorrect = this.charHistory[typedIndex - 1]?.correct;
            const bigramCorrect = isCorrect && prevCorrect;
            if (!this.bigramStats[bigram]) this.bigramStats[bigram] = { total: 0, correct: 0 };
            this.bigramStats[bigram].total++;
            if (bigramCorrect) this.bigramStats[bigram].correct++;
            if (this.charAppearTime[typedIndex] !== undefined && prevCorrect) {
                const reaction = (Date.now() - this.startTime) / 1000 - this.charAppearTime[typedIndex];
                if (!this.bigramTimings[bigram]) this.bigramTimings[bigram] = { sum: 0, count: 0 };
                this.bigramTimings[bigram].sum += reaction;
                this.bigramTimings[bigram].count++;
            }
        }

        if (expected === ' ') {
            if (char === ' ') {
                this.completeCurrentWord();
                this.charIndex++;
            }
        } else if (isCorrect || !this.beginnerMode) {
            this._wordCharCount++;
            this.charIndex++;
        } else {
            this._wordCharCount++;
        }
        this.setCurrentChar(this.charIndex);

        Sounds.play(isCorrect ? 'correct' : 'incorrect');
        this._resetBlinkTimer();

        this.updateProgress();

        const nextChar = this.charIndex < this.text.length ? this.text[this.charIndex] : null;
        Keyboard.highlightGuide(nextChar);
        Keyboard.press(char, isCorrect);

        const lowerKey = expected.toLowerCase();
        if (/^[a-z0-9 .,;'?!-]$/.test(lowerKey)) {
            if (!this.keyStats[lowerKey]) this.keyStats[lowerKey] = { correct: 0, total: 0 };
            this.keyStats[lowerKey].total++;
            if (isCorrect) this.keyStats[lowerKey].correct++;

            if (this.charAppearTime[typedIndex] !== undefined) {
                const reactionTime = (Date.now() - this.startTime) / 1000 - this.charAppearTime[typedIndex];
                if (!this.keyTimings[lowerKey]) this.keyTimings[lowerKey] = { sum: 0, count: 0 };
                this.keyTimings[lowerKey].sum += reactionTime;
                this.keyTimings[lowerKey].count++;
            }
        }

        this.updateLiveStats();
        this.scrollToCursor();

        if (this.charIndex >= this.text.length && this.mode !== 'practice') {
            this.completeCurrentWord();
            this.endTest();
        }
    },

    completeCurrentWord() {
        if (this._wordStartTime === 0) return;
        const elapsed = (Date.now() - this._wordStartTime) / 1000;
        if (elapsed > 0 && this._wordCharCount > 0) {
            const wpm = Math.round((this._wordCharCount / 5) / (elapsed / 60));
            this.wordTimings.push({ wpm, time: Math.round(elapsed) });
        }
        this._updateWordBank(this._wordStartIndex, this.charIndex);
        this._wordStartTime = 0;
        this._wordCharCount = 0;
    },

    undoChar(pos) {
        const entry = this.charHistory[pos];
        if (entry) {
            this.totalKeystrokes--;
            if (entry.correct) this.correctCount--;
            else this.incorrectCount--;
        }
        const key = this.text[pos].toLowerCase();
        if (this.keyStats[key]) {
            this.keyStats[key].total--;
            if (entry && entry.correct) this.keyStats[key].correct--;
            if (this.keyStats[key].total <= 0) delete this.keyStats[key];
        }
        const charEl = this.els.typingDisplay.querySelectorAll('.char')[pos];
        if (charEl) {
            charEl.classList.remove('correct', 'incorrect', 'current');
        }
        delete this.charHistory[pos];
    },

    deleteChar() {
        if (this.charIndex <= 0) return;
        this._backspaceUsed = true;
        const pos = this.charIndex - 1;
        this.undoChar(pos);
        this.charIndex = pos;
        this.setCurrentChar(this.charIndex);
        this._resetBlinkTimer();
        this.streak = 0;
        this.updateProgress();
        Keyboard.highlightGuide(this.text[this.charIndex] || null);
        Keyboard.pressKey('Backspace');
        this.updateLiveStats();
        this.scrollToCursor();
    },

    deleteWord() {
        if (this.charIndex <= 0) return;
        this._backspaceUsed = true;

        let start = this.charIndex - 1;
        while (start > 0 && this.text[start] !== ' ') {
            start--;
        }
        if (this.text[start] === ' ') start++;

        if (start >= this.charIndex) return;

        for (let i = start; i < this.charIndex; i++) {
            this.undoChar(i);
        }

        this.charIndex = start;
        this.setCurrentChar(this.charIndex);
        this._resetBlinkTimer();
        this.streak = 0;
        this.updateProgress();
        Keyboard.highlightGuide(this.text[this.charIndex] || null);
        Keyboard.pressKey('Backspace');
        this.updateLiveStats();
        this.scrollToCursor();
    },

    updateLiveStats() {
        const elapsed = this.startTime ? (Date.now() - this.startTime) / 1000 / 60 : 0;
        let wpm = 0;
        if (elapsed > 0 && this.correctCount > 0) {
            wpm = Math.round((this.correctCount / 5) / elapsed);
        }
        const accuracy = this.totalKeystrokes > 0
            ? Math.round((this.correctCount / this.totalKeystrokes) * 100)
            : 100;

        this.els.liveWpm.textContent = wpm;
        this.els.liveAccuracy.textContent = accuracy + '%';
        this.els.liveStreak.textContent = this.streak;
    },

    updateProgress() {
        if (!this.els.progressFill || this.text.length === 0) return;
        const pct = Math.min(100, (this.charIndex / this.text.length) * 100);
        this.els.progressFill.style.width = pct + '%';
    },

    stopTest(silent) {
        this.isRunning = false;
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        if (!silent) this.isFinished = true;
    },

    endTest() {
        this.stopTest(false);
        this.completeCurrentWord();

        const elapsed = (Date.now() - this.startTime) / 1000;
        const elapsedMin = elapsed / 60;
        const wpm = elapsedMin > 0 && this.correctCount > 0
            ? Math.round((this.correctCount / 5) / elapsedMin) : 0;
        const rawWpm = elapsedMin > 0 && this.totalKeystrokes > 0
            ? Math.round((this.totalKeystrokes / 5) / elapsedMin) : 0;
        const accuracy = this.totalKeystrokes > 0
            ? Math.round((this.correctCount / this.totalKeystrokes) * 100) : 100;

        let consistency = 100;
        if (this.telemetry.length > 5) {
            const vals = this.telemetry.map(s => s.globalWpm).filter(v => v > 0);
            if (vals.length > 3) {
                const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
                const variance = vals.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / vals.length;
                const stdDev = Math.sqrt(variance);
                if (mean > 0) {
                    consistency = Math.max(0, Math.round(100 - (stdDev / mean) * 50));
                }
            }
        }

        const missed = Math.max(0, this.text.length - this.charIndex);

        const cheatResult = AntiCheat.analyze({ wpm, accuracy, consistency, elapsed, mode: this.mode });
        AntiCheat.stop();

        const result = {
            wpm,
            accuracy,
            rawWpm,
            consistency,
            elapsed: Math.round(elapsed),
            mode: this.mode,
            difficulty: this.difficulty,
            punctuation: this.punctuation,
            timeLimit: this.mode === 'practice' ? this.timeLimit : undefined,
            wordCount: this.mode === 'words' ? this.wordCount : undefined,
            correctChars: this.correctCount,
            incorrectChars: this.incorrectCount,
            totalChars: this.text.length,
            missedChars: missed,
            cheatScore: cheatResult.score,
            cheatFlags: cheatResult.flags,
            cheatFlagged: cheatResult.flagged,
            cheatSummary: cheatResult.summary,
            replayText: this.text,
            replayCharHistory: this.charHistory
        };

        const isNewBest = this.updatePersonalBests(result);

        if (result.mode === 'practice' && isNewBest && this.telemetry.length > 0) {
            localStorage.setItem('keytrainer_ghost_telemetry_' + this.difficulty, JSON.stringify({
                telemetry: this.telemetry,
                text: this.text,
                date: Date.now()
            }));
        }

        this.saveTestResult(result);
        this.updateDailyGoals(result);
        this.showResults(result, isNewBest);
        setTimeout(() => Achievements.check(result, this), 100);
    },

    showResults(result, isNewBest) {
        const charStr = `${result.correctChars}/${result.incorrectChars}/${result.missedChars}/${result.totalChars}`;
        this.els.dashWpm.textContent = result.wpm;
        this.els.dashAcc.textContent = result.accuracy + '%';
        this.els.dashRaw.textContent = result.rawWpm;
        this.els.dashChars.textContent = charStr;
        this.els.dashTime.textContent = result.elapsed + 's';
        this.els.dashCons.textContent = result.consistency + '%';

        const badge = document.getElementById('best-badge');
        if (badge) {
            badge.classList.toggle('show', !!isNewBest);
        }

        const acBadge = document.getElementById('cheat-badge');
        if (acBadge) {
            if (result.cheatFlagged) {
                acBadge.className = 'cheat-badge show flagged';
                acBadge.title = 'Score: ' + result.cheatScore + ' (' + result.cheatSummary + ')';
                acBadge.textContent = '⚠ FLAGGED (' + result.cheatScore + ')';
            } else if (result.cheatScore > 0) {
                acBadge.className = 'cheat-badge show suspicious';
                acBadge.title = 'Score: ' + result.cheatScore + ' (' + result.cheatSummary + ')';
                acBadge.textContent = '⚠ Suspicious (' + result.cheatScore + ')';
            } else {
                acBadge.className = 'cheat-badge';
                acBadge.textContent = '';
            }
        }

        this.els.mainArea.classList.remove('active-state');
        this.els.mainArea.classList.add('hidden-state');
        this.els.resultsDash.classList.remove('hidden-state');
        this.els.resultsDash.classList.add('active-state');

        this.renderTelemetryChart(result.elapsed);
        this.renderWordChart();
    },

    async saveTestResult(result) {
        try {
            await Storage.saveTest(result);

            if (Object.keys(this.keyStats).length > 0) {
                const existing = await Storage.getAllKeyStats();
                for (const [key, data] of Object.entries(this.keyStats)) {
                    const prev = existing[key] || { correct: 0, total: 0, timingSum: 0, timingCount: 0, confusions: {} };
                    const timing = this.keyTimings[key] || { sum: 0, count: 0 };
                    const mergedConfusions = { ...prev.confusions };
                    if (this.keyConfusions[key]) {
                        for (const [wrong, count] of Object.entries(this.keyConfusions[key])) {
                            mergedConfusions[wrong] = (mergedConfusions[wrong] || 0) + count;
                        }
                    }
                    const rep = this.repeatStats[key] || { sum: 0, count: 0 };
                    await Storage.saveKeyStats(key, {
                        correct: prev.correct + data.correct,
                        total: prev.total + data.total,
                        timingSum: (prev.timingSum || 0) + timing.sum,
                        timingCount: (prev.timingCount || 0) + timing.count,
                        confusions: mergedConfusions,
                        repeatSum: (prev.repeatSum || 0) + rep.sum,
                        repeatCount: (prev.repeatCount || 0) + rep.count
                    });
                }
            }

            if (Object.keys(this.bigramStats).length > 0) {
                const existingBigrams = await Storage.getAllBigramStats();
                for (const [bigram, data] of Object.entries(this.bigramStats)) {
                    const prev = existingBigrams[bigram] || { total: 0, correct: 0, timingSum: 0, timingCount: 0 };
                    const timing = this.bigramTimings[bigram] || { sum: 0, count: 0 };
                    await Storage.saveBigramStats(bigram, {
                        total: prev.total + data.total,
                        correct: prev.correct + data.correct,
                        timingSum: (prev.timingSum || 0) + timing.sum,
                        timingCount: (prev.timingCount || 0) + timing.count
                    });
                }
            }
        } catch (e) {
            console.error('Failed to save test:', e);
        }
    },

    async startWeaknessDrill() {
        const keyStats = await Storage.getAllKeyStats();
        const weakness = Object.entries(keyStats)
            .filter(([k, s]) => /^[a-z]$/.test(k) && s.total >= 5)
            .map(([k, s]) => ({ key: k, weakness: 1 - s.correct / s.total }))
            .sort((a, b) => b.weakness - a.weakness)
            .slice(0, 5);
        if (weakness.length === 0) {
            this.restartTest();
            return;
        }
        const weakKeys = new Set(weakness.map(w => w.key));
        const pool = [...WORDS_NORMAL, ...WORDS_HARD].filter(w =>
            [...w].some(c => weakKeys.has(c))
        );
        if (pool.length < 10) {
            this.restartTest();
            return;
        }
        const words = [];
        for (let i = 0; i < 50; i++) {
            const idx = Math.floor(Math.random() * pool.length);
            words.push(pool[idx]);
        }
        this.text = words.join(' ');
        this.mode = 'words';
        this.charIndex = 0;
        this.resetCounts();
        this.showTypingInterface();
        this.renderText();
        this.updateLiveStats();
        this.updateProgress();
        this.scrollToCursor();
        Keyboard.reset();
        this.els.liveTime.textContent = '0';
        this.els.typingContainer.focus();
    },

    startMissedWordDrill() {
        const text = this._missedWordDrill();
        if (!text) { this.restartTest(); return; }
        this.text = text;
        this.mode = 'words';
        this.charIndex = 0;
        this.resetCounts();
        this.showTypingInterface();
        this.renderText();
        this.updateLiveStats();
        this.updateProgress();
        this.scrollToCursor();
        Keyboard.reset();
        this.els.liveTime.textContent = '0';
        this.els.typingContainer.focus();
    },

    restartTest() {
        this.showTypingInterface();
        if (this._telemetryChart) {
            this._telemetryChart.destroy();
            this._telemetryChart = null;
        }
        if (this._wordChart) {
            this._wordChart.destroy();
            this._wordChart = null;
        }
        this.stopTest(true);
        this.charIndex = 0;
        this.resetCounts();
        Keyboard.reset();

        this.renderText();
        this.updateLiveStats();
        this.updateProgress();
        this.scrollToCursor();

        if (this.mode === 'practice') {
            this.els.liveTime.textContent = this.timeLimit;
        } else {
            this.els.liveTime.textContent = '0';
        }

        this.els.typingContainer.focus();
    },

    loadPersonalBests() {
        try {
            return JSON.parse(localStorage.getItem('keytrainer_bests')) || {};
        } catch { return {}; }
    },

    savePersonalBests(bests) {
        localStorage.setItem('keytrainer_bests', JSON.stringify(bests));
    },

    updatePersonalBests(result) {
        const bests = this.loadPersonalBests();
        const mode = result.mode;
        const prev = bests[mode];
        if (!prev || result.wpm > prev.wpm || (result.wpm === prev.wpm && result.accuracy > prev.accuracy)) {
            bests[mode] = { wpm: result.wpm, accuracy: result.accuracy, date: new Date().toISOString() };
            this.savePersonalBests(bests);
            return true;
        }
        return false;
    },

    loadDailyGoal() {
        try { return JSON.parse(localStorage.getItem('keytrainer_daily_goal') || '{}'); } catch { return {}; }
    },

    saveDailyGoal(goal) {
        localStorage.setItem('keytrainer_daily_goal', JSON.stringify(goal));
    },

    loadDailyProgress() {
        try { return JSON.parse(localStorage.getItem('keytrainer_daily_progress') || '{}'); } catch { return {}; }
    },

    saveDailyProgress(prog) {
        localStorage.setItem('keytrainer_daily_progress', JSON.stringify(prog));
    },

    getTodayStr() {
        return new Date().toISOString().slice(0, 10);
    },

    updateDailyGoals(result) {
        const goal = this.loadDailyGoal();
        if (!goal.wpm && !goal.tests && !goal.accuracy) return;
        const today = this.getTodayStr();
        let prog = this.loadDailyProgress();
        if (prog.date !== today) {
            prog = { date: today, testsCompleted: 0, bestWpm: 0, accuracySum: 0 };
        }
        prog.testsCompleted++;
        prog.bestWpm = Math.max(prog.bestWpm, result.wpm);
        prog.accuracySum += result.accuracy;
        this.saveDailyProgress(prog);
        this.renderDailyGoals();
    },

    renderDailyGoals() {
        const popover = document.getElementById('goals-popover');
        if (!popover) return;
        const goal = this.loadDailyGoal();
        const prog = this.loadDailyProgress();
        const today = this.getTodayStr();
        const isToday = prog.date === today;
        const testsDone = isToday ? (prog.testsCompleted || 0) : 0;
        const bestWpm = isToday ? (prog.bestWpm || 0) : 0;
        const avgAcc = testsDone > 0 ? Math.round(prog.accuracySum / testsDone) : 0;

        let html = `<div class="goals-header">Daily Goals</div>
            <div class="goals-row"><span>WPM</span><input type="number" id="goal-wpm" value="${goal.wpm || ''}" placeholder="50" min="10" max="200"></div>
            <div class="goals-row"><span>Tests</span><input type="number" id="goal-tests" value="${goal.tests || ''}" placeholder="5" min="1" max="50"></div>
            <div class="goals-row"><span>Accuracy</span><input type="number" id="goal-acc" value="${goal.accuracy || ''}" placeholder="95" min="50" max="100"></div>
            <button class="primary-btn" id="goals-save" style="width:100%;margin-top:0.5rem;">Save Goals</button>
            <div class="goals-progress">`;

        if (goal.wpm) {
            const pct = bestWpm >= goal.wpm ? 100 : Math.round((bestWpm / goal.wpm) * 100);
            html += `<div class="goals-bar-label">Best WPM <span>${bestWpm} / ${goal.wpm}</span></div><div class="goals-bar"><div class="goals-fill" style="width:${pct}%"></div></div>`;
        }
        if (goal.tests) {
            const pct = testsDone >= goal.tests ? 100 : Math.round((testsDone / goal.tests) * 100);
            html += `<div class="goals-bar-label">Tests <span>${testsDone} / ${goal.tests}</span></div><div class="goals-bar"><div class="goals-fill" style="width:${pct}%"></div></div>`;
        }
        if (goal.accuracy) {
            const pct = avgAcc >= goal.accuracy ? 100 : Math.round((avgAcc / goal.accuracy) * 100);
            html += `<div class="goals-bar-label">Avg Accuracy <span>${avgAcc}% / ${goal.accuracy}%</span></div><div class="goals-bar"><div class="goals-fill" style="width:${pct}%"></div></div>`;
        }

        html += `</div></div>`;
        popover.innerHTML = html;

        const wpmInput = document.getElementById('goal-wpm');
        const testsInput = document.getElementById('goal-tests');
        const accInput = document.getElementById('goal-acc');
        const saveBtn = document.getElementById('goals-save');
        if (saveBtn && wpmInput && testsInput && accInput) {
            saveBtn.addEventListener('click', () => {
                const g = {};
                const w = parseInt(wpmInput.value);
                const t = parseInt(testsInput.value);
                const a = parseInt(accInput.value);
                if (w > 0) g.wpm = w;
                if (t > 0) g.tests = t;
                if (a > 0) g.accuracy = a;
                this.saveDailyGoal(g);
                this.renderDailyGoals();
            });
        }
    },

    renderTelemetryChart(duration) {
        const canvas = document.getElementById('telemetry-chart');
        if (!canvas) return;
        if (this._telemetryChart) {
            this._telemetryChart.destroy();
            this._telemetryChart = null;
        }
        if (typeof Chart === 'undefined') return;

        if (this.telemetry.length < 2) return;

        const labels = this.telemetry.map(s => s.second);
        const globalData = this.telemetry.map(s => Math.max(0, s.globalWpm));
        const rawData = this.telemetry.map(s => Math.max(0, s.rawWpm));
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#e94560';

        this._telemetryChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'WPM',
                        data: globalData,
                        borderColor: accent,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.3,
                        fill: false
                    },
                    {
                        label: 'Raw',
                        data: rawData,
                        borderColor: '#555555',
                        backgroundColor: 'transparent',
                        borderWidth: 1.5,
                        borderDash: [4, 4],
                        pointRadius: 0,
                        tension: 0.2,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 300 },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#6b7280',
                            boxWidth: 12,
                            padding: 8,
                            font: { size: 11 }
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: { display: true, text: 'seconds', color: '#6b7280' },
                        grid: { color: 'rgba(107,114,128,0.15)' },
                        ticks: { color: '#6b7280', maxTicksLimit: 10 }
                    },
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'wpm', color: '#6b7280' },
                        grid: { color: 'rgba(107,114,128,0.15)' },
                        ticks: { color: '#6b7280' }
                    }
                }
            }
        });
    },

    renderWordChart() {
        const canvas = document.getElementById('word-chart');
        if (!canvas) return;
        if (this._wordChart) {
            this._wordChart.destroy();
            this._wordChart = null;
        }
        if (typeof Chart === 'undefined') return;
        if (this.wordTimings.length < 2) return;

        const labels = this.wordTimings.map((_, i) => `#${i + 1}`);
        const data = this.wordTimings.map(w => w.wpm);

        this._wordChart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'WPM',
                    data,
                    backgroundColor: data.map(w =>
                        w < 10 ? 'rgba(248,113,113,0.6)' :
                        w < 20 ? 'rgba(251,191,36,0.6)' :
                        getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() + '99' || '#e9456099'
                    ),
                    borderColor: data.map(w =>
                        w < 10 ? '#f87171' :
                        w < 20 ? '#fbbf24' :
                        getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#e94560'
                    ),
                    borderWidth: 1,
                    borderRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 300 },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        display: true,
                        title: { display: true, text: 'word', color: '#6b7280' },
                        grid: { display: false },
                        ticks: { color: '#6b7280' }
                    },
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'wpm', color: '#6b7280' },
                        grid: { color: 'rgba(107,114,128,0.15)' },
                        ticks: { color: '#6b7280' }
                    }
                }
            }
        });
    },

    async loadStatsView() {
        if (typeof Stats !== 'undefined') {
            Stats.init();
            await Stats.load();
        }
        this.renderPersonalBests();
    },

    renderPersonalBests() {
        const container = document.getElementById('personal-bests');
        if (!container) return;
        const bests = this.loadPersonalBests();
        const modes = { practice: 'Practice', words: 'Words', quotes: 'Quotes', custom: 'Custom' };
        container.innerHTML = '';
        for (const [mode, label] of Object.entries(modes)) {
            const b = bests[mode];
            const card = document.createElement('div');
            card.className = 'best-card';
            card.innerHTML = b
                ? `<div class="best-mode">${label}</div><div class="best-wpm">${b.wpm}<span> wpm</span></div><div class="best-acc">${b.accuracy}% acc</div>`
                : `<div class="best-mode">${label}</div><div class="best-wpm no-best">—</div><div class="best-acc no-best">No data</div>`;
            container.appendChild(card);
        }
    },

    replayTest(testData) {
        this.stopTest(true);
        this.isReplaying = true;
        this.replaySpeed = 1;
        this.replayIndex = 0;
        this.replayPaused = false;
        this.text = testData.replayText || '';
        this.charHistory = testData.replayCharHistory || [];

        this.showTypingInterface();

        document.querySelector('.live-stats').style.display = 'none';
        document.getElementById('replay-controls').style.display = 'flex';
        document.getElementById('hidden-input').style.display = 'none';
        document.querySelector('.keyboard-container').style.display = 'none';
        document.querySelector('.hint').style.display = 'none';

        this._updateReplaySpeedUI();
        document.getElementById('replay-progress').textContent = `0 / ${this.text.length}`;
        document.getElementById('replay-stop').textContent = '■ Stop';
        document.getElementById('replay-stop').onclick = () => this.stopReplay();

        this.renderText();
        this.setCurrentChar(0);
        this.updateProgress();

        this.replayLastTime = performance.now();
        this._replayFrame();
    },

    stopReplay() {
        this.isReplaying = false;
        if (this._replayRaf) {
            cancelAnimationFrame(this._replayRaf);
            this._replayRaf = null;
        }
        this._cleanupReplayUI();
        this.switchMode('stats');
    },

    _replayFrame() {
        if (!this.isReplaying) return;
        if (this.replayPaused) {
            this._replayRaf = requestAnimationFrame(() => this._replayFrame());
            return;
        }

        const now = performance.now();
        const elapsed = now - this.replayLastTime;
        const interval = 50 / this.replaySpeed;

        if (elapsed >= interval) {
            const steps = Math.min(
                Math.floor(elapsed / interval),
                this.text.length - this.replayIndex
            );
            this.replayLastTime += steps * interval;

            for (let s = 0; s < steps; s++) {
                const idx = this.replayIndex;
                const chars = this.els.typingDisplay.querySelectorAll('.char');
                const charEl = chars[idx];
                const entry = this.charHistory[idx];
                if (charEl) {
                    if (entry && entry.correct) {
                        charEl.classList.add('correct');
                    } else if (entry) {
                        charEl.classList.add('incorrect');
                    }
                }
                this.replayIndex++;
            }

            this.updateProgress();
            document.getElementById('replay-progress').textContent = `${this.replayIndex} / ${this.text.length}`;
            this.setCurrentChar(this.replayIndex);

            if (this.replayIndex >= this.text.length) {
                document.getElementById('replay-progress').textContent = '✓ Complete';
                document.getElementById('replay-stop').textContent = 'Stats';
                document.getElementById('replay-stop').onclick = () => this.stopReplay();
                return;
            }
        }

        this._replayRaf = requestAnimationFrame(() => this._replayFrame());
    },

    _updateReplaySpeedUI() {
        document.querySelectorAll('.replay-speed').forEach(btn => {
            btn.classList.toggle('active', parseFloat(btn.dataset.speed) === this.replaySpeed);
        });
    },

    _cleanupReplayUI() {
        document.querySelector('.live-stats').style.display = '';
        document.getElementById('replay-controls').style.display = 'none';
        document.getElementById('hidden-input').style.display = '';
        document.querySelector('.keyboard-container').style.display = '';
        document.querySelector('.hint').style.display = '';
    },

    loadTheme() {
        const theme = localStorage.getItem('keytrainer_theme');
        if (theme === 'light') {
            document.body.classList.add('light');
        }
    },

    toggleTheme() {
        document.body.classList.toggle('light');
        const isLight = document.body.classList.contains('light');
        localStorage.setItem('keytrainer_theme', isLight ? 'light' : 'dark');
    },

    toggleFocusMode() {
        document.body.classList.toggle('focus-mode');
        const isFocus = document.body.classList.contains('focus-mode');
        this.els.focusToggle.classList.toggle('active', isFocus);
        if (isFocus) {
            this.els.focusToggle.style.borderColor = 'var(--accent)';
        } else {
            this.els.focusToggle.style.borderColor = '';
        }
    },

    _isOverlayOpen() {
        const el = document.getElementById('shortcuts-overlay');
        return el && el.style.display === 'flex';
    },

    _toggleShortcutsOverlay() {
        const el = document.getElementById('shortcuts-overlay');
        if (!el) return;
        el.style.display = el.style.display === 'flex' ? 'none' : 'flex';
    },

    loadAccent() {
        const saved = localStorage.getItem('keytrainer_accent');
        if (saved) {
            this.setAccent(saved, true);
        } else {
            this.setAccent('#e94560', true);
        }
    },

    setAccent(color, silent) {
        const hover = lightenHex(color, 40);
        document.documentElement.style.setProperty('--accent', color);
        document.documentElement.style.setProperty('--accent-hover', hover);
        document.querySelectorAll('[data-accent]').forEach(el => {
            el.classList.toggle('active', el.dataset.accent === color);
        });
        if (!silent) {
            localStorage.setItem('keytrainer_accent', color);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
