document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is fully loaded");
});



/*scrollbar thingstodo */
<script>
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scrollable-container");
    
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isDown = false;
    });

    scrollContainer.addEventListener("mouseup", () => {
        isDown = false;
    });

    scrollContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    // Enable horizontal scrolling with touch
    scrollContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 2;
    });
});
</script>
