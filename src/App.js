import { useState, useCallback } from 'react'
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import './App.css'

function App() {
	const [length, setLength] = useState(8)
	const [num, setNum] = useState(false)
	const [char, setChar] = useState(false)
	const [pswd, setPswd] = useState(1909)

	// creating useCallback update the function using memoisation . it uses function and aray of dependency
	//format useCallback(function , [d1, d2, d3])

	const passGen = useCallback(() => {
		var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var retVal = ""; 

		if (num) charset += '0123456789'
		if (char) charset += '!@#$%^&*()_+=-?.><|'

		for (var i = 0, n = charset.length; i < length; ++i) {
			retVal += charset.charAt(Math.floor(Math.random() * n))
		}
		//return retVal;
		setPswd(retVal)
	}, [length, num, char, setPswd])

	return (
		<>
			<div>
				<h2>Pasword Generator</h2>
				<h4>Password length : {length}</h4>
			</div>

			<div>
				<input
					type="text"
					value={pswd}
					placeholder="Password"
					className='psw'
					//ref={passwordRef}
				/>
				<br/>
				<button onClick={()=>{passGen()}}>Generate</button>
			</div>

			<div>
				<input
					type="range"
					min={6}
					max={90}
					value={length}
					onChange={(e) => {
						setLength(e.target.value)
					}}
				/>
				<label> Length: {length}</label>
			</div>
			<div>
				<input
					type="checkbox"
					defaultChecked={num}
					value={length}
					onChange={(e) => {
						setNum((prevnum) => !prevnum)
					}} // checking previous setting check or uncheck is not here
				/>
				<label> Numbers </label>

				<input
					type="checkbox"
					defaultChecked={num}
					value={length}
					onChange={(e) => {
						setChar((prevchar) => !prevchar)
					}} // checking previous setting check or uncheck is not here
				/>
				<label> Characters </label>
			</div>
			<footer className='ft'>powered by Sayantan</footer>
		</>
	)
}

export default App
