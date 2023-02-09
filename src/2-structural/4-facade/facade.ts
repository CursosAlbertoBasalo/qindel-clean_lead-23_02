// * ✅ Facade solution
import { Enrolment, Notification, Payment } from "./subsystem";

// * Facade class
export class EnrolmentFacade {
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    const payment = new Payment();
    // * 😏 The complexity of the subsystem is hidden from the client code
    const enrolment = new Enrolment(payment);
    const amount = enrolment.getPrice(activityId, numPlaces);
    const enrolmentCode = enrolment.enrol(activityId, amount, numPlaces);
    new Notification().notify(customerId);
    return enrolmentCode;
  }
}

// * 😏 The client code only depends upon the facade class
export class EnrolmentSystem {
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    if (numPlaces > 10) {
      throw new Error("Too many places");
    }
    const enrolmentFacade = new EnrolmentFacade();
    // * 😏 The process is abstracted away from the client code
    const enrolmentCode = enrolmentFacade.enrol(activityId, customerId, numPlaces);
    console.log("EnrolmentSystem: enrolment completed");
    return enrolmentCode;
  }
}
