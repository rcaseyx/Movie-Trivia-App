const STORE = [
	{
		question: 'Quentin Tarantino has written and directed 8 major motion pictures. Which of these films did he not direct?',
		answers: [
			'Reservoir Dogs',
			'Death Proof',
			'True Romance',
			'Django Unchained'
		],
		correctAnswer: 'True Romance',
		explanation: 'While Tarantino did lend his writing talents on the film, Tony Scott directed True Romance.'
	},
	{
		question: 'The films of Shane Black tend to be connected by common themes and similar settings. What holiday are most of his films set around?',
		answers: [
			'Halloween',
			'Christmas',
			'Thanksgiving',
			"St. Patrick's Day"
		],
		correctAnswer: 'Christmas',
		explanation: "Nearly all of Shane Black's films are set during the Christmas season."
	},
	{
		question: 'Hugh Jackman played Wolverine for 17 years. In how many films did he appear as the character throughout that time?',
		answers: [
			'7',
			'8',
			'9',
			'10'
		],
		correctAnswer: '9',
		explanation: 'Including cameos in both X-Men: First Class and X-Men: Apocalypse, Hugh Jackman played the character 9 times.'
	},
	{
		question: 'In 2010, Kathryn Bigelow became the first woman to win an Oscar for Best Achievement in Directing. For which film did she win?',
		answers: [
			'Precious',
			'Up in the Air',
			'A Serious Man',
			'The Hurt Locker'
		],
		correctAnswer: 'The Hurt Locker',
		explanation: 'Kathryn Bigelow won the Oscar for her work on the Hurt Locker. The Hurt Locker nearly swept the major categories that year, going home with 6 Oscars in total.'
	},
	{
		question: 'Cinematographer Roger Deakins has been nominated for Best Achievement in Cinematography at the Oscars 13 times, but has only won once. For which film did he win?',
		answers: [
			'Blade Runner 2049',
			'The Shawshank Redemption',
			'Skyfall',
			'Sicario'
		],
		correctAnswer: 'Blade Runner 2049',
		explanation: 'After 13 nominations over 22 years, Roger Deakins finally won his first Oscar in 2018 for Blade Runner 2049.'
	},
	{
		question: 'The Coen Brothers have written and directed many films together throughout their career. What movie was their first?',
		answers: [
			'Barton Fink',
			"Miller's Crossing",
			'Blood Simple',
			'Raising Arizona'
		],
		correctAnswer: 'Blood Simple',
		explanation: 'Blood Simple was released in 1984 and was the first Coen Brothers film to see a major release.'
	},
	{
		question: 'Christopher Nolan is one of the most celebrated directors working today, and has been nominated for 5 Oscars during his career. How many times has he won?',
		answers: [
			'0',
			'1',
			'2',
			'3'
		],
		correctAnswer: '0',
		explanation: 'Although he has been nominated 5 times, both for writing and directing, Nolan has yet to win an Oscar.'
	},
	{
		question: 'Actor Robert Englund is most well known for portraying which iconic horror villain?',
		answers: [
			'Jason Vorhees',
			'Freddy Krueger',
			'Michael Myers',
			'Leatherface'
		],
		correctAnswer: 'Freddy Krueger',
		explanation: 'Robert Englund has played Freddy Krueger in 8 films, starting with the original Nightmare on Elm Street in 1984.'
	},
	{
		question: 'Which film was the first to ever show a toilet flushing on screen?',
		answers: [
			'The Birds',
			'Psycho',
			"One Flew Over the Cuckoo's Nest",
			'Vertigo'
		],
		correctAnswer: 'Psycho',
		explanation: 'Alfred Hitchcock made movie history in 1960 when he included a shot of a toilet flushing in his film Psycho.'
	},
	{
		question: 'Which character has been played by 7 different actors in separate feature films?',
		answers: [
			'Superman',
			'Batman',
			'Spider-Man',
			'Jack Ryan'
		],
		correctAnswer: 'Batman',
		explanation: 'Adam West, Michael Keaton, Val Kilmer, George Clooney, Christian Bale, Ben Affleck, and Will Arnett (voice) have all played Batman in separate movies.'
	}
]

const perfect = {
	image:"http://images.gawker.com/18hyxvnv65yvxjpg/c_fit,fl_progressive,q_80,w_636.jpg",
	alt:"big thumbs up",
	title:"Film Buff!",
	msg:"You're a regular film buff! Keep watching movies and staying up to date with the latest in trivia!"
};

const good = {
	image:"https://i.pinimg.com/originals/b2/60/31/b26031f3fdddf9355cc579bad14fc3ff.jpg",
	alt:"larry david pretty good",
	title:"Pretty Good!",
	msg:"You've browsed IMDb before, but you will need to commit to defeat this quiz."
};

const bad = {
	image:"http://www.tasteofcinema.com/wp-content/uploads/2013/04/1980-The-Shining-Screenshot-9.jpg",
	alt:"jack nicholson shining",
	title:"Might need some work!",
	msg:"Fire up your favorite streaming service and download the IMDb app. You've got work to do!"
};

const worst = {
	image:"https://cdn.narcity.com/u/2018/01/30/5095318ee4a9bb28af9d7d007f2d916985fe8f75.jpg_1200x630.jpg",
	alt:"screaming",
	title:"Uh-Oh!",
	msg:"Maybe movie trivia isn't for you."
};