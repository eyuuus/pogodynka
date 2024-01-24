<script>
	export let data;
	import clouds from '$lib/images/cloudy-icon.svg';
	import cloudsLightning from '$lib/images/cloud-lightning-icon.svg';
	import cloudsRain from '$lib/images/cloud-rain-icon.svg';
	import cloudsRainLightning from '$lib/images/cloud-rain-icon.svg';
	import cloudsSnow from '$lib/images/cloud-snow-icon.svg';
	import cooling from '$lib/images/cooling-icon.svg';
	import sunny from '$lib/images/day-sunny-icon.svg';
	const setImage = () => {};
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
				<img src={data.weatherData.current.weather[0].main == 'Clouds' ? '' : ''} alt="" />
				{kToc(data.weatherData.current.temp)}&deg;<span class="text-3xl">C</span>
			</div>
			<div>
				<div></div>
			</div>
		</div>
	</div>
</main>
