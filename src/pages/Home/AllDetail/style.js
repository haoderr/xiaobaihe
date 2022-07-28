import styled from "styled-components";

export const Wrapper = styled.div`
    color: black;
    width: 100%;
    .detail {
        .img {
            img {
                width: 100%;
            }
        }
        .title {
            padding: 0 0.5rem 0.5rem;
            margin: 0;
            text-align: left;
            font-size: 1rem;
        }
        .author {
            display: flex;
            border-bottom: 1px solid #ebebeb;
            padding-bottom: 0.5rem;
            .author_pic {
                margin-left: 0.5rem;
                img {
                    width: 1.75rem;
                    border-radius: 50%;
                }
            }
            .author_nm {
                margin-left: 0.5rem;
                text-align: left;
                font-size: 0.75rem;
                flex: 1;
            }
            .attention {
                margin-right: 1rem;
                width: 3.5rem;
                height: 1.5rem;
                border: none;
                color: #fff;
                background-color: #000;
                font-size: 0.75rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.1rem;
                display: block;
            }
        }
        .text {
                font-size: 0.7rem;
                margin: 0.5rem;
            }
    }
    .comment {
        width: 100%;
        height: 2.5rem;
        background-color: #f5f7f6;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        .comment-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;
            input {
                width: 90%;
                height: 80%;
                border: none;
                border-radius: 1rem;
                padding: 0 0.5rem;
                background-color: hsla(0,0%,90.2%,.5882352941176471);
                outline: none;
                margin-bottom: 0;
                padding: 0 1rem;
            }
        }
        .comment-right {
            width: 50%;
            display: flex;
            justify-content: center;
            .icon_ {
                width: 33%;
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #a8a8a8;
                &.active {
                    color: black;
                }
                i {
                    display: flex;
                    font-size: 1rem;
                }
                span {
                    display: flex;
                    font-size: 0.5rem;
                }
            }
        }
    }
`