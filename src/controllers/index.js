import Home from './home.controller';
import Products from './products.controller';
import Post from './post.controller';
import notFound from './404.controller';

const pages = {
	home: Home,
	products: Products,
	post: Post,
	notFound: notFound,
};

export { pages };
