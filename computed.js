class Computed {
  // private _value;
  // private computeFn;
  // private isStale;

  constructor(computeFn) {
    this.computeFn = computeFn;
    this.isStale = true;
    runAndExtractDependencies(this);
  }

  get value() {
    if (this.isStale) {
      this._value = this.computeFn();
      this.isStale = false;
    }
    return this._value;
  }
  
  execute() {
    this.computeFn();
  }
  
  update() {
    this.isStale = true;
  }
}

export default function(func) {
  return new Computed(func);
}