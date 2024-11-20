class EmergencyWorkSchedulerModel {
  #workDate;

  #validator;

  constructor(validator) {
    this.#validator = validator;
  }

  #parseEmergencyWorkDate(date) {
    const [month, day] = date.split(',');

    return { month: month, day };
  }

  setEmergencyWorkDate(date) {
    this.#validator.validateEmergencyWorkDate(date);

    const { month, day } = this.#parseEmergencyWorkDate(date);
    this.#workDate = { month: Number(month), day };

    return this.#workDate;
  }
}

export default EmergencyWorkSchedulerModel;

/**
 * 31
 * 0 1 2 3 4 5
 */
