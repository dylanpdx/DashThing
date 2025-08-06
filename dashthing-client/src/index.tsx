import { render } from 'preact';

import './style.css';
import LoadingLabel from './components/loadinglabel';
import LoadingScreen from './components/loadingscreen';
import EventsHandler from './components/eventshandler';
import MainScreen from './components/mainscreen';

export function App() {
	return (
		<>
		<EventsHandler/>
		<LoadingScreen/>
		<MainScreen/>
		</>
	);
}

render(<App />, document.getElementById('app'));
