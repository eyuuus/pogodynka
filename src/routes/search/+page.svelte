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
		console.log(data.dailyForecast);
		console.log(data);
	});
</script>

<main class="w-full flex flex-col m-auto mt-6" transition:fade={{ duration: 100 }}>
	<Card>
		<p class="font-light text-xl">Current weather</p>

		<div class="flex w-3/4 m-auto mt-4">
			<div class="text-6xl">
				<img src={data.imgCurrentUrl} alt="" />
				{kToc(data.weatherData.current.temp)}&deg;<span class="text-3xl">C</span>
			</div>
			<div>
				<div></div>
			</div>
		</div>
	</Card>
	<Card>
		<div class="flex justify-around w-full">
			{#each data.dailyForecast as day}
				<div class="border-r flex flex-col items-center">
					<div>{numToDay(convertUnixdate(day.dt).getDay())}</div>
					<div class="w-full text-center">
						{kToc(day.temp.day)}&deg;<span class="text-md">C</span>
					</div>
					<img src={day.weather[0].imgUrl} alt="" />
					<div>{Math.round(day.pop * 100)}% <img class="w-4 inline" src={rainIcon} alt="" /></div>
				</div>
			{/each}
		</div>
	</Card>
</main>
