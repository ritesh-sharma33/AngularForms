export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) { }
}

let myHero = new Hero(
  42,
  'SkyDog',
  'Fetch any object at any distance',
  'Leslie Rollover'
);

console.log('My hero is called ' + myHero.name);