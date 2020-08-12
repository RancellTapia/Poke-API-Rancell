import React from 'react';
import './App.css';
import { call } from './tools/Api';
import CardUnit from './components/CardUnit';

function App() {
	const url = 'pokemon';
	var pokemon = [1, 2, 3, 4];

	call('get', url).then((res) => {
		pokemon = res.data.results;
	});

	console.log(pokemon);

	return (
		<div className='App'>
			<h1>Pokemon</h1>
			{pokemon.map((id, index) => (
				<CardUnit id={id} key={index} />
			))}
		</div>
	);
}

export default App;
