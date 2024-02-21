<script>
	import search from '$lib/images/search-line-icon.svg';
	export let data;
	console.log(data);
</script>

<main class="bg-[url('$lib/images/banner.jpg')] bg-cover h-[65vh] flex justify-center w-full">
	<form action="/search" method="get" class="flex h-16 w-1/4 mt-[15vh]">
		<div class="bdl-px bg-white flex items-center justify-center w-[20%]">
			<img src={search} alt="" class="h-2/3 w-2/3 border-r pr-2" />
		</div>
		<input type="search" name="city" placeholder="Search your city" class="outline-none w-[80%]" />
	</form>
	<div class="flex justify-around w-1/2 h-1/3">
		<!-- {#each data as city}
			<div class="backdrop:blur-sm h-full w-1/4 bg-gray-800">{city.temp.main}</div>
		{/each} -->
	</div>
</main>
