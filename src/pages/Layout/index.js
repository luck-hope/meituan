import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"
const Layout = ()=>{
    return <div>
        <Outlet/>
        我是layout
        <Button color="primary">全局</Button>
        <div className="puple">
        <Button color="primary">局部</Button>
        </div>
            </div>
}
export default Layout