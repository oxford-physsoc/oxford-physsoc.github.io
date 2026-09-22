<script setup lang="ts">
import App from "@/components/App.vue";

import CommitteeGroupPhoto from "@/assets/backgrounds/background-about.png";

// PLATINUM
import JumpTradingImg from "@/assets/icons/sponsors/jump-trading.svg";

// GOLD
import JaneStreetImg from "@/assets/icons/sponsors/jane-street.svg";
import DEShawImg from "@/assets/icons/sponsors/de-shaw.jpg";
import SchonfeldImg from "@/assets/icons/sponsors/schonfeld.png";
import SquarepointImg from "@/assets/icons/sponsors/square-point.svg";

// SILVER
import TPPImg from "@/assets/icons/sponsors/tpp.webp";
import DVImg from "@/assets/icons/sponsors/dv-trading.webp";

// BRONZE
import DaVinciImg from "@/assets/icons/sponsors/da-vinci.png";
import DFineImg from "@/assets/icons/sponsors/d-fine.webp";

// PARTNER
import IOPImg from "@/assets/icons/sponsors/iop-2.png";

import SponsorCard from "./SponsorCard.vue";
</script>

<template>
	<App
		:background-properties="{
			backgroundImg: CommitteeGroupPhoto,
			height: '20vw',
		}"
	>
		<template #first-slot>
			<h1>Sponsors</h1>
		</template>
		<div class="c-content-card c-content-card-sponsors">
			Our sponsorship packages are designed to introduce your organization to some of the most talented and motivated physics students across the UK. At OUPS, we view our sponsors as both clients and partners, and are committed to ensuring that each of our sponsors receives the greatest standard of service. Some benefits of being a sponsor include, but are not limited to:
			<ul>
				<li>Advertisements on our weekly newsletter of 1,600+ members, social media, and more</li>
				<li>Access to our resume book</li>
				<li>Opportunities to host lectures, workshops, and coffee chats</li>
			</ul>

			<span>
				We are very grateful for the vital role our sponsors play in keeping our events as accessible as possible to all students across Oxford. Please contact
				<a
					href="mailto:oups.finances@gmail.com"
					target="_blank"
				>oups.finances@gmail.com</a> if you are interested in working with OUPS – we will be glad to send over our sponsorship packages and set up a call to discuss how we might best help your organization.
			</span>
			<span>
				<br>
				<br>
			</span>
			<h1>Platinum Sponsor</h1>
			<SponsorCard :img="JumpTradingImg">
				Jump Trading is a leading global trading firm that combines sophisticated quantitative research, cutting-edge technology, and an entrepreneurial culture. Founded in 1999, Jump has over 1700 employees across offices in Chicago, New York, London, Paris, Amsterdam, Singapore, Shanghai, Hong Kong, and more.
				<br>
				Jump is still privately owned and funded, fostering a culture of intellectual curiosity and learning. Our people are some of the world's most brilliant minds with backgrounds from the trading industry, Silicon Valley tech companies and start-ups, top PhD programs and research labs.
				<br>
				We have a 25+ year history of investing in superior infrastructure, including custom hardware, software, wireless networks, and a world-class supercomputer. We leverage our proprietary technology to analyse massive data sets and identify trends in global markets across asset classes.
			</SponsorCard>
			<h1>Gold Sponsors</h1>
			<SponsorCard :img="JaneStreetImg">
				Jane Street is a quantitative trading firm with offices worldwide. We hire smart, humble people who love to solve problems, build systems, and test theories. Will our next great idea come from you?
			</SponsorCard>
			<SponsorCard :img="DEShawImg">
				Founded in 1988 over a small bookstore in downtown New York City, the D. E. Shaw group began with six employees and $28 million in capital and quickly became a pioneer in computational finance. In the early days of exposed pipes and extension cords, tripping on a cable could take out our whole trading system. Today, we have more than 2,000 people around the globe and an institutional-grade (and trip-proof) infrastructure, but we still value creativity, entrepreneurship, and the spirit of discovery.
				<br>
				We prize our culture of collaboration across disciplines, geographies, and investment strategies. Experienced leadership and diversely talented minds chart our course. Analytical rigor, an open exploration of ideas, and a relentless pursuit of excellence drive us forward. We are dedicated to ensuring all employees—across gender identity, race, ethnicity, sexual orientation, religion, life experience, and more—feel welcome and empowered to do their best work at the D. E. Shaw group.
			</SponsorCard>
			<SponsorCard :img="SchonfeldImg">
				Founded in 1988 by Steven Schonfeld, the firm has grown from a proprietary trading firm with deep systematic roots into a multi-strategy, multi-manager hedge fund with an investing footprint that spans five continents.
				<br>
				Under the leadership of Chief Executive Officer and Chief Investment Officer Ryan Tolkin, Schonfeld unites disciplined investing with an entrepreneurial, collaborative culture. We apply decades of experience in our effort to capitalize on inefficiencies and opportunities in the markets, across asset classes and geographies.
			</SponsorCard>
			<SponsorCard :img="SquarepointImg">
				Squarepoint dates back to 2000 and has evolved through Lehman Brothers and Barclays before becoming independent in December 2014.
				<br>
				We are committed to developing a world-class quantitative investment platform through our systematic, diversified approach. At Squarepoint, collaboration occurs across all teams, sharing investment ideas and promoting a culture of ownership and accountability. We pride ourselves on our deep expertise across Quantitative Investment Management, Technology and Trading Operations.
			</SponsorCard>
			<h1>Silver Sponsors</h1>
			<SponsorCard :img="TPPImg">
				TPP is a world-leader in Digital Health. From apps enabling patients to manage their own care to comprehensive hospital solutions, TPP delivers technology that connects everyone involved in healthcare delivery. For over twenty years, we have been applying the most advanced technology to provide a safe and secure environment to deliver care. Our aim is to improve access to healthcare data, making sure it is available whenever and wherever it is needed. We want to help people make the best use of that data, to empower clinicians and citizens, and to create the healthcare systems of the future.
			</SponsorCard>
			<SponsorCard :img="DVImg">
				A leading liquidity provider in financial markets worldwide with expertise in trading, hedging, risk management and technology.
			</SponsorCard>
			<h1>Bronze Sponsors</h1>
			<SponsorCard :img="DaVinciImg">
				Da Vinci is a proprietary trading house founded in 2015 and specialised in solving market inefficiencies, identifying opportunities based on volatility arbitrage and delta1 strategies and providing liquidity to the markets. We are headquartered in the home of the world's first stock market, Amsterdam, and we have offices in Miami and Mumbai. Today, we trade on the most prominent exchanges across Asia and the US. Our vision is set on sustainable growth and collaboration across teams and offices.
			</SponsorCard>
			<SponsorCard :img="DFineImg">
				d-fine is a European consulting company with over 1,500 employees and a growing international presence with eleven offices distributed across seven countries. Our projects focus on quantitative challenges in data analytics, data science, modelling, and the development of sustainable technological solutions. Our approach is based on over 20 years of practical experience and dynamic teams with an analytical and technological focus.
			</SponsorCard>
			<h1>Partners</h1>
			<SponsorCard :img="IOPImg">
				We are a gold partner of the Institute of Physics.
			</SponsorCard>
			<span>
				<br>
				<br>
			</span>
		</div>
	</App>
</template>

<style scoped>
.c-content-card {
	margin-top: 50px;
	font-size: 20px;
	text-align: justify;
}

.c-content-card-sponsors h1 {
	font-size: 2em;
}
</style>