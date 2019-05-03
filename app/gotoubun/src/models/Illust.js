'use strict';

import CHARACTER from '../models/Character.js';

export default class Illust {
  constructor(params) {
    this.id = params.id;
    this.quote = params.quote;
    this.src = getImageUrl(params);
    this.character = getCharacter(params);
  }
}

function getImageUrl(params) {
  if (!params.id) return '';
  return `data/5hanayome/img/${params.id}.jpg`;
}

function getCharacter(params) {
  if (!params.id) return null;

  const cs = Object.values(CHARACTER).filter(c => params.id.startsWith(c.PREFIX));
  if (cs.length > 0) return cs[0];

  return null;
}