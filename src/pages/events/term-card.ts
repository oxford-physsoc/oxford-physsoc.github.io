export interface EventEntry {
	name: string,
	dateAndTime: string,
	description: string,
	clickable?: boolean,
}

export const TermCard: Record<string, EventEntry[]> = {
	1: [{
		name: "Talk #1",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: "A talk will happen at this time! Details to be confirmed.",
		clickable: true,
	}],
	2: [{
		name: "Talk #2",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: "A talk will happen at this time! Details to be confirmed.",
		clickable: true,
	}],
	3: [{
		name: "Talk #3",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: "A talk will happen at this time! Details to be confirmed.",
	}],
	4: [{
		name: "Talk #4",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: "A talk will happen at this time! Details to be confirmed.",
	}],
	5: [{
		name: "Talk #5",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: "A talk will happen at this time! Details to be confirmed.",
	}],
	6: [{
		name: "Talk #6",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: "A talk will happen at this time! Details to be confirmed.",
	}],
	7: [{
		name: "Talk #7",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: "A talk will happen at this time! Details to be confirmed.",
	}],
	8: [{
		name: "Talk #8",
		dateAndTime: "Thursday 17:30 - 18:30",
		description: "A talk will happen at this time! Details to be confirmed.",
	}],
};