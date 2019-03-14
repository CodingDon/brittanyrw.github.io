import React from "react"
import Header from "../components/header"
import Project from "../components/project"
import About from "../components/about"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default () => (
	<div>
		<Link to={`/`}>
	      <h3>
	        Brittany Walker
	      </h3>
	    </Link>
	    <Link to={`/blog/`}>
	      Blog
	    </Link>
		<Header/>
		<main>
			<Project/>
			<Project/>
			<Project/>
			<Project/>
			<Project/>
			<About/>
		</main>
		<Footer/>
	</div>
)
