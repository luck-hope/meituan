import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
 import { getBliList } from "@/store/modules/biliStore"
const Layout = ()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getBliList())
    },[dispatch])
    return (<div>
        <Outlet/>
        我是layout
        <Button color="primary">全局</Button>
        <div className="puple">
        <Button color="primary">局部</Button>
        </div>
            </div>)
}
export default Layout