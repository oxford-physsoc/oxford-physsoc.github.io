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
		dateAndTime: "Friday 18:00 - 19:30",
		description: `<h3>Venue: L2 @ Mathematical Institute
		<br>
		Time: 16 Oct (Fri), 18:00</h3>
		Da Vinci is coming to Oxford for a workshop, and we'd love to see you there. We'll play trading games, work through some fun challenges, and network over drinks and pizza. Top performers will also have the chance to be fast-tracked in their recruitment process.`,
		clickable: true,
	}, {
		name: "Ou est le Poulet",
		dateAndTime: "Friday 19:30 - 23:00",
		description: `<h3>Meet @ Radcliffe Camera
		<br>
		Time: 16 Oct (Fri), 19:30</h3>
		A committee member dressed as a chicken will hide in an unknown bar. Teams will go on bar crawls, drinking at each bar the chicken is NOT at, and attempt to find him. When we find him there will be an OPEN TAB at the bar and PRIZES for the fastest teams!`,
		clickable: true
	}],
	2: [{
		name: "Talk by Michael Berry",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: `<h2>What we learn(ed) from rainbows</h2>
		
		<h3>Venue: O'Reilly Theatre, Keble College
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
		dateAndTime: "Friday 19:00 - 22:00",
		description: `<h3>
		Venue: Cosy Club
		<br>
		Time: 23 Oct (Fri), 19:00 - 22:00
		</h3>`,
		clickable: true,
	}],
	3: [{
		name: "Talk by Mitchell Yzer",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: `<h2>Life in the Universe: The Past, Present, and Future of an Ever-Growing Search</h2>
		<h3>
		Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 29 Oct (Thu), 17:30
		</h3>
		<i> “Are we alone?” It is one of the biggest open questions in astronomy, and we are about to enter an era in which we will finally have the tools to try and find an answer. Solar system space missions to Mars, Venus, Titan, and the icy moons will deepen our understanding of the limits of habitability. Meanwhile, the search for biosignatures outside the solar system will truly kick into gear when the next generation of telescopes, including the Extremely Large Telescope (ELT), the Habitable Worlds Observatory (HWO), and the Large Interferometer for Exoplanets (LIFE), are pointed at our neighbouring exoplanets and start characterising their atmospheres. All the while, the Search for Extraterrestrial Intelligence (SETI) focuses on the detection of so-called technosignatures: signs of extraterrestrial technology, primarily through radio observations and astronomical anomaly detection. 


While all three of these fields might have started out as small, niche, and independent research endeavours, they have since become much more mainstream and interconnected. My work lies at the boundary between two of these: I investigate whether we could use high-resolution spectroscopy with the ELT to search for the atmospheric signatures of the technosignature gases we are currently releasing into our own atmosphere. In this talk, I will discuss the past, present, and future of the search for life in the Universe, focusing on the challenges we face and how I try to overcome them in my own research. 
</i>`,
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
		description: `<h2>How to organise a teaching lab</h2>
		<h3>Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 12 Nov (Thu), 17:30</h3>`,
	}, {
		name: "Physics Cuppers",
		dateAndTime: "TBD",
		description: "",
	}],
	8: [{
		name: "Crewdate",
		dateAndTime: "TBD",
		description: "",
	}],
};