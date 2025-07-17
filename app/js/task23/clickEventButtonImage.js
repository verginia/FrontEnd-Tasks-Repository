document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.getElementById('showButton');
    const removeButton = document.getElementById('removeButton');
    const image = document.getElementById('image');

    const showImage = () => {
        image.style.display = 'block';
    };

    const hideImage = () => {
        image.style.display = 'none';
    };

    const removeImage = () => {
        image.removeEventListener('click', hideImage);
        image.remove();
    };

    showButton.addEventListener('click', showImage);
    image.addEventListener('click', hideImage);
    removeButton.addEventListener('click', removeImage);
});