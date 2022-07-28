import styled from "styled-components";

export const Wrapper = styled.div`
    .list{
        width: 48%;
        float: left;
        margin: 0 1%;
        margin-top: 0.5rem;
        :last-child {
            margin-bottom: 2.5rem;
        }
        .img{
            img {
                border-radius: 0.3rem;
            }
        } 
        .price {
            display: flex;
            img {
                width: 1rem;
                height: 1rem;
            }
            .before_price {
                color: #778899;
                margin-left: 0.5rem;
                text-decoration:line-through;
            }
        }
        .text {
            text-align: left;
            color: black;
            .name {
                font-size: 0.7rem;
            }
            .price {
                font-size: 0.1rem;
            }
            .label {
                font-size: 0.1rem;
            }
        }
    }
`