import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "M. Bharath",
    "title": "Full Stack Developer & Business Development Enthusiast",
    "email": "connectatbharath@gmail.com",
    "phone": "9176697670",
    "linkedin": "",
    "github": "https://github.com/PreciousBharath/my-project-e-learn.git",
    "location": "5/81, East street, P.Pudupatti, Karumathur, Madurai-625514",
    "summary": "A dedicated IT enthusiast with a strong foundation in full-stack web development and business development. Passionate about learning new technologies and contributing to business growth. Proven skills in social media marketing and project management."
  },
  "experience": [
    {
      "title": "Instagram Service Provider",
      "company": "",
      "dates": "",
      "description": "Provided Instagram growth services to individuals and small businesses by increasing followers and likes to boost online visibility and brand promotion.",
      "highlights": [
        "Managed client accounts and developed basic social media strategies.",
        "Delivered measurable results through targeted promotional techniques."
      ]
    },
    {
      "title": "Intern",
      "company": "Phoenix Softech",
      "dates": "",
      "description": "Completed a two-week internship in Full Stack Web Development using Python.",
      "highlights": [
        "Worked with HTML, CSS, JavaScript, Bootstrap, Flask, and SQLite.",
        "Built a mini project with user login features."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Technology in Information Technology",
      "institution": "Sethu Institute Of Technology",
      "years": "2022-2026",
      "gpa": "8.1"
    },
    {
      "degree": "High School Certificate (HSC)",
      "institution": "Kazhuvathevar Memorial Matric.Hr.Sec.School",
      "years": "2021-2022",
      "gpa": "78.5%"
    },
    {
      "degree": "Secondary School Leaving Certificate (SSLC)",
      "institution": "Kazhuvathevar Memorial Matric.Hr.Sec.School",
      "years": "2018-2020",
      "gpa": "89.4%"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "E-Alert for Vehicle Crash Using IoT",
      "description": "A smart system that detects vehicle accidents using sensors and instantly sends location-based alerts via GPS and GSM to emergency contacts.",
      "technologies": [
        "IoT",
        "Accelerometers",
        "GPS",
        "GSM modules",
        "Microcontrollers"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Instagram Service Project",
      "description": "Managed and developed strategies for increasing Instagram followers and engagement for better online visibility.",
      "technologies": [
        "Social Media",
        "Digital Marketing"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "floating-shapes",
  "about": "modern",
  "experience": "detailed",
  "projects": "showcase",
  "skills": "categories",
  "skillsDisplay": "hero",
  "contact": "card",
  "colorPalette": "indigo"
};
