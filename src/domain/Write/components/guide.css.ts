import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const guideText = style({
  marginBottom: '12px',
  color: COLORS['Grey/500'],
  textAlign: 'center',
  fontSize: '15px',
  fontWeight: '500',
});
