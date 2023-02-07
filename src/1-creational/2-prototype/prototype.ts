// ✅ Prototype solution
export class Activity {
  // eslint-disable-next-line max-params
  constructor(public title: string, public allowsChildren: boolean, public price: number, public date: Date) {}
  // 😏 clone method to create a new instance with some changes
  // could have a more semantic name like `createEdition`
  cloneEdition(date: Date): Activity {
    return new Activity(this.title, this.allowsChildren, this.price, date);
  }
}

const activity = new Activity("Skiing", true, 100, new Date(2025, 2, 7));
// 😏 no need to create a new instance, clone the existing one, and ensure the defaults are correct
const activity2 = activity.cloneEdition(new Date(2026, 1, 8));
