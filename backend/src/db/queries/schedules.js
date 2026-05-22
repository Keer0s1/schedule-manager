export const schedulesQueries = {
  getAll: 'SELECT id, name, created, lessons_in_day as "lessonsInDay", weekdays FROM schedules ORDER BY id',
  create: `
    INSERT INTO schedules (name, lessons_in_day, type, weekdays)
    VALUES ($1, $2, $3, $4)
    RETURNING id, lessons_in_day as "lessonsInDay"
  `,
  update: 'UPDATE schedules SET name = $1, lessons_in_day = $2, type = $3, weekdays = $4 WHERE id = $4',
  delete: 'DELETE FROM schedules WHERE id = $1',
};
