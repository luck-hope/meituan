import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { getBliList } from '@/store/modules/biliStore'
import { TabBar } from 'antd-mobile'
import './index.scss'
// icon图标
import {
    BillOutline,
    CalculatorOutline,
    AddCircleOutline
} from 'antd-mobile-icons'
// ui组件

// 导航栏数据项
const tabs = [
    {
        // 此处的key设置为路由path，方便点击tabbar进行路由跳转
        key: '/month',
        title: '月度账单',
        icon: <BillOutline />
    },
    {
        key: '/New',
        title: '记账',
        icon: <AddCircleOutline />
    },
    {
        key: '/year',
        title: '年度账单',
        icon: <CalculatorOutline />
    }
]

export function Layout() {
    const dispatch = useDispatch()
    
    // Layout组件渲染后获取账单数据
    useEffect(() => {
        dispatch(getBliList())
    }, [dispatch])
    const navgate = useNavigate()
    const switchRouter=(path)=>{
        console.log(path);
   navgate(path)}
    return (
        <div className="layout">
            <div className="container">
                {/* 二级路由出口 */}
                <Outlet />
            </div>
            <div className="footer">
                <TabBar onChange={switchRouter}>
                    {tabs.map((item) => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>
        </div>
    )
}
export default Layout