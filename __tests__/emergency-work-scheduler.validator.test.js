import EmergencyWorkSchedulerValidator from '../src/emergency-work-scheduler/emergency-work-scheduler.validator.js';

describe('EmergencyWorkSchedulerValidator', () => {
  let emergencyWorkSchedulerValidator;

  beforeEach(() => {
    emergencyWorkSchedulerValidator = new EmergencyWorkSchedulerValidator();
  });
  describe('입력된 월, 요일의 유효성을 검증한다', () => {
    it('유효한 월, 요일이 입력된 경우 에러를 던지지 않아야만 한다', () => {
      const input = '5,월';

      expect(() => emergencyWorkSchedulerValidator.validateEmergencyWorkDate(input)).not.toThrow('[ERROR]');
    });

    it.each([
      {
        description: '유효한 월이 입력되지 않은 경우 에러를 발생시켜야만 한다',
        input: '40,월',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
      {
        description: '유효한 요일이 입력되지 않은 경우 에러를 발생시켜야만 한다',
        input: '1,눈',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
    ])('$description', ({ input, expectedError }) => {
      expect(() => emergencyWorkSchedulerValidator.validateEmergencyWorkDate(input)).toThrow(expectedError);
    });
  });

  describe('입력된 평일 비상 근무 순서의 유효성을 검증한다', () => {
    it('유효한 평일 비상 근무 순서가 입력된 경우 에러를 던지지 않아야만 한다', () => {
      const input = '준팍,도밥,고니,수아,루루,글로';

      expect(() => emergencyWorkSchedulerValidator.validateWeekdayEmergencyWorkOrder(input)).not.toThrow('[ERROR]');
    });

    it.each([
      {
        description: '근무자 닉네임에 중복이 있는 경우 에러를 발생시켜야만 한다',
        input: '준팍,도밥,수아,수아,루루,글로',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
      {
        description: '근무자 닉네임에 5자를 넘는 닉네임이 있는 경우 에러를 발생시켜야만 한다',
        input: '준팍,도밥,수아,수아루루글로,루루,글로',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
    ])('$description', ({ input, expectedError }) => {
      expect(() => emergencyWorkSchedulerValidator.validateWeekdayEmergencyWorkOrder(input)).toThrow(expectedError);
    });
  });
});
