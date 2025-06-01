import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await getAllContacts();
    return allContacts.length;
  } catch (err) {
    console.log('Помилка підрахунку всіх контактів', err);
  }
};

console.log(await countContacts());
