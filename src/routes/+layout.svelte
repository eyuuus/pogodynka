<nav>
	<div id="logo">
		<img src="favicon.png" alt="" />Weather
	</div>
</nav>
<slot />

<style>
	nav {
		background-color: #1f1f1f;
		width: 100%;
		height: 9%;
		display: flex;
		align-items: center;
	}
	#logo {
		margin-left: 3rem;
		font-weight: 700;
		font-size: 1.5rem;
		color: white;
	}
	img {
		height: 2rem;
		width: 2rem;
	}
</style>
