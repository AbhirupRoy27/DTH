// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            header.style.padding = '0.7rem 2rem';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            header.style.padding = '1rem 2rem';
        }
    });
    
    // Scroll animation for sections
    const animateSections = function() {
        const planCards = document.querySelectorAll('.plan-card');
        const offeringsSection = document.querySelector('.curated-offerings-section');
        
        // Function to check if element is in viewport
        const isInViewport = function(element, offset = 0) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
                rect.bottom >= 0
            );
        };
        
        // Animate plan cards when scrolling
        planCards.forEach((card, index) => {
            if (isInViewport(card, 100)) {
                // Add a staggered delay based on index
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
        
        // Animate offerings section when scrolling - only when it's in viewport
        if (offeringsSection && isInViewport(offeringsSection, 150)) {
            if (!offeringsSection.classList.contains('visible')) {
                offeringsSection.classList.add('visible');
            }
        } else if (offeringsSection) {
            // Remove the visible class when not in viewport
            offeringsSection.classList.remove('visible');
        }
    };
    
    // Initial setup for animations
    const setupAnimations = function() {
        const planCards = document.querySelectorAll('.plan-card');
        
        // Set initial state for plan cards
        planCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Add class to offerings section for animations
        const offeringsSection = document.querySelector('.curated-offerings-section');
        if (offeringsSection) {
            offeringsSection.classList.add('animate-ready');
        }
        
        // Run animation check on load
        animateSections();
    };
    
    // Run animations on scroll
    window.addEventListener('scroll', animateSections);
    
    // Setup animations after a short delay
    setTimeout(setupAnimations, 100);
    
    // Login button click event
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('Login functionality will be implemented in the future.');
        });
    }
    
    // User profile icon click event
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
        userProfile.addEventListener('click', function() {
            alert('User profile functionality will be implemented in the future.');
        });
    }
    
    // Mobile sidebar functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    
    // Open sidebar
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            console.log('Mobile menu toggle clicked'); // Debug log
            mobileSidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
        });
    }
    
    // Close sidebar
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            mobileSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }
    
    // Close sidebar when clicking on overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            mobileSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }
    
    // Sidebar dropdown toggles
    const sidebarDropdownToggles = document.querySelectorAll('.sidebar-dropdown-toggle');
    
    sidebarDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });
    
    // Desktop dropdown functionality
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // Function to handle mobile dropdown behavior
    function setupMobileDropdowns() {
        if (window.innerWidth <= 767) {
            // Mobile view - use click to toggle dropdowns
            dropdownToggles.forEach(toggle => {
                // Remove existing listeners first to prevent duplicates
                toggle.removeEventListener('click', toggleDropdown);
                // Add click listener
                toggle.addEventListener('click', toggleDropdown);
            });
            
            // Reset all dropdowns to closed state
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        } else {
            // Desktop view - remove click listeners and active classes
            dropdownToggles.forEach(toggle => {
                toggle.removeEventListener('click', toggleDropdown);
                toggle.parentElement.classList.remove('active');
            });
        }
    }
    
    // Toggle dropdown function
    function toggleDropdown(e) {
        e.preventDefault();
        const dropdown = this.parentElement;
        
        // Close all other dropdowns
        dropdownToggles.forEach(otherToggle => {
            if (otherToggle !== this) {
                otherToggle.parentElement.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
    }
    
    // Initial setup
    setupMobileDropdowns();
    
    // Update on window resize
    window.addEventListener('resize', function() {
        setupMobileDropdowns();
        
        // Close sidebar on resize to desktop
        if (window.innerWidth > 767) {
            mobileSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    console.log('DTH Web Application initialized successfully!');
});

// Expandable offerings functionality
document.addEventListener('DOMContentLoaded', function() {
    const offeringHeaders = document.querySelectorAll('.offering-header');
    
    offeringHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const parent = this.parentElement;
            
            // Toggle active class on the clicked item
            parent.classList.toggle('active');
            
            // Optional: Close other items when one is opened
            if (parent.classList.contains('active')) {
                offeringHeaders.forEach(otherHeader => {
                    if (otherHeader !== header) {
                        otherHeader.parentElement.classList.remove('active');
                    }
                });
            }
        });
    });
});