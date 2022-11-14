import Logo from '../Logo';
import NavBar from '../NavBar';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';


const HeaderConatiner = styled.div`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderConatiner>
            <Logo />
            <NavBar />
            <IconesHeader />
        </HeaderConatiner>
    )
}

export default Header;