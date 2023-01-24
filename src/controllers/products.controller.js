import Products from '../views/products.html';

export default () => {
	const element = document.createElement('article');
	element.classList = 'text-white';
	element.innerHTML = Products;

	return element;
};
