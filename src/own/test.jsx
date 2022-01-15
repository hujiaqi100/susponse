import { Button } from 'antd';
import React from 'react';
const App = (props) => {
    const { changeQuery, query } = props
    const handleChange = () => {
        changeQuery({ current: query.current + 1, pageSize: query.pageSize + 10, title: `${query.title.substring(0, query.title.length - 2)}_${query.current + 1}` })
    }
    return (
        <Button type='primary' onClick={handleChange}>change query</Button>
    )
}
export default App