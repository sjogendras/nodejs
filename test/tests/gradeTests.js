var book = require('../lib/grades').book;

// It will call each time when a test get completed
// generally used to clear the data
exports["setUp"] = function(callback){
    book.reset();    
    callback();
};

exports["Can add new grade"] = function(test){
    book.addGrade(90);
    var count = book.getCountOfGrades();

    test.equal(count, book._grades.length);
    test.done();
};

exports["Can average grades"] = function(test){
    book.addGrade(100);
    book.addGrade(50);

    var avg = book.getAverage();

    test.equal(avg, 75);
    test.done();
};

exports["Can compute letter grade of A"] = function(test){
    book.addGrade(100);
    book.addGrade(90);

    var grade = book.getletterGrade();

    test.equal(grade, 'A');
    test.done();
};