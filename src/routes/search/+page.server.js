export const load = async (event) => {
	const city = event.url.searchParams.get('city');
	let lat = 0;
	let lon = 0;
	let geocodeData = {};
	if (!city) {
		return {
			error: 'Please input a city'
		};
	}
	const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=d7fd7a2eed9b4078c2476bb88c6cba7f`;
	try {
		const geocodeRes = await fetch(geocodeUrl);
		if (geocodeRes.ok) {
			geocodeData = await geocodeRes.json();
			lat = geocodeData[0].lat;
			lon = geocodeData[0].lon;

			const currentUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=d7fd7a2eed9b4078c2476bb88c6cba7f`;
			const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d7fd7a2eed9b4078c2476bb88c6cba7f`;
			try {
				const currentRes = await fetch(currentUrl);
				const forecastRes = await fetch(forecastUrl);

				if (currentRes.ok && forecastRes.ok) {
					const weatherData = await currentRes.json();
					const forecast = await forecastRes.json();
					let imgBaseUrl = 'https://openweathermap.org/img/wn/10d@4x.png';
					let imgCurrentUrl = '';
					imgCurrentUrl = imgBaseUrl.replace('10d', weatherData.current.weather[0].icon);
					weatherData.daily.pop();
					weatherData.daily.forEach((element) => {
						element.weather[0].imgUrl = imgBaseUrl.replace('10d', element.weather[0].icon);
					});
					let dailyForecast = weatherData.daily;

					return { weatherData, forecast, imgCurrentUrl, dailyForecast, error: '' };
				} else if (currentRes.status === 404) {
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
		}
	} catch (err) {
		console.log(err);
	}
};
