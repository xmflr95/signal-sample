let RUNNING = null;

function runAndExtractDependencies(task) {
  RUNNING = task;
  task.execute()
  RUNNING = null;
}

class Signal {
  // private _value;
  // private dependencies;

  constructor(initValue) {
    this.dependencies = new Set();
    this._value = initValue;
  }

  get value() {
    if (RUNNING) this.dependencies.add(RUNNING);
    return this._value;
  }

  set value(newValue) {
    if (this._value === newValue) return;
    this._value = newValue;
    this.notify();    
  }

  notify() {
    for (const dependency of this.dependencies) {
      dependency.update();
    }
  }
}

export function signal(value) {
  return new Signal(value);
}

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

export function computed(func) {
  return new Computed(func);
}

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
export function effect(func) {
  return new Effect(func);
}

