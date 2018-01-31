import React, { Component } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import { getChangeListAction } from './actionCreator'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Footer from './components/Footer'
import './style.css'

class CommonWrapper extends Component {

	render() {
		return (
			<div className="common">
				<Row>
    			<Col span={6}>
    				<img alt='' onClick={()=>{browserHistory.push('/')}} className='common-logo' src={require('../../statics/imgs/newlogo.png')} />
    			</Col>
      		<Col span={18}>
      			<Menu mode="horizontal">
      				{
      					this.props.list.map((value) => {
      						return (
      							<Menu.Item key={value.id}>
          						{value.title}
        						</Menu.Item>
      						)
      					})
      				}
      			</Menu>
      		</Col>
    		</Row>
        <Row>
          <Col span={15}>
            <Menu mode="horizontal">
              {
                this.props.list.map((value) => {
                  return (
                    <Menu.Item key={value.ids}  className="txt">
                      {value.txt}
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Col>
        </Row>
    		<Row>
      		<Col span={2}>
            {this.props.list.title}
            <Menu mode="horizontal">
              {
                this.props.list.map((value) => {
                  return (
                    <Menu.Item key={value.key}>
                      {value.tit}
                    </Menu.Item>
                  )
                })
              }
            </Menu>
      		</Col>
          <Col span={11}>
            <Menu mode="horizontal">
              {
                this.props.list.map((value) => {
                  return (
                    <Menu.Item key={value.id}>
                      {value.title}
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Col>
          <Col span={11}>
            <Menu mode="horizontal">
              {
                this.props.list.map((value) => {
                  return (
                    <Menu.Item key={value.id}>
                      {value.title}
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Col>
    		</Row>

    		<div>{this.props.children}</div>

    		<Footer/>
			</div>
		)
	}

	componentDidMount() {
		this.getCommonInfo()
	}

	getCommonInfo() {
		fetch('/api/common.json')
			.then((res) => res.json())
			.then(this.props.changeList)
	}

}

const mapStateToProps = (state) => {
	return {
		list: state.common.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeList: (res) => {
			var action = getChangeListAction(res.data.list)
			dispatch(action)		
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonWrapper)
