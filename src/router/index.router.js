import Home from '../controllers/index.controllers';

const content = document.getElementById('root');

const router = (router) => {
	content.innerHTML = '';
	switch (router) {
		case '#/':
			return content.appendChild(Home());
		case '#/products':
			console.log('Productos!!');
		case '#/post':
			console.log('Post!!');
		default:
			console.log('404!!');
	}
};

export { router };
