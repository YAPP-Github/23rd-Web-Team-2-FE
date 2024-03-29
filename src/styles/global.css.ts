import { globalStyle } from '@vanilla-extract/css';

import { activeFilterButton } from '@domain/참고하는/components/FilterButtons.css';

import { theme } from './theme.css';
import { COLORS } from './tokens';

globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box',
});

globalStyle(
  'html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, em, img, ins, kbd, q, s, samp, small, strike, strong, article, footer, header, main, nav, section',
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontFamily: theme.font.pretendard,
  },
);

globalStyle('body', {
  lineHeight: 1,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
});

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section',
  {
    display: 'block',
  },
);

globalStyle('ol, ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

globalStyle('li', {
  listStyle: 'none',
});

globalStyle('button, select, input, textarea', {
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
  fontFamily: theme.font.pretendard,
});

globalStyle('a, button', {
  cursor: 'pointer',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('button', {
  padding: 0,
});

globalStyle(`${activeFilterButton}:hover svg`, {
  transition: 'fill 100ms ease-in-out',
  fill: COLORS['Grey/600'],
});
