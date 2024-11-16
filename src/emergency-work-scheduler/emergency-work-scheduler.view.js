import { read } from '../lib/view.js';

class EmergencyWorkSchedulerView {
  static QUERY = Object.freeze({
    READ_EMERGENCY_WORK_DATE: `비상 근무를 배정할 월과 시작 요일을 입력하세요> `,
  });

  async readEmergencyWorkDate() {
    const result = await read(EmergencyWorkSchedulerView.QUERY.READ_EMERGENCY_WORK_DATE);

    return result;
  }
}

export default EmergencyWorkSchedulerView;
