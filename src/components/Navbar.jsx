import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
// STYLED COMPONENTS

const Container = styled.div`
    height: 4rem;
`;

const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    font-family: 'Krona One';
    align-items: center;
`;

const Language = styled.span`
    font-size: 1rem;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-content: center;
    display: flex;
`;

const Input = styled.input`
    border: none;
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    gap: 2rem;
`;

const Center = styled.div`
    display: flex;
    flex: 1;
    gap: 2rem;
    justify-content: center;
`;

const Right = styled.div`
    display: flex;
    flex: 1;
    gap: 2rem;
    justify-content: flex-end;
`;

const MenuItem = styled.div``;

const Logo = styled.div`
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-family: 'Krona One';
  `;

// END OF STYLE COMPONENTS

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:'gray', fontSize:'1rem', padding:'0.2rem'}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>MAXISTORE</Logo>
                </Center>
                <Right>
                    <MenuItem>Regitster</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
