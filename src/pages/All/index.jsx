import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import Banners from './Banners'
import Gamelist from './Gamelist'
import { getGamelist } from '../../api/request'

export default function All() {
    const [gamelist, setGamelist] = useState([])
    useEffect(() => {
        (async () => {
            let { data: gameData } = await getGamelist()
            setGamelist(gameData)
        })()
    },[])
    // console.log(banners);
  return (
    <div>
        <Banners />
        <Gamelist gamelist={gamelist} />
    </div>
  )
}
