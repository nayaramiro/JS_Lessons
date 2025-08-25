
      function Test(name) {
        //instructions
        console.log(name);
      }

      Test("Ruy"); //appel de la fonction

      //fonction avec retour de valeur
      function createName(par) {
        if (par == 1) {
          return "Ruy";
        } else {
          return "Ben";
        }
      }

      var name = createName(3);
      console.log(name);

      // more functions 

      var func = function(){
        console.log("Hello");
      }

      func();

      (function(){
        console.log("Hello from IIFE")
      })();
