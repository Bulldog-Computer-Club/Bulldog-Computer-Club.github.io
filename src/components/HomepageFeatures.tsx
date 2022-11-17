/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

interface FeatureItem {
	title: string;
	image: string;
	description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
	{
		title: 'All skill levels welcome',
		image: '/img/undraw_welcoming.svg',
		description: (
			<>
				<p>
					Never written a single line of code before? <strong>You're welcome here.</strong>
				</p>

				<p>
					Already familiar with a language and have some projects under your belt?{' '}
					<strong>You're welcome here too.</strong>
				</p>
			</>
		),
	},
	{
		title: 'Helpful community',
		image: '/img/undraw_team_work.svg',
		description: (
			<>
				Have a question? Feel free to ask during one of our meetings or on Teams; one of our club leaders or members
				will be happy to help!
			</>
		),
	},
	{
		title: 'As fun as you want it to be',
		image: '/img/undraw_having_fun.svg',
		description: (
			<>
				We discuss topics we think you — our members — will find interesting and are always open to adjusting based on
				feedback. Please feel free to contact us on Teams or through email if you have any suggestions.
			</>
		),
	},
];

function Feature({ title, image, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<img className={styles.featureSvg} alt={title} src={image} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
