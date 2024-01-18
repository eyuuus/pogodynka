export const load = async (event) => {
	const city = event.url.searchParams.get('city');
	if (!city) {
		return {
			error: 'Please input a city'
		};
	}
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7fd7a2eed9b4078c2476bb88c6cba7f`;
	const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d7fd7a2eed9b4078c2476bb88c6cba7f`;
	try {
		const res = await fetch(url);
		const forecastRes = await fetch(forecastUrl);
		if (res.ok && forecastRes.ok) {
			const weatherData = await res.json();
			const forecast = await forecastRes.json();
			console.log(forecast);
			return { weatherData, forecast, error: '' };
		} else if (res.status === 404) {
			return {
				error: `The location '${city}' could not be found`
			};
		} else {
			return { error: 'Internal server error' };
		}
	} catch (err) {
		console.log(err);
		return { error: 'Internal server error' };
	}
};
