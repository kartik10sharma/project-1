document.addEventListener("DOMContentLoaded", function() {
            var images = document.querySelectorAll('.slider img');
            var currentImage = 0;

            function showImage(index) {
                images.forEach(function(image) {
                    image.style.opacity = 0;
                });
                images[index].style.opacity = 1;
            }

            function nextImage() {
                currentImage = (currentImage + 1) % images.length;
                showImage(currentImage);
            }

            setInterval(nextImage, 5000); // Change image every 5 seconds (adjust as needed)
        });
