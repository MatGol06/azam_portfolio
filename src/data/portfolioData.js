export const portfolioData = {
  hero: {
    title: "Detail-Oriented IT Graduate.",
    subtitle: "Bringing hands-on experience in technical support, system development, and network configuration.",
    availability: "Available for new opportunities"
  },
  about: {
    summary: "Detail-oriented IT graduate with hands-on experience in technical support, system maintenance, hardware troubleshooting and network configuration through internship and academic projects. Skilled in supporting daily IT operations, managing system updates, maintaining ICT assets and assisting in web-based system development. Familiar with Linux environments, database management and cybersecurity fundamentals with strong problem-solving and communication skills.",
    values: [
      { title: "System Reliability", description: "Maintaining ICT assets, patching software, and ensuring secure network configurations." },
      { title: "Problem Solving", description: "Providing fast, effective first-level IT support for hardware and software issues." },
      { title: "Development", description: "Assisting in building web-based systems (like SMPK and e-BK) with modern tech stacks." }
    ]
  },
  skills: {
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Bootstrap"],
    backend: ["Node.js", "PHP", "REST APIs", "MySQL", "Database Management"],
    systems: ["Linux Environments", "Network Configuration", "Hardware Troubleshooting", "Cybersecurity Basics"],
    tools: ["Git", "GitHub", "System Maintenance", "IT Support"]
  },
  experience: [
    {
      id: 1,
      role: "Intern, IT Support & System Development",
      company: "Universiti Teknologi MARA (UiTM)",
      duration: "Jan 2026 — May 2026",
      description: "Supported daily IT operations, managed system updates, and assisted in web-based system development.",
      achievements: [
        "Provided first-level IT support for hardware, software and system-related issues.",
        "Installed and configured computer systems, network devices, and peripherals.",
        "Performed routine maintenance: antivirus updates, backup monitoring, and patching.",
        "Assisted in internal system development projects (SMPK and e-BK).",
        "Maintained ICT asset records and technical documentation."
      ]
    },
    {
      id: 2,
      role: "Freelance Web Developer",
      company: "SDE Group (Client)",
      duration: "2023 - 2024",
      description: "Led the development of a professional corporate website using Bootstrap and PHP. Focused on SEO and UI/UX.",
      achievements: [
        "Implemented scroll-triggered animations for enhanced user engagement.",
        "Modularized legacy HTML code into scalable PHP includes.",
        "Improved search engine visibility through structural SEO practices."
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Diploma in Information Technology (Digital Technology)",
      school: "Politeknik Sultan Abdul Halim Mu’adzam Shah (POLIMAS)",
      duration: "May 2023 - Sep 2026",
      details: "Relevant Coursework: Computer Networking, Operating Systems, Database Management (MySQL), and Information Security."
    },
    {
      id: 2,
      degree: "Sijil Pelajaran Malaysia (SPM)",
      school: "Sekolah Menengah Kebangsaan Merbok",
      duration: "Jan 2018 - Dec 2022",
      details: ""
    }
  ],
  projects: [
    {
      id: 1,
      title: "MovieVerse Premium",
      description: "A production-ready streaming platform interface featuring high-contrast cinematic design, seamless animations, and accessibility-first architecture.",
      image: "/projects/movieVerse.png",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      github: "https://github.com/MatGol06/movieProject",
      live: "#"
    },
    {
      id: 2,
      title: "Dynamic Supabase Blog",
      description: "A secure, robust content management system powered by Supabase Authentication and row-level security for article management.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      tech: ["React", "Supabase", "Tailwind CSS", "Vite"],
      github: "https://github.com/MatGol06",
      live: "#"
    },
    {
      id: 3,
      title: "Interactive Art Gallery",
      description: "An immersive digital gallery experience featuring spatial audio, auto-play capabilities, and dynamic room-specific soundscapes.",
      image: "https://images.unsplash.com/photo-1518998053401-a414909197e4?q=80&w=2070&auto=format&fit=crop",
      tech: ["Next.js", "Framer Motion", "Web Audio API", "Tailwind CSS"],
      github: "https://github.com/MatGol06",
      live: "#"
    }
  ],
  services: [
    { title: "System Maintenance", desc: "Performing routine updates, backup monitoring and software patching." },
    { title: "IT Support", desc: "First-level support for hardware, software and network configurations." },
    { title: "Web Development", desc: "Assisting in building and maintaining web-based systems." }
  ]
};
