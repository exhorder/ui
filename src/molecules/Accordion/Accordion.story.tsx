import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import { Typography } from '../../index';
import Accordion from './Accordion';

const ACCORDION_ITEMS = [
  {
    title: 'Is Compound safe?',
    component: <Typography as="span">{faker.lorem.paragraphs()}</Typography>,
  },
  {
    title:
      'How is the MyCrypto Compound integration different than the main Compound Interface?',
    component: <Typography as="span">{faker.lorem.paragraphs()}</Typography>,
  },
  {
    title: 'How are interest rates set?',
    component: <Typography as="span">{faker.lorem.paragraphs()}</Typography>,
  },
  {
    title: 'How are interest rates set?',
    component: faker.lorem.paragraphs(),
  },
];

storiesOf('Molecules', module).add('Accordion', () => (
  <Accordion items={ACCORDION_ITEMS} />
));
