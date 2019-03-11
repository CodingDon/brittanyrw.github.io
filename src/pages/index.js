import React from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import Project from "../components/project"
import Teaching from "../components/teaching"
import About from "../components/about"
import Footer from "../components/footer"

export default () => (
	<div>
		<Nav/>
		<Header/>
		<main>
			<Project/>
			<Project/>
			<Project/>
			<Project/>
			<Project/>
			<Teaching/>
			<About/>
		</main>
		<Footer/>
	</div>
)
