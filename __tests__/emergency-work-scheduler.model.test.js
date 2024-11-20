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

  it('평일 비상 근무 순서를 설정한다', () => {
    const input = '준팍,도밥,수아,루루,글로';

    const result = emergencyWorkSchedulerModel.setWeekdayEmergencyWorkOrder(input);

    expect(result).toEqual(['준팍', '도밥', '수아', '루루', '글로']);
  });
});
