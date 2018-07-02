document.addEventListener("DOMContentLoaded", function() {
    //wykyrwyanie czy mobile
    if (typeof window.orientation !== 'undefined') {
        document.querySelector('h1').textContent = 'Tap to generate gradient';
    }

    function generateGradient(e) {

        if (e.which == '32' || typeof window.orientation !== 'undefined') {
            const body = document.querySelector('body');

            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            function getAngle() {
                let number = Math.floor((Math.random() * 360) + 1);
                return number;
            }
            body.style.setProperty('--firstGradientColor', getRandomColor());
            body.style.setProperty('--secondGradientColor', getRandomColor());
            body.style.setProperty('--angle', getAngle() + 'deg');
        }
    }
    document.addEventListener('keydown', generateGradient);
    document.addEventListener('touchend', generateGradient);

})
