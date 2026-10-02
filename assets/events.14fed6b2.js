import{d as b,b as a,e as o,f as e,t as l,_ as g,r as k,l as _,h as p,w as y,u,A as w,g as f,F as v,i as s,m as A,n as x,p as C,k as L}from"./App.4059bd3e.js";const q={class:"c-event-display"},M=["innerHTML"],B=b({__name:"EventDisplay",props:{event:{}},setup(d){const n=d;return(i,h)=>(a(),o("div",q,[e("h2",null,l(n.event.name),1),e("span",{innerHTML:n.event.description},null,8,M)]))}});const D=g(B,[["__scopeId","data-v-e813e4b3"]]),I=""+new URL("background-termcard.114cfab2.png",import.meta.url).href,E=""+new URL("martin_wood.92033fa9.png",import.meta.url).href,V={1:[{name:"Talk by Alexander Lvovsky",dateAndTime:"Thursday 17:30 - 18:30",description:`<h2>Quantum physics: from paradox to technology</h2>
		
		<h3>Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 15 Oct (Thu), 17:30</h3>`,clickable:!0}],2:[{name:"Talk by Michael Berry",dateAndTime:"Thursday 17:30 - 18:30",description:`<h2>What we learn(ed) from the rainbows</h2>
		
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
		</i>`,clickable:!0}],3:[{name:"Talk by Mitchell Yzer",dateAndTime:"Thursday 17:30 - 18:30",description:`<h2>Details TBD</h2>
		<h3>
		Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 04 Nov (Thu), 17:30
		</h3>`,clickable:!0}],4:[{name:"Talk by Aleks Kissinger",dateAndTime:"Thursday 17:30 - 18:30",description:`<h2>Quantum fault-tolerance by construction</h2>
		<h3>
		Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 04 Nov (Thu), 17:30
		</h3>
		<i>Quantum data is extremely sensitive to noise. This has led to an increasingly widespread believe that quantum error correction and fault-tolerant quantum computation will be a crucial ingredient in the vast majority of useful quantum computations. I will talk about a recent approach to designing and working with fault-tolerant quantum circuits called "fault tolerance by construction". In this approach, you can specify a target quantum computation and transform it iteratively using special rules called fault equivalences, which preserve a computations behaviour under noise. We can define fault equivalences for circuits, but also for diagrams in the ZX calculus, a particularly useful tool for quantum circuit optimisation. After giving a flavour for what it's like working with the ZX calculus and explaining the basics of quantum fault tolerance, I will give some examples of calculations involving fault equivalences and survey some of the state of the art results and open problems in the area. This talk assumes no prior knowledge of quantum computing or quantum circuits.</i>`,clickable:!0}],5:[{name:"Talk by Simon Clark",dateAndTime:"Thursday 17:30 - 18:30",description:`<h2>Climate communication in the age of AI slop</h2>
		<h3>Venue: Martin Wood Lecture Theatre, Clarendon Laboratory
		<br>
		Time: 11 Nov (Thu), 17:30</h3>
		<i>Talking about climate change is one of the most urgent necessities facing science today, yet we are facing an online environment increasingly hostile to quality information. How do we cut through the noise? How do you reach an audience with the facts, how do you get them to listen and - most importantly - to act on them? In this talk I'll reflect on my decade of experience as a climate communicator while trying not to think of all the trauma this lecture theatre inflicted on me.
		</i>`,clickable:!0}],6:[{name:"First-year lecturer panel discussion",dateAndTime:"Thursday 17:30 - 18:30",description:"A talk will happen at this time! Details to be confirmed."}],7:[{name:"Talk by Jenny Barnes",dateAndTime:"Thursday 17:30 - 18:30",description:"A talk will happen at this time! Details to be confirmed."}],8:[{name:"Talk #8",dateAndTime:"Thursday 17:30 - 18:30",description:"A talk will happen at this time! Details to be confirmed."}]},H={id:"term-card"},W={class:"c-term-card__week-text"},N={class:"c-term-card__event-wrapper"},$=["onClick"],z={ref:"event-display",class:"c-content-card",style:{margin:"30px 0"}},F=b({__name:"Events",setup(d){const n=k(void 0),i=_("event-display");function h(c){!c.clickable||(n.value=c,requestAnimationFrame(()=>{if(!i.value)return;const t=Math.min(i.value.scrollHeight+i.value.offsetTop,i.value.scrollHeight+window.innerHeight);window.scrollTo(0,t-window.innerHeight+30)}))}return(c,t)=>(a(),p(w,{"background-properties":{backgroundImg:u(I),height:"0"}},{"first-slot":y(()=>[t[1]||(t[1]=e("h1",null,"Term Card",-1)),e("div",H,[(a(!0),o(v,null,f(u(V),(T,m)=>(a(),o("div",{key:"term-card-entry-"+m,class:"c-term-card-entry"},[e("span",W,"W"+l(m),1),e("div",N,[(a(!0),o(v,null,f(T,r=>(a(),o("div",{key:r.name,class:C({"c-term-card__event":!0,"c-term-card__event--clickable":r.clickable}),onClick:S=>h(r)},[s(l(r.name)+" ",1),t[0]||(t[0]=e("br",null,null,-1)),e("i",null,l(r.dateAndTime),1)],10,$))),128))])]))),128))])]),default:y(()=>[e("div",z,[t[2]||(t[2]=e("span",null,[s(" \u2191 Click on an event above to see more details \u2191 "),e("br")],-1)),n.value?(a(),p(D,{key:0,event:n.value},null,8,["event"])):A("",!0)],512),e("div",{class:"c-content-card",style:x({"background-image":`url(${u(E)})`,"padding-bottom":"50px","background-position":"center","background-size":"cover"})},[...t[3]||(t[3]=[e("h1",null,"Talks",-1),s(" Talks are our main event. They are hosted every Thursday in the Martin Wood Lecture Theatre in Clarendon Laboratory. They are free for everyone to join, member or non-member! ",-1),e("br",null,null,-1),s(" Talks are a great opportunity to be acquainted with topics of current research, as well as to get to know our professors more. This year we will be hosting several panel talks, so stay tuned! ",-1)])],4)]),_:1},8,["background-properties"]))}});const R=g(F,[["__scopeId","data-v-d88f368c"]]);L(R).mount("#app");
