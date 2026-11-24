    const cards = document.querySelectorAll(".flexbox-item");

    const observerOptions = {
        threshold: 0.15
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(cards).indexOf(entry.target);
                
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach((card) => {
        cardObserver.observe(card);
    });