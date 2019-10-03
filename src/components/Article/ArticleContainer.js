import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleContainer = ({ articles }) => {
	return (
		<section className="articles">
			{articles.map((article, index) => {
				return (
					<ArticleCard
						key={index}
						title={article.title}
						image={article.urlToImage}
						description={article.description}
						href={article.url}
						publishedAt={new Date(article.publishedAt).toGMTString()}
						source={article.source}
					/>
				);
			})}
		</section>
	);
};

export default ArticleContainer;


