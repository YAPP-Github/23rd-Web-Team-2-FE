import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/src/styles/sprinkles.css';
import { COLORS, Z_INDEX } from '@/src/styles/tokens';

export const trigger = style({
  width: 'fit-content',
  height: 'fit-content',
  padding: '4px',
});

export const top = createVar();
export const left = createVar();

export const content = recipe({
  base: [
    sprinkles({ typography: '13/Body/Regular' }),
    {
      position: 'absolute',
      top,
      left,
      width: 'fit-content',
      color: COLORS['Grey/White'],
      backgroundColor: COLORS['Dim/70'],
      borderRadius: '8px',
      whiteSpace: 'nowrap',
      transform: 'translateX(-50%)',
      zIndex: Z_INDEX['tooltip'],
    },
  ],
  variants: {
    hasArrow: {
      false: {
        padding: '8px 12px',
      },
      true: {
        padding: '16px',

        '::before': {
          content: '',
          width: 0,
          height: 0,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          border: `6px solid ${COLORS['Grey/White']}`,
        },
      },
    },
  },
});

export const topArrow = style({
  marginTop: '6px',

  '::before': {
    top: '-12px',
    borderBottomColor: COLORS['Dim/70'],
  },
});

export const bottomArrow = style({
  marginBottom: '6px',

  '::before': {
    bottom: '-12px',
    borderTopColor: COLORS['Dim/70'],
  },
});
