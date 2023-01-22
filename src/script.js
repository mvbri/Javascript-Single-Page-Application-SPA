import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

window.addEventListener('hashchange', () => {
	console.log(window.location.hash);
});
