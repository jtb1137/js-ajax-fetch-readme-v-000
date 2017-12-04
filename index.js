const app = "I don't do much.";

const token = 'abf423683de9d5e67b124a352df8688860b4bcd0'
fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: `token: ${token}`
	}
}).then(res => res.json()).then(json => console.log(json));
