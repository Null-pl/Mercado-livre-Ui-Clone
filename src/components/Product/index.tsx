import React from 'react';

import { ReactNode } from 'react';

import { Container, Row, Painel, Column, Galery, Section, Description } from './styles';

import tshirtImage from '../../assets/tshirt.png'
import SallerInfo from '../SallerInfo';
import ProductAction from '../ProductAction';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href='#'>Compartilhar</a>
        <a href='#'>Vender um igual</a>
      </Row>

      <Painel>
        <Column>
          <Galery>
            <img alt='T-shirt' src={tshirtImage} />
          </Galery>

          <Info/>
        </Column>

        <Column>
          <ProductAction />
          <SallerInfo /> 

          <WarrantySection/>
        </Column>
      </Painel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className='title'>Compra Garantida com o Mercado Pago</p>
        <br/>
        <p className='description'>Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
        <br/>
        <p className='title'>Garantia do vendedor</p>
        <br/>
        <p className='description'>7 dias de garantia para defeito de fabricação</p>
      </span>
    </div>
    <a href='#'>Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>Camiseta Lisa 100% Algodão Penteado Fio 30.1 GRAMATURA 160! ( não é fina ou transparente )
    <br/>
    <br/>
      Gola redonda Corte Tradicional
      <br/>
      <br/>
      » Tecido de alta durabilidade
      » Camisetas Lisas confeccionadas com alta tecnologia.
      » Dupla costura - Costuradas em máquinas e linhas de qualidade.
      <br/>
      <br/>
      Tamanhos :
      P - M - G - GG
      <br/>
      <br/>
      Dimensões:
      <br/>
      <br/>
      Altura x Largura
      <br/>
      <br/>
      P - 68cm 49cm
      <br/>
      M - 69cm 50cm
      <br/>
      G - 73cm 53cm
      <br/>
      GG - 74cm 55cm
      <br/>
      <br/>
      Medidas da manga
      <br/>
      <br/>
      P - Comprimento 21cm Largura 16cm
      <br/> 
      M - Comprimento 22cm Largara 17cm
      <br/>
      G - Comprimento 23cm Largura 18cm
      <br/>
      GG - Comprimento 24cm Largura 19cm
      <br/>
      <br/>
      * Medidas Aproximadas (podendo variar 1 ou 2 centímetros)
      <br/>
      <br/>
      CORES
      <br/>
      Branco
      <br/>
      Preto
      <br/>
      Mescla Cinza
      <br/>
      Chumbo
      <br/>
      Mescla Cinza Escuro
      <br/>
      Azul Turquesa
      <br/>
      Azul Royal
      <br/>
      Azul Marinho
      <br/>
      Verde Bandeia
      <br/>
      Verde Escuro
      <br/>
      Vermelho
      <br/>
      Violeta (roxo)
      <br/>
      Amarelo Ouro
      <br/>
      Laranja
      <br/>
      Vinho
      <br/>
      <br/>
      Outras Duvidas:
      - Responderemos sua pergunta ou mensagem em até 02 horas
      - Assim que for postado, você receberá o seu código de rastreamento
      <br/>
      <br/>
      DÚVIDAS FREQUENTES:
      <br/>
      <br/>
      - O produto é novo?
      Sim. Todos nossos produtos são novos. Todos as camisetas ficam em estoque sem estampa.
      <br/>
      <br/>
      -Como saberei se vai servir?
      Todas as medidas estão na descrição acima. Faça a comparação com alguma camiseta ou camisa que lhe vista bem e assim saberá qual o tamanho correto para comprar. Fácil, não?
      <br/>
      <br/>
      - Como faço para calcular o frete e saber o prazo de entrega?
      Ao lado ou abaixo da imagem do produto, terá a opção CALCULADOR DE FRETE. Basta digitar o seu CEP e aparecerão as opções disponíveis de frete para o seu endereço. Você poderá escolher entre o frete Expresso (SEDEX) e o frete Normal (PAC). Aparecerá também a data prevista para a chegada da sua compra.
      <br/>
      <br/>
      - Qual o prazo para postagem?
      A postagem de todos os pedidos são feitas em até 01 dia útil (24 horas úteis). Caso tenha qualquer dúvida sobre o andamento da sua compra fique a vontade para enviar mensagens. Teremos prazer em responder
      <br/>
      <br/>
      - Comprei, mas não chegou. O que pode ter acontecido? :(
      Raríssimas vezes, um outro pedido é extraviado pelos Correios. O carteiro pode ter sido assaltado, ou simplesmente terem perdido a mercadoria. Mas não se preocupe, caso isso aconteça, faremos o envio de um novo produto, ou se preferir faremos a devolução de 100% do valor pago.
      <br/>
      <br/>
      ENVIAMOS PARA TODO O BRASIL campo 'Perguntas ao vendedor'
      <br/>
      <br/>
      Ainda tem dúvidas ? Pergunte sem constrangimento, basta utilizar o campo 'Perguntas ao vendedor' logo abaixo !</p>
  </Description>
);

export default Product;
