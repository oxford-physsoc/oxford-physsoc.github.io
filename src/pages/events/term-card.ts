export interface EventEntry {
	name: string,
	dateAndTime: string,
	description: string,
	clickable?: boolean,
}

export const TermCard: Record<string, EventEntry[]> = {
	1: [{
		name: "Talk by Alexander Lvovsky",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: `<h2>Quantum physics: from paradox to technology</h2>
		
		<h3>Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 15 Oct (Thu), 17:30</h3>`,
		clickable: true,
	}, {
		name: "Discover Trading with Da Vinci",
		dateAndTime: "Friday",
		description: `Interested in a career in quantitative finance? One of our sponsors, Da Vinci, is holding a trading workshop; it is not an event to be missed!`,
		clickable: true,
	}, {
		name: "Ou est le Poulet",
		dateAndTime: "TBD",
		description: "",
	}],
	2: [{
		name: "Talk by Michael Berry",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: `<h2>What we learn(ed) from the rainbows</h2>
		
		<h3>Venue: TBD
		<br>
		Time: 22 Oct (Thu), 17:30</h3>
		<i>
		Sir Michael Berry is a theoretical physicist best known for the generalisation of the Berry phase.
		<br><br>
		As well as describing the beautiful physics of a dramatic natural phenomenon, rainbow studies over several centuries have illustrated unexpected connections with other areas of physics and the practice of science more generally. The connections include:  
		<ul>
			<li>Numerical experiments when mathematics is too difficult</li>
			<li>Illusions: there is no arc in the sky</li>
			<li>A theory (light rays) being replaced by a deeper one (light waves)</li> 
			<li>Decoherence: wave interference blurred by imperfect resolution</li>
			<li>Universal wave decoration of smooth focal lines</li>
			<li>Rainbow waves in water</li>
			<li>Colour theory</li>
			<li>Gell-Mann's totalitarian principle</li>
			<li>Mathematics of divergent series</li>
		</ul>
		</i>`,
		clickable: true,
	}, {
		name: "STEM drinks",
		dateAndTime: "TBD",
		description: "",
	}],
	3: [{
		name: "Talk by Mitchell Yzer",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: `<h2>Details TBD</h2>
		<h3>
		Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 04 Nov (Thu), 17:30
		</h3>`,
		clickable: true,
	}, {
		name: "Pumpkin carving",
		dateAndTime: "TBD",
		description: "",
	}],
	4: [{
		name: "Talk from Jane Street",
		dateAndTime: "Tuesday 18:00 - 19:30",
		description: "",
	}, {
		name: "Talk by Aleks Kissinger",
		dateAndTime: "Wednesday 17:30 - 18:30",
		description: `<h2>Quantum fault-tolerance by construction</h2>
		<h3>
		Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 04 Nov (Wed), 17:30
		</h3>
		<i>Quantum data is extremely sensitive to noise. This has led to an increasingly widespread believe that quantum error correction and fault-tolerant quantum computation will be a crucial ingredient in the vast majority of useful quantum computations. I will talk about a recent approach to designing and working with fault-tolerant quantum circuits called "fault tolerance by construction". In this approach, you can specify a target quantum computation and transform it iteratively using special rules called fault equivalences, which preserve a computations behaviour under noise. We can define fault equivalences for circuits, but also for diagrams in the ZX calculus, a particularly useful tool for quantum circuit optimisation. After giving a flavour for what it's like working with the ZX calculus and explaining the basics of quantum fault tolerance, I will give some examples of calculations involving fault equivalences and survey some of the state of the art results and open problems in the area. This talk assumes no prior knowledge of quantum computing or quantum circuits.</i>`,
		clickable: true,
	}, {
		name: "Bowling",
		dateAndTime: "TBD",
		description: "",
	}],
	5: [{
		name: "Talk from Schonfeld",
		dateAndTime: "Wednesday",
		description: "",
	}, {
		name: "Talk by Simon Clark",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: `<h2>Climate communication in the age of AI slop</h2>
		<h3>Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 12 Nov (Thu), 17:30</h3>
		<i>Talking about climate change is one of the most urgent necessities facing science today, yet we are facing an online environment increasingly hostile to quality information. How do we cut through the noise? How do you reach an audience with the facts, how do you get them to listen and - most importantly - to act on them? In this talk I'll reflect on my decade of experience as a climate communicator while trying not to think of all the trauma this lecture theatre inflicted on me.
		</i>`,
		clickable: true,
	}, {
		name: "Destress with OUPS",
		dateAndTime: "TBD",
		description: "",
	}],
	6: [{
		name: "First-year lecturer panel discussion",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: `A talk will happen at this time! Details to be confirmed.`,
	}, {
		name: "Black tie dinner",
		dateAndTime: "TBD",
		description: "",
	}],
	7: [{
		name: "Talk by Jenny Barnes",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: "A talk will happen at this time! Details to be confirmed.",
	}, {
		name: "Physics Cuppers",
		dateAndTime: "TBD",
		description: "",
	}],
	8: [{
		name: "Talk #8",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: `A talk will happen at this time! Details to be confirmed.`,
	}, {
		name: "Crewdate",
		dateAndTime: "TBD",
		description: "",
	}],
};