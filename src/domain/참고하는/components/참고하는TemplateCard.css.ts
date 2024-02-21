import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';

export const wrapper = style([
  sprinkles({
    width: {
      small: 336,
      middle: 322,
      large: 389,
    },
  }),
  {
    position: 'relative',
    padding: '28px 32px 20px',
  },
]);
