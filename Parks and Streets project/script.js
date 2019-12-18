{
//superclass contains built year and name
class NameYoB {
    constructor(name, yearOfBirth)
    {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    
}
//parkclass
class Park extends NameYoB 
{
    constructor(name, yearOfBirth, numberOfTrees, parkArea, age, density)
    {
        super(name,yearOfBirth);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
        this.age = age;
        this.density = density;
    }
    
    treeDensity()
    {
      this.density = this.numberOfTrees / this.parkArea;
      console.log(`${this.name} has tree density of ${this.density} trees per squeare km.`);
    }
    
    moreThan1000()
    {
        if (this.numberOfTrees > 1000)
            {
            console.log(`${this.name} has more than 1000 trees.`);
            }
    }
    
    
}
//street class
class Street extends NameYoB
{
    constructor(name, yearOfBirth, lengthS, size)
    {
        super(name, yearOfBirth);
        this.lengthS = lengthS;
        this.size = size;
    }
    whatSize()
    {
        if(this.lengthS < 2 && this.lengthS > 0)
            {
                this.size = 'small';
            }
        else if(this.lengthS >= 2 && this.lengthS <= 3)
            {
                this.size = 'big';
            }
        else if(this.lengthS > 3)
            {
                this.size = 'huge';
            }
         else if(this.lengthS <= 0)
            {
                this.size = 'not built yet';
                 
            }
        else
            {
                 this.size = 'normal';
            }
        console.log(`${this.name}, built in ${this.yearOfBirth}, is a ${this.size} street.`);
    }
}

///PARKS
const greenPark = new Park('Green Park', 2005, 50000, 1001, 10);
const nationalPark = new Park('National Park', 1999, 800, 600, 20);
const oakPark = new Park('Oak Park', 2002, 700, 900, 15);
//////////AVGageofparks
const parks = [greenPark, nationalPark, oakPark];

const calcAVG = () => {
let ageOfParks = 0;
parks.forEach( el => ageOfParks += el.age)

console.log(`our ${parks.length} parks has average age of ${ageOfParks / parks.length} years.`);
    };
//Parks report starts here
console.log('_______PARK REPORT_________');
calcAVG();
parks.forEach(el => el.treeDensity());

// more than 1000
parks.forEach(el => el.moreThan1000());


//street report
console.log('_______STREET REPORT_________');
const oceanAvenue = new Street('Ocean Avenue', 2006, 2);
const evergreen = new Street('Evergreen Street', 2006, 1);
const sunset = new Street('Sunset Boulvard', 2006, 4);
const _4thStreet = new Street('4th Street', 2006);
    const sunset1 = new Street('Sunset1 Boulvard', 2009, 0);
    const sunset2 = new Street('Sunset2 Boulvard', 20000, -1);
///streets arrr
const streets = [oceanAvenue, evergreen, sunset, _4thStreet, sunset1, sunset2];
///display length
function displayLength()
{
    let lengthFull = 0;
    
    for(let i = 0;i < streets.length; i++)
    {
        if(streets[i].lengthS !== undefined)
            {
        lengthFull += streets[i].lengthS;
                }
        
    }
    console.log(`our ${streets.length} street has a total length of ${lengthFull} kilometers, with an average of ${lengthFull / streets.length} km.`);
};
//display length and size of street
displayLength();
streets.forEach(el => el.whatSize());

}
