public class Activity{
  private String id;
  private User organizer;
  private String name;
  private String description;
  private int capacity;
  private int quorum;
  private String ageRestriction;
  private Date date;
  private String location;
  private int price;
  private String status;

  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public User getOrganizer() {
    return organizer;
  }
  public void setOrganizer(User organizer) {
    this.organizer = organizer;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }
  public int getCapacity() {
    return capacity;
  }
  public void setCapacity(int capacity) {
    this.capacity = capacity;
  }
  public int getQuorum() {
    return quorum;
  }
  public void setQuorum(int quorum) {
    this.quorum = quorum;
  }
  public String getAgeRestriction() {
    return ageRestriction;
  }
  public void setAgeRestriction(String ageRestriction) {
    this.ageRestriction = ageRestriction;
  }
  public Date getDate() {
    return date;
  }
  public void setDate(Date date) {
    this.date = date;
  }
  public String getLocation() {
    return location;
  }
  public void setLocation(String location) {
    this.location = location;
  }
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }
  public String getStatus() {
    return status;
  }
  public void setStatus(String status) {
    this.status = status;
  }
}
