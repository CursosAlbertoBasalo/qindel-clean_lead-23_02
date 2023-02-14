// * ✅ Observer solution

// *  😏 the observer contract is a function used as a listener or callback
type Observer = (data: object) => void;

// *  😏 the observable contract is a set of methods to subscribe, unsubscribe and publish events
interface Observable {
  subscribe(eventName: string, observer: Observer): void;
  unsubscribe(eventName: string, observer: Observer): void;
  publish(eventName: string, eventArgs: object): void;
}

// *  😏 the event bus implements the observable contract
export class EventBus implements Observable {
  private subscriptions: Map<string, Observer[]> = new Map();

  // ToDo: should be a singleton
  // ToDo: should be typed

  subscribe(eventName: string, listener: Observer): void {
    let handlers = this.subscriptions.get(eventName);
    if (!handlers) {
      handlers = [];
      this.subscriptions.set(eventName, handlers);
    }
    handlers.push(listener);
  }

  unsubscribe(eventName: string, listener: Observer): void {
    const handlers = this.subscriptions.get(eventName);
    if (handlers) {
      const index = handlers.indexOf(listener);
      handlers.splice(index, 1);
    }
  }

  publish(eventName: string, eventArgs: object): void {
    const handlers = this.subscriptions.get(eventName);
    if (handlers) {
      handlers.forEach(handler => handler(eventArgs));
    }
  }
}
