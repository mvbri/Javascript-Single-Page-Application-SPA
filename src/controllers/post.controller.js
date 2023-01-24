import view from '../views/post.html';

const getPost = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	return await response.json();
};

export default async () => {
	const divElement = document.createElement('div');
	divElement.innerHTML = view;

	const postsElement = divElement.querySelector('#posts');

	const posts = await getPost();
	posts.forEach((post) => {
		postsElement.innerHTML += `
			<li class="list-group-item border-primary bg-dark text-white">
				<h5>${post.title}</h5>
				<p>${post.body}</p>
			<li>
		`;
	});

	return divElement;
};
