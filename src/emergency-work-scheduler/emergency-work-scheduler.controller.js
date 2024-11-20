class EmergencyWorkSchedulerController {
  #emergencyWorkSchedulerModel;

  #emergencyWorkSchedulerView;

  constructor(model, view) {
    this.#emergencyWorkSchedulerModel = model;
    this.#emergencyWorkSchedulerView = view;
  }

  async generateScheduler() {
    const workDate = await this.#emergencyWorkSchedulerView.readEmergencyWorkDate();
    this.#emergencyWorkSchedulerModel.setEmergencyWorkDate(workDate);

    const weekdayWorkOrder = await this.#emergencyWorkSchedulerView.readWeekdayEmergencyWorkOrder();
    this.#emergencyWorkSchedulerModel.setWeekdayEmergencyWorkOrder(weekdayWorkOrder);

    const weekendWorkOrder = await this.#emergencyWorkSchedulerView.readWeekendEmergencyWorkOrder();
    this.#emergencyWorkSchedulerModel.setWeekendEmergencyWorkOrder(weekendWorkOrder);

    const workScheduler = this.#emergencyWorkSchedulerModel.createEmergencyWorkSchedule();

    this.#emergencyWorkSchedulerView.printEmergencyWorkSchedule(workScheduler.join('\n'));
  }
}

export default EmergencyWorkSchedulerController;
