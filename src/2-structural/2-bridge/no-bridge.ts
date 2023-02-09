// ! ❌ Bad example not using bridge
export class PayPal {
  public pay(amount: number): string {
    console.log(`Paid ${amount} with PaymentPal`);
    return `PayPalPaymentCode`;
  }
}

export class EnrolmentApp {
  // ! 🤢 The abstraction is coupled to the implementation
  public enrol(activityPrice: number, numPlaces: number): string {
    const amount = activityPrice * numPlaces;
    const paymentPal = new PayPal();
    const paymentCode = paymentPal.pay(amount);
    return paymentCode;
  }
}

export class Application {
  public static main(): void {
    // ! 😱 We also want to work with Stripe (no easy way to do it)
    // ! 😱 We also want to accept enrollments via API (no easy way to do it)
    const enrolmentApp = new EnrolmentApp();
    const paymentCode = enrolmentApp.enrol(100, 2);
    console.log(paymentCode);
  }
}
