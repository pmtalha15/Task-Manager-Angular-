export class SignUpViewModel {
    personName:any;
    email:string | any;
    mobile:string | any;
    dateOfBirth:string | any;
    password:string | any;
    gender:string | any;
    countryID:string | any;
    receiveNewsLetters:string | any;
    skills:string | any;

    constructor(personName:any = null,
        email:string | any = null,
        mobile:string | any = null,
        dateOfBirth:string | any = null,
        password:string | any = null,
        gender:string | any = null,
        countryID:number | any = null,
        receiveNewsLetters:boolean | any = false,
        skills:string | any = null){

    this.personName = personName;
    this.email = email;
    this.mobile = mobile;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.gender = gender;
    this.countryID = countryID;
    this.receiveNewsLetters = receiveNewsLetters;
    this.skills = skills;

    }

}
