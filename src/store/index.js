//组合子模块 导出实例

import { configureStore } from "@reduxjs/toolkit";
import  biliReducer from './modules/biliStore'
const store = configureStore({
    reducer: { //创建的方法
        bili: biliReducer
    }
})
export default store