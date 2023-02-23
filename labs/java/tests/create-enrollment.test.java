
@Test
public void testEnrollmentBuilderCreatesAnEnrollmentWithRandomId() {
  User participant = new User("1", "Jane Doe", "", "", "");
  Activity activity = getActivityInput();
  activity.status = "cancelled";
  GenerateId idGenerator = new IdGeneratorService();
  AbstractEnrollmentBuilder enrollmentBuilder = new EnrollmentBuilder(idGenerator);
  Enrollment enrollment = enrollmentBuilder.build(participant, activity);
  assertTrue(enrollment.id.length() > 6);
}


  @Test
  public void testStrictEnrollmentBuilderCreatesAnEnrollmentWithRandomId() {
    User participant = new User("1", "Jane Doe", "", "", "");
    Activity activity = getActivityInput();
    activity.status = "cancelled";
    GenerateId idGenerator = new IdGeneratorService();
    AbstractEnrollmentBuilder enrollmentBuilder = new StrictEnrollmentBuilder(idGenerator);
    Enrollment enrollment = enrollmentBuilder.build(participant, activity);
    assertTrue(enrollment.id.length() > 6);
  }

