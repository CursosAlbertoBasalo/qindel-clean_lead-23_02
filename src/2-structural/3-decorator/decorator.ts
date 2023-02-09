// * ✅ Decorator solution
export class Enrolment {
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    const enrollment = `Enrolled ${customerId} in ${activityId} with ${numPlaces} places`;
    console.log(enrollment);
    return enrollment;
  }
}

// * generate an interface for the current functionality
export interface Enrolment {
  enrol(activityId: string, customerId: string, numPlaces: number): string;
}

// * Create a decorator class that implements the interface by wrapping the original class
export class EnrolmentDecorator implements Enrolment {
  private enrolment: Enrolment = new Enrolment();
  // * The decorator class delegates the original functionality to the original class
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    return this.enrolment.enrol(activityId, customerId, numPlaces);
  }
  // * 😏The decorator class adds new functionality
  public cancel(activityId: string, customerId: string): string {
    const cancellation = `Cancelled ${customerId} in ${activityId}`;
    console.log(cancellation);
    return cancellation;
  }
}
