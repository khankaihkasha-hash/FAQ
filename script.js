const faqs = document.querySelectorAll(".faq");
const searchBox = document.getElementById("searchBox");
const filters = document.querySelectorAll(".filter");

faqs.forEach(faq=>{
    faq.querySelector(".question").addEventListener("click",()=>{
        faq.classList.toggle("active");
    });
});

searchBox.addEventListener("keyup", ()=>{
    const value = searchBox.value.toLowerCase();
    faqs.forEach(faq=>{
        faq.style.display = faq.innerText.toLowerCase().includes(value) ? "block" : "none";
    });
});

filters.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        document.querySelector(".filter.active").classList.remove("active");
        btn.classList.add("active");
        const category = btn.dataset.category;

        faqs.forEach(faq=>{
            faq.style.display = (category=="all" || faq.classList.contains(category)) ? "block" : "none";
        });
    });
});
