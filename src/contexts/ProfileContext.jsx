import { createContext, useContext, useState, useMemo } from "react";

const ProfileContext = createContext();

// Current user's profile (editable)
const initialProfile = {
  id: "1",
  coverPhoto: "https://picsum.photos/seed/linkedin-cover/1200/300",
  avatar: "https://i.pravatar.cc/200?img=12",
  openToWork: true,
  name: "Raiyan Khan",
  pronouns: "he/him",
  headline: "Full Stack Developer at Google | React Enthusiast",
  location: "Pune, Maharashtra, India",
  website: "raiyan.dev",
  customUrl: "linkedin.com/in/raiyankhan",
  contactInfo: {
    email: "raiyan.khan@gmail.com",
    phone: "+91 98765 43210",
    website: "raiyan.dev",
    linkedin: "linkedin.com/in/raiyankhan",
  },
  connections: 312,
  about:
    "Passionate Full Stack Developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies. Currently working at Google on developer tools that empower millions of developers worldwide.\n\nI'm deeply interested in open-source contributions and have been an active contributor to several major projects including React, Next.js, and VS Code extensions. My work focuses on creating intuitive user experiences and robust backend architectures.\n\nWhen I'm not coding, you'll find me mentoring aspiring developers, speaking at tech conferences, or exploring the latest in AI and machine learning. I believe in continuous learning and sharing knowledge with the community.\n\nLet's connect if you're passionate about technology and innovation!",
  experience: [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Google",
      logo: null,
      startDate: "Jan 2023",
      endDate: "Present",
      location: "Bangalore, India",
      description:
        "Leading the development of internal developer tools used by 10,000+ engineers. Building React-based dashboards, optimizing CI/CD pipelines, and mentoring junior developers.",
    },
    {
      id: 2,
      role: "Software Engineer II",
      company: "Microsoft",
      logo: null,
      startDate: "Jun 2021",
      endDate: "Dec 2022",
      location: "Hyderabad, India",
      description:
        "Developed features for Azure DevOps, improving build pipeline performance by 40%. Collaborated with cross-functional teams to deliver scalable microservices architecture.",
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Flipkart",
      logo: null,
      startDate: "Jul 2019",
      endDate: "May 2021",
      location: "Bangalore, India",
      description:
        "Built responsive e-commerce interfaces serving 200M+ users. Implemented A/B testing framework that increased conversion rates by 15%.",
    },
  ],
  education: [
    {
      id: 1,
      institution: "Indian Institute of Technology, Bombay",
      degree: "B.Tech in Computer Science and Engineering",
      startYear: "2015",
      endYear: "2019",
      logo: null,
    },
    {
      id: 2,
      institution: "Delhi Public School, Pune",
      degree: "Higher Secondary (PCM)",
      startYear: "2013",
      endYear: "2015",
      logo: null,
    },
  ],
  skills: [
    { id: 1, name: "React.js", endorsements: 99 },
    { id: 2, name: "JavaScript", endorsements: 87 },
    { id: 3, name: "TypeScript", endorsements: 72 },
    { id: 4, name: "Node.js", endorsements: 65 },
    { id: 5, name: "Python", endorsements: 54 },
    { id: 6, name: "System Design", endorsements: 48 },
    { id: 7, name: "GraphQL", endorsements: 41 },
    { id: 8, name: "AWS", endorsements: 38 },
    { id: 9, name: "Docker", endorsements: 35 },
    { id: 10, name: "MongoDB", endorsements: 30 },
    { id: 11, name: "PostgreSQL", endorsements: 28 },
    { id: 12, name: "CI/CD", endorsements: 25 },
  ],
  recommendations: [
    {
      id: 1,
      name: "Priya Sharma",
      avatar: "https://i.pravatar.cc/100?img=5",
      relationship: "Manager at Google",
      text: "Raiyan is one of the most talented engineers I've had the pleasure of working with. His ability to break down complex problems and deliver elegant solutions is remarkable. He consistently goes above and beyond, mentoring team members and driving technical excellence across the organization.",
    },
    {
      id: 2,
      name: "Arjun Mehta",
      avatar: "https://i.pravatar.cc/100?img=8",
      relationship: "Colleague at Microsoft",
      text: "Working with Raiyan was an incredible experience. His deep understanding of frontend architectures and his passion for clean code made our team significantly more productive. He introduced several best practices that are still followed today.",
    },
  ],
  certifications: [
    {
      id: 1,
      name: "AWS Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "Mar 2023",
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "Aug 2022",
    },
  ],
  courses: [
    {
      id: 1,
      name: "Machine Learning Specialization",
      provider: "Stanford Online (Coursera)",
    },
    {
      id: 2,
      name: "Full Stack Open",
      provider: "University of Helsinki",
    },
    {
      id: 3,
      name: "System Design for Interviews",
      provider: "Educative.io",
    },
  ],
};

// Static profiles for other users (read-only)
const otherProfiles = {
  "2": {
    id: "2",
    name: "Shubham Patil",
    headline: "React Developer at TCS",
    avatar: "https://i.pravatar.cc/150?img=2",
    coverPhoto: "https://picsum.photos/seed/shubham/1200/300",
    location: "Mumbai, India",
    pronouns: "he/him",
    about: "Passionate about frontend development and building beautiful user interfaces. Experienced in React, Vue, and modern JavaScript. Always eager to learn new technologies and collaborate on interesting projects.",
    connections: 156,
    openToWork: false,
    website: "",
    customUrl: "linkedin.com/in/shubhampatil",
    contactInfo: {
      email: "shubham.patil@tcs.com",
      phone: "",
      website: "",
      linkedin: "linkedin.com/in/shubhampatil",
    },
    experience: [
      {
        id: 1,
        role: "React Developer",
        company: "TCS",
        logo: null,
        startDate: "Mar 2022",
        endDate: "Present",
        location: "Mumbai, India",
        description: "Developing responsive web applications using React and Redux. Collaborating with UX teams to implement design systems.",
      },
    ],
    education: [
      {
        id: 1,
        institution: "University of Mumbai",
        degree: "Bachelor of Engineering in Computer Science",
        startYear: "2018",
        endYear: "2022",
        logo: null,
      },
    ],
    skills: [
      { id: 1, name: "React", endorsements: 45 },
      { id: 2, name: "JavaScript", endorsements: 38 },
      { id: 3, name: "TypeScript", endorsements: 25 },
      { id: 4, name: "Redux", endorsements: 20 },
    ],
    recommendations: [],
    certifications: [],
    courses: [],
  },
  "3": {
    id: "3",
    name: "Ryan D'Souza",
    headline: "UI/UX Designer at Infosys",
    avatar: "https://i.pravatar.cc/150?img=3",
    coverPhoto: "https://picsum.photos/seed/ryan/1200/300",
    location: "Goa, India",
    pronouns: "he/him",
    about: "Creative UI/UX designer with a passion for crafting intuitive digital experiences. Specialized in Figma, Adobe XD, and design systems. Believes in user-centered design and data-driven decisions.",
    connections: 89,
    openToWork: true,
    website: "ryandsouza.design",
    customUrl: "linkedin.com/in/ryandsouza",
    contactInfo: {
      email: "ryan.dsouza@infosys.com",
      phone: "",
      website: "ryandsouza.design",
      linkedin: "linkedin.com/in/ryandsouza",
    },
    experience: [
      {
        id: 1,
        role: "UI/UX Designer",
        company: "Infosys",
        logo: null,
        startDate: "Jun 2021",
        endDate: "Present",
        location: "Goa, India",
        description: "Leading design initiatives for enterprise clients. Creating wireframes, prototypes, and high-fidelity mockups.",
      },
    ],
    education: [
      {
        id: 1,
        institution: "Goa University",
        degree: "B.Des in Communication Design",
        startYear: "2017",
        endYear: "2021",
        logo: null,
      },
    ],
    skills: [
      { id: 1, name: "Figma", endorsements: 52 },
      { id: 2, name: "UI Design", endorsements: 48 },
      { id: 3, name: "User Research", endorsements: 35 },
      { id: 4, name: "Adobe XD", endorsements: 28 },
    ],
    recommendations: [],
    certifications: [],
    courses: [],
  },
};

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(initialProfile);
  // Track connection requests: { userId: 'pending' | 'connected' }
  const [connectionStatus, setConnectionStatus] = useState({});

  const updateProfile = (section, data) => {
    setProfile((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const getProfileById = (userId) => {
    if (userId === "1" || userId === 1) {
      return { ...profile, isOwnProfile: true };
    }
    const otherProfile = otherProfiles[userId];
    if (otherProfile) {
      return { ...otherProfile, isOwnProfile: false };
    }
    return null;
  };

  const sendConnectionRequest = (userId) => {
    setConnectionStatus((prev) => ({ ...prev, [userId]: "pending" }));
  };

  const withdrawConnectionRequest = (userId) => {
    setConnectionStatus((prev) => {
      const newStatus = { ...prev };
      delete newStatus[userId];
      return newStatus;
    });
  };

  const getConnectionStatus = (userId) => {
    return connectionStatus[userId] || null;
  };

  const value = useMemo(
    () => ({
      profile,
      updateProfile,
      getProfileById,
      sendConnectionRequest,
      withdrawConnectionRequest,
      getConnectionStatus,
    }),
    [profile, connectionStatus]
  );

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProfile() {
  return useContext(ProfileContext);
}
