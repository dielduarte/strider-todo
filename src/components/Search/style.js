import { css } from 'glamor';
import { utils } from '../../assets/glamor/utils';
export {utils};

export const search__card = css({
  width: '95%',
  margin: '50px auto 0 auto',
  padding: '0 1em 1em 1em',
  '@media(min-width: 768px)': {
    width: '50%',
  },
  '@media(min-width: 1280px)': {
    width: '30%',
  }
});
