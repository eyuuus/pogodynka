export const load = async () => {
	try {
		const res = await fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Sanok&appid=d7fd7a2eed9b4078c2476bb88c6cba7f'
		);
		if (res.ok) {
			const weatherData = await res.json();

			return { weatherData, error: '' };
		} else if (res.status === 404) {
			return {
				error: `The location could not be found`
			};
		} else {
			return { error: 'Internal server error' };
		}
	} catch (err) {
		console.log(err);
		return { error: 'Internal server error' };
	}
};
