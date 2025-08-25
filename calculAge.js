
        //Calculer l'age
        var num = prompt("Quel est votre année de naissance ?");
        var signal = prompt("Opération (+ ou -) ?");
        while(signal != "+" && signal != "-"){
            alert("Opération incorrecte !");
            signal = prompt("Opération (+ ou -) ?");
        }
        var numeroFinal = prompt("De combien d'années ?");
        numeroFinal = parseInt(numeroFinal);
        var result = 0;
