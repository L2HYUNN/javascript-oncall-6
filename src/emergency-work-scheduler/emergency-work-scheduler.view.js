import { print, read } from '../lib/view.js';

class EmergencyWorkSchedulerView {
  static QUERY = Object.freeze({
    READ_EMERGENCY_WORK_DATE: `비상 근무를 배정할 월과 시작 요일을 입력하세요> `,
    READ_WEEKDAY_EMERGENCY_WORK_ORDER: `평일 비상 근무 순번대로 사원 닉네임을 입력하세요> `,
    READ_WEEKEND_EMERGENCY_WORK_ORDER: `휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> `,
  });

  async readEmergencyWorkDate() {
    const result = await read(EmergencyWorkSchedulerView.QUERY.READ_EMERGENCY_WORK_DATE);

    return result;
  }

  async readWeekdayEmergencyWorkOrder() {
    const result = await read(EmergencyWorkSchedulerView.QUERY.READ_WEEKDAY_EMERGENCY_WORK_ORDER);

    return result;
  }

  async readWeekendEmergencyWorkOrder() {
    const result = await read(EmergencyWorkSchedulerView.QUERY.READ_WEEKEND_EMERGENCY_WORK_ORDER);

    return result;
  }

  printEmergencyWorkSchedule(schedule) {
    print(schedule);
  }

  printErrorMessage(message) {
    print(message);
  }
}

export default EmergencyWorkSchedulerView;
