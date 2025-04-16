document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-3, .image-4, .group img, .NEWB");

    function handleScroll() {
        images.forEach((img) => {
            const imgPosition = img.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (imgPosition < screenHeight - 100) {
                img.classList.add("show");
            }
        });
    }

    // Apply fade-in on scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on page load

    // Apply zoom effect individually on mouse enter
    images.forEach((img) => {
        img.classList.add("fade-in", "zoom-hover");

        img.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.2)";
        });

        img.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-2, .image-3, .image-4, .group img, .NEWB");

    function handleScroll() {
        images.forEach((img) => {
            const imgPosition = img.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (imgPosition < screenHeight - 100) {
                img.classList.add("show");
            }
        });
    }

    // Apply fade-in on scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on page load

    // Apply zoom effect on mouse enter
    images.forEach((img) => {
        img.classList.add("fade-in", "zoom-hover");
    });
});