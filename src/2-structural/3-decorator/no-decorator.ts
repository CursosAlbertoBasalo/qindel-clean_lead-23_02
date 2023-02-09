// ! ❌ Bad example not using decorator

export class Enrolment {
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    const enrollment = `Enrolled ${customerId} in ${activityId} with ${numPlaces} places`;
    console.log(enrollment);
    return enrollment;
  }
  // ToDo: 😱 add cancellation new functionality
}
