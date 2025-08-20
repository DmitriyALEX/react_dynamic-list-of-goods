import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    return await fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then(data => data);
  } catch (e) {
    throw e instanceof Error ? e : new Error(String(e));
  }
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
