document.addEventListener("DOMContentLoaded", function () {
    // Select elements to animate, EXCLUDING navbar elements
    const elements = document.querySelectorAll(
        ".rectangle-2, .vector, .image, .text-wrapper-2, .frame div, .overlap-3, .overlap-4, .overlap-5, .overlap-6"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => {
        el.classList.add("pop-up"); // Add initial hidden state
        observer.observe(el);
    });
});