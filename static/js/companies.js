document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const industryFilter = document.getElementById('industryFilter');
    const locationFilter = document.getElementById('locationFilter');
    const sizeFilter = document.getElementById('sizeFilter');
    const companiesGrid = document.getElementById('companiesGrid');

    // Function to filter companies
    function filterCompanies() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedIndustry = industryFilter.value;
        const selectedLocation = locationFilter.value;
        const selectedSize = sizeFilter.value;

        // Get all company cards
        const companyCards = document.querySelectorAll('.company-card');

        let visibleCount = 0;
        companyCards.forEach(card => {
            // Get company details from the card
            const companyName = card.querySelector('.company-info h2').textContent.toLowerCase();
            const companyIndustry = card.getAttribute('data-industry');
            const companyLocation = card.getAttribute('data-location');
            const companySize = card.getAttribute('data-size');
            const companyDescription = card.querySelector('.company-description')?.textContent.toLowerCase() || '';
            
            // Check if the company matches all filters
            const matchesSearch = companyName.includes(searchTerm) || 
                                companyDescription.includes(searchTerm);
            const matchesIndustry = !selectedIndustry || companyIndustry === selectedIndustry;
            const matchesLocation = !selectedLocation || companyLocation === selectedLocation;
            const matchesSize = !selectedSize || companySize === selectedSize;

            // Show/hide card based on filter results
            if (matchesSearch && matchesIndustry && matchesLocation && matchesSize) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update all company count displays
        document.getElementById('companyCount').textContent = visibleCount;
        document.getElementById('resultsTitle').textContent = `${visibleCount} Companies Found`;
        document.getElementById('resultsCount').textContent = `Showing ${visibleCount} results`;

        // Show "no results" message if all cards are hidden
        const noResultsMessage = document.getElementById('noResults');
        if (noResultsMessage) {
            noResultsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        // Update active filters display
        updateActiveFiltersCount(visibleCount);
    }

    // Function to get unique values from company cards
    function getUniqueValues(attribute) {
        const values = new Set();
        document.querySelectorAll('.company-card').forEach(card => {
            const value = card.getAttribute(`data-${attribute}`);
            if (value) values.add(value);
        });
        return Array.from(values).sort();
    }

    // Function to populate filter options
    function populateFilter(selectElement, values) {
        // Keep the "All" option
        const defaultOption = selectElement.querySelector('option');
        selectElement.innerHTML = '';
        selectElement.appendChild(defaultOption);

        // Add unique values
        values.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            selectElement.appendChild(option);
        });
    }

    // Initialize filters with unique values
    const uniqueSizes = getUniqueValues('size');
    const uniqueIndustries = getUniqueValues('industry');
    const uniqueLocations = getUniqueValues('location');

    populateFilter(sizeFilter, uniqueSizes);
    populateFilter(industryFilter, uniqueIndustries);
    populateFilter(locationFilter, uniqueLocations);

    // Add event listeners
    searchInput.addEventListener('input', filterCompanies);
    industryFilter.addEventListener('change', filterCompanies);
    locationFilter.addEventListener('change', filterCompanies);
    sizeFilter.addEventListener('change', filterCompanies);

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');

    function toggleMobileMenu() {
        mobileNav.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
        document.body.classList.toggle('menu-open');
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
        const isClickInside = mobileNav.contains(e.target) || 
                            mobileMenuBtn.contains(e.target);
        
        if (!isClickInside && mobileNav.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
                toggleMobileMenu();
            }
        }, 250);
    });

    // Filter panel toggle functionality
    const filterBtn = document.getElementById('filterBtn');
    const filtersPanel = document.getElementById('filtersPanel');
    const filterIcon = filterBtn.querySelector('i');

    // Toggle filters panel
    filterBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        filtersPanel.classList.toggle('show');
        filterBtn.classList.toggle('active');
        
        // Toggle icon
        if (filtersPanel.classList.contains('show')) {
            filterIcon.classList.replace('fa-filter', 'fa-times');
        } else {
            filterIcon.classList.replace('fa-times', 'fa-filter');
        }
    });

    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
        if (!filtersPanel.contains(e.target) && !filterBtn.contains(e.target)) {
            filtersPanel.classList.remove('show');
            filterBtn.classList.remove('active');
            filterIcon.classList.replace('fa-times', 'fa-filter');
        }
    });

    // Close panel when pressing Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && filtersPanel.classList.contains('show')) {
            filtersPanel.classList.remove('show');
            filterBtn.classList.remove('active');
            filterIcon.classList.replace('fa-times', 'fa-filter');
        }
    });

    // Smooth scrolling for mobile
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Clear Filters Function
    document.getElementById('clearFilters').addEventListener('click', function() {
        // Reset all filter selects
        document.getElementById('industryFilter').value = '';
        document.getElementById('locationFilter').value = '';
        document.getElementById('sizeFilter').value = '';
        
        // Reset search input
        document.getElementById('searchInput').value = '';

        // Clear active filters display
        document.getElementById('activeFilters').innerHTML = '';

        // Show all companies
        const companyCards = document.querySelectorAll('.company-card');
        companyCards.forEach(card => {
            card.style.display = 'block';
        });

        // Update results count
        const totalCompanies = companyCards.length;
        document.getElementById('resultsTitle').textContent = `${totalCompanies} Companies Found`;
        document.getElementById('resultsCount').textContent = `Showing ${totalCompanies} results`;

        // Hide no results message if it's showing
        document.getElementById('noResults').style.display = 'none';

        // Close filters panel on mobile if open
        const filtersPanel = document.getElementById('filtersPanel');
        if (filtersPanel.classList.contains('active')) {
            filtersPanel.classList.remove('active');
            document.getElementById('filterBtn').classList.remove('active');
        }
    });

    // Add this new function to display filter status
    function updateActiveFiltersCount(count) {
        const activeFiltersEl = document.getElementById('activeFilters');
        const totalCompanies = document.querySelectorAll('.company-card').length;
        
        if (count < totalCompanies) {
            activeFiltersEl.innerHTML = `
                <div class="filter-status">
                    <span class="filter-count">${count}</span> out of 
                    <span class="total-count">${totalCompanies}</span> companies
                </div>
            `;
        } else {
            activeFiltersEl.innerHTML = '';
        }
    }
});