import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => data);
}

// sort and get the first 5
export const get5First = async () => {
  return getAll().then(goods => {
    return goods
      .toSorted((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
      )
      .slice(0, 5);
  });
};

// get only red
export const getRedGoods = async () => {
  return getAll()
    .then(goods => goods)
    .then(data => data.filter(x => x.color === 'red'));
};
