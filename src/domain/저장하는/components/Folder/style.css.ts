import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const folderButton = recipe({
  base: [
    sprinkles({ typography: '16/Title/Medium' }),
    utils.flexAlignCenter,
    {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '8px',
      transition: 'all 100ms ease-in-out',
      paddingRight: '8px',

      ':hover': {
        backgroundColor: COLORS['Grey/100'],
      },
    },
  ],
  variants: {
    isActive: {
      true: {
        backgroundColor: COLORS['Grey/100'],
      },
      false: {
        backgroundColor: COLORS['Grey/White'],
      },
    },
  },
});

export const folderName = style({
  display: 'inline-block',
  width: '100%',
  padding: '11px 0 11px 20px',
});
