import React from 'react';
import { ReactNode } from 'react';

import {
   Container,
   Title,
   LocationCard,
   LocationIcon,
   ReputationCard,
   ReputationThermometer,
   ReputationRow,
   SupportIcon,
   ClockIcon,
   More,
} from './styles';

const SallerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informaçoes sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />
        <div>
          <p>Localização</p>
          <strong>Crato, Ceará</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className='active' />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>1000</strong>
            <span>Verdas nos ultimos 4 meses</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>Entrega os produtos dentro do prazo</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href='#'> Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SallerInfo;
