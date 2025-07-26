document.addEventListener('DOMContentLoaded', function () {
    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageTextarea = document.getElementById('message');
                
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            // Clear previous errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';

            // Validate Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                isValid = false;
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Invalid email format.';
                isValid = false;
            }

            // Validate Message
            if (messageTextarea.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                isValid = false;
            }

            if (isValid) {
                alert('Form submitted successfully! Thank you for your message.');
                contactForm.reset();
            } else {
                alert('Please correct the errors in the form.');
            }
        });
    }

    // --- Dynamic Image Gallery ---
    const addImageButton = document.getElementById('addImageButton');
    const imageUrlInput = document.getElementById('imageUrlInput');
    const imageCaptionInput = document.getElementById('imageCaptionInput');
    const dessertGalleryGrid = document.querySelector('.dessert-gallery-grid');

    // Demo starter images (replace these with URLs, not local paths)
    const initialImages = [
        { url: 'gourmet cupcakes.jpeg', caption: 'GourmetCupcakes' },
        { url: 'mango melts.jpeg', caption: 'Mango Donuts' },
        { url: 'delicious cookies.jpeg', caption: 'Delicious Cookies' },
        { url: 'coco fudgy.jpeg', caption: 'Coco Fudgy Cake' }
    ];

    function renderImage(imageUrl, imageCaption) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = imageCaption || 'Dessert Image';

        const caption = document.createElement('p');
        caption.textContent = imageCaption || 'No Caption';

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-image');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            galleryItem.remove();
        });

        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        galleryItem.appendChild(removeButton);
        dessertGalleryGrid.appendChild(galleryItem);
    }

    // Load demo images
    initialImages.forEach(image => renderImage(image.url, image.caption));

    // Add new image from user input
    if (addImageButton) {
        addImageButton.addEventListener('click', function () {
            const imageUrl = imageUrlInput.value.trim();
            const imageCaption = imageCaptionInput.value.trim();

            if (imageUrl === '') {
                alert('Please enter an image URL.');
                return;
            }

            if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
                alert('Please enter a valid image URL (starting with http:// or https://).');
                return;
            }

            renderImage(imageUrl, imageCaption);

            // Clear inputs
            imageUrlInput.value = '';
            imageCaptionInput.value = '';
        });
    }
});