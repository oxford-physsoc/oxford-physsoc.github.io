export interface PageDBEntry {
	url: string
	name: string
}

export const Pages = [{
	url: "/",
	name: "Home"
},
{
	url: "/events/",
	name: "Events"
},
{
	url: "/committee/",
	name: "Committee"
},
{
	url: "/sponsors/",
	name: "Sponsors"
}] as const;