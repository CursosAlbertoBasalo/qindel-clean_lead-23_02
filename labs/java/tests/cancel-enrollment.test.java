@Test
public void testEnrollmentCancellerCancelsAnEnrollmentWithValidInputs() {
  enrollmentCanceller = new EnrollmentCanceller(enrollment);
  enrollmentCanceller.cancel();
  assertEquals("cancelled", enrollment.status);
}
@Test
public void testEnrollmentCancellerNotCancelsAnEnrollmentWithConfirmedActivity() {
  enrollmentCanceller = new EnrollmentCanceller(enrollment);
  activity.status = "confirmed";
  assertThrows(() -> enrollmentCanceller.cancel());
}