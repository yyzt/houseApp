import React, { Component } from 'react'
import { Flex, Carousel } from 'antd-mobile'
import './style/Home.css'
import { withRouter } from 'react-router-dom'
import { Grid } from 'antd-mobile';
import { getHouseList } from '../../apis/axios.js'

// redux
import {connect} from 'react-redux'
import {addHistory} from '../../store.js'

import HouseList from '../../components/HouseList.js'

const data = [
    {
        icon: 'new_house.png',
        text: '新房'
    },
    {
        icon: 'new_house.png',
        text: '二手房'
    },
    {
        icon: 'new_house.png',
        text: '租房'
    },
    {
        icon: 'new_house.png',
        text: '买房'
    },
    {
        icon: 'new_house.png',
        text: '商铺出租'
    },
    {
        icon: 'new_house.png',
        text: '写字楼'
    },
    {
        icon: 'new_house.png',
        text: '海外房产'
    },
    {
        icon: 'new_house.png',
        text: '问答'
    },
].map((item) => ({
    icon: require(`../../assets/images/${item.icon}`),
    text: item.text
}))






class Home extends Component {
    state = {
        city: '定位中...',
        data: ['1', '2', '3'],
        imgHeight: 176,
        data1: ['carousel_1.jpg', 'carousel_2.jpg', 'carousel_3.jpg'],
        list: []
    }
    toCityList = () => {
        this.props.history.push('/CityList');
    }
    toSearch = () => {
        this.props.history.push('/search');
    }
    toMap = () => {
        this.props.history.push('/mappages');
    }


    addHistory = (item)=>{
        this.props.dispatch(addHistory(item))
}
    // addHistory = (item)=>{
    //     alert('我看了哦');
    //     console.log('item',item)
    //     this.props.dispatch(addHistory(item));
    // }

    getHouseList1 = () => {
        getHouseList()
            .then((res) => {
                this.setState({ list: res.data });
            })
            .catch((e) => {
                console.log(e)
            })
    }




    componentDidMount() {
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    const { city } = result;
                    this.setState({ city });
                }
            })
        })
        this.getHouseList1();
    }



    render() {
        
        return (
            <div>

                <Flex id="header">
                    <div onClick={this.toCityList}>{this.state.city} ▼</div>
                    <Flex id="search" onClick={this.toSearch}>
                        <img src={require('../../assets/images/search.png')} alt="" />
                        <span style={{ fontSize: 12 }}>挑好房，上源码房产APP</span>
                    </Flex>
                    <div>
                        <img src={require('../../assets/images/map.png')} onClick={this.toMap} alt="" />
                    </div>
                </Flex>

                <div id="banner">
                    <Carousel
                        autoplay={false}
                        infinite
                    >
                        {this.state.data1.map(val => (
                            <a
                                key={val}
                                href="#"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={require(`../../assets/images/${val}`)}
                                    alt=""
                                    style={{ width: '100%', height: '211px', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>

                <Grid data={data}/>

                <div>
                    <p style={{ margin: 10 }}>猜你喜欢</p>

                    {
                        this.state.list.map((item) => {
                            return (
                                <HouseList onClick={this.addHistory} item={item} key={item.id}/>
                                // <Flex key={item.id}>
                                //     <img src={item.pic} style={{ weight: 100, height: 100 }} />
                                //     <Flex style={{ flex: 1, justifyContent: 'space-between', padding: 10 }}>
                                //         <div style={{ fontSize: 14 }}>
                                //             <p style={{ fontSize: 20, fontWeight: 'bold', margin: '10 0' }}>{item.name}</p>
                                //             <Flex style={{ margin: '10px 0' }}>
                                //                 <p>{item.address}</p>
                                //             </Flex>
                                //             <Flex style={{ margin: '10px 0' }}>
                                //                 <p>2室2厅2卫</p>
                                //             </Flex>
                                //         </div>
                                //         <p style={{ color: 'red', fontWeight: 'bold' }}>
                                //             {item.price}/平
                                //         </p>

                                //     </Flex>
                                // </Flex>
                            )

                        })

                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        city:state.city
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps)(withRouter(Home))
