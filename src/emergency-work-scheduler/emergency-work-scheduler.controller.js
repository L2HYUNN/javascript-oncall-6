import { safeInput } from '../lib/utils.js';

class EmergencyWorkSchedulerController {
  #emergencyWorkSchedulerModel;

  #emergencyWorkSchedulerView;

  constructor(model, view) {
    this.#emergencyWorkSchedulerModel = model;
    this.#emergencyWorkSchedulerView = view;
  }

  async generateScheduler() {
    await safeInput(this.#emergencyWorkSchedulerView.readEmergencyWorkDate, {
      onInput: this.#emergencyWorkSchedulerModel.setEmergencyWorkDate,
      onError: this.#emergencyWorkSchedulerView.printErrorMessage,
    });

    await safeInput(this.#emergencyWorkSchedulerView.readWeekdayEmergencyWorkOrder, {
      onInput: this.#emergencyWorkSchedulerModel.setWeekdayEmergencyWorkOrder,
      onError: this.#emergencyWorkSchedulerView.printErrorMessage,
    });

    await safeInput(this.#emergencyWorkSchedulerView.readWeekendEmergencyWorkOrder, {
      onInput: this.#emergencyWorkSchedulerModel.setWeekendEmergencyWorkOrder,
      onError: this.#emergencyWorkSchedulerView.printErrorMessage,
    });

    const workScheduler = this.#emergencyWorkSchedulerModel.createEmergencyWorkSchedule();

    this.#emergencyWorkSchedulerView.printEmergencyWorkSchedule(workScheduler.join('\n'));
  }
}

export default EmergencyWorkSchedulerController;
