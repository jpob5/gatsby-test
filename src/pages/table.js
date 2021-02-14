import React, {useState, useEffect} from "react"

import "./index.scss"

import Layout from "../components/Layout"

import employees from "../components/data";

function EmployeeRow(rowNum, updateEmployeeCost) {
	const [dev, setDev] = useState(0);
	const [devWork, setDevWork] = useState(0);
	const [access, setAccess] = useState(0);
	const [qa, setQa] = useState(0);
	// const [cost, setCost] = useState(0);
	let cost = (devWork + access + qa) * employees[dev].rate;
	updateEmployeeCost(rowNum, cost);
	return (
		<>
			<tr>
				<td>
					<select name="employees" id="employees" onChange={e => setDev(Number(e.target.value))}>
						{employees.map((person, index) => {
							return (<><option key={index} value={index}>{person.firstName + ' ' + person.lastName}</option></>)
						})}
					</select>
				</td>
				<td><input type="text" value={devWork} onChange={e => setDevWork(Number(e.target.value))} /></td>
				<td><input type="text" value={access} onChange={e => setAccess(Number(e.target.value))} /></td>
				<td><input type="text" value={qa} onChange={e => setQa(Number(e.target.value))} /></td>
				<td>${cost}</td>
			</tr>
		</>
	);
}

export default function Table() {
	let [totalCost, setTotalCost] = useState(0);
	let employeesUsed = [0];

	function updateEmployeeCost (index, cost) {
		employeesUsed[index] = cost;
	}

	function addEmployee() {
		employeesUsed.push(0);
	}

	useEffect(() => {
		employeesUsed.map((person, index) => {
			setTotalCost(employeesUsed[index]);
		});
		console.log(employeesUsed);
	});

	return (
		<div id="container">
			<Layout>
				<h1>Table</h1>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Dev work</th>
							<th>Accessibility</th>
							<th>QA</th>
							<th>Cost</th>
						</tr>
					</thead>
					<tbody>
						{employeesUsed.map((person, index) => {
							return(EmployeeRow(index, updateEmployeeCost))
						})}
						<tr>
							<td colSpan="4"><button onClick={addEmployee}>Add employee</button></td>
							<td>${totalCost}</td>
						</tr>
					</tbody>
				</table>
			</Layout>
		</div>
	);
}