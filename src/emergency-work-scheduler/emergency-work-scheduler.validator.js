class EmergencyWorkSchedulerValidator {
  static ERROR_MESSAGE = {
    INVALID_INPUT: '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
  };

  static RULE = {
    MAX_NICKNAME_LENGTH: 5,
    MIN_WORKER_LENGTH: 5,
    MAX_WORKER_LENGTH: 35,
  };

  static DAY = ['월', '화', '수', '목', '금', '토', '일'];

  #parseEmergencyWorkDate(date) {
    const [month, day] = date.split(',');

    return { month: month, day };
  }

  #validateEmergencyWorkMonth(month) {
    if (!(1 <= month && month <= 12)) {
      throw new Error(EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  #validateEmergencyWorkDay(day) {
    if (!EmergencyWorkSchedulerValidator.DAY.includes(day)) {
      throw new Error(EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  validateEmergencyWorkDate(date) {
    const { month, day } = this.#parseEmergencyWorkDate(date);

    this.#validateEmergencyWorkMonth(Number(month));
    this.#validateEmergencyWorkDay(day);
  }

  #parseWeekdayEmergencyWorkOrder(value) {
    const result = value.split(',');

    return result;
  }

  #validateHasDuplicatedNickname(nicknames) {
    if (new Set(nicknames).size !== nicknames.length) {
      throw new Error(EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  #validateHasInvalidLengthOfNickname(nicknames) {
    if (nicknames.some((nickname) => nickname.length > EmergencyWorkSchedulerValidator.RULE.MAX_NICKNAME_LENGTH)) {
      throw new Error(EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  #validateIsLessThanMinWorkerLength(workers) {
    if (workers.length < EmergencyWorkSchedulerValidator.RULE.MIN_WORKER_LENGTH) {
      throw new Error(EmergencyWorkSchedulerValidator.ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  validateWeekdayEmergencyWorkOrder(value) {
    const orders = this.#parseWeekdayEmergencyWorkOrder(value);

    this.#validateHasDuplicatedNickname(orders);
    this.#validateHasInvalidLengthOfNickname(orders);
    this.#validateIsLessThanMinWorkerLength(orders);
  }
}

export default EmergencyWorkSchedulerValidator;
