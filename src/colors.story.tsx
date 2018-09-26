import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import colors from './colors';

const Color = styled.div`
  vertical-align: middle;
  background-color: ${props => props.color};
  display: inline-block;
  height: 25px;
  width: 25px;
  margin: 5px 10px;
  border-radius: 50%;
`;

const Property = styled.code`
  vertical-align: middle;
`;

storiesOf('Styles', module).add('Colors', () =>
  colors.map(backgroundColor => (
    <div>
      <Color color={backgroundColor} />
      <Property>{backgroundColor}</Property>
    </div>
  )),
);