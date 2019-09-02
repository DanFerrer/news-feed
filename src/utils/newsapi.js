import axios from 'axios';

const http = axios.create({
	baseURL: 'https://newsapi.org/v2',
	headers: { 'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY }
});

const Defaults = {
	country: 'us',
	pageSize: 50,
	category: 'general'
};

const NewsApi = (function() {
	let source;

	return async function (url, options) {
		if (source) {
			// Check if we already made a request and if so, cancel it before making a new one
			source.cancel();
		}

		source = axios.CancelToken.source();

		try {
			const response = await http.get(url, {
				params: options,
				cancelToken: source.token
			});

			console.log(response);

			return response.data.articles;

		} catch(error) {
			if (axios.isCancel(error)) {
				console.error('Request canceled', error.message);
			} else {
				console.error('Something went wrong', error.message);
			}
		}
	};
}());


export async function getTopHeadlines(options) {
	return await NewsApi('/top-headlines', Object.assign(Defaults, options));
}

export async function getAllArticles(options) {
	return await NewsApi('/everything', options);
}
