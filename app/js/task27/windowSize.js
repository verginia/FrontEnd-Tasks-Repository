function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}

// Initial update
updateWindowSize();

// Update the size whenever the window is resized
window.addEventListener('resize', updateWindowSize);