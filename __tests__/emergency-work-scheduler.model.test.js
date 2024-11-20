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

  it('휴일 비상 근무 순서를 설정한다', () => {
    const input = '준팍,도밥,수아,루루,글로';

    const result = emergencyWorkSchedulerModel.setWeekendEmergencyWorkOrder(input);

    expect(result).toEqual(['준팍', '도밥', '수아', '루루', '글로']);
  });

  it('비상 근무표를 만든다', () => {
    const EMERGENCY_WORK_SCHEDULE = [
      '5월 1일 월 준팍',
      '5월 2일 화 도밥',
      '5월 3일 수 고니',
      '5월 4일 목 수아',
      '5월 5일 금(휴일) 루루',
      '5월 6일 토 수아',
      '5월 7일 일 글로',
      '5월 8일 월 루루',
      '5월 9일 화 글로',
      '5월 10일 수 솔로스타',
      '5월 11일 목 우코',
      '5월 12일 금 슬링키',
      '5월 13일 토 솔로스타',
      '5월 14일 일 우코',
      '5월 15일 월 참새',
      '5월 16일 화 도리',
      '5월 17일 수 준팍',
      '5월 18일 목 도밥',
      '5월 19일 금 고니',
      '5월 20일 토 슬링키',
      '5월 21일 일 참새',
      '5월 22일 월 수아',
      '5월 23일 화 루루',
      '5월 24일 수 글로',
      '5월 25일 목 솔로스타',
      '5월 26일 금 우코',
      '5월 27일 토 도리',
      '5월 28일 일 준팍',
      '5월 29일 월 슬링키',
      '5월 30일 화 참새',
      '5월 31일 수 도리',
    ];

    emergencyWorkSchedulerModel.setEmergencyWorkDate('5,월');
    emergencyWorkSchedulerModel.setWeekdayEmergencyWorkOrder(
      '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리',
    );
    emergencyWorkSchedulerModel.setWeekendEmergencyWorkOrder(
      '수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니',
    );

    const result = emergencyWorkSchedulerModel.createEmergencyWorkSchedule();

    expect(result).toEqual(EMERGENCY_WORK_SCHEDULE);
  });
});
