
export async function Fetchcars() {
    const url = 'https://abood123-dev.github.io/Data-cars2/db.json';
	const response = await fetch(url);
	const result = await response.json();
	return result
}
