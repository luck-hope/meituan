//账单相关数据
import { createSlice } from '@reduxjs/toolkit'
//获取响应
import axios from 'axios'
    const biliStore=createSlice({
        name:'bili', //必填项*
    //数据状态
    initialState:{
        biliList:[]
    },
    reducers:{
        //创建同步修改方法
        setBillList(state,action){
            state.biliList=action.payload
        }
    }
})

//解构action属性 对象会统一生成在action内 所以调用此action
const {setBillList}=biliStore.actions
//  编写异步逻辑
const getBliList=()=>{
    //  同步获取形参
    return async (dispatch)=>{
        //异步获取数据
        const res = await axios.get('http://localhost:8888/ka')
        //  触发同步更新 调用修改方法 修改状态为res内的获取的默认对象
        dispatch(setBillList(res.data))
    }
}
export {getBliList}
//导出reducer对象
const reducer = biliStore.reducer
export default reducer