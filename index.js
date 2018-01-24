class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  veto(){
    return "No, I must disagree";
  }

  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.name}, and I was trained in ${this.name}.`;
  }
}
