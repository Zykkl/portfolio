<script context="module">
	import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client/core/core.cjs';
	import { variables } from '$lib/variables';
	const apollo = new ApolloClient({
		link: new HttpLink({
			uri: 'https://api.github.com/graphql',
			fetch,
			headers: { Authorization: `bearer ${variables.gh_token}` }
		}),
		cache: new InMemoryCache()
	});

	async function getProjects() {
		const result = await apollo.query({
			query: gql`
				{
					user(login: "zykkl") {
						repositories(first: 10, privacy: PUBLIC, affiliations: OWNER) {
							edges {
								node {
									name
									url
									description
								}
							}
						}
					}
				}
			`
		});
		return result.data.user.repositories.edges;
	}

	let projects = getProjects();

	function handleFetch() {
		projects = getProjects();
	}
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="container" on:load={handleFetch}>
	<h1>My Projects</h1>
	<div class="grid">
		{#await projects}
			<p>Loading</p>
		{:then projects}
			{#each projects as project}
				<div class="card">
					<h2>{project.node.name}</h2>
					<p>{project.node.description}</p>
					<a href={project.node.url} target="_blank">
						<img
							src="https://img.icons8.com/material-outlined/48/github.png"
							alt="GitHub redirect"
						/>
					</a>
				</div>
			{/each}
		{/await}
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 50px auto;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-template-areas:
			'. .'
			'. .'
			'. .'
			'. .';
	}
	.card {
		padding: 20px 20px 0;
		border-radius: 5px;
		background-color: var(--dark-color);
		box-shadow: 7.5px 7.5px var(--mid-color);
		margin: 10px;
	}
	h1 {
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		color: var(--light-color);
	}
</style>
