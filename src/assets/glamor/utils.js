import { css } from 'glamor';

export const utils = {
  p1: css({ padding: '1em' }),
  card: css({
    width: '95%',
    margin: '50px auto 0 auto',
    padding: '0',
    '@media(min-width: 768px)': {
      width: '50%',
    }
  })
};
