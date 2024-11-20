import EmergencyWorkSchedulerView from './emergency-work-scheduler/emergency-work-scheduler.view.js';

class App {
  async run() {
    await new EmergencyWorkSchedulerView().readEmergencyWorkDate();
    await new EmergencyWorkSchedulerView().readWeekDayEmergencyWorkOrder();
  }
}

export default App;
