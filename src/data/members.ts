export interface Member {
  role: string;
  name: string;
  year: number;
  borderColor: string;
  imageSrc: string;
  bio?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  isOrganizer?: boolean; 
}

export const memberCategories = {
  "Tech Members": [
    {
      category: "Web Developers",
      members: [
        {
          role: "WEB DEVELOPMENT LEAD",
          name: "Deepak Kumar",
          year: 2023,
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
          role: "Backend Web Developer",
          name: "Rahul Kumar",
          year: 2022,
          borderColor: "#79F77D",
          imageSrc: "/img/webdev2.png",
          bio: "Passionate frontend developer specializing in React and Next.js.",
          social: {
            github: "https://github.com/deepakkumar",
            linkedin: "https://linkedin.com/in/deepakkumar",
            twitter: "https://twitter.com/deepakkumar"
          }
        },
        {
          role: "WEB DEVELOPER",
          name: "Ishan Tiwari",
          year: 2023,
          borderColor: "#79F77D",
          imageSrc: "/img/webdev3.png",
          bio: "Experienced backend developer with expertise in Node.js and MongoDB.",
          social: {
            github: "https://github.com/deepakkumar",
            linkedin: "https://linkedin.com/in/deepakkumar",
            twitter: "https://twitter.com/deepakkumar"
          }
        },
        {
          role: "WEB DEVELOPER",
          name: "Abhishek Kumar",
          year: 2024,
          borderColor: "#79F77D",
          imageSrc: "/img/webdev4.png",
          bio: "Frontend Web Developer with expertise in React JS and animation Library",
          social: {
            github: "https://github.com/misanthropic-codes",
            linkedin: "https://linkedin.com/in/abhishek-codes",
            twitter: "https://twitter.com/misanthropic_12"
          }
        }
      ]
    },
    {
      category: "App Developers",
      members: [
        {
          role: "APP DEVELOPMENT LEAD",
          name: "Chinmay Verma",
          year: 2022,
          borderColor: "#FF5752",
          imageSrc: "/img/applead.png",
          bio: "Mobile App Development Lead specializing in cross-platform development.",
          social: {
            github: "https://github.com/Chinmayverma1602",
            linkedin: "https://www.linkedin.com/in/chinmay-verma-90353921b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
        },
        {
          role: "App Developer",
          name: "Roshan Singh",
          year: 2023,
          borderColor: "#FF5752",
          imageSrc: "/img/applead2.png",
          bio: "Expert in Flutter and native mobile app development.",
          social: {
            github: "https://github.com/roshan2708",
            linkedin: "https://www.linkedin.com/in/roshan-singh-680b842a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
        },
        {
          role: "App Tech Member",
          name: "Koyal Das",
          year: 2024,
          borderColor: "#FF5752",
          imageSrc: "/img/applead3.png",
          bio: "Experienced iOS developer with a focus on building high-performance apps.",
          social: {
            github: "https://github.com/KoyalDas08",
            linkedin: "https://www.linkedin.com/in/koyal-das-14a47132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
        },
        
      ]
    },
    {
      category: "ML/Ops",
      members: [
        {
          role: "ML Tech Member",
          name: "Arjun Sharma",
          year: 2023,
          borderColor: "#C46DD9",
          imageSrc: "/img/mlops.png",
          bio: "Skilled in developing and deploying machine learning models at scale."
        },
        {
          role: "DATA SCIENTIST",
          name: "Meera Agarwal",
          year: 2022,
          borderColor: "#C46DD9",
          imageSrc: "/img/mlops.png",
          bio: "Leverages data and analytics to uncover valuable business insights."
        },
        {
          role: "DEVOPS ENGINEER",
          name: "Rahul Malhotra",
          year: 2021,
          borderColor: "#C46DD9",
          imageSrc: "/img/mlops.png",
          bio: "Expertise in automating and optimizing the software delivery process."
        }
      ]
    }
  ],
  "Media Team": [
    {
      category: "Graphics Designers",
      members: [
        {
          role: "GRAPHIC DESIGNER",
          name: "Ananya Singh",
          year: 2021,
          borderColor: "#7E9EFF",
          imageSrc: "/img/webdev.png",
          bio: "Creative graphic designer with a passion for visual storytelling.",
          social: {
            linkedin: "https://linkedin.com/in/ananyasingh"
          }
        },
        {
          role: "UI/UX DESIGNER",
          name: "Priya Sharma",
          year: 2022,
          borderColor: "#7E9EFF",
          imageSrc: "/img/webdev.png",
          bio: "UI/UX designer creating intuitive and engaging user experiences."
        },
        {
          role: "MOTION DESIGNER",
          name: "Rishab Gupta",
          year: 2023,
          borderColor: "#7E9EFF",
          imageSrc: "/img/webdev.png",
          bio: "Specializes in creating dynamic and visually captivating motion graphics."
        }
      ]
    },
    {
      category: "Video Editors",
      members: [
        {
          role: "VIDEO EDITOR",
          name: "Avani Gupta",
          year: 2022,
          borderColor: "#FFB6C1",
          imageSrc: "/img/mediadep.png",
          bio: "Expert in video editing and post-production techniques."
        },
        {
          role: "CONTENT CREATOR",
          name: "Rohan Malhotra",
          year: 2023,
          borderColor: "#FFB6C1",
          imageSrc: "/img/mediadep.png",
          bio: "Skilled in creating engaging and visually appealing content."
        }
      ]
    },
    {
      category: "Content Writers",
      members: [
        {
          role: "CONTENT WRITER",
          name: "Rahul Sharma",
          year: 2022,
          borderColor: "#FFD700",
          imageSrc: "/img/webdev.png",
          bio: "Versatile content writer and communication strategist.",
          social: {
            linkedin: "https://linkedin.com/in/rahulsharma",
            twitter: "https://twitter.com/rahulsharma"
          }
        },
        {
          role: "COPYWRITER",
          name: "Nisha Sharma",
          year: 2023,
          borderColor: "#FFD700",
          imageSrc: "/img/webdev.png",
          bio: "Adept at creating compelling and persuasive copy for various platforms."
        }
      ]
    },
    {
      category: "Photographers",
      members: [
        {
          role: "PHOTOGRAPHER",
          name: "Isha Malhotra",
          year: 2021,
          borderColor: "#8B4513",
          imageSrc: "/img/mediadep.png",
          bio: "Skilled in capturing visually stunning and captivating photographs."
        },
        {
          role: "VIDEOGRAPHER",
          name: "Sanjay Gupta",
          year: 2024,
          borderColor: "#8B4513",
          imageSrc: "/img/mediadep.png",
          bio: "Expertise in creating high-quality video content for various mediums."
        }
      ]
    }
  ],
  "PR Team": [
    {
      role: "PR SPECIALIST",
      name: "Avani Gupta",
      year: 2023,
      borderColor: "#FFD700",
      imageSrc: "/img/webdev.png",
      bio: "Public relations expert with extensive media networking skills."
    },
    {
      role: "SOCIAL MEDIA MANAGER",
      name: "Isha Malhotra",
      year: 2021,
      borderColor: "#FFD700",
      imageSrc: "/img/webdev.png",
      bio: "Experienced in developing and executing social media strategies."
    },
    {
      role: "CONTENT STRATEGIST",
      name: "Sanjay Gupta",
      year: 2024,
      borderColor: "#FFD700",
      imageSrc: "/img/webdev.png",
      bio: "Specializes in crafting content that aligns with business goals."
    }
  ],
  "Core Team": [

    {
      role: "GDG ON CAMPUS ORGANIZER",
      name: "Rishbh Kumar",
      year: 2024,
      borderColor: "#4285F4", // Google Blue
      imageSrc: "/img/lead.png",
      bio: "Leading GDG On Campus at Haldia Institute of Technology, passionate about building tech communities and fostering innovation.",
      social: {
        github: "https://github.com/rishavraj",
        linkedin: "https://linkedin.com/in/rishavraj",
        twitter: "https://twitter.com/rishavraj"
      },
      isOrganizer: true
    },

    {
      role: "WEB DEVELOPMENT LEAD",
      name: "Deepak Kumar",
      year: 2023,
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
      role: "APP DEVELOPMENT LEAD",
      name: "Chinmay Verma",
      year: 2022,
      borderColor: "#FF5752",
      imageSrc: "/img/applead.png",
      bio: "Mobile App Development Lead specializing in cross-platform development.",
      social: {
        github: "https://github.com/chinmayverma",
        linkedin: "https://linkedin.com/in/chinmayverma"
      }
    },
    {
      role: "GRAPHIC DESIGN LEAD",
      name: "Ananya Singh",
      year: 2021,
      borderColor: "#7E9EFF",
      imageSrc: "/img/webdev.png",
      bio: "Creative graphic design lead with a passion for visual storytelling.",
      social: {
        linkedin: "https://linkedin.com/in/ananyasingh"
      }
    },
    {
      role: "PR LEAD",
      name: "Avani Gupta",
      year: 2023,
      borderColor: "#FFD700",
      imageSrc: "/img/webdev.png",
      bio: "Public relations expert and lead with extensive media networking skills."
    }
  ]
};

export const categoryColors = {
  "Web Developers": "#79F77D",
  "App Developers": "#FF5752",
  "ML/Ops": "#C46DD9",
  "Graphics Designers": "#7E9EFF",
  "Video Editors": "#FFB6C1",
  "Content Writers": "#FFD700",
  "Photographers": "#8B4513",
  "PR Team": "#FFD700",
  "Core Team": "#FFFFFF"
};