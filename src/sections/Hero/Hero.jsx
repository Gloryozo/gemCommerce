import './Hero.css'

const heroFeatures = [
	{
		title: 'Real Food',
		description: 'Wholesome recipes for dogs with real meat and veggies.',
		tone: 'mint',
	},
	{
		title: 'Premium Ingredients',
		description: 'Elevating pet care with unmatched safety and quality.',
		tone: 'sand',
	},
	{
		title: 'Made Freshly',
		description: 'We prioritize maintaining the integrity of whole foods and nutrition.',
		tone: 'leaf',
	},
	{
		title: 'Vet Developed',
		description: 'We raise the bar for dog nutrition, surpassing industry expectations.',
		tone: 'sky',
	},
]

const heroPayments = [
	{ src: '/images/visa.png', alt: 'Visa' },
	{ src: '/images/mastercard.png', alt: 'Mastercard' },
	{ src: '/images/paypal.png', alt: 'PayPal' },
	{ src: '/images/applepay.png', alt: 'Apple Pay' },
	{ src: '/images/gpay.png', alt: 'Google Pay' },
]

export default function Hero() {
	return (
		<section className="hero-section" aria-labelledby="hero-title">
			<div className="hero-topbar" aria-label="Brand mark">
				
			</div>

			<div className="hero-frame">
				<h1 id="hero-title" className="hero-title">
					What makes us different
					<br />
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
								src="/images/mixed_food.png"
								alt="Bowl of mixed dog food ingredients"
								className="hero-image"
							/>
						</div>

						<button type="button" className="hero-cta">
							Get your dog's healthy meal today!
						</button>

						<div className="hero-payment-row">
							<p className="hero-trust">30-day money back guarantee</p>
							<div className="hero-payment-icons" aria-label="Accepted payment methods">
								{heroPayments.map((payment) => (
									<img
										key={payment.alt}
										src={payment.src}
										alt={payment.alt}
										className="hero-payment-icon"
									/>
								))}
							</div>
						</div>
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