//Person
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.grade = Math.floor(Math.random()* 100);
  }
  speak() {
    return `Hello my name is ${this.name}, and I am from ${this.location}`;
  }
}


//Instructor

class Instructor extends Person {
   constructor(instructorAttributes){
       super(instructorAttributes);
       this.specialty = instructorAttributes.specialty;
       this.favLanguage = instructorAttributes.favLanguage;
       this.catchPhrase = instructorAttributes.catchPhrase;
   }
   demo(subject){
       return `Today we are learning about ${subject}`
   }
   grade(student, subject){
        return `${this.name} receives a perfect score on ${subject}`
   }
 }


//Students

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects() {
    for(let i=0; i < favSubjects.length; i++ ){
      return (this.favSubjects[i]);
    }
  }
  PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on ${subject}`
  }
}



//PM

class ProjectManager extends Instructor {
   constructor(pmAttributes){
       super(pmAttributes);
       this.gradClassName = pmAttributes.gradClassName;
       this.favInstructor = pmAttributes.favInstructor;
   }
   standUp(name, channel){
       return `${this.name} announces to ${channel}, @channel standy times!`
   }
   debugsCode(student, subject){
       return `${this.name} debugs ${student}'s code on ${subject}`
   }
}












const dan = new Instructor({
  name: 'Dan',
  age: 'Infinity',
  location: 'Denver',
  specialty: 'Relentless Debugger',
  favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
  catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

const isaiah = new Student({
  name: 'Isaiah',
  age: 18,
  location: 'Florida',
  previousBackground: 'High School last month',
  className: 'Web21',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});
const kevin = new Student({
  name: "Kevin",
  age: 28,
  location: "California",
  previousBackground: "Table Games Dealer",
  className: "WEB21",
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const nisa = new Student({
  name: 'Nisa',
  age: 25,
  location: 'Ohio',
  previousBackground: 'Debt Collector',
  className: 'Web21',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const joscelyn = new Student({
  name: "Joscelyn",
  age: 29,
  location: "California",
  previousBackground: "English teacher",
  className: 'Web21',
  favSubjects: ["Computer Science", "Philosophy", "English"],
});

const marguel = new ProjectManager({
  name: 'Marguel',
  age: 'Maybe 26',
  gradClassName: 'WEBPT2',
  favInstructor: 'Me?',
  location: 'California',
  specialty: 'React',
  favLanguage: 'JavaScript, Python, Elm etc.',
  catchPhrase: "Practice Flex Zombies !!!",
});

const brandon = new ProjectManager({
  name: 'Brandon',
  age: '34',
  gradClassName: 'WEB18',
  favInstructor: 'Professor Lambda',
  location: 'Maine',
  specialty: 'Redux',
  favLanguage: 'JavaScript, C++, Python.',
  catchPhrase: "You shall not pass!",
});

const mary = new ProjectManager({
  name: 'Mary',
  age: '24',
  gradClassName: 'WEB18',
  favInstructor: 'Josh Knell',
  location: 'New York',
  specialty: 'Express and Node.js',
  favLanguage: 'Javascript',
  catchPhrase: "That looks AWESOME",
});

const christian = new ProjectManager({
  name: 'Christian',
  age: '32',
  gradClassName: 'WEB18',
  favInstructor: 'Every Instructor in Lambda',
  location: 'Seattle, WA',
  specialty: 'Data Structures & Algorithms',
  favLanguage: 'JavaScript',
  catchPhrase: "Dont forget your daily commit.",
});

const pat = new ProjectManager({
  name: 'Pat',
  age: '38',
  gradClassName: 'WEB18',
  favInstructor: 'Brett Madrid',
  location: 'Petaluma, Ca',
  specialty: 'Empathetic to the struggle of Redux',
  favLanguage: 'JavaScript',
  catchPhrase: 'Lets google that together.'
});

const darren = new ProjectManager({
  name: 'Darren',
  age: '25',
  gradClassName: 'WEB18',
  favInstructor: 'Josh Knell',
  location: 'North Carolina',
  specialty: 'React',
  favLanguage: 'Javascript',
  catchPhrase: 'Gang. Gang.',
});
const austin = new ProjectManager({
  name: 'Austin',
  age: '23',
  gradClassName: 'WEB18',
  favInstructor: 'Josh Knell',
  location: 'Somewhere',
  specialty: 'Java',
  favLanguage: 'Java',
  catchPhrase: ":eggplant:",
});

// CODE here for your Lambda Classes


 console.log("Grade:", dan.grade(isaiah.name, 'Javascript')) ;
 console.log("Debugs Code:", darren.debugsCode(austin.name, 'Java')) ;
 console.log("Greeting:", pat.speak());
 console.log("Instructor Dan:", dan);
