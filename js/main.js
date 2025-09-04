document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('header nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    // --- Gallery Page Logic ---
    const filterContainer = document.querySelector('.filter-buttons');
    if (filterContainer) {
        const galleryItems = document.querySelectorAll('.galeri-item');

        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                // Deactivate existing active button
                filterContainer.querySelector('.active').classList.remove('active');
                // Activate new button
                e.target.classList.add('active');

                const filterValue = e.target.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (item.getAttribute('data-category') === filterValue || filterValue === 'semua') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    }

    // --- Lightbox Logic ---
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const galleryItems = document.querySelectorAll('.galeri-item');
        const closeBtn = document.querySelector('.lightbox-close');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgElement = item.querySelector('img');
                if (imgElement) {
                    lightbox.style.display = 'block';
                    lightboxImg.src = imgElement.src;
                    lightboxCaption.innerHTML = imgElement.alt;
                }
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
        }

        if(closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Call lucide.createIcons() again if new icons are added dynamically
    // For now, it's in the HTML, so this is fine.
});
