import NotFound from '../views/404.html';

export default () => {
	const element = document.createElement('article');
	element.classList = 'text-white';
	element.innerHTML = NotFound;

	return element;
};
