document.addEventListener("DOMContentLoaded", function () {

    const footerText = document.querySelector(".footer-copy");
    if (footerText) {
        footerText.textContent = `Copyright © ${new Date().getFullYear()} Md Sarwar Khan`;
    }

    document.querySelectorAll("#nav-links a").forEach((link) => {
        link.addEventListener("click", function () {
            console.log("Navigating to:", link.dataset.route);
        });
    });

    // Floating "back to top" button.
    const topButton = document.createElement("button");
    topButton.textContent = "↑";
    topButton.classList.add("top-button");
    topButton.setAttribute("aria-label", "Scroll to top");
    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {
        topButton.style.display = window.scrollY > 500 ? "block" : "none";
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
