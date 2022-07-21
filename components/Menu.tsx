import styled from "styled-components";

const Menu = () => {
  return (
    <Container>
      <Navbar>
        <Button href='/past'>past lives</Button>
        <Button href='/thoughts'>thoughts</Button>
        <Button href='/connect'>connect</Button>
      </Navbar>
    </Container>
  )
}

const Container = styled.div`
	position: sticky;
  top: 0;
  width: 100%;
`

const Navbar = styled.div`
  display: flex;
  justify-content: right;
  padding: 2rem;
`

const Button = styled.a`
  color: #fabd2f;
  text-align: center;
  padding: 14px;
  text-decoration: none;
`

export default Menu
