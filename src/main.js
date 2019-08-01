import App from './App.svelte';
import './main.css';

const EngagementCalculator = target => {
	return new App({
		target: target,
	})
}

window.EngagementCalculator = EngagementCalculator;