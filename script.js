document.addEventListener("DOMContentLoaded", () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.boxShadow = '0 0 30px rgba(159, 107, 255, 0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.boxShadow = '0 0 20px rgba(159, 107, 255, 0.6)';
    });

    // Image Overlay
    const imageCircle = document.querySelector(".photo-circle img");
    const overlay = document.querySelector(".image-overlay");
    const overlayImage = document.querySelector(".image-overlay img");
    const closeBtn = document.querySelector(".image-overlay .close-btn");

    imageCircle.addEventListener("click", () => {
        overlay.style.display = "flex";
        overlayImage.src = imageCircle.src;
    });

    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", (e) => {
        if (e.target !== overlayImage && e.target !== closeBtn) {
            overlay.style.display = "none";
        }
    });

    // Education Carousel
    const blocks = document.querySelectorAll('.education-block');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    const updateCarousel = () => {
        blocks.forEach((block, index) => {
            block.classList.remove('active');
            if (index === currentIndex) {
                block.classList.add('active');
                block.style.opacity = "1";
                block.style.transform = "translateX(0)";
            } else {
                block.style.opacity = "0";
                block.style.transform = index < currentIndex
                    ? "translateX(-100%)"
                    : "translateX(100%)";
            }
        });
    };

    // Initialize the carousel
    updateCarousel();

    // Event listeners for navigation arrows
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + blocks.length) % blocks.length;
        updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % blocks.length;
        updateCarousel();
    });
});
