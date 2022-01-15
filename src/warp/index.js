export const warp = (promise) => {
    let status = 'pending'
    let result;
    let _promise = promise.then(res => {
        status = 'success'
        result = res
    }).catch(err => {
        status = 'error'
        result = err
    })
    return {
        readData() {
            if (status === 'pending') {
                throw _promise
            } else if (status === 'success') {
                return result
            } else if (status === 'error') {
                return result
            }
        }
    }
}
const data1 = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const data2 = [
    '111111111111111111111111111111111',
    '2222222',
    '33333333333',
    '6666666666.',
    '555555555',
];
const getListData = (num) => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (num === 1) {
                resolve(data1)
            } else if (num === 2) {
                resolve(data2)
            }
        }, 1000)
    })
}
const ajaxFun = (num) => {
    return {
        content: warp(getListData(num))
    }
}
export { ajaxFun }