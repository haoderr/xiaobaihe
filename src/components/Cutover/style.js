import styled from "styled-components";

export const Tags = styled.div`
    .top {
            margin-left: 0.5rem;
            margin-top: 0.5rem;
            font-size: 1.25rem;
        }
    text-align: left;
    .navbar{
    height: 1.75rem;
    /* border-bottom: 1px solid #ccc; */
    .nav-box{
        height: 1.75rem!important;
        line-height: 1.75rem!important;
        margin-top: -0.1rem;
    }
    .nav-item{
        width:auto!important;
        position: relative;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        justify-content: center;
        font-size: 0.75rem;
        color: #666;
        margin-top: -2.5rem;
        margin: 0 0.25rem;
        &.jihuo {
            color: black;
            font-weight: 500;
        }
        &.active::after
        {
            content: "";
            background-color: black;
            height: 0.15rem;
            position: absolute;
            bottom: -.6rem;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            border-radius: 0.25rem;
        }
        
    }
}

`