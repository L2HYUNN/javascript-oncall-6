import EmergencyWorkSchedulerController from './emergency-work-scheduler/emergency-work-scheduler.controller.js';
import EmergencyWorkSchedulerModel from './emergency-work-scheduler/emergency-work-scheduler.model.js';
import EmergencyWorkSchedulerValidator from './emergency-work-scheduler/emergency-work-scheduler.validator.js';
import EmergencyWorkSchedulerView from './emergency-work-scheduler/emergency-work-scheduler.view.js';

class App {
  async run() {
    await new EmergencyWorkSchedulerController(
      new EmergencyWorkSchedulerModel(new EmergencyWorkSchedulerValidator()),
      new EmergencyWorkSchedulerView(),
    ).generateScheduler();
  }
}

export default App;
