  const colors = ['#f4f3eb', '#1f1f1f','#ecf1f1','#f0f0f0', '#ffff',];
  const textColors = ['#000000', '#FAEBD7','#000000', '#000000','#000000', ];
        let currentIndex = 0;

        function cycleBackgroundColor() {
            document.body.style.backgroundColor = colors[currentIndex];
            document.body.style.color = textColors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        }

        function pulsate(circle) {
            gsap.to(circle, {
                scale: 1.05,
                duration: 0.5,
                repeat: -1, // Infinite pulsing
                yoyo: true,
                ease: 'power2.inOut',
            });
        }

        function rotateAndChangeColor() {
            var circle = document.querySelector('.rotating-circle');
            var body = document.body;

            var rotateDirection = Math.random() < 0.5 ? '+=360' : '-=360';

            cycleBackgroundColor();

            // Stop the pulsating animation
            gsap.killTweensOf(circle);

            // Animate rotation of the circle
            gsap.to(circle, {
                rotation: rotateDirection,
                duration: 1,
                ease: 'power2.inOut',
            });

            // Animate background color change of the body
            gsap.to(body, {
                backgroundColor: document.body.style.backgroundColor,
                duration: 1,
                ease: 'power2.inOut',
            });
        }

        // Start the pulsating animation initially
        pulsate(document.querySelector('.rotating-circle'));