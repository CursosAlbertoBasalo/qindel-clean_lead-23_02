// * ✅ Decorator solution

// * original class not modified
export class Enrolment {
  organizer: string;
  enrol(activityId: string, customerId: string, numPlaces: number): string {
    const enrollment = `Enrolled ${customerId} in ${activityId} with ${numPlaces} places`;
    console.log(enrollment);
    console.log(this.organizer);
    return enrollment;
  }
}

// * generate an interface for the current functionality
export interface Enrol {
  enrol(activityId: string, customerId: string, numPlaces: number): string;
}

// * generate an interface for the new functionality
export interface Cancel {
  cancel(activityId: string, customerId: string): string;
}

// * Create a decorator class that implements the interface by wrapping the original class
export class EnrolmentDecorator implements Enrol, Cancel {
  // * The decorator wraps a reference to the original class
  private enrolment: Enrolment = new Enrolment();

  // * The decorator class delegates the original functionality to the original class
  enrol(activityId: string, customerId: string, numPlaces: number): string {
    return this.enrolment.enrol(activityId, customerId, numPlaces);
  }
  // * 😏 The decorator class adds new functionality
  cancel(activityId: string, customerId: string): string {
    const cancellation = `Cancelled ${customerId} in ${activityId}`;
    console.log(cancellation);
    console.log(this.enrolment.organizer);
    return cancellation;
  }
}
