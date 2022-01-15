import React, { useState, useEffect } from 'react';
import './index.less'
import { List, Divider, Button } from 'antd';
const App = ({ dataList }) => {
    const data = dataList.content.readData()
    const [list, setList] = useState(data || [])
    useEffect(() => {
        setList(() => dataList.content.readData())
    }, [dataList])
    return (
        <div className='whole'>
            <br />
            <Button onClick={() => {
                setList([1, 2, 3])
            }}>changeList</Button>
            <br />
            <Divider orientation="left" style={{ color: '#fff', borderTopColor: '#fff' }}>Small Size</Divider>
            <List
                style={{ color: '#fff' }}
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={list}
                renderItem={item => <List.Item style={{ color: '#fff' }}>{item}</List.Item>}
            />
        </div>
    )

}
export default App