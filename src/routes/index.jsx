// 独立配置文件
import { useState, lazy } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import All from '../pages/Home/All'
import Home from '../pages/Home'
const Talk = lazy(() => import('../pages/Home/Talk'))
const AllDetail = lazy(() => import('../pages/Home/AllDetail'))
const Community = lazy(() => import('../pages/Community'))
const StoreHouse = lazy(() => import('../pages/StoreHouse'))
const Mine = lazy(() => import('../pages/Mine'))
const Mall = lazy(() => import('../pages/Mall'))
const Search = lazy(() => import('../pages/Search'))
import { Navigate } from 'react-router'

// Routes 不能和react-router-dom 一样
const RoutesConfig = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to="/home/all" replace={true} />} />
                <Route path='/home' element={<Home />}></Route>
                    <Route path='/home/all' element={<All />}></Route>
                    <Route path='/home/talk' element={<Talk />}></Route>
                <Route path='/alldetali/:id' element={<AllDetail />}></Route>
                <Route path='/community' element={<Community />}></Route>
                <Route path='/storehouse' element={<StoreHouse />}></Route>
                <Route path='/mine' element={<Mine />}></Route>
                <Route path='/storehouse/mall' element={<Mall />}></Route>
                <Route path='/search' element={<Search />}></Route>
            </Routes>
        </>
    )
}

export default RoutesConfig