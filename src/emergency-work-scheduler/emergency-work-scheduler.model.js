class EmergencyWorkSchedulerModel {
  #workDate;

  #weekdayWorkOrder;

  #weekendWorkOrder;

  #validator;

  static MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  static WEEKDAY = ['월', '화', '수', '목', '금'];

  static WEEKEND = ['토', '일'];

  static DAY = [...EmergencyWorkSchedulerModel.WEEKDAY, ...EmergencyWorkSchedulerModel.WEEKEND];

  static HOLIDAY = {
    1: { 1: true },
    2: {},
    3: { 1: true },
    4: {},
    5: { 5: true },
    6: { 6: true },
    7: {},
    8: { 15: true },
    9: {},
    10: { 3: true, 9: true },
    11: {},
    12: { 25: true },
  };

  static FORMAT = {
    DEFAULT: ({ month, day, today, worker }) => `${month}월 ${day}일 ${today} ${worker}`,
    HOLIDAY: ({ month, day, today, worker }) => `${month}월 ${day}일 ${today}(휴일) ${worker}`,
  };

  constructor(validator) {
    this.#validator = validator;
  }

  #parseEmergencyWorkDate(date) {
    const [month, day] = date.split(',');

    return { month: month, day };
  }

  setEmergencyWorkDate = (date) => {
    this.#validator.validateEmergencyWorkDate(date);

    const { month, day } = this.#parseEmergencyWorkDate(date);
    this.#workDate = { month: Number(month), day };

    return this.#workDate;
  };

  #parseEmergencyWorkOrder(value) {
    const result = value.split(',');

    return result;
  }

  setWeekdayEmergencyWorkOrder = (orders) => {
    this.#validator.validateWeekdayEmergencyWorkOrder(orders);

    this.#weekdayWorkOrder = this.#parseEmergencyWorkOrder(orders);

    return this.#weekdayWorkOrder;
  };

  setWeekendEmergencyWorkOrder = (orders) => {
    this.#validator.validateWeekendEmergencyWorkOrder(orders);

    this.#weekendWorkOrder = this.#parseEmergencyWorkOrder(orders);

    return this.#weekendWorkOrder;
  };

  #isHoliday(month, day) {
    return Boolean(EmergencyWorkSchedulerModel.HOLIDAY[month][day]);
  }

  #exchangeWorkOrder(workerA, workerB) {
    if (workerA[0] === workerB[0]) {
      const memory = workerB[0];
      workerB[0] = workerB[1];
      workerB[1] = memory;
    }
  }

  #processWork(prevWorker, workOrder) {
    this.#exchangeWorkOrder(prevWorker, workOrder);

    const worker = workOrder.shift();
    workOrder.push(worker);

    prevWorker.pop();
    prevWorker.push(worker);

    return worker;
  }

  createEmergencyWorkSchedule() {
    const { month, day } = this.#workDate;
    const dayIndex = EmergencyWorkSchedulerModel.DAY.indexOf(day);
    const prevWorker = [];

    return Array.from({ length: EmergencyWorkSchedulerModel.MONTH[month - 1] }, (_, index) => {
      const todayIndex = (dayIndex + index) % 7;
      const today = EmergencyWorkSchedulerModel.DAY[todayIndex];

      if (EmergencyWorkSchedulerModel.WEEKDAY.includes(today)) {
        if (this.#isHoliday(month, index + 1)) {
          const worker = this.#processWork(prevWorker, this.#weekendWorkOrder);

          return EmergencyWorkSchedulerModel.FORMAT.HOLIDAY({ month, day: index + 1, today, worker });
        }

        const worker = this.#processWork(prevWorker, this.#weekdayWorkOrder);

        return EmergencyWorkSchedulerModel.FORMAT.DEFAULT({ month, day: index + 1, today, worker });
      }

      if (EmergencyWorkSchedulerModel.WEEKEND.includes(today)) {
        const worker = this.#processWork(prevWorker, this.#weekendWorkOrder);

        return EmergencyWorkSchedulerModel.FORMAT.DEFAULT({ month, day: index + 1, today, worker });
      }

      return today;
    });
  }
}

export default EmergencyWorkSchedulerModel;
