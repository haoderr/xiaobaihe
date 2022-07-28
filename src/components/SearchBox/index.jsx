import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

const SearchBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 .3rem;
    padding-right: 1rem;
    height: 2.5rem;
    background: white;
    padding-bottom: 0.5rem;
    .icon-back {
        font-size: 1.2rem;
        color: #000000;
    }
    .box {
        flex: 1;
        margin: 0 0.1rem;
        margin-left: -0.8rem;
        line-height: 1.5rem;
        background: #f4f4f4;
        color: black;
        font-size: 0.7rem;
        border-radius: 0.3rem;
        border: none;
        &::placeholder {
            color: #8a8a8a;
        }
    }
    .icon-delete-filling {
        font-size: 16px;
        color: #7c7c7c;
    }
`

const SearchBox = (props) => {
    // const [ query, setQuery ] = useState('');
    const query = useRef();
    const { back } = props;
    useEffect(() => {
        query.current.focus();
    }, [])
  return (
    <div>
      <SearchBoxWrapper>
            <i className="iconfont icon-back"  onClick={() => back()}>&#xe655;</i>
            <input type="text" className="box" 
                placeholder="  输入搜索内容" 
                ref={query}
            />
        </SearchBoxWrapper>
    </div>
  )
}

export default memo(SearchBox)