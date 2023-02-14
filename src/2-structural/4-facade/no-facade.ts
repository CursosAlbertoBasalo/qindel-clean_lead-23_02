// ! ❌ Bad example not using a facade

import { Enrolment, Notification, Payment } from "./subsystem";

export class EnrolmentSystem {
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    if (numPlaces > 10) {
      throw new Error("Too many places");
    }
    // ToDo : 🤢 too much coupling and knowledge of the subsystems
    const payment = new Payment();
    const enrolment = new Enrolment(payment);
    const amount = enrolment.getPrice(activityId, numPlaces);
    const enrolmentCode = enrolment.enrol(activityId, amount, numPlaces);
    new Notification().notify(customerId);
    console.log("EnrolmentSystem: enrolment completed");
    return enrolmentCode;
  }
}
