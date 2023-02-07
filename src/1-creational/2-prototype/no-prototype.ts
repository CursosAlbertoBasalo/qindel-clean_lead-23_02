/* eslint-disable no-magic-numbers */

// ❌ Bad example of not using a prototype
export class Activity {
  // eslint-disable-next-line max-params
  constructor(public title: string, public allowsChildren: boolean, public price: number, public date: Date) {}
}

const activity = new Activity("Skiing", true, 100, new Date(2025, 2, 7));
// 😱 creating a new instance but the similar instance is a painful and error-prone task
const activity2 = new Activity("Skiing", true, 100, new Date(2026, 1, 8));
