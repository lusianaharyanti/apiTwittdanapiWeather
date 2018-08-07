import React , { Component } from 'react';

class Details extends Component {
	render() {
		console.log('this.props', this.props.location.state)
		return(
			<div>
			    <h2>Details</h2>
			    <code>{JSON.stringify(this.props.location.state)}</code>
			</div>	
		)
  	}
}

export default Details;