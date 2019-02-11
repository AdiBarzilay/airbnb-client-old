import React from 'react';
import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
// import { Title } from '../common/styled.components'; 
// import {Container, Header, Button, Logo, Arrow, Search, Input, HeaderLine, Wrap, Manu, MenuItem, ItemLink, ItemIcon, Line, Icon} from './TopBar.styles';


const NavWeb = ({avatar = {} }) => {
    
        return (
        <Container>   
                    <Manu>
                        <MenuItem>
                            <ItemLink to="/">Become a host</ItemLink>
                        </MenuItem>

                        <MenuItem>
                            <ItemLink to="/">Saved</ItemLink>                            
                        </MenuItem>

                        <MenuItem>
                            <ItemLink to="/s">Trips</ItemLink>                            
                        </MenuItem>

                        <MenuItem>
                            <ItemLink to="/">Messages</ItemLink>                           
                        </MenuItem>

                        <MenuItem>
                            <ItemLink to="/">Help</ItemLink>                            
                        </MenuItem>

                        <MenuItem>
                            <ItemLink to="/">avatar</ItemLink>
                        </MenuItem>
                        
                    </Manu>
        </Container>
        
)}

export default NavWeb;


export const Container = styled.div`
    display: none;
    

    @media (min-width: 1028px) {
    display: flex;
    margin-left: auto;
    font-size: 1.6rem;
    align-items: center;
    white-space: nowrap;
    }
`;
export const Manu = styled.ul`
    /* z-index:1; */
    display: flex;
    flex-flow: row;
`;
export const MenuItem = styled.li`
    display:flex;
    /* justify-content:space-between; */
    line-height: 22px;
    padding-left: 12px;
    padding-right:12px;
`;
export const ItemLink = styled(Link)`
    color: rgb(27,27,27);
    text-decoration: none;
`;