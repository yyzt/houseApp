import React, { Component } from 'react'
import {Flex} from 'antd-mobile';
import PropTypes from 'prop-types';

export default class HouseList extends Component {
    static propTypes = {
        item:PropTypes.object,
        onClick:PropTypes.func,
    }
    static defaultProps = {
        item:{},
        onClick:()=>{}
    }
    // clickTest = ()=>{
    //     this.props.cb('')
    // }

    render() {
        const {item,onClick} = this.props;
        return (
            <div>
                <Flex key={item.id} onClick={()=>onClick(item)}>
                                    <img src={item.pic} style={{ weight: 100, height: 100 }} />
                                    <Flex style={{ flex: 1, justifyContent: 'space-between', padding: 10 }}>
                                        <div style={{ fontSize: 14 }}>
                                            <p style={{ fontSize: 20, fontWeight: 'bold', margin: '10 0' }}>{item.name}</p>
                                            <Flex style={{ margin: '10px 0' }}>
                                                <p>{item.address}</p>
                                            </Flex>
                                            <Flex style={{ margin: '10px 0' }}>
                                                <p>2室2厅2卫</p>
                                            </Flex>
                                        </div>
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>
                                            {item.price}/平
                                        </p>

                                    </Flex>
                </Flex>
            </div>
        )
    }
}
