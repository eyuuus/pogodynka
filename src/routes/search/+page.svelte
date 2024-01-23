<script>
	export let data;
	console.log(data);
	let date = new Date();
	const kToc = (temp) => {
		return Math.round((temp = temp - 273.1) * 10) / 10;
	};
</script>

<main class="w-1/2 flex flex-col m-auto mt-6">
	<div class="h-full bg-white p-4 rounded-md">
		<p class="font-light text-xl">Current weather</p>
		<p>{data.weatherData}</p>
		<div class="flex w-3/4 m-auto mt-4">
			<div class="text-6xl">
				{kToc(data.weatherData.current.temp)}&deg;<span class="text-3xl">C</span>
			</div>
			<div>
				<div></div>
			</div>
		</div>
	</div>
</main>
