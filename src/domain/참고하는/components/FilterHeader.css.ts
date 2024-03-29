import { createVar, style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const filterHeaderWrapper = style({
  margin: '0 auto',
  width: '703px',
  textAlign: 'center',
});

export const filterButton = style([
  sprinkles({
    typography: '40/Title/Medium',
  }),
  {
    color: COLORS['Grey/300'],
    selectors: {
      '&:not(:last-child)::after': {
        content: '',
        display: 'inline-block',
        verticalAlign: 'top',
        margin: '21.5px 16px 0',
        borderRadius: '50%',
        width: '5px',
        height: '5px',
        backgroundColor: COLORS['Grey/250'],
      },
    },
  },
]);

export const active = style({
  fontWeight: 700,
  color: COLORS['Grey/900'],
});

export const positionX = createVar();
export const positionY = createVar();

export const filterButtonIcon = style({
  position: 'fixed',
  left: positionX,
  top: positionY,
});
