
        //var date = new Date();
        var date = new Date('2025/08/25');
        var date2 = new Date('2025/08/30');


        console.log(date.getTime());

        var diff = (date2.getTime() - date.getTime()) / (1000 * 3600 * 24);
        console.log(diff)