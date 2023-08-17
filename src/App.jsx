import './App.scss';

function App() {
	return (
		<div className='card'>
			<header className='header'>IMAGE</header>
			<main className='main'>
				<h1 className='card__heading'>Order Summary</h1>
				<p className='card__content'>
					You can now listen to millions of songs, audiobooks, and
					podcasts on any device anywhere you like!
				</p>
				<div className='details'>
					<svg className='details__icon'></svg>
					<div className='details__pricing-box'>
						<h2 className='title'>Annual Plan</h2>
						<p className='price'>$59.99/year</p>
					</div>
					<a
						href=''
						className='details__link'
					>
						Change
					</a>
				</div>
				<button className='card__btn'>Proceed to Payment</button>
				<a
					href=''
					className='card__cancel'
				>
					Cancel order
				</a>
			</main>
		</div>
	);
}

export default App;
