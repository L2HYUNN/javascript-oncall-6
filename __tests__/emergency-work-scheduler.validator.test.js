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
        description: `근무자 닉네임에 ${EmergencyWorkSchedulerValidator.RULE.MAX_NICKNAME_LENGTH}자를 넘는 닉네임이 있는 경우 에러를 발생시켜야만 한다`,
        input: '준팍,도밥,수아,수아루루글로,루루,글로',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
      {
        description: `근무자가 ${EmergencyWorkSchedulerValidator.RULE.MIN_WORKER_LENGTH}명이 되지 않는 경우 에러를 발생시켜야만 한다`,
        input: '준팍,도밥,루루,글로',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
      {
        description: `근무자가 ${EmergencyWorkSchedulerValidator.RULE.MAX_WORKER_LENGTH}명이 넘는 경우 에러를 발생시켜야만 한다`,
        input:
          '준팍,도밥,수아,루루,글로,근로,장려,장학,아이,나이,다이,자이,아파트,로제,스파게티,자장면,라면,누누,준수,시아,사악,도삭,도삭면,짜슐랭,연필,지우개,두유,우유,모니터,노트북,컴퓨터,빌라,자동차,현대,기아,향수',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
    ])('$description', ({ input, expectedError }) => {
      expect(() => emergencyWorkSchedulerValidator.validateWeekdayEmergencyWorkOrder(input)).toThrow(expectedError);
    });
  });

  describe('입력된 휴일 비상 근무 순서의 유효성을 검증한다', () => {
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
        description: `근무자 닉네임에 ${EmergencyWorkSchedulerValidator.RULE.MAX_NICKNAME_LENGTH}자를 넘는 닉네임이 있는 경우 에러를 발생시켜야만 한다`,
        input: '준팍,도밥,수아,수아루루글로,루루,글로',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
      {
        description: `근무자가 ${EmergencyWorkSchedulerValidator.RULE.MIN_WORKER_LENGTH}명이 되지 않는 경우 에러를 발생시켜야만 한다`,
        input: '준팍,도밥,루루,글로',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
      {
        description: `근무자가 ${EmergencyWorkSchedulerValidator.RULE.MAX_WORKER_LENGTH}명이 넘는 경우 에러를 발생시켜야만 한다`,
        input:
          '준팍,도밥,수아,루루,글로,근로,장려,장학,아이,나이,다이,자이,아파트,로제,스파게티,자장면,라면,누누,준수,시아,사악,도삭,도삭면,짜슐랭,연필,지우개,두유,우유,모니터,노트북,컴퓨터,빌라,자동차,현대,기아,향수',
        expectedError: EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT,
      },
    ])('$description', ({ input, expectedError }) => {
      expect(() => emergencyWorkSchedulerValidator.validateWeekendEmergencyWorkOrder(input)).toThrow(expectedError);
    });
  });
});
