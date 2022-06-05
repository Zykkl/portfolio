<svelte:head>
	<title>Skills</title>
</svelte:head>

<div class="container">
	<h1>My Top Skills</h1>
	<div>
		<section class="skills" id="skills">
			<div class="skills-wrapper">
				<div class="first-set animate__animated animate__pulse">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-plain.svg"
						alt="Svelte"
						loading="lazy"
						class="icon icon-card"
						draggable="false"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
						alt="Node.js"
						loading="lazy"
						class="icon icon-card"
						draggable="false"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
						alt="Go"
						loading="lazy"
						class="icon icon-card"
						draggable="false"
					/>
				</div>
			</div>
		</section>
		<h2 class="o-skills-text">My other Skills</h2>
		<section class="o-skills" id="skills">
			<div class="skills-wrapper">
				<div class="first-set animate__animated animate__pulse">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
						alt="Next.js"
						loading="lazy"
						class="icon icon-card"
						draggable="false"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
						alt="Python"
						loading="lazy"
						class="icon icon-card"
						draggable="false"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
						alt="C# | C Sharp"
						loading="lazy"
						class="icon icon-card"
						draggable="false"
					/>
				</div>
				<div class="second-set animate__animated animate__pulse">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
						alt="Sequelize"
						loading="lazy"
						class="icon icon-card"
						draggable="false"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"
						alt="Debian"
						loading="lazy"
						class="icon icon-card"
						draggable="false"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
						alt="Firebase"
						loading="lazy"
						class="icon icon-card"
						draggable="false"
						id="drop"
					/>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0px auto;
		text-align: center;
	}
	.skills {
		max-width: 68.75rem;
		margin: auto;
		text-align: center;
		margin-top: 2.5rem;
	}

	.skills-wrapper img {
		padding: 1.25rem;
	}

	.icon {
		width: 11.875rem;
		height: 11.25rem;
	}
	.icon-card {
		background-color: #fff;
		border-radius: 11px;
		box-shadow: 0 3px 10px var(--secondary-shadow);
		padding: 20px;
		margin: 10px;
	}
	.o-skills {
		max-width: 68.75rem;
		margin: auto;
		text-align: center;
	}
	.o-skills-text {
		margin-top: 2.5rem;
	}
</style>
