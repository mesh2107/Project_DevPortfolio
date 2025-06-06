// Contact Modal Functions
function showContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function hideContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

// Handle contact form submission
function handleContact(event) {
    event.preventDefault();
    
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();
    
    if (!message) {
        alert('Please enter a message');
        return;
    }
    
    // Here you would typically send the message to your backend
    console.log('Sending message:', message);
    
    // For now, just show a success message and close the modal
    alert('Message sent successfully!');
    messageInput.value = '';
    hideContactModal();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        hideContactModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideContactModal();
    }
});

// Prevent modal content clicks from closing the modal
document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Initialize any elements that need it when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});