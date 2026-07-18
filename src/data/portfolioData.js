export const portfolioData = {
  hero: {
    title: "Build,break,fix and improve.",
    subtitle: "A person who is passionate to learn new things and improve themselves everyday.",
    quote: "Hi, I'm Azam Tajuddin. I'm an IT graduate specializing in system maintenance, network configuration, and full-stack development. I enjoy solving complex problems through clean code and reliable infrastructure.",
    availability: "Available for work"
  },
  about: {
    summary: "Hi, I'm Azam Tajuddin. I'm an IT graduate specializing in system maintenance, network configuration, and full-stack development. I enjoy solving complex problems through clean code and reliable infrastructure.",
    values: [
      { title: "System Reliability", description: "Ensuring secure and stable IT infrastructure." },
      { title: "Problem Solving", description: "Providing fast, effective technical solutions." },
      { title: "Web Development", description: "Building modern, scalable applications." }
    ]
  },
  skills: {
    frontend: ["HTML", "CSS", "JavaScript","React", "Next.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "PHP", "MySQL", "REST APIs","MongoDB","Oracle Database","Java"],
    systems: ["Windows","Linux", "Networking", "Hardware", "Cybersecurity"],
    tools: ["Git", "GitHub", "IT Support","VS Code","XAMPP","Apache","Laragon","Antigravity"]  
  },
  experience: [
    {
      id: 1,
      role: "Intern, IT Support & System Dev",
      company: "UiTM",
      duration: "Jan – May 2026",
      description: "",
      achievements: [
        "Provided first-level IT support and network configuration.",
        "Performed routine maintenance: antivirus, backups, and patching.",
        "Assisted in developing internal web systems (SMPK & e-BK)."
      ]
    },
    {
      id: 2,
      role: "Freelance Web Developer",
      company: "SDE Group",
      duration: "",
      description: "",
      achievements: [
        "Developed a professional corporate website focused on UI/UX.",
        "Improved search engine visibility through structural SEO."
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Diploma in Information Technology",
      school: "POLIMAS",
      duration: "2023–2026",
      details: "Focused on full-stack web development, system infrastructure, and database management. Actively developed real-world academic projects including a lecture room booking system and dynamic web applications.",
      achievements: [
        "Received the Head of Department Award (Dean's List) every semester.",
        "Achieved 11th Place in the CTF CyberWarrior POLYCC 2025.",
        "Won the Silver Award for Final Year Project."
      ]
    },
    {
      id: 2,
      degree: "Sijil Pelajaran Malaysia (SPM)",
      school: "SMK Merbok",
      duration: "2018–2022",
      details: "Completed secondary education with a strong foundation in problem-solving and analytical thinking, paving the way for a career in the IT industry."
    }
  ],
  projects: [
    {
      id: 1,
      title: "MovieVerse Premium",
      description: "A production-ready streaming interface featuring cinematic design and smooth animations.",
      image: "/projects/movieVerse.png",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      github: "https://github.com/MatGol06/movieProject",
      live: "https://movie-verse-flame-two.vercel.app/"
    },
    {
      id: 2,
      title: "iOUTS Management System",
      description: "A digital outing management system utilizing QR codes for real-time tracking.",
      image: "/projects/ioutsProject.png",
      tech: ["PHP", "JavaScript", "Bootstrap"],
      github: "https://github.com/MatGol06",
      live: "https://iouts.online/"
    },
    {
      id: 3,
      title: "Interactive Art Gallery",
      description: "An immersive digital gallery featuring spatial audio and dynamic soundscapes.",
      image: "/projects/artWeb.png",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/MatGol06",
      live: "https://art-website-project.vercel.app/"
    },
    {
      id: 4,
      title: "SDE Corporate Website",
      description: "A professional, responsive corporate website built for SEO visibility.",
      image: "/projects/sdeProject.png",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      github: "#",
      live: "https://sdegroup.com.my/"
    },
    {
      id: 5,
      title: "Custom MERN CMS",
      description: "A comprehensive Content Management System built to streamline digital content workflows.",
      images: ["/projects/cmsProject.png", "/projects/cmsProject2.png"],
      image: "/projects/cmsProject.png",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/MatGol06",
      live: "https://company-cms-ruby.vercel.app/"
    }
  ]
};
