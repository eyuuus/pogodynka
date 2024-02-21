<script>
	export let data;
	import Card from '$lib/components/Card.svelte';
	import rainIcon from '$lib/images/rain-svgrepo-com.svg';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const kToc = (temp) => {
		return Math.round((temp = temp - 273.1) * 10) / 10;
	};

	const convertUnixdate = (unix) => {
		let myDate = new Date(unix * 1000);
		return myDate;
	};
	const numToDay = (num) => {
		return num == 1
			? 'Monday'
			: num == 2
				? 'Tuesday'
				: num == 3
					? 'Wednesday'
					: num == 4
						? 'Thursday'
						: num == 5
							? 'Friday'
							: num == 6
								? 'Saturday'
								: num == 0
									? 'Sunday'
									: '';
	};
	onMount(() => {
		console.log(data);
	});
</script>

<main class="w-full flex flex-col m-auto mt-6" transition:fade={{ duration: 100 }}>
	<Card>
		<p class="font-light text-xl mb-2">Current weather</p>
		<hr />
		<div class="flex w-full m-auto mt-2 h-full">
			<div class="text-5xl w-[45%]">
				<img src={data.imgCurrentUrl} class="inline w-1/2" alt="" />
				{kToc(data.weatherData.current.temp)}&deg;<span class="text-2xl text-gray-500">C</span>
			</div>
			<div class="flex flex-col justify-around divide-y w-[55%] text-lg">
				<div class="flex justify-between h-1/3 items-center">
					<div>Wind Speed</div>
					<div class="font-bold">
						{Math.round(data.weatherData.current.wind_speed * 3.6)}km/h
					</div>
				</div>
				<div class="flex justify-between h-1/3 items-center">
					<div>Wind Gusts</div>
					<div class="font-bold">
						{Math.round(data.weatherData.current.wind_gust * 3.6)}km/h
					</div>
				</div>
				<div class="flex justify-between h-1/3 items-center">
					<div>UV</div>
					<div class="font-bold">{data.weatherData.current.uvi}</div>
				</div>
			</div>
		</div>
	</Card>
	<Card>
		<div class="flex justify-around w-full divide-x">
			{#each data.dailyForecast as day}
				<div class=" flex flex-col items-center">
					<div class="font-bold">{numToDay(convertUnixdate(day.dt).getDay())}</div>
					<div class="w-full text-center">
						{kToc(day.temp.day)}&deg;<span class="text-md">C</span>
					</div>
					<img src={day.weather[0].imgUrl} alt="" />
					<div>{Math.round(day.pop * 100)}% <img class="w-4 inline" src={rainIcon} alt="" /></div>
				</div>
			{/each}
		</div>
	</Card>
	<Card>
		<div class="flex justify-around w-full">
			{#each data.hourly as hour}
				<div class="flex flex-col items-center">
					<div class="font-heavy">{convertUnixdate(hour.dt).getHours()}:00</div>
					<div class="w-full text-center">
						{kToc(hour.temp)}&deg;<span class="text-md">C</span>
					</div>
				</div>
			{/each}
		</div>
	</Card>
</main>
