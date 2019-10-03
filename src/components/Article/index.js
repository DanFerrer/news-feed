import React from 'react';
import ArticleContainer from './ArticleContainer';
import './Article.scss';

import { getTopHeadlines } from '../../utils/newsapi';

export default class Article extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: [],
			error: null
		};
	}

	async componentDidMount() {
		if (!this.state.articles.length) {
			try {
				const articles = await getTopHeadlines();

				this.setState({
					articles
				});
			} catch (error) {
				console.log(error);

				this.setState({
					error: 'Sorry, articles couldn\'t be fetched'
				});
			}
		}
	}

	render() {
		return (
			<ArticleContainer articles={this.state.articles}/>
		);
	}
}
