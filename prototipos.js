// function Course (){
    
// }

// Course.prototype.inscribir = function(){
//     console.log('hola');
// }

// let curso = new Course();

// curso.inscribir();

// objeto.__proto__.propiedad = operacion

function Course (title){
    this.title=title;
}

Course.prototype.inscribir = function(){
    console.log('hola');
}

function liveCourse(date){
    this.published_at = date;
}

liveCourse.prototype = Object.create(Course.prototype);

let curso = new liveCourse(new Date());

curso.inscribir();
console.log(curso.published_at);
