import React from 'react';

export default function ArticleCard ({ title, image, description, href, publishedAt, source }) {
	return (
		<article className="card">
			<a className="card__link" href={href}>
				<img className="card__thumbnail" src={image} alt={title}/>
				<div className="card__content">
					<h2>{title}</h2>
					<p>{description}</p>
					<span>Published by {source.name} at {publishedAt}</span>
				</div>
			</a>
		</article>
	);
}
