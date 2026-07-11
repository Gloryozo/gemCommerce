import './Nutrition.css'

const nutritionMetrics = [
	{
		value: '97%',
		description: 'Dogs on our food had lower stool volume and firmer stools in feeding studies.',
		barWidth: '97%',
	},
	{
		value: '84%',
		description: 'Pet parents reported better digestion after switching to our recipes.',
		barWidth: '84%',
	},
	{
		value: '92%',
		description: 'Dogs finished their meals and showed strong enthusiasm at mealtime.',
		barWidth: '92%',
	},
]

export default function Nutrition() {
	return (
		<section className="nutrition-section" aria-label="Nutrition section">
			<div className="nutrition-content">
				<div className="nutrition-copy">
					<h2 className="nutrition-title">
						Nutrition is the foundation for longer, healthier lives in dogs.
					</h2>
					<p className="nutrition-body">
						We start with whole food ingredients and balanced recipes designed to support
						everyday health, from digestion to mealtime satisfaction.
					</p>

					<div className="nutrition-metrics">
						{nutritionMetrics.map((metric) => (
							<div className="nutrition-metric" key={metric.value}>
								<div className="nutrition-metric-value">{metric.value}</div>
								<div className="nutrition-metric-copy">
									<p>{metric.description}</p>
								</div>
							</div>
						))}
					</div>

					<button type="button" className="nutrition-cta">
						See how food first can help your dog
					</button>
				</div>

				<div className="nutrition-visual">
					<div className="nutrition-image-frame">
						<img
							src="/images/dog.png"
							alt="Dog sitting beside a pet food package"
							className="nutrition-image"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
