import EmergencyWorkSchedulerModel from '../src/emergency-work-scheduler/emergency-work-scheduler.model';
import EmergencyWorkSchedulerValidator from '../src/emergency-work-scheduler/emergency-work-scheduler.validator';

describe('EmergencyWorkSchedulerModel', () => {
  let emergencyWorkSchedulerModel;

  beforeEach(() => {
    emergencyWorkSchedulerModel = new EmergencyWorkSchedulerModel(new EmergencyWorkSchedulerValidator());
  });

  it('비상 근무를 배정할 월과 시작 요일을 설정한다', () => {
    const input = '5,월';

    const result = emergencyWorkSchedulerModel.setEmergencyWorkDate(input);

    expect(result).toEqual({ month: 5, day: '월' });
  });
});
