import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {IoMoonOutline,IoMoon} from 'react-icons/io5'
import {Container} from "./Container";
import {Link} from 'react-router-dom'


const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--color-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`

const Title = styled(Link).attrs({to: '/'})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const Switcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`

const Header = () => {
    const setDefaultTheme = () => {
        const defaultTheme = sessionStorage.getItem('theme')
        return defaultTheme ? defaultTheme : 'light'
    }

    const [theme,setTheme] = useState(setDefaultTheme)

    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        sessionStorage.setItem('theme',theme)
        document.body.setAttribute('data-theme',theme)
    },[theme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <Switcher onClick={changeTheme}>
                        {theme === 'light' ? (<IoMoonOutline size="14px"/>) : (<IoMoon size="14px"/>)}
                        <span style={{marginLeft:'0.25rem'}}>{theme} Theme</span>
                    </Switcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;