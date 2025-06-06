// Mock data for developers
const mockDevelopers = [
    {
        id: 1,
        name: "Sarah Chen",
        title: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        location: "San Francisco, CA",
        experience: "5 years",
        technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
        description: "Passionate full-stack developer with expertise in modern web technologies. I love building scalable applications that solve real-world problems.",
        rating: 4.9,
        projects: 23,
        hourlyRate: "$85",
        availability: "Available",
        portfolio: "https://sarahchen.dev"
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        title: "Frontend Specialist",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        location: "Austin, TX",
        experience: "3 years",
        technologies: ["React", "Vue.js", "CSS", "JavaScript", "Figma"],
        description: "Creative frontend developer focused on user experience and modern design. I specialize in creating beautiful, responsive interfaces.",
        rating: 4.8,
        projects: 18,
        hourlyRate: "$70",
        availability: "Available",
        portfolio: "https://marcusrodriguez.com"
    },
    {
        id: 3,
        name: "Priya Patel",
        title: "Backend Engineer",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        location: "Seattle, WA",
        experience: "6 years",
        technologies: ["Python", "Django", "Docker", "Kubernetes", "MongoDB"],
        description: "Backend specialist with strong experience in microservices architecture and cloud deployment. I build robust, scalable systems.",
        rating: 4.9,
        projects: 31,
        hourlyRate: "$95",
        availability: "Busy",
        portfolio: "https://priyapatel.tech"
    },
    {
        id: 4,
        name: "Alex Thompson",
        title: "DevOps Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        location: "Remote",
        experience: "7 years",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
        description: "DevOps engineer passionate about automation and infrastructure. I help teams deploy faster and more reliably.",
        rating: 4.7,
        projects: 28,
        hourlyRate: "$100",
        availability: "Available",
        portfolio: "https://alexthompson.dev"
    },
    {
        id: 5,
        name: "Emma Wilson",
        title: "Mobile Developer",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        location: "New York, NY",
        experience: "4 years",
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        description: "Mobile app developer creating cross-platform applications. I focus on performance and user experience across all devices.",
        rating: 4.8,
        projects: 19,
        hourlyRate: "$80",
        availability: "Available",
        portfolio: "https://emmawilson.app"
    },
    {
        id: 6,
        name: "David Kim",
        title: "Data Scientist",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        location: "Boston, MA",
        experience: "5 years",
        technologies: ["Python", "R", "TensorFlow", "PyTorch", "SQL"],
        description: "Data scientist specializing in machine learning and AI solutions. I turn data into actionable insights for businesses.",
        rating: 4.9,
        projects: 25,
        hourlyRate: "$90",
        availability: "Available",
        portfolio: "https://davidkim.ai"
    }
];

// Global state
let allDevelopers = [...mockDevelopers];
let filteredDevelopers = [...mockDevelopers];
let selectedTechnologies = [];
let selectedAvailability = '';
let searchTerm = '';

// DOM elements
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filtersPanel = document.getElementById('filtersPanel');
const techFiltersContainer = document.getElementById('techFilters');
const availabilityButtons = document.querySelectorAll('.availability-btn');
const clearFiltersBtn = document.getElementById('clearFilters');
const activeFiltersContainer = document.getElementById('activeFilters');
const developerGrid = document.getElementById('developerGrid');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const developerCount = document.getElementById('developerCount');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    generateTechnologyFilters();
    renderDevelopers();
    updateStats();
}

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Filter toggle
    filterBtn.addEventListener('click', toggleFilters);
    
    // Availability filters
    availabilityButtons.forEach(btn => {
        btn.addEventListener('click', () => handleAvailabilityFilter(btn));
    });
    
    // Clear filters
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

function generateTechnologyFilters() {
    // Get all unique technologies
    const allTechnologies = [...new Set(allDevelopers.flatMap(dev => dev.technologies))].sort();
    
    techFiltersContainer.innerHTML = '';
    allTechnologies.forEach(tech => {
        const techBtn = document.createElement('button');
        techBtn.className = 'tech-filter';
        techBtn.textContent = tech;
        techBtn.addEventListener('click', () => toggleTechnology(tech, techBtn));
        techFiltersContainer.appendChild(techBtn);
    });
}

function handleSearch(e) {
    searchTerm = e.target.value.toLowerCase();
    applyFilters();
}

function toggleFilters() {
    filtersPanel.classList.toggle('active');
}

function toggleTechnology(tech, btn) {
    btn.classList.toggle('active');
    
    if (selectedTechnologies.includes(tech)) {
        selectedTechnologies = selectedTechnologies.filter(t => t !== tech);
    } else {
        selectedTechnologies.push(tech);
    }
    
    applyFilters();
    updateActiveFilters();
}

function handleAvailabilityFilter(btn) {
    const status = btn.dataset.status;
    
    // Remove active class from all buttons
    availabilityButtons.forEach(b => b.classList.remove('active'));
    
    // Toggle selection
    if (selectedAvailability === status) {
        selectedAvailability = '';
    } else {
        selectedAvailability = status;
        btn.classList.add('active');
    }
    
    applyFilters();
    updateActiveFilters();
}

function applyFilters() {
    filteredDevelopers = allDevelopers.filter(dev => {
        // Search filter
        const matchesSearch = !searchTerm || 
            dev.name.toLowerCase().includes(searchTerm) ||
            dev.title.toLowerCase().includes(searchTerm) ||
            dev.technologies.some(tech => tech.toLowerCase().includes(searchTerm));
        
        // Technology filter
        const matchesTech = selectedTechnologies.length === 0 ||
            selectedTechnologies.every(tech => dev.technologies.includes(tech));
        
        // Availability filter
        const matchesAvailability = !selectedAvailability ||
            dev.availability === selectedAvailability;
        
        return matchesSearch && matchesTech && matchesAvailability;
    });
    
    renderDevelopers();
    updateStats();
}

function updateActiveFilters() {
    activeFiltersContainer.innerHTML = '';
    
    // Technology filters
    selectedTechnologies.forEach(tech => {
        const filterTag = createActiveFilterTag(tech, 'tech', () => {
            selectedTechnologies = selectedTechnologies.filter(t => t !== tech);
            document.querySelector(`[data-tech="${tech}"]`)?.classList.remove('active');
            applyFilters();
            updateActiveFilters();
        });
        activeFiltersContainer.appendChild(filterTag);
    });
    
    // Availability filter
    if (selectedAvailability) {
        const filterTag = createActiveFilterTag(selectedAvailability, 'availability', () => {
            selectedAvailability = '';
            availabilityButtons.forEach(btn => btn.classList.remove('active'));
            applyFilters();
            updateActiveFilters();
        });
        activeFiltersContainer.appendChild(filterTag);
    }
    
    // Update tech filter buttons
    document.querySelectorAll('.tech-filter').forEach(btn => {
        btn.classList.toggle('active', selectedTechnologies.includes(btn.textContent));
    });
}

function createActiveFilterTag(text, type, removeCallback) {
    const tag = document.createElement('div');
    tag.className = `active-filter ${type}`;
    tag.innerHTML = `
        ${text}
        <span class="remove-filter">×</span>
    `;
    tag.querySelector('.remove-filter').addEventListener('click', removeCallback);
    return tag;
}

function clearAllFilters() {
    searchInput.value = '';
    searchTerm = '';
    selectedTechnologies = [];
    selectedAvailability = '';
    
    // Reset UI
    document.querySelectorAll('.tech-filter').forEach(btn => btn.classList.remove('active'));
    availabilityButtons.forEach(btn => btn.classList.remove('active'));
    
    applyFilters();
    updateActiveFilters();
}

function renderDevelopers() {
    if (filteredDevelopers.length === 0) {
        developerGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    developerGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    developerGrid.innerHTML = filteredDevelopers.map(dev => createDeveloperCard(dev)).join('');
}

function createDeveloperCard(developer) {
    const availabilityClass = developer.availability.toLowerCase();
    const techTags = developer.technologies.slice(0, 4).map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const moreTechCount = developer.technologies.length - 4;
    const moreTech = moreTechCount > 0 ? `<span class="tech-more">+${moreTechCount} more</span>` : '';
    
    return `
        <div class="developer-card">
            <div class="card-content">
                <div class="card-header">
                    <div class="avatar-container">
                        <img src="${developer.avatar}" alt="${developer.name}" class="avatar">
                        <div class="status-indicator ${availabilityClass}"></div>
                    </div>
                    <div class="developer-info">
                        <h3 class="developer-name">${developer.name}</h3>
                        <p class="developer-title">${developer.title}</p>
                        <div class="developer-meta">
                            <span class="meta-item">
                                <i class="fas fa-map-marker-alt"></i>
                                ${developer.location}
                            </span>
                            <span class="meta-item">
                                <i class="fas fa-clock"></i>
                                ${developer.experience}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="rating-stats">
                    <div class="rating">
                        <i class="fas fa-star star"></i>
                        <span class="rating-value">${developer.rating}</span>
                        <span class="projects-count">(${developer.projects} projects)</span>
                    </div>
                    <div class="rate-availability">
                        <div class="hourly-rate">${developer.hourlyRate}/hr</div>
                        <div class="availability-badge ${availabilityClass}">
                            ${developer.availability}
                        </div>
                    </div>
                </div>
                
                <p class="developer-description">${developer.description}</p>
                
                <div class="technologies">
                    ${techTags}
                    ${moreTech}
                </div>
            </div>
            
            <div class="card-footer">
                <a href="/portfolio/${developer.id}/" class="btn btn-outline">
                    <i class="fas fa-external-link-alt"></i>
                    Portfolio
                </a>
                <button class="btn btn-primary" onclick="contactDeveloper(${developer.id})">
                    <i class="fas fa-comment"></i>
                    Contact
                </button>
            </div>
        </div>
    `;
}

function updateStats() {
    const count = filteredDevelopers.length;
    resultsTitle.textContent = `${count} Developer${count !== 1 ? 's' : ''} Found`;
    resultsCount.textContent = `Showing ${count} results`;
    developerCount.textContent = allDevelopers.length;
}

function toggleMobileMenu() {
    mobileNav.classList.toggle('active');
    const isOpen = mobileNav.classList.contains('active');
    menuIcon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
    }
});

// Close filters panel when clicking outside
document.addEventListener('click', function(e) {
    if (!filterBtn.contains(e.target) && !filtersPanel.contains(e.target)) {
        filtersPanel.classList.remove('active');
    }
});
