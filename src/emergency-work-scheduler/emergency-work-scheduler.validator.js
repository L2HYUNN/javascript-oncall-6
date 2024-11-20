class EmergencyWorkSchedulerValidator {
  static ERROR_MESSAGE = {
    INVALID_INPUT: '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
  };

  static DAY = ['월', '화', '수', '목', '금', '토', '일'];

  #parseEmergencyWorkDate(value) {
    const [month, day] = value.split(',');

    return { month: month, day };
  }

  #validateEmergencyWorkMonth(value) {
    if (!(1 <= value && value <= 12)) {
      throw new Error(EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  #validateEmergencyWorkDay(value) {
    if (!EmergencyWorkSchedulerValidator.DAY.includes(value)) {
      throw new Error(EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  validateEmergencyWorkDate(value) {
    const { month, day } = this.#parseEmergencyWorkDate(value);

    this.#validateEmergencyWorkMonth(Number(month));
    this.#validateEmergencyWorkDay(day);
  }
}

export default EmergencyWorkSchedulerValidator;
