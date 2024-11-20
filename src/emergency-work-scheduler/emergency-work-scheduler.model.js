class EmergencyWorkSchedulerModel {
  #workDate;

  #weekdayWorkOrder;

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

  #parseWeekdayEmergencyWorkOrder(value) {
    const result = value.split(',');

    return result;
  }

  setWeekdayEmergencyWorkOrder(orders) {
    this.#validator.validateWeekdayEmergencyWorkOrder(orders);

    this.#weekdayWorkOrder = this.#parseWeekdayEmergencyWorkOrder(orders);

    return this.#weekdayWorkOrder;
  }
}

export default EmergencyWorkSchedulerModel;

/**
 * 31
 * 0 1 2 3 4 5
 */
