import React from 'react';

export default function ArticleCard ({ title, image, description, href, publishedAt, source }) {
	return (
		<article className="article-card">
			<a className="article-card__link" href={href}>
				<div className="article-card__thumbnail">
					<img src={image} alt={title}/>
				</div>
				<div className="article-card__content">
					<h2>{title}</h2>
					<p>{description}</p>
					<span>Published by {source.name} at {publishedAt}</span>
				</div>
			</a>
		</article>
	);
}
