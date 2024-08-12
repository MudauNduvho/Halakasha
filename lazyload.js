document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { id: 'home1', image: './images/pexels-madelynemery-954677.jpg' },
        { id: 'lunch', image: './images/pexels-madelynemery-954677.jpg' },
        { id: 'aboutit', image: './images/pexels-madelynemery-954677.jpg' }
    ];

    sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            element.style.backgroundImage = `url(${section.image})`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundRepeat = 'no-repeat';
            element.style.backgroundAttachment = 'fixed';
            element.style.backgroundPosition = 'center';
        }
    });
});