<svelte:head>
	<title>About</title>
</svelte:head>

<div class="main_container">
	<section>
		<div class="inner-container">
			<h2 class="about-title">I'm Alex 👋</h2>
			<div class="about-subtitle">
				<p>
					Frontend Web Developer and and constant learner with passion for starting new projects
					(and never finishing them). I also enjoy coding Discord Bots and discover new open source
					projects. When I'm not solving problems, I love to be outside and do sports. I'm planning
					on posting weekly blogs, which currently isn't going great.
				</p>
				<p>
					Helping make the World Wide Web a better place. You can contact me at <span
						class="info-text">alex@zykkl.dev</span
					>
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	.main_container {
		margin: 0 80px 0 65px;
	}

	.about-title {
		font-size: 4.2rem;
		font-weight: bold;
		margin-top: 11rem;
	}

	.about-subtitle {
		margin-top: -2rem;
	}

	.about-subtitle > p {
		width: 60%;
		font-weight: normal;
		font-size: 1rem;
		line-height: 2rem;
	}

	.info-text {
		font-style: italic;
		font-weight: bold;
	}
</style>
