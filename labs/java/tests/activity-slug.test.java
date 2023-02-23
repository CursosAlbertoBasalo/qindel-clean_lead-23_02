
@Test
public void testActivitySlugCreatesASlugFromName() {
    final Activity activity = getActivityInput();
    activity.setName("Yoga class");
    assertEquals(activity.getSlug(), "yoga-class");
  }