// Define the Member interface
export interface Member {
    role: string;
    name: string;
    borderColor: string;
    imageSrc: string;
    bio?: string;
    social?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  }
  
  // Define the MemberCategories type
  export type MemberCategories = {
    [category: string]: Member[];
  };
  
  // Exported member data
  export const memberCategories: MemberCategories = {
    "Web Development": [
      {
        role: "WEB DEVELOPMENT LEAD",
        name: "Deepak Kumar",
        borderColor: "#79F77D",
        imageSrc: "/img/webdev.png",
        bio: "Web Development Lead with expertise in modern frontend frameworks and responsive design.",
        social: {
          github: "https://github.com/deepakkumar",
          linkedin: "https://linkedin.com/in/deepakkumar",
          twitter: "https://twitter.com/deepakkumar"
        }
      },
      {
        role: "FRONTEND DEVELOPER",
        name: "Raj Patel",
        borderColor: "#79F77D",
        imageSrc: "/img/webdev.png",
        bio: "Passionate frontend developer specializing in React and Next.js.",
      }
    ],
    "App Development": [
      {
        role: "APP DEVELOPMENT LEAD",
        name: "Chinmay Verma",
        borderColor: "#FF5752",
        imageSrc: "/img/applead.png",
        bio: "Mobile App Development Lead specializing in cross-platform development.",
        social: {
          github: "https://github.com/chinmayverma",
          linkedin: "https://linkedin.com/in/chinmayverma",
        }
      },
      {
        role: "MOBILE DEVELOPER",
        name: "Ankit Singh",
        borderColor: "#FF5752",
        imageSrc: "/img/applead.png",
        bio: "Expert in Flutter and native mobile app development.",
      }
    ],
    "Design": [
      {
        role: "GRAPHIC DESIGNER",
        name: "Ananya Singh",
        borderColor: "#7E9EFF",
        imageSrc: "/img/webdev.png",
        bio: "Creative graphic designer with a passion for visual storytelling.",
        social: {
          linkedin: "https://linkedin.com/in/ananyasingh",
        }
      },
      {
        role: "UI/UX DESIGNER",
        name: "Priya Sharma",
        borderColor: "#7E9EFF",
        imageSrc: "/img/webdev.png",
        bio: "UI/UX designer creating intuitive and engaging user experiences.",
      }
    ],
    "Content & PR": [
      {
        role: "CONTENT WRITER",
        name: "Rahul Sharma",
        borderColor: "#FFD700",
        imageSrc: "/img/webdev.png",
        bio: "Versatile content writer and communication strategist.",
        social: {
          linkedin: "https://linkedin.com/in/rahulsharma",
          twitter: "https://twitter.com/rahulsharma"
        }
      },
      {
        role: "PR SPECIALIST",
        name: "Avani Gupta",
        borderColor: "#FFD700",
        imageSrc: "/img/webdev.png",
        bio: "Public relations expert with extensive media networking skills.",
      }
    ]
  };
  
  // Category Colors
  export const categoryColors = {
    "Web Development": "#79F77D",
    "App Development": "#FF5752", 
    "Design": "#7E9EFF",
    "Content & PR": "#FFD700"
  };