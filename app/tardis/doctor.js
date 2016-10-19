class Doctor {
    // Doctor Class Initializer
  constructor() {
    this.name = 'Unknown';
    this.vehicle = 'Tardis';
  }
  // Information about Doctor Who
  about(){
      console.log(`Doctor Who is the most awesome show ever made!!`);
  }
  // Information about the Vehicle that Doctor Who travels in
  travelsIn(){
      console.log(`Doctor travels in the ` + this.vehicle);
  }
  // Information about Doctor's Name!!
  hisName(){
      console.log(`Doctor's name is: ` + this.name);
  }

}

module.exports = new Doctor();