import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const oldContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const allContacts = [...oldContacts, ...newContacts];
    await writeContacts(allContacts);
  } catch (error) {
    console.log('Помилка генерування контактів', error);
  }
};

generateContacts(5);
