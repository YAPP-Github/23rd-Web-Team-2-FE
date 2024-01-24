import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const headerWrapper = style({
  padding: '0 24px',
  position: 'fixed',
  left: 0,
  right: 0,
  backgroundColor: COLORS['Grey/900'],
  '::after': {
    content: '',
    display: 'block',
    clear: 'both',
  },
});

const circle = style({
  display: 'inline-block',
  position: 'relative',
  borderRadius: '50%',
  verticalAlign: 'middle',
});

export const circle28 = style([
  circle,
  {
    paddingTop: '5px',
    width: '28px',
    height: '28px',
    backgroundColor: COLORS['Grey/400'],
  },
]);

export const circle40 = style([
  circle,
  {
    width: '40px',
    height: '40px',
    backgroundColor: COLORS['Grey/100'],
  },
]);

export const logo = style({
  display: 'inline-block',
  padding: '18px 0',
});

export const iconsWrapper = style({
  float: 'right',
  margin: '8px 0',
});

export const bookmark = style({
  padding: '12px',
  display: 'inline-block',
  lineHeight: 0,
});

export const profile = style({
  padding: '10px',
  lineHeight: 0,
  verticalAlign: 'top',
});

export const dialogWrapper = style({
  position: 'absolute',
  top: '56px',
  right: '24px',
});

export const profileIcon = style({
  lineHeight: 0,
  position: 'absolute',
  top: '8px',
  left: '8px',
});

export const profileName = style([
  sprinkles({
    typography: '16/Title/Medium',
  }),
  {
    color: COLORS['Grey/900'],
    verticalAlign: 'middle',
    display: 'inline-block',
    marginLeft: '8px',
  },
]);

export const buttonIcon = style({
  lineHeight: 0,
  display: 'inline-block',
  verticalAlign: 'top',
  marginTop: '2px',
});

export const buttonText = style([
  sprinkles({
    typography: '15/Body/Regular',
  }),
  {
    color: COLORS['Grey/800'],
    marginLeft: '6px',
  },
]);

export const footerWrapper = style({
  padding: '40px 200px',
  backgroundColor: COLORS['Grey/700'],
  display: 'flex',
  justifyContent: 'space-between',
});

const dot = style({
  selectors: {
    '&:not(:last-child)::after': {
      content: '',
      display: 'inline-block',
      verticalAlign: 'top',
      margin: '7.5px 8px 0',
      borderRadius: '50%',
      width: '3px',
      height: '3px',
      backgroundColor: COLORS['Grey/500'],
    },
  },
});

const footerText = style([
  sprinkles({
    typography: '14/Body/Regular',
  }),
  {
    color: COLORS['Grey/400'],
  },
]);

export const footerButton = style([footerText, dot]);

export const footerLink = style([footerText, dot]);

export const instagramButton = style([
  sprinkles({
    typography: '14/Body/Regular',
  }),
  {
    color: COLORS['Grey/400'],
    marginTop: '8px',
  },
]);

export const instagramIcon = style({
  lineHeight: 0,
  display: 'inline-block',
  verticalAlign: 'top',
});

export const instagramText = style({
  display: 'inline-block',
  margin: '2.5px 0 0 4px',
});

export const baroIcon = style({
  marginLeft: '167px',
  marginBottom: '8px',
});

export const copyright = style([
  sprinkles({
    typography: '14/Body/Regular',
  }),
  {
    color: COLORS['Grey/400'],
  },
]);