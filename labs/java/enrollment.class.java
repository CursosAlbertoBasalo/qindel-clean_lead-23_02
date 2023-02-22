public class Enrollment{
  private String id;
  private User participant;
  private Activity activity;
  private Date date;
  private String status;
  private int places;

  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public User getParticipant() {
    return participant;
  }
  public void setParticipant(User participant) {
    this.participant = participant;
  }
  public Activity getActivity() {
    return activity;
  }
  public void setActivity(Activity activity) {
    this.activity = activity;
  }
  public Date getDate() {
    return date;
  }
  public void setDate(Date date) {
    this.date = date;
  }
  public String getStatus() {
    return status;
  }
  public void setStatus(String status) {
    this.status = status;
  }
  public int getPlaces() {
    return places;
  }
  public void setPlaces(int places) {
    this.places = places;
  }
}