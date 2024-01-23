<script>
	import '../app.css';
	import search from '$lib/images/search-line-icon.svg';
</script>

<nav class="h-16 w-full bg-[#1f1f1f] flex items-center">
	<a href="/" class="h-full">
		<div class="h-full flex items-center ml-8">
			<img src="favicon.png" alt="" class="h-4/6 w-4/6" />
			<span class="text-white text-2xl font-bold">Weather</span>
		</div>
	</a>
	<form action="/search" method="get" class="flex h-10 w-1/5 overflow-hidden rounded-md ml-8">
		<div class="bdl-px bg-white flex items-center justify-center w-[20%]">
			<img src={search} alt="" class="h-2/3 w-2/3 border-r pr-2" />
		</div>
		<input type="search" name="city" placeholder="Search your city" class="outline-none w-[80%]" />
	</form>
</nav>
<slot />
