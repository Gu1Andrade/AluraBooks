import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomeda/Index'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    padding: 60px 5%;
    
    text-align: center;

    h2 {
        font-size: 2rem;
        color: #ffffff;
        margin-bottom: 40px;
        font-weight: 700;
    }

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;

    h2 {
        width: 100%;
    }

    img {
        width: 230px;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 20px rgba(211, 207, 207, 0.15);
        }
    }

`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#000">Últimos Lançamentos</Titulo>
            {livros.map( livro => (
                <img src={livro.src} alt="" />
            ))}
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Contruir uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos