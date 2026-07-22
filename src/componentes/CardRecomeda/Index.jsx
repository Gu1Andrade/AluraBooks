import styled from "styled-components";

// Wrapper necessário para dar suporte à expansão do fundo
const CardContainer = styled.div`
  position: relative;
  width: 900px;
  max-width: 90%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 47, 82, 0.15);
  z-index: 2;

  transition: all 0.4s ease-in-out;

  /* Agrupa os textos (h3, Subtitulo, Descricao) para ocuparem o lado esquerdo */
  & > h3,
  & > h4,
  & > p {
    flex: 1;
  }

  h3 {
    color: #eb9b00;
    font-size: 1.5rem;
    margin: 0 0 8px;
  }

  /* EFEITO UIVERSE: Ao passar o mouse no Card */
  &:hover {
    background-color: #ffe87c; /* Amarelo destaque da referência */
    cursor: pointer;

    /* Aciona a camada de trás que segura o botão */
    & ~ .card-expansivel {
      height: 100%;
      transform: translateY(50px); /* Faz a aba deslizar para baixo */
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }

    /* Revela o botão no fundo */
    & ~ .card-expansivel button {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Camada amarela/verde de trás que expande para baixo
const CardExpansivel = styled.div`
  position: absolute;
  top: 0;
  width: 96%; /* Levemente menor que o card principal */
  height: 40px;
  background: #eb9b00; /* Cor primária do seu botão */
  border-radius: 16px;
  z-index: 1;
  transition: all 0.4s ease-in-out;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 8px;
`;

const Butao = styled.button`
  padding: 10px 28px;
  background: #002f52; /* Contraste com o amarelo */
  color: #fff;
  border: none;
  border-radius: 8px;

  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;

  &:hover {
    background: #001e35;
  }
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

const Descricao = styled.p`
  margin: 16px 0;
  color: #4a4a4a;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ImgLivro = styled.img`
  width: 150px;
  flex-shrink: 0;
  object-fit: contain;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Layout da Div para organizar o conteúdo textual do Card
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
    return (
        <CardContainer>
            <Card>
                <InfoContainer>
                    <h3>{titulo}</h3>
                    <Subtitulo>{subtitulo}</Subtitulo>
                    <Descricao>{descricao}</Descricao>
                </InfoContainer>
                <ImgLivro src={img} alt={titulo} />
            </Card>

            {/* Camada inferior deslizante baseada no Uiverse */}
            <CardExpansivel className="card-expansivel">
                <Butao>Saiba mais</Butao>
            </CardExpansivel>
        </CardContainer>
    );
}

export default CardRecomenda;