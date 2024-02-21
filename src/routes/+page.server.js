export const load = async () => {
	let londonURL =
		'https://api.openweathermap.org/data/2.5/weather?q=london&appid=d7fd7a2eed9b4078c2476bb88c6cba7f';
	let shanghaiURL =
		'https://api.openweathermap.org/data/2.5/weather?q=london&appid=d7fd7a2eed9b4078c2476bb88c6cba7f';
	let newYorkURL =
		'https://api.openweathermap.org/data/2.5/weather?q=london&appid=d7fd7a2eed9b4078c2476bb88c6cba7f';
	try {
		const londonRes = await fetch(londonURL);
		const shanghaiRes = await fetch(shanghaiURL);
		const newYorkRes = await fetch(newYorkURL);

		if (londonRes.ok && shanghaiRes.ok && newYorkRes.ok) {
			let london = await londonRes.json();
			let shanghai = await shanghaiRes.json();
			let newYork = await newYorkRes.json();
			return { london, shanghai, newYork };
		}
	} catch (error) {
		console.log(error);
	}
};
