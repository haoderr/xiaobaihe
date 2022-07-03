import styled from "styled-components";

export const Wrapper = styled.div`
    .list {
        width: 100%;
        height: 4.25rem;
        margin: 0.5rem 0 0;
        border-bottom: 1px solid #ccc;
        display: flex;
        .list__left {
            width: 65%;
            padding: 0 0.5rem;
            .list__left-title {
                float: left;
                color: black;
                font-size: 0.75rem;
                text-align: left;
                height: 70%;
            }
            .list__left-button {
                text-align: left;
                width: 100%;
                float: left;
                color: #a7a7a7;
                font-size: 0.7rem;
                i {
                    margin-top: 0.25rem;
                    float: right;
                }
            }
        }
        .list__right {
            width: 35%;
            float: left;
            .list__right-pic {
                img {
                    margin-top: 0.25rem;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`