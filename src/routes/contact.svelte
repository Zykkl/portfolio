<script>
	import { init, sendForm } from 'emailjs-com';
	import { variables } from '$lib/variables';
	init(variables.emailjs_userid);
	function sendMessage() {
		let message = document.getElementById('contactForm');
		let btn = document.getElementById('submitBtn');
		btn.disabled = true;
		btn.innerText = 'Message Sending...';
		sendForm('service_zykkl', 'template_kfdd7id', message)
			.then(() => {
				btn.style.backgroundColor = 'var(--brand-color)';
				btn.style.color = 'white';
				btn.innerText = 'Message Sent!';
			})
			.catch(() => {
				window.alert('Error! Try again later.');
				btn.disabled = false;
				btn.innerText = 'Send';
			});
	}
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="container">
	<form class="contactForm" on:submit|preventDefault={sendMessage} id="contactForm">
		<div class="inputBar">
			<input type="text" class="formInput" name="from_name" required placeholder="Name" />
			<input type="email" class="formInput" name="reply_to" required placeholder="Email" />
			<textarea class="messageBox" name="message" required placeholder="message" />
		</div>
		<button type="submit" id="submitBtn" class="submitBtn">Send</button>
	</form>
	<h2>Other ways to contact me</h2>
	<div class="contactInfo">
		<a href="https://twitter.com/zykkldev">
			<img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
		</a>
		<a href="https://t.me/zykkl">
			<img src="https://img.icons8.com/color/48/telegram-app--v1.png" alt="telegram" />
		</a>
		<a href="mailto:alex@zykkl.dev">
			<img src="https://img.icons8.com/material-rounded/48/new-post.png" alt="email" />
		</a>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 50px auto;
		text-align: center;
	}
	:root {
		--brand-color: #475569;
		--dark-color: #1e293b;
		--mid-color: #cbd5e1;
		--light-color: #f8fafc;
	}
	.contactForm {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		padding: 20px;
		border-radius: 5px;
		background-color: var(--dark-color);
		border: none;
	}
	.inputBar {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		padding: 20px;
		border-radius: 5px;
		background-color: var(--dark-color);
		border: none;
	}
	.formInput {
		width: 100%;
		max-width: 500px;
		margin: 5px;
		padding: 20px;
		border-radius: 5px;
		background-color: var(--dark-color);
		border: 1px solid var(--mid-color);
	}
	.messageBox {
		width: 100%;
		max-width: 500px;
		margin: 5px;
		padding: 20px;
		border-radius: 5px;
		background-color: var(--dark-color);
		border: 1px solid var(--mid-color);
		margin-bottom: 10px;
		resize: none;
	}
	.submitBtn {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		padding: 20px;
		border-radius: 5px;
		background-color: var(--brand-color);
		color: var(--light-color);
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		border: 2px solid var(--mid-color);
	}
	.submitBtn:hover {
		background-color: var(--mid-color);
		color: var(--brand-color);
		border: 2px solid var(--brand-color);
	}
</style>
