<script>
	export let data;

	let text = getyes();
	async function getyes() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=sanok&appid=${data.apiKey}`
		);
		const promise = await response.json();

		return {
			promise
		};
	}
	const kToC = (kelvin) => {
		kelvin += 273.15;
		return {
			kelvin
		};
	};
</script>

<main>
	{#await text}
		czekaj
	{:then weather}
		{weather}
	{/await}
</main>
