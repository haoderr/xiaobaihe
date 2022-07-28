import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 100%;
    height: 2.5rem;
    background: #F5F5F5;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around; 
        color: #a8a8a8;
        
        &.active {
            color: black;
            font-weight: 550;
        }
        i {
            font-size: 1.5em;
        }
    }
`