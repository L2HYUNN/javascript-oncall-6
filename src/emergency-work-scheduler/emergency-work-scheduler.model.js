class EmergencyWorkSchedulerModel {
  #workDate;

  #weekdayWorkOrder;

  #weekendWorkOrder;

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

  #parseEmergencyWorkOrder(value) {
    const result = value.split(',');

    return result;
  }

  setWeekdayEmergencyWorkOrder(orders) {
    this.#validator.validateWeekdayEmergencyWorkOrder(orders);

    this.#weekdayWorkOrder = this.#parseEmergencyWorkOrder(orders);

    return this.#weekdayWorkOrder;
  }

  setWeekendEmergencyWorkOrder(orders) {
    this.#validator.validateWeekendEmergencyWorkOrder(orders);

    this.#weekendWorkOrder = this.#parseEmergencyWorkOrder(orders);

    return this.#weekendWorkOrder;
  }
}

export default EmergencyWorkSchedulerModel;

/**
 * 31
 * 0 1 2 3 4 5
 */
