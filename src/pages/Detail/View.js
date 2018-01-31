import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChangeDetailAction } from './actionCreator'
import './style.css'

class Detail extends Component {
	render() {
		return (
			<div className="common">
				<h1>{this.props.title}</h1>
				<p className="describe">
					<div className="left">{this.props.pubdate}</div>
					<div className="left">{this.props.source}</div>
					<div className="left">{this.props.count}</div>
				</p>
				<div className="right">{this.props.mp3}</div>
				<canvas ref="canvas" width="300" height="300" float="left"></canvas>
				<div dangerouslySetInnerHTML={{__html:this.props.content}}></div>
			</div>
		)
	}

	componentDidMount() {
    	this.Clock();
    	this.getDetailInfo()
  }

  Clock() { 
			this.canvas = this.refs.canvas;
			this.ctx = this.canvas.getContext('2d');
			this.time = new Date();
			this.init()
	}

	init() {
		var this_ = this;
		setInterval(function() {
			this_.clearScreen();
			this_.drawClock();
		}, 1000);
		this.initAxios();
	}

	drawClock() {
		this.drawTable();
		this.drawCenter();
		this.drawMinutes();
		this.drawHours();
		this.drawNumber();
		this.drawHourPointer();
		this.drawMunitePointer();
		this.drawSecondsPointer()
	}

	clearScreen() {
		this.ctx.clearRect(-250, -250, 500, 500);
		this.time = new Date()
	}

	initAxios() {
		this.ctx.translate(150, 150)
	}

	drawTable() {
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 100, 0, Math.PI *2);
		this.ctx.fillStyle = '#eee';
		this.ctx.strokeStyle = '#333';
		this.ctx.fill();
		this.ctx.stroke()
	}

	drawCenter() {
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 5, 0, Math.PI *2);
		this.ctx.fillStyle = 'red';
		this.ctx.fill()
	}

	drawMinutes() {
		for(var i = 0; i < 60; i++) {
			this.ctx.save();
			this.ctx.beginPath();
			this.ctx.rotate(i * Math.PI / 30);
			this.ctx.moveTo(0, -100);
			this.ctx.lineTo(0, -96);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.restore()
		}
	}

	drawHours() {
		for(var i = 0; i < 12; i++) {
			this.ctx.save();
			this.ctx.beginPath();
			this.ctx.rotate(i * Math.PI / 6);
			this.ctx.moveTo(0, -100);
			this.ctx.lineTo(0, -92);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.restore()
		}
	}

	drawNumber() {
		for(var i = 1; i <= 12; i++) {
			var x = 85 * Math.sin(Math.PI / 6 * i),
				y = - 85 * Math.cos(Math.PI / 6 * i);
			this.ctx.beginPath();
			this.ctx.fillStyle = '#333';
			this.ctx.textAlign = 'center';
			this.ctx.textBaseline = 'middle';
			this.ctx.fillText(i, x, y)
		}
	}

	drawHourPointer() {
		var hours = (this.time.getHours() + (this.time.getMinutes() / 60)) % 12;
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.rotate(hours * Math.PI / 6);
		this.ctx.moveTo(0, -50);
		this.ctx.lineTo(0 , 0);
		this.ctx.stroke();
		this.ctx.restore()
	}

	drawMunitePointer() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.rotate(this.time.getMinutes() * Math.PI / 30);
		this.ctx.moveTo(0, -70);
		this.ctx.lineTo(0, 0);
		this.ctx.stroke();
		this.ctx.restore()
	}

	drawSecondsPointer() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.rotate(this.time.getSeconds() * Math.PI / 30);
		this.ctx.moveTo(0, -80);
		this.ctx.lineTo(0 , 0);
		this.ctx.stroke();
		this.ctx.restore()
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
		