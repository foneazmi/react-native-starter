import {BASEURL} from '@root/env';

export const getAssets = (path, name) => {
  return `${BASEURL}file?q=${path}/${name}`;
};
