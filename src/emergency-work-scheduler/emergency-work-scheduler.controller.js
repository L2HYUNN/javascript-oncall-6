import { safeInput } from '../lib/utils.js';

class EmergencyWorkSchedulerController {
  #emergencyWorkSchedulerModel;

  #emergencyWorkSchedulerView;

  constructor(model, view) {
    this.#emergencyWorkSchedulerModel = model;
    this.#emergencyWorkSchedulerView = view;
  }

  async #registerEmergencyWorkDate() {
    await safeInput(this.#emergencyWorkSchedulerView.readEmergencyWorkDate, {
      onInput: this.#emergencyWorkSchedulerModel.setEmergencyWorkDate,
      onError: this.#emergencyWorkSchedulerView.printErrorMessage,
    });
  }

  async #registerWeekdayEmergencyWorkOrder() {
    await safeInput(this.#emergencyWorkSchedulerView.readWeekdayEmergencyWorkOrder, {
      onInput: this.#emergencyWorkSchedulerModel.setWeekdayEmergencyWorkOrder,
      onError: this.#emergencyWorkSchedulerView.printErrorMessage,
    });
  }

  async #registerWeekendEmergencyWorkOrder() {
    await safeInput(this.#emergencyWorkSchedulerView.readWeekendEmergencyWorkOrder, {
      onInput: this.#emergencyWorkSchedulerModel.setWeekendEmergencyWorkOrder,
      onError: this.#emergencyWorkSchedulerView.printErrorMessage,
    });
  }

  #generateEmergencyWorkSchedule() {
    this.#emergencyWorkSchedulerView.printEmergencyWorkSchedule(
      this.#emergencyWorkSchedulerModel.createEmergencyWorkSchedule().join('\n'),
    );
  }

  async generateScheduler() {
    await this.#registerEmergencyWorkDate();
    await this.#registerWeekdayEmergencyWorkOrder();
    await this.#registerWeekendEmergencyWorkOrder();

    this.#generateEmergencyWorkSchedule();
  }
}

export default EmergencyWorkSchedulerController;
