class EmergencyWorkSchedulerValidator {
  static ERROR_MESSAGE = {
    INVALID_INPUT: '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
  };

  #parseEmergencyWorkDate(value) {
    const [month, day] = value.split(',');

    return { month: Number(month), day };
  }

  #validateEmergencyWorkMonth(value) {
    if (!(1 <= value && value <= 12)) {
      throw new Error(EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  #validateEmergencyWorkDay(value) {
    return;
  }

  validateEmergencyWorkDate(value) {
    const { month, day } = this.#parseEmergencyWorkDate(value);

    this.#validateEmergencyWorkMonth(month);
  }
}

export default EmergencyWorkSchedulerValidator;
