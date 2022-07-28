import styled from "styled-components";

export const ButtonTwoWrapper = styled.div`
    margin-top: 0.1rem;
    width: 100%;
    height: 2rem;
    display: flex;
    padding-left: 0.5rem;
    margin-top: 0.5rem;
    .tab {
        margin-right: 0.5rem;
        background-color: #F5F5F5;
        span {
            margin-left: 0.1rem;
            margin-top: 0.1rem;
            font-size: 0.1rem;
        }
    }
    a {
        flex: 1;
        display: flex;
        /* align-items: center; */
        justify-content: space-around; 
        color: black;
        i {
            font-size: 1.2rem;
            line-height: 2.5rem;
        }
    }
`