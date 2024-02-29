class car{
    make:string;
    model:string;
    year:number;
    displayInfo(){
        console.log(this.make,this.model,this.year)
    }
}
let c1=new car();
c1.make='volkswagon';
c1.model='virtus';
c1.year=2024;
c1.displayInfo();