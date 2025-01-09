
// Google Analytics (gtag)
window.dataLayer = window.dataLayer || [];
window.gtag = function(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-72WE5XWZBC');

document.addEventListener('DOMContentLoaded', () => {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    document.addEventListener('click', (e) => {
        const activeHoverBox = document.querySelector('.hover-box.active');
        console.log('document click');
        window.gtag('click', 'document');
    });


    // Function to close active hover box
    const closeActiveHoverBox = (e) => {
        const activeHoverBox = document.querySelector('.hover-box.active');
        if (activeHoverBox && (e.key === 'Escape' || e.type === 'click')) {
            activeHoverBox.classList.remove('active');
            overlay.style.display = 'none';
            const itemId = activeHoverBox.getAttribute('data-item');
            console.log('hoverBoxClose click');
            window.gtag('click', 'hoverBoxClose', itemId);
        }
    };

    // Portfolio item click handlers
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.getAttribute('data-item');
            const hoverBox = document.getElementById(`hover-box-${itemId}`);
            
            if (hoverBox) {
                hoverBox.classList.add('active');
                overlay.style.display = 'block';
                console.log('portfolio click');
                window.gtag('click', 'portfolioItem', itemId);
            }
        });
    });

    // Close button handlers
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            closeActiveHoverBox(e);
        });
    });

    // Click outside hover box handler
    overlay.addEventListener('click', closeActiveHoverBox);

    // Prevent click inside hover box from closing it
    const hoverBoxes = document.querySelectorAll('.hover-box');
    hoverBoxes.forEach(box => {
        box.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // Add keypress event handler to close hover box
    document.addEventListener('keydown', (e) => {
        closeActiveHoverBox(e);
        console.log('keydown');
    });
});
