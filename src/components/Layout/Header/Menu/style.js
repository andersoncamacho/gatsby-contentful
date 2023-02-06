import styled from "styled-components";

export const MenuWrapper = styled.div`
     margin: auto 0 auto auto;
     display: flex;
`;

export const MenuItem = styled.div`
     margin: auto 0 ;
     padding: 0 16px;
     line-height: 60px;
     text-decorantion: underline;
     a {
        color: white;
        &:hover {
            text-decorantion: underline;
        }
     }
`;


export const SubMenuItemWrapper = styled.div `
     position: relative;
     text-decoration: inherit;
     cursor: pointer;
     
     &:hover {
        > div:last-child{
            display:block;
        }
     }
     >div:last-child {
        display: none;
        position: absolute;
        z-index:1;
        top:50px;
        white-space: nowrap;
        background: black;
        box-shadow: 2px 2px 2px black;
        padding: 8px;
        border: 1px solid #999;
        >div{
            line-height: 1;
            padding: 8px 16px;
        }
     }
`;