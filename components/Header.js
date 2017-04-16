import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  font-size: 20px;
  transition: all .3s;
  cursor: pointer;
  margin-right: 15px;
  border: none;
  &:hover {
    background-color: rgba(198, 33, 42, .3);
  }
`

/* The only requirement for components placed inside a Link is they should accept an onClick prop. */
const Header = () => (
    <div>
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
    </div>
)

export default Header
