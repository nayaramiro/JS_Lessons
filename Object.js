
        var Persons = [
        {
            'name': 'John',
            'age': 30,
            'isAdmin': true
        },
        {
            'name': 'Doe',
            'age': 25,
            'isAdmin': false
        },
        {
            'name': 'Admin',
            'age': 40,
            'isAdmin': true
        }
        ];
        Persons.forEach(function(person, index){
            console.log(person.name)
        });