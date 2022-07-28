import styled from "styled-components";

export const BannerWrapper = styled.div`
    .all_banners {
        overflow-x: scroll;
        position: relative;
        display: flex;  
        .swiper-pagination{
            .swiper-pagination-bullet{
                border-radius: 0;
                height: 0.1rem;
                width: 0.75rem;
                background-color: white;
            }
        }
    }
`