<nav>
	<div class="nav-container">
		<a href="/" class="nav-logo" title="Back to Homepage">Alex Zykkl</a>
		<div class="nav-links">
			<a href="/about" class="link">About</a>
			<a href="/skills" class="link">Skills</a>
			<a href="/projects" class="link">Projects</a>
			<a href="/contact" class="link">Contact</a>
		</div>
	</div>
</nav>

<div class="container">
	<slot />
</div>

<style>
	.container {
		max-width: 1400px;
		margin: 50px auto;
	}
</style>
