import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { List, Avatar, Card, Menu, Row, Col } from 'antd'
import { connect } from 'react-redux'
import * as actions from './actionCreator'
import { Link } from 'react-router'
import './style.css'

class Listpage extends Component {

  render() {
    return (
      <div className="listpage">
        <div className="top">
          <Card
            className="top-leftcard"
            style={{ width: 380, border: 0 }}
            cover={<img alt="example" src="http://www.easyvoa.com/templets/images/studioclassroom/studio_logo.png" />}
          >
          </Card>
          <Card
            className="top-rightcard"
            style={{ width: 500, border: 0 }}
            cover={<img alt="example" src="http://www.easyvoa.com/templets/images/studioclassroom/studio_ad.gif" />}
          >
          </Card>
        </div>
        <div className="nav">
          <Menu mode="horizontal" className="list-nav">
            {
              this.props.list.map((value) => {
                return (
                  <Menu.Item key={value.id}>
                    <Link to={value.link}>{value.category}</Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </div>
        <div>
          <Row>
            <Col span={16} className="list-left">
              <img className="img-title" alt="pic" src="http://www.easyvoa.com/templets/images/studioclassroom/lt_title.png" />
              <img className="list-left-img" alt="pic" src="http://www.easyvoa.com/templets/images/studioclassroom/lt_cover1.jpg" />
              <img className="list-left-img" alt="pic" src="http://www.easyvoa.com/templets/images/studioclassroom/lt_cover2.jpg" />
              <img className="list-left-img" alt="pic" src="http://www.easyvoa.com/templets/images/studioclassroom/lt_cover3.jpg" />
              <List
                bordered={false}
                itemLayout="horizontal"
                dataSource={this.props.list}
                renderItem={ item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={<Link to={item.link}>{item.title}</Link>}
                      description={'[' +item.category + '] ' + item.pubdate}
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col span={7} className="list-right">
              <Card
                cover={<img alt="example" src="http://www.easyvoa.com/templets/images/studioclassroom/lt_mag.png" />}
              >
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
  componentDidMount() {
    if (!this.props.list.length && !this.props.navlist.length) {
      this.props.actions.getActionList()
    }
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.listpage.list,
    navlist: state.listpage.navlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Listpage)