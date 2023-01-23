import HomeHTML from '../views/home.html';

export default () => {
	const elementHome = document.createElement('article');
	elementHome.classList = 'text-white';
	elementHome.innerHTML = HomeHTML;

	const btnClick = elementHome.querySelector('#btnClick');
	btnClick.addEventListener('click', () => {
		alert('Joda haciando mi SPA!!');
	});

	return elementHome;
};
