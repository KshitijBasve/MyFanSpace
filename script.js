document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const chevron = item.querySelector(".chevron-icon");

        question.addEventListener("click", function () {
            // Toggle active class
            question.classList.toggle("active");

            // Show/hide the answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
                chevron.style.transform = "rotate(0deg)";
            } else {
                answer.style.display = "block";
                chevron.style.transform = "rotate(90deg)";
            }
        });
    });
});