import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: ${props => props.play>0?'3rem':0};
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: #f2f3f4;
    transform-origin: right bottom;
    background-color: #fff;
    height: 100%;
    .tab {
        background-color: black;
    }
    /* CSSTranstion 过度类型给children */
    &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active,&.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .list {
        width: 100%;
        display: flex;
        color: black;
        .text {
            font-size: medium;
            text-align: left;
            margin: 0.5rem 1rem;
        }
        .listLeft  {
            width: 50%;
            height: 50%;
            margin-top: 1rem;
            margin: 0.5rem;
            font-size: small;
            background-color: #f4f4f4;
            border-radius: 0.5rem;
            .henxiang {
                display: flex;
                margin: 0.8rem 1rem;
            }
        }
        .listRight {
            float: right;
            width: 50%;
            height: 100%;
            margin-top: 1rem;
            margin: 0.5rem;
            font-size: small;
            background-color: #f4f4f4;
            border-radius: 0.5rem;
            .henxiang {
                display: flex;
                margin: 0.8rem 1rem;
            }
        }
    }
`