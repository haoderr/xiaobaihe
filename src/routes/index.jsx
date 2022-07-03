// 独立配置文件
import { useState, lazy } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import All from '../pages/All'
const Talk = lazy(() => import('../pages/Talk'))
const AllDetail = lazy(() => import('../pages/AllDetail'))
import { Navigate } from 'react-router'

// Routes 不能和react-router-dom 一样
const RoutesConfig = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to="/all" replace={true} />} />
                <Route path='/all' element={<All />}></Route>
                <Route path='/talk' element={<Talk />}></Route>
                <Route path='/alldetali/:id' element={<AllDetail />}></Route>
            </Routes>
        </>
    )
}

export default RoutesConfig