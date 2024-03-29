import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const badge = style([
  sprinkles({
    typography: '11/Caption/Medium',
  }),
  {
    marginLeft: '4px',
    backgroundColor: COLORS['Blue/Light'],
    color: COLORS['Blue/Default'],
    width: '32px',
    height: '20px',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: '-2px',
    padding: '3px 6px',
    borderRadius: '100px',
  },
]);

export const iconMediumText = style([
  sprinkles({
    typography: '15/Body/Medium',
  }),
  {
    color: COLORS['Grey/400'],
    marginLeft: '4px',
  },
]);

export const icon = style({
  position: 'absolute',
  marginTop: '2px',
});

export const deleteBookmark = style({
  position: 'relative',
  zIndex: 1,
});
