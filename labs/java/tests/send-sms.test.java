@Test
public void shouldSendSMSNotificationsToParticipantsWhenActivityIsConfirmed() {
  SendGridAdapter emailSender = new SendGridAdapter();
  NotificationsFacade notifier = new NotificationsFacade(emailSender);
  User sender = activity.organizer;
  String subject = "Activity " + activity.name + " is confirmed";
  Mockito.Spy spy = Mockito.spyOn(emailSender, "sendEmail");
  activityEnrollments.forEach(enrollment -> {
    User receiver = enrollment.participant;
    notifier.send(sender, receiver, subject);
  });
  Mockito.verify(spy, Mockito.times(activityEnrollments.length));
}
