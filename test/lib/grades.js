var gradeBook = {
    _grades : [],

    addGrade: function(newGrade){
        this._grades.push(newGrade);
    },

    getCountOfGrades: function(){
        return this._grades.length;
    },

    getAverage: function(){
        var gradeTotal = 0;

        for(var i=0; i < this._grades.length; i++)
            gradeTotal += this._grades[i];

        return gradeTotal/this._grades.length;
    },

    getletterGrade: function() {
        var avgGrade = this.getAverage();

        if(avgGrade > 90)
            return 'A';
    },

    reset: function(){
        this._grades = [];
    }
};

exports.book = gradeBook;