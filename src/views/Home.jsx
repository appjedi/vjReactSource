/*!

* Copyright 2019 Symto Inc.

*/
import React from 'react';

// reactstrap components


// core components
import Navbar from '../components/Navbar/Navbar.jsx';

class LandingPage extends React.Component {
	componentDidMount() {
		//alert(document.cookie);
		document.body.classList.toggle('home');

	}
	componentWillUnmount() {
		document.body.classList.toggle('home');
	}
	render() {
		return (
			<>
				<Navbar />
				<div className='wrapper'>
					<div class='myContent'>
						Hello, My name is Vivek Garge and I am a Computer Science Student from the University of Massachusetts and this is my website.

						I am very passionate about Computer science and have been studiying for many years.
						I believe the need for computer science backgrounds for the future will be greatly needed.
						Because of this my hope is to gain employment in a database field.
						I have an undergrad in Biology and a Masters in Computer Science.
						My interests are in the BioInformatics Field and databases.
						If you have any questions or would like to contact me please see the contacts page.
						Thank you!
					</div>
				</div>
			</>
		);
	}
}

export default LandingPage;
