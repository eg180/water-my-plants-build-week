import React from 'react'
import styled from 'styled-components'

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
                    <p>SIGN IN</p>
                </div>
            </StyledHeader>
    )
}

export default Header
