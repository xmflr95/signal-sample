class Effect {
  // private effectFn;

  constructor(effectFn) {
    this.effectFn = effectFn;
    runAndExtractDependencies(this);
  }

  execute() {
    this.effectFn();
  }

  update() {
    this.execute();
  }
}
export default function(func) {
  return new Effect(func);
}