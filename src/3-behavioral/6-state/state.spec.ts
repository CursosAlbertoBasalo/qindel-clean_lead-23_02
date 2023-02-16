import { ActivityEnrollment, BookingState, CancellingState, PayingState } from "./state";

describe("State", () => {
  it("should change the state of the activity", () => {
    const activity = new ActivityEnrollment();
    activity.changeState(new PayingState(100));
    expect(activity.execute()).toBe("payment done : 100");
    activity.changeState(new BookingState(5));
    expect(activity.execute()).toBe("booking done : 5");
    activity.changeState(new CancellingState("123"));
    expect(activity.execute()).toBe("cancelling done : 123");
  });
});
