// ❌ Bad example not using a factory
public class Application {
  public static void main(String[] args) {
    // 😱 which implementation to use?
    Writer writer;
    // 😱 the logic is exposed and may have to be repeated in other places
    switch (System.getenv("LOGGER")) {
      case "console":
        writer = new ConsoleWriter();
        break;
      case "file":
        writer = new FileWriter();
        break;
      case "database":
        writer = new DatabaseWriter();
        break;
      default:
        throw new Error("Invalid logger");
    }
    final Logger logger = new Logger(writer);
    logger.log("Hello world!");
  }
}
THIS R