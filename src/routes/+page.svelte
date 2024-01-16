<script>
	export let data;
	console.log(data);
	const kToc = (temp) => {
		return Math.round((temp = temp - 273.1));
	};
</script>

<main>w sanoku jest {kToc(data.weatherData.main.temp)}</main>
