import React, { useState } from "react";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	function register() {
		if (password != confirmPassword) {
			setError("Error al confirmar la contraseña");
			return;
		}
		fetch("https://3001-emerald-armadillo-r270nw39.ws-eu03.gitpod.io/api/register", {
			method: "POST",
			headers: {
				"Content-Type": " application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});
	}

	return (
		<div className="jumbotron">
			{error ? <h1>{error}</h1> : ""}
			<input
				type="email"
				placeholder="email"
				onChange={event => {
					setEmail(event.target.value);
				}}
			/>
			<input
				type="password"
				placeholder="contraseña"
				onChange={event => {
					setPassword(event.target.value);
				}}
			/>
			<input
				type="password"
				placeholder="Confirmar contraseña"
				onChange={event => {
					setConfirmPassword(event.target.value);
				}}
			/>
			<input type="button" value="Crear" onClick={register} />
		</div>
	);
};
export default Register;
