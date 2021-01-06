import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    color: #457b9d
`

function SignIn() {
    return (
        <div>
            <StyledP id="tagline">Get in touch. </StyledP>
            <form>
                <label><span>Name: </span>
                    <input
                    name="name"
                    type="text"
                    />
                </label>

                <label><span>Email: </span>
                    <input
                    name="email"
                    type="email"
                    />
                </label>
            </form>


            
        </div>
    )
}

export default SignIn
