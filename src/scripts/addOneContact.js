import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const oldContacts = await readContacts();
    const newContacts = createFakeContact();
    const allContacts = [...oldContacts, newContacts];
    await writeContacts(allContacts);
  } catch (err) {
    console.log('Помилка додавання одного контакту', err);
  }
};

addOneContact();
