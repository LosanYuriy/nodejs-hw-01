import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts;
  } catch (err) {
    console.log('Помилка отримання всіх контактів', err);
  }
};

console.log(await getAllContacts());
