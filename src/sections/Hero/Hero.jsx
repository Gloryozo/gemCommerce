import './Hero.css'

const heroFeatures = [
	{
		title: 'Real Food',
		description: 'Whole food recipes crafted with recognizable ingredients.',
		tone: 'mint',
	},
	{
		title: 'Premium Ingredients',
		description: 'Carefully chosen ingredients for everyday nutrition.',
		tone: 'sand',
	},
	{
		title: 'Made Freshly',
		description: 'Prepared to support freshness and taste in every bowl.',
		tone: 'leaf',
	},
	{
		title: 'Vet Developed',
		description: 'Formulated with expert guidance for balanced meals.',
		tone: 'sky',
	},
]

export default function Hero() {
	return (
		<section className="hero-section" aria-labelledby="hero-title">
		<div className="hero-topbar">
				
			</div>

			<div className="hero-frame">
				<h1 id="hero-title" className="hero-title">
					 What makes us different
                     makes them stronger
				</h1>

				<div className="hero-grid">
					<div className="hero-callouts hero-callouts-left">
						{heroFeatures.slice(0, 2).map((feature) => (
							<article className="feature-card" key={feature.title}>
								<span className={`feature-dot feature-dot-${feature.tone}`} />
								<div>
									<h2>{feature.title}</h2>
									<p>{feature.description}</p>
								</div>
							</article>
						))}
					</div>

					<div className="hero-visual">
						<div className="hero-image-shell">
							<img
								src="/images/circleMeal.png"
								alt="Bowl of dog food ingredients"
								className="hero-image"
							/>
						</div>

						<button type="button" className="hero-cta">
							See how we use a food first recipe
						</button>

						<p className="hero-trust">
							4.9 stars · Trusted by pet parents · Vet approved
						</p>
					</div>

					<div className="hero-callouts hero-callouts-right">
						{heroFeatures.slice(2).map((feature) => (
							<article className="feature-card" key={feature.title}>
								<span className={`feature-dot feature-dot-${feature.tone}`} />
								<div>
									<h2>{feature.title}</h2>
									<p>{feature.description}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>	
		</section>
	)
}
