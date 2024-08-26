import classNames from 'classnames'
import './index.scss'
import { DatePicker } from 'antd-mobile/es/components/date-picker/date-picker'
import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'
const Month= () => {
    //按月数据分组
    const billList = useSelector(state=>state.bill.billList)
    const monthG = useMemo(()=>{
        return _.groupBy(billList,(item)=>dayjs{item.date}.format('YYYY-MM'))
    },[billList])
    console.log(monthG);
    
    // 事件切换状态
    const [dataVisible, setDateVisble] = useState(false)
    //控制时间的状态函数 并转换时间格式
    const [currentDate,setcurrentDate]=useState(()=>{
        return dayjs(new Date()).format('YYYY-MM')
    })
    const onConfirm = (date) => {
        setDateVisble(false)
        const formatDate= dayjs(date).format('YYYY-MM')
        setcurrentDate(formatDate)
    }

    return (
        <div className={classNames('dailyBill')}>   
            <div className="header">
                <div className='Top'>
                    {currentDate+''}月度收支</div>
                {/* 控制时间显示 */}
                <div className="dateIcon" onClick={()=>{setDateVisble(true)}}>
                    
                    <span className="text">
                           {currentDate} 月账单</span>
                    
                    <span className={classNames('arrow',dataVisible&& 'expand')}></span>
                </div>
                {/* 账单的基础模板 */}
                <div className="oneLineOverview">
                    <div className="pay">
                        <span className="type">支出</span>
                        <span className="money">{100}</span>
                    </div>
                    <div className="income">
                        <span className="type">收入</span>
                        <span className="money">{200}</span>
                    </div>
                    <div className="balance">
                        <span className="money">{100}</span>
                        <span className="type">结余</span>
                    </div>
                </div>
                <div>
                    <DatePicker
                    className="kaDate"
                    title="记账日期"
                    precision='month'
                    visible={dataVisible}
                    onCancel={() => setDateVisble(false)}
                    onConfirm={onConfirm}
                    onClose={()=>setDateVisble(false)}
                    
                    max={new Date()}/>
                </div>
            </div>  
        </div>
    )
}
export default Month