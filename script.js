document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('order-modal');
    const orderBtns = document.querySelectorAll('.order-btn');
    const closeBtn = document.querySelector('.close-btn');
    const confirmBtn = document.getElementById('confirm-order');
    
    // Open modal when order button is clicked
    orderBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            const productPrice = this.getAttribute('data-price');
            
            document.getElementById('modal-product-name').textContent = productName;
            document.getElementById('modal-product-price').textContent = productPrice;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
    
    // Confirm order button
    confirmBtn.addEventListener('click', function() {
        const productName = document.getElementById('modal-product-name').textContent;
        const productPrice = document.getElementById('modal-product-price').textContent;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        
        let paymentDetails = '';
        if (paymentMethod === 'DANA') {
            paymentDetails = 'DANA: 0895385838250';
        } else if (paymentMethod === 'GOPAY') {
            paymentDetails = 'GOPAY: 089603532926';
        } else if (paymentMethod === 'OVO') {
            paymentDetails = 'OVO: 087823698836';
        } else if (paymentMethod === 'QRIS') {
            paymentDetails = 'QRIS: https://files.catbox.moe/gnxb0l.jpg';
        }
        
        const whatsappMessage = `Halo ABI Hosting, saya ingin memesan:\n\nProduk: ${productName}\nHarga: Rp ${productPrice}\n\nSaya akan melakukan pembayaran via ${paymentMethod} (${paymentDetails}). Mohon konfirmasinya.`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/62895385838250?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});