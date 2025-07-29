// Script untuk memperbaiki responsivitas gambar
// Jalankan script ini di console browser untuk mengganti semua inline styles gambar

function fixImageResponsiveness() {
    // Mencari semua gambar dengan inline style tertentu
    const images = document.querySelectorAll('img[style*="height:150px"]');
    
    images.forEach(img => {
        // Menghapus inline style dan menambah class responsive
        img.removeAttribute('style');
        img.classList.add('menu-item-img');
    });
    
    console.log(`Fixed ${images.length} images for responsiveness`);
    
    // Mencari gambar di recommendations section
    const recImages = document.querySelectorAll('.recommendation-card img[style]');
    recImages.forEach(img => {
        img.removeAttribute('style');
        img.classList.add('menu-item-img');
    });
    
    console.log(`Fixed ${recImages.length} recommendation images`);
    
    // Update DOM untuk memastikan perubahan terimplementasi
    console.log('All images have been updated for mobile responsiveness!');
}

// Jalankan function
fixImageResponsiveness();
