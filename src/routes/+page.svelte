<script>
	import search from '$lib/images/search-line-icon.svg';
</script>

<main class="bg-[url('$lib/images/banner.jpg')] bg-cover h-[65vh] flex justify-center w-full">
	<form action="/search" method="get" class="flex h-16 w-1/4 mt-[15vh]">
		<div class="bdl-px bg-white flex items-center justify-center w-[20%]">
			<img src={search} alt="" class="h-2/3 w-2/3 border-r pr-2" />
		</div>
		<input type="search" name="city" placeholder="Search your city" class="outline-none w-[80%]" />
	</form>
</main>
