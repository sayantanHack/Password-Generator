import { useState, useCallback, useEffect , useRef } from 'react'
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import './App.css'

function Auto() {
	const [length, setLength] = useState(8)
	const [num, setNum] = useState(false)
	const [char, setChar] = useState(false)
	const [pswd, setPswd] = useState(1909)

	// useRef Hook for taking the referance for copy the password section

	const pswdRef = useRef(null)


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

	// creating useEffect to call passGen and make thi auto generative

	useEffect( ()=>{passGen()}, [length, num, char, passGen])

	//Copy Password Clipboard method
	const copyPswdClip = useCallback( ()=>{
		pswdRef.current?.select() //this for selecting the passwrd section using reference
		window.navigator.clipboard.writeText(pswd) // This used to copy to clipboard
	}, [pswd])

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
					ref={pswdRef}
				/>
				<br/>
				<button onClick={copyPswdClip}>Copy</button>
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

export default Auto
