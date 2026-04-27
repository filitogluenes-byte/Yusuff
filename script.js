setTimeout(() => {
    document.getElementById('intro-stage').style.display = 'none';
    const content = document.getElementById('main-content');
    content.style.display = 'block';
    
    // İmza animasyonunu başlat
    setTimeout(() => {
        document.getElementById('manager-signature').classList.add('animate-signature');
    }, 1000);
}, 3500); // 3.5 saniye sonra ana ekrana geç
