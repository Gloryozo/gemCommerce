import './GutHealth.css'

export default function GutHealth() {
	return (
		<section className="guthealth-section" aria-label="Gut health section">
			<div className="guthealth-content">
				<article className="guthealth-feature">
					<div className="guthealth-visual">
						<div className="guthealth-image-frame">
							<img
								src="/images/twoDogs.gif"
								alt="Two dogs eating from bowls"
								className="guthealth-image"
							/>
						</div>
					</div>

					<div className="guthealth-copy">
						<h2 className="guthealth-title">
							Improve overall gastrointestinal health for better nutrient absorption
						</h2>
						<p className="guthealth-body">
							When digestion works well, the nutrients in every meal are easier for your dog
							to absorb and use. A balanced recipe helps support that process from bowl to body.
						</p>
					</div>
				</article>

				<article className="guthealth-feature guthealth-feature-reverse">
					<div className="guthealth-copy">
						<h2 className="guthealth-title">
							Prebiotics nourish the beneficial gut bacteria, supporting digestive health
						</h2>
						<p className="guthealth-body">
							Prebiotics help feed the helpful bacteria in the gut so your dog can maintain a
							healthier digestive environment with everyday feeding.
						</p>
					</div>

					<div className="guthealth-visual">
						<div className="guthealth-image-frame">
							<img
								src="/images/squaremeal.jpg"
								alt="Close up of dog kibble"
								className="guthealth-image"
							/>
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}
