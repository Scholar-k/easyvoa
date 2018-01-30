import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChangeDetailAction } from './actionCreator'

class Detail extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<div>{this.props.pubdate}</div>
				<div>{this.props.source}</div>
				<div>{this.props.count}</div>
				<div>{this.props.mp3}</div>
				<div dangerouslySetInnerHTML={{__html:this.props.content}}></div>
			</div>
		)
	}

	componentDidMount() {
    	this.getDetailInfo()
  	}

	getDetailInfo() {
	    fetch('/api/detail.json?id=' + this.props.params.id)
	      .then((res) => res.json())
	      .then(this.props.changeDetailInfo)
	}
}

const mapState = (state) => ({...state.detail})

const mapDispatch = (dispatch) => {
	return {
		changeDetailInfo(res) {
			const action = getChangeDetailAction(res.data)
			dispatch(action)
		}	
	}
}

export default connect(mapState, mapDispatch)(Detail)