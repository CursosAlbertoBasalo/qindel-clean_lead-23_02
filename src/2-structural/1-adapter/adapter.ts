import { CommonEvent, CommonEventService } from "./common-event.library";
import { LogEntry } from "./logger.application";

// * ✅ Adapter solution

// * Interface for the adapter
export interface Logger {
  log(entry: LogEntry): string;
}
export class CommonEventAdapter implements Logger {
  // * 😏 The adapted class is wrapped in a private property
  private commonEventService: CommonEventService = new CommonEventService();

  public log(entry: LogEntry): string {
    // * 😏 knowledge of the proprietary format is encapsulated in the adapter
    const commonEvent = this.adaptLogEntryToCommonEvent(entry);
    const commonEventMessage = this.commonEventService.createMessage(commonEvent);
    // Todo: change the writer or make it configurable
    return this.commonEventService.writeMessage(commonEventMessage);
  }
  // * 😏 all the ugly stuff is hidden in the adapter
  private adaptLogEntryToCommonEvent(entry: LogEntry): CommonEvent {
    return {
      date: entry.timestamp,
      host: "localhost",
      device: "myApp",
      severity: entry.category === "info" ? 0 : 1,
      extension: [`msg=${entry.message}`],
    };
  }
}

export class Client {
  // * 😏 client classes are decoupled from the concrete implementation
  private readonly logger: Logger;
  constructor() {
    // * 😏 Could come from a factory
    this.logger = new CommonEventAdapter();
  }
  public doThings() {
    // * 😏 client classes are decoupled from the interface
    this.logger.log({
      category: "info",
      message: "Hello World",
      timestamp: new Date(),
    });
  }
}

const client = new Client();
client.doThings();
