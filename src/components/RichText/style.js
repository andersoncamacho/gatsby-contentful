import styled from "styled-components";

export const Wrapper = styled.div `
     > p,
     > h1,
     > h2,
     > h3,
     > h4,
     > h5,
     > h6 {
        max-width: 1000px;
        margin: 0 auto;
     }

     a {
        color: #ee2b7b;
        &:hover {
            color: #ca0f5c;
            transition: 0.3s;
        }
     }
`;

export const ImageWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
`;

