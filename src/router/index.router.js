import { pages } from '../controllers/index';

const content = document.getElementById('root');

const router = async (router) => {
	content.innerHTML = '';
	switch (router) {
		case '#/':
			return content.appendChild(pages.home());
		case '#/products':
			return content.appendChild(pages.products());
		case '#/post':
			return content.appendChild(await pages.post());
		default:
			return content.appendChild(pages.notFound());
	}
};

export { router };
