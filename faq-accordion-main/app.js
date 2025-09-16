const faqs = document.querySelectorAll(".faq");
const icon = document.querySelector("i");

faqs.forEach((faq) => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");
  const icon = faq.querySelector("i");

  question.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      icon.classList.add("fa-plus");
      icon.classList.remove("fa-minus");
      answer.style.maxHeight = null;
    } else {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      faqs.forEach((otherFaq) => {
        if (otherFaq.classList.contains("active")) {
          otherFaq.classList.remove("active");
          otherFaq.querySelector(".answer").style.maxHeight = null;
          otherFaq.querySelector("i").classList.remove("fa-minus");
          otherFaq.querySelector("i").classList.add("fa-plus");
        }
      });

      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
