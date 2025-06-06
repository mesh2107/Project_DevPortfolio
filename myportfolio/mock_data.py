mockDevelopers = [
    {
        'id': 1,
        'name': "Sarah Chen",
        'title': "Full Stack Developer",
        'avatar': "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        'location': "San Francisco, CA",
        'experience': "5 years",
        'technologies': ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
        'description': "Passionate full-stack developer with expertise in modern web technologies. I love building scalable applications that solve real-world problems.",
        'rating': 4.9,
        'projects': 23,
        'hourlyRate': "$85",
        'availability': "Available",
        'portfolio': "https://sarahchen.dev"
        
    },
    # ...Copy the rest of the mock data from your script.js...
    {
        'id': 2,
        'name': "Marcus Rodriguez",
        'title': "Frontend Specialist",
        'avatar': "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        'location': "Austin, TX",
        'experience': "3 years",
        'technologies': ["React", "Vue.js", "CSS", "JavaScript", "Figma"],
        'description': "Creative frontend developer focused on user experience and modern design. I specialize in creating beautiful, responsive interfaces.",
        'rating': 4.8,
        'projects': 18,
        'hourlyRate': "$70",
        'availability': "Available",
        'portfolio': "https://marcusrodriguez.com"
    },
    {
        'id': 3,
        'name': "Priya Patel",
        'title': "Backend Engineer",
        'avatar': "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        'location': "Seattle, WA",
        'experience': "6 years",
        'technologies': ["Python", "Django", "Docker", "Kubernetes", "MongoDB"],
        'description': "Backend specialist with strong experience in microservices architecture and cloud deployment. I build robust, scalable systems.",
        'rating': 4.9,
        'projects': 31,
        'hourlyRate': "$95",
        'availability': "Busy",
        'portfolio': "https://priyapatel.tech"
    },
    {
        'id': 4,
        'name': "Alex Thompson",
        'title': "DevOps Engineer",
        'avatar': "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        'location': "Remote",
        'experience': "7 years",
        'technologies': ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
        'description': "DevOps engineer passionate about automation and infrastructure. I help teams deploy faster and more reliably.",
        'rating': 4.7,
        'projects': 28,
        'hourlyRate': "$100",
        'availability': "Available",
        'portfolio': "https://alexthompson.dev"
    },
    {
        'id': 5,
        'name': "Emma Wilson",
        'title': "Mobile Developer",
        'avatar': "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        'location': "New York, NY",
        'experience': "4 years",
        'technologies': ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        'description': "Mobile app developer creating cross-platform applications. I focus on performance and user experience across all devices.",
        'rating': 4.8,
        'projects': 19,
        'hourlyRate': "$80",
        'availability': "Available",
        'portfolio': "https://emmawilson.app"
    },
    {
        'id': 6,
        'name': "David Kim",
        'title': "Data Scientist",
        'avatar': "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        'location': "Boston, MA",
        'experience': "5 years",
        'technologies': ["Python", "R", "TensorFlow", "PyTorch", "SQL"],
        'description': "Data scientist specializing in machine learning and AI solutions. I turn data into actionable insights for businesses.",
        'rating': 4.9,
        'projects': 25,
        'hourlyRate': "$90",
        'availability': "Available",
        'portfolio': "https://davidkim.ai"
    },
]

