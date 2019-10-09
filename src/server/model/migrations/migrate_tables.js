import connect from './settings/connect';
import { CREATE_TABLE_USERS, CREATE_TABLE_EVENTS } from './settings/queries';

const MigrateTables = async (isDone) => {
  try {
    /** CREATING TABLES ON AFTER ANOTHER */
    await connect.query(CREATE_TABLE_USERS);
    await connect.query(CREATE_TABLE_EVENTS);
    if (isDone) { isDone(); }
    process.exit(0);
  } catch (error) {
    // console.log(error);
  }
};

(async () => {
  await MigrateTables();
})();
