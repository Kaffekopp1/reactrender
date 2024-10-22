import "./App.css";
import { useState } from "react";
function App() {
	const [someValue, setSomeValue] = useState("test");
	async function test() {
		console.log("somevalue", someValue);
		const url = "https://renderbackend-grko.onrender.com";
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();
			setSomeValue(json.hello);
			console.log(json);
		} catch (error) {
			console.error(error.message);
		}
	}
	return (
		<>
			<h1>Detta är en Fantastisk sida!</h1>
			<p>Detta är en ändring för manual deploy</p>
			<p>Detta är en ändring för manual deploy2</p>
			<p>Detta är en ändring för manual deploy5</p>
			<button onClick={test}>click</button>
			<p>{someValue}</p>
		</>
	);
}

export default App;
