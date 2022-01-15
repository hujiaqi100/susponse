import 'babel-polyfill'
import React, { useEffect, useState } from 'react';
import { Button } from 'antd'
import { ajaxFun } from './warp/index.js'
import _ from 'lodash'
const Bscan = React.lazy(() => import('./own/index.jsx'))
const App = () => {
    const [init, setInit] = useState(ajaxFun(2))
    const changeCount = () => {
        setInit(() => ajaxFun(1))
    }
    return (
        <>
            <Button type='primary' onClick={changeCount}>INIT</Button>
            <br />
            <React.Suspense fallback={'loading...'}>
                <Bscan dataList={init} />
            </React.Suspense>
        </>
    )
}
export default App
