document.addEventListener("DOMContentLoaded",function(){

    document.addEventListener('keydown',function(e){
        if (e.which == '32') {
            const body = document.querySelector('body');
            function getRandomColor() {
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
            }
            function getAngle(){
                let number = Math.floor((Math.random() * 360) + 1);
                return number;
            }
            getAngle();
            body.style.setProperty('--firstGradientColor', getRandomColor());
            body.style.setProperty('--secondGradientColor', getRandomColor());
            body.style.setProperty('--angle', getAngle()+'deg');
        }

    })

})
