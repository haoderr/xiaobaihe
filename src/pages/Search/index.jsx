import React, { useEffect, useState } from 'react'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'
import { EnterLoading } from '../../components/HotSearch/style'
import Loading  from '../../components/loading-v2/index'
import SearchBox from '../../components/SearchBox'

function Search(props) {
    const { enterLoading, hotSearchList } = props
    const { getHotSearchListDispatch } = props
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    const searchBack = () => {
        setShow(false);
    }

    useEffect(() => {
        getHotSearchListDispatch()
    }, [])
    useEffect(() => {
        setShow(true)
    }, [])

    const hotSearch = () => {
        let item = hotSearchList.slice(0, 8);
        return item.map(item => {
            return (
                <div key={item.id} className="henxiang">
                    
                    <div className='id'>{item.id}&nbsp;&nbsp;&nbsp;</div>
                    <div className='content'>{item.content}</div>
                </div>
            )
        })
    }
    const hotTalk = () => {
        let item = hotSearchList.slice(8);
        
        return item.map(item => {
            let id = item.id - 8;
            return (
                <div key={item.id} className="henxiang">
                    <div className='id'>{id}&nbsp;&nbsp;&nbsp;</div>
                    <div className='content'>{item.content}</div>
                </div>
            )
        })
    }

  return (
    <CSSTransition
           in={show}
           timeout={300}
           appear={true}
           classNames="fly"
           unmountOnExit
           onExit={() => {
               navigate(-1)
           }}
       >
        <Container>
            <div className="search_box_wrapper">
                <SearchBox 
                    back={searchBack}>    
                </SearchBox>
            </div>
            <div className='list'>
                <div className='listLeft'>
                    <div className="text">热门搜索</div>
                    {hotSearch()}
                </div>
                <div className='listRight'>
                    <div className="text">黑盒热议</div>
                    {hotTalk()}
                </div>
            </div>
            { enterLoading && <EnterLoading><Loading></Loading></EnterLoading>}
        </Container> 
       </CSSTransition>
  )
}

const mapStateToProps = (state) => {
        return {
            hotSearchList: state.search.hotSearchList,
            enterLoading: state.search.enterLoading,
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHotSearchListDispatch() {
            dispatch(actionCreators.getHotSearchList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Search))
