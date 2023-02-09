// * ✅ Singleton solution

// * implementor interface
export interface Payment {
  pay(amount: number): string;
}
export class PayPal implements Payment {
  public pay(amount: number): string {
    console.log(`Paid ${amount} with PaymentPal`);
    return `PayPalPaymentCode`;
  }
}

// * Abstraction interface
export interface Enrolment {
  enrol(activityPrice: number, numPlaces: number): string;
}
// * Abstraction using implementor interface
export abstract class EnrolmentBase implements Enrolment {
  constructor(protected payment: Payment) {}
  public abstract enrol(activityPrice: number, numPlaces: number): string;
}
// * Refined abstraction
export class EnrolmentApp extends EnrolmentBase {
  public enrol(activityPrice: number, numPlaces: number): string {
    const amount = activityPrice * numPlaces;
    const paymentPal = new PayPal();
    const paymentCode = paymentPal.pay(amount);
    return paymentCode;
  }
}

export class Application {
  public static main(): void {
    // * 😏 easy to add new payment methods or new enrolment services
    const payment = new PayPal();
    const enrolment: Enrolment = new EnrolmentApp(payment);
    const paymentCode = enrolment.enrol(100, 2);
    console.log(paymentCode);
  }
}
