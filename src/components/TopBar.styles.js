import styled from 'styled-components/macro';
import { Link } from "react-router-dom";

export const Container = styled.div`
    z-index:20;
    font-size: 1.6rem;
    position: ${p=> p.pos};
    /* position: sticky; */
    top: 0;
    width: 100%;
    
`;
export const Header = styled.div`
    position: relative;
    /* position: ${props=>props.pos}; */
    z-index:25;
    display:flex;
    align-items: center;
    width:100%;
    height: 80px;
    top:0;
    background: #fff;
`;
export const HeaderBottomLine = styled.span`
        position: absolute;
        border-bottom: ${props=> props.open? 'none' : '1px solid #e4e4e4'};
        width: 100%;
        height: 1px;
        top: 80px;
        z-index:25;
`;
export const Button = styled.button`
    cursor: pointer;
    display:flex;
    background-color: #fff;
    align-items:center;
    z-index: 30;
    margin-bottom: 1px;

    @media (min-width: 1028px) {
    margin-right: 9px;
    display: none;
    }
`;
export const Search = styled.div`
    width: 100%;
    margin: 0px 10px 0px 24px ;

    @media (min-width: 743px) {
    width: 450px;
}
`;
export const Logo = styled.img`
    width: 34px;
    margin: 0px 10px 0px 24px ;
`;
export const LogoWeb = styled.img`
    display: none;
    width: 34px;
    margin: 0px 19px 0px 24px ;

    @media (min-width: 1028px) {
    display: block;
    
}
`;
export const Arrow = styled.img`

@media (min-width: 1028px) {
    display: none;
    }
`;
export const Input = styled.input`
    z-index: 30;
    position: relative;
    border-radius: .5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    height:48px;
    border: 1px #EBEBEB solid;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    font-weight: 600;
    width: 100%;

    @media (min-width: 743px) {
    width: 460px;
}
`;
export const Cover = styled.div`
    position: absolute;
    background: #fff;
    height: 90%;
    width: 100vw;
    z-index: 20;
    top: 0;
`;
export const Wrap = styled.div`
    position: fixed;
    top:${props=> props.open? '64px' : '-1000px'};
    transition:top 300ms ease-out;
`;
export const Manu = styled.ul`
    z-index:1;
    display:flex;
    flex-flow: column;
    position: absolute;
    background: white;
    overflow-y: hidden;
    height: 100vh;
    width: 100vw;
    padding:24px 24px;
    list-style-type: none;
    
`;
export const MenuItem = styled.li`
    display:flex;
    justify-content:space-between;
    line-height: 22px;
    padding-top: 12px;
    padding-bottom:12px;
`;
export const ItemLink = styled(Link)`
    color: rgb(27,27,27);
    text-decoration: none;
`;
export const ItemIcon = styled.div`

`;
export const Icon = styled.img`
    width: 26px;  
    height: 26px;  
`;
export const Line = styled.hr`
    color:black;
    height: 0px ;
    border-top: 1px solid rgb(235, 235, 235);
    margin: 16px 0px ;
`;

