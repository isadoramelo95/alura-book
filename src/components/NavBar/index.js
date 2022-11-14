import styled from 'styled-components';

const OpcaoContainer = styled.ul`
    display: flex;
`

const Lista = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoLista = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']


function NavBar() {
    return (
        <OpcaoContainer>
            {textoLista.map((texto) => (
                <Lista><p>{texto}</p></Lista>
            ))}
        </OpcaoContainer>
    )
}

export default NavBar;