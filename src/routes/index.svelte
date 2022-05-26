<script>
	import Typewriter from 'svelte-typewriter';
</script>

<svelte:head>
	<title>Portfolio • Alex Zykkl</title>
</svelte:head>

<div class="container">
	<div class="info">
		<div class="animate-background">
			<div class="container info-container">
				<div class="info-text">
					<h1>
						<p class="animate-text-1">Alexandre Carvalho</p>
					</h1>
				</div>
				<Typewriter loop>
					<h2 class="subtitle">Frontend Web Developer</h2>
					<h2 class="subtitle">Discord Bot Developer</h2>
					<h2 class="subtitle">Gamer</h2>
				</Typewriter>
				<div style="color:black" class="scroll-button animate-scroll" tabindex="0">
					<a href="/about">See More About Me</a>
					<div class="arrow">→</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="background-div" />

<style>
	.info {
		text-align: center;
		position: relative;
	}

	.info-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: left;
		align-items: start;
	}

	.container {
		max-width: 1400px;
		margin: 190px 0 0 2rem;
	}

	.info h1 {
		font-size: 4rem;
		margin: 0;
	}

	.info h1 p {
		position: relative;
		font: inherit;
		margin: 0;
		text-align: left;
		line-height: 130%;
		width: fit-content;
		font-weight: 800;
		letter-spacing: -0.03em;
	}

	.info h2 {
		max-width: 65ch;
		font-weight: 200;
		margin-top: 0.5rem;
	}

	.background-div {
		background-color: var(--dark-color);
		width: 100%;
		height: 56vh;
		margin: -155px auto;
	}

	.info .info-text {
		position: relative;
	}

	.scroll-button {
		display: flex;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.scroll-button .arrow {
		margin-left: 0.5rem;
	}
</style>
