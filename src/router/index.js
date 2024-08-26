import { createBrowserRouter } from "react-router-dom";
// 绑定路由 导入此组件
import Layout from "@/pages/Layout";
import Month from "@/pages/Month";
import Year from "@/pages/Year";
import New from "@/pages/New/inde";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[ //绑定子路由
        {   
            path:'month',
            element:<Month/>
        },
        {path:'year',
        element:<Year/>}
        ] 
    },
    {
        path: 'new',
        element: <New />
    }
])
export default router