import { fetchSchedules } from './api/schedules';
import state from './state';

export async function initializeLocalState() {
  if (state.currentScheduleId !== null && state.currentScheduleId !== undefined) {
    return;
  }

  const schedules = await fetchSchedules();

  if (!Array.isArray(schedules)) {
    console.error('Failed to initialize local state: schedules response is not an array');
    return;
  }

  if (schedules.length === 0) {
    return;
  }

  state.currentScheduleId = schedules[0].id;
}