mockCompanies = [
    {
        'id': 1,
        'name': "TechVision Labs",
        'logo': "https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=150&h=150&fit=crop",
        'industry': "Software Development",
        'location': "San Francisco, CA",
        'size': "50-100",
        'founded': "2018",
        'technologies': ["React", "Node.js", "AWS", "Python"],
        'description': "Innovative software company specializing in AI-driven solutions.",
        'rating': 4.8,
        'website': "https://techvisionlabs.com",
        'projects': [
            {
                'id': 1,
                'title': "AI-Powered Analytics Dashboard",
                'description': "Building a real-time analytics dashboard with machine learning capabilities.",
                'duration': "6 months",
                'budget': "$50,000-$75,000",
                'requirements': {
                    'experience': "4+ years",
                    'technologies': ["React", "Python", "TensorFlow", "AWS"],
                    'skills': ["Machine Learning", "Data Visualization", "REST APIs"],
                    'availability': "Full-time"
                }
            }
        ]
    },
    {
        'id': 2,
        'name': "CloudScale Solutions",
        'logo': "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop",
        'industry': "Cloud Services",
        'location': "Seattle, WA",
        'size': "100-250",
        'founded': "2015",
        'technologies': ["AWS", "Kubernetes", "Docker", "Go"],
        'description': "Leading cloud infrastructure and DevOps solutions provider.",
        'rating': 4.9,
        'website': "https://cloudscale.tech",
        'projects': [
            {
                'id': 2,
                'title': "Microservices Migration",
                'description': "Modernizing legacy applications into microservices architecture.",
                'duration': "8 months",
                'budget': "$80,000-$100,000",
                'requirements': {
                    'experience': "5+ years",
                    'technologies': ["Docker", "Kubernetes", "AWS", "Terraform"],
                    'skills': ["Microservices", "DevOps", "CI/CD"],
                    'availability': "Full-time"
                }
            }
        ]
    },
    {
        'id': 3,
        'name': "MobileFirst Apps",
        'logo': "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=150&h=150&fit=crop",
        'industry': "Mobile Development",
        'location': "Austin, TX",
        'size': "25-50",
        'founded': "2019",
        'technologies': ["React Native", "Flutter", "Firebase"],
        'description': "Specialized in creating innovative mobile applications.",
        'rating': 4.7,
        'website': "https://mobilefirst.dev",
        'projects': [
            {
                'id': 3,
                'title': "Cross-platform E-commerce App",
                'description': "Building a modern e-commerce mobile app with real-time features.",
                'duration': "4 months",
                'budget': "$40,000-$60,000",
                'requirements': {
                    'experience': "3+ years",
                    'technologies': ["React Native", "Firebase", "Node.js"],
                    'skills': ["Mobile Development", "State Management", "API Integration"],
                    'availability': "Part-time"
                }
            }
        ]
    },
    {
        'id': 4,
        'name': "DataCore Analytics",
        'logo': "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop",
        'industry': "Data Analytics",
        'location': "Boston, MA",
        'size': "50-100",
        'founded': "2017",
        'technologies': ["Python", "TensorFlow", "PostgreSQL", "Tableau"],
        'description': "Transforming business data into actionable insights.",
        'rating': 4.8,
        'website': "https://datacore.ai",
        'projects': [
            {
                'id': 4,
                'title': "Predictive Analytics Platform",
                'description': "Developing an ML-powered predictive analytics solution.",
                'duration': "5 months",
                'budget': "$55,000-$70,000",
                'requirements': {
                    'experience': "4+ years",
                    'technologies': ["Python", "TensorFlow", "SQL", "AWS"],
                    'skills': ["Machine Learning", "Data Analysis", "Statistical Modeling"],
                    'availability': "Full-time"
                }
            }
        ]
    },
    {
        'id': 5,
        'name': "SecureNet Systems",
        'logo': "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150&h=150&fit=crop",
        'industry': "Cybersecurity",
        'location': "New York, NY",
        'size': "100-250",
        'founded': "2016",
        'technologies': ["Python", "Go", "Kubernetes", "AWS"],
        'description': "Enterprise cybersecurity solutions and consulting.",
        'rating': 4.9,
        'website': "https://securenet.tech",
        'projects': [
            {
                'id': 5,
                'title': "Zero Trust Security Platform",
                'description': "Implementing a zero trust security architecture solution.",
                'duration': "7 months",
                'budget': "$70,000-$90,000",
                'requirements': {
                    'experience': "5+ years",
                    'technologies': ["Go", "Python", "AWS", "Kubernetes"],
                    'skills': ["Security Architecture", "OAuth/OIDC", "Network Security"],
                    'availability': "Full-time"
                }
            }
        ]
    },
    {
        'id': 6,
        'name': "WebStack Innovation",
        'logo': "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=150&h=150&fit=crop",
        'industry': "Web Development",
        'location': "Chicago, IL",
        'size': "25-50",
        'founded': "2020",
        'technologies': ["React", "Node.js", "MongoDB", "GraphQL"],
        'description': "Modern web applications and progressive web apps.",
        'rating': 4.7,
        'website': "https://webstack.dev",
        'projects': [
            {
                'id': 6,
                'title': "Next-gen CMS Platform",
                'description': "Building a modern headless CMS with real-time collaboration.",
                'duration': "6 months",
                'budget': "$45,000-$65,000",
                'requirements': {
                    'experience': "3+ years",
                    'technologies': ["React", "Node.js", "GraphQL", "MongoDB"],
                    'skills': ["Full-stack Development", "API Design", "Real-time Systems"],
                    'availability': "Full-time"
                }
            }
        ]
    }
]