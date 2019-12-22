import React, { Component } from 'react'
import {connect} from 'react-redux'
import HouseList from '../../components/HouseList.js'
class History extends Component {
    
    render() {
        return (
            <div>
                {
                    this.props.historyList.map((item,key)=>{
                        return <HouseList item={item} key={item.id}/>
                    })
                }
            </div>
        )
    }
}

// 设置获取store里面的历史城市列表
const mapStateToProps = (state)=>{
    return {
        historyList:state.historyList
    }
}

// 连接并获取数据到History
export default connect(mapStateToProps)(History);