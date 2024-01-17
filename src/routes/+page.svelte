<script>
	export let data;
	console.log(data);
	const kToc = (temp) => {
		return Math.round((temp = temp - 273.1));
	};
</script>

<main>
	<div id="banner">
		<div id="search">
			<form action="search">
				<div id="icon"></div>
				<input type="text" name="city" id="city" placeholder="Search your city" />
			</form>
		</div>
	</div>
</main>

<style>
	#banner {
		width: 100%;
		height: 78vh;
		background-image: url($lib/images/banner.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
	}
	#search {
		width: 30%;
		height: 3rem;
	}
	input {
		width: 85%;
		height: 100%;
	}
	#icon {
		width: 15%;
		height: 100%;
	}
	form {
		height: 100%;
		display: flex;
		width: 100%;
	}
</style>
