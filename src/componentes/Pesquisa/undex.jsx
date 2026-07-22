import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  color: #ffffff;
  text-align: center;
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const Titulo = styled.h2`
    font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  color: #FFF;
`

const Subtitulo = styled.h3`
font-size: 1rem;
  font-weight: 400;
  max-width: 600px;
  line-height: 1.5;
  margin: 0;
`
const Resultado = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #fff;
    transform: scale(1.02);
  }

  img {
    width: 70px;
    border-radius: 6px;
  }

  p {
    color: #fff;
    font-weight: 600;
  }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])


    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua proxima leitura"
                onBlur={evento => {
                    const textDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />

            {livrosPesquisados.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa