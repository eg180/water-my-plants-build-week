import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: #edf6f9;
    #logo {
        color: green
    }
`

function Header() {
    return (
        
            <StyledHeader>
                <div>
                    <p id="logo">Water My Plants</p>
                </div>
                <div>
                    <Link to="/signin"><p>SIGN IN</p></Link>
                </div>
            </StyledHeader>
    )
}

export default Header
