document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const pasteBtn = document.getElementById('pasteBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadSection = document.getElementById('downloadSection');
    const popup = document.getElementById('popup');
    const closePopup = document.querySelector('.close');
    const nextDownload = document.getElementById('nextDownload');

    // Paste button click handler
    pasteBtn.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            urlInput.value = text;
            validateURL(text);
        } catch (err) {
            alert('Failed to read clipboard contents');
        }
    });

    // URL input validation
    urlInput.addEventListener('input', (e) => {
        validateURL(e.target.value);
    });

    function validateURL(url) {
        const instagramRegex = /https?:\/\/(www\.)?instagram\.com\/reel\/.+/;
        if (instagramRegex.test(url)) {
            downloadSection.classList.remove('hidden');
        } else {
            downloadSection.classList.add('hidden');
        }
    }

    // Download button click handler
    downloadBtn.addEventListener('click', async () => {
        const url = urlInput.value;
        
        // Simulate download process (replace with actual download logic)
        try {
            // Add your actual download logic here
            // This is just a simulation
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            popup.classList.remove('hidden');
            downloadSection.classList.add('hidden');
        } catch (error) {
            alert('Download failed. Please try again.');
        }
    });

    // Close popup
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Next download button
    nextDownload.addEventListener('click', () => {
        popup.classList.add('hidden');
        urlInput.value = '';
        downloadSection.classList.add('hidden');
    });

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
