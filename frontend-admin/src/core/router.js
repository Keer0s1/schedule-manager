import Calls from '../pages/calls/Page'
import Classes from '../pages/classes/Page'
import Groups from '../pages/groups/Page'
import Subjects from '../pages/subjects/Page'
import Teachers from '../pages/teachers/Page'

export default {
  routes: {
    Звонки: Calls,
    Группы: Groups,
    Предметы: Subjects,
    Преподаватели: Teachers,
    Аудитории: Classes,
  },

  async getRoute(route) {
    if (this.routes[route]) {
      const content = await this.routes[route]()
      return content
    }
    return null
  },
}
