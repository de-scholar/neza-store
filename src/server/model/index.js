import MigrateTables from './migrations/table_creations';

(async () => {
  await MigrateTables();
})();
