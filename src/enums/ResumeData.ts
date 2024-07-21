const resumeData: ResumeData = {
  name: "Tailan B. Morita",
  job_title: "Front-end Engineer",
  column_left: [
    {
      title: "Contact",
      type: "simple-list",
      items: [
        {
          icon: "mdi-email",
          content: "bmtailan@gmail.com",
        },
        {
          icon: "mdi-phone",
          content: "+55 42 99152-0362",
        },
        {
          icon: "mdi-web",
          content: "https://tailan.site",
        },
        {
          icon: "custom:git",
          content: "https://github.com/Typhs",
        },
      ],
    },
    {
      title: "Skills",
      type: "skill-list",
      items: [
        {
          content: "Vue.js",
          percentage: 90,
        },
        {
          content: "Javascript / Typescript",
          percentage: 90,
        },
        {
          content: "CSS",
          percentage: 90,
        },
        {
          content: "Python",
          percentage: 60,
        },
      ],
    },
    {
      title: "Education",
      type: "simple-list",
      items: [
        {
          title: "Technologist Degree in Systems Analysis and Development",
          subtitle: "URFPR - Ponta Grossa (PR), Brazil",
          content: "2021 - present",
        },
      ],
    },
    {
      title: "Languages",
      type: "bullet-list",
      items: [
        { content: "Portuguese (br) - native" },
        { content: "English - fluent" },
      ],
    },
  ],
  column_right: [
    {
      title: "Summary",
      items: [
        {
          content:
            "Highly skilled modern front-end developer with 3 years of experience designing, developing, and implementing complex web applications. \nProven ability to mentor and collaborate with development teams, translate designs into functional interfaces, troubleshoot, and fix bugs. Extensive experience working with Vue.js, JavaScript, CSS, Figma, and collaborating with UX/UI designers and back-end developers",
        },
      ],
      type: "simple-list",
    },
    {
      title: "Experience",
      type: "simple-list",
      items: [
        {
          title: "Mid front-end developer",
          subtitle: "Fiqon - ??? to ???",
          content: {
            type: "bullet-list",
            items: [
              {
                content:
                  "Worked alongside the UX team to improve user satisfaction through smoothing transitions, animations, and feedback on the interface",
              },
              {
                content:
                  "Developed and configured the core UI library used within the project with Vue, JavaScript, and CSS",
              },
              {
                content:
                  "Developed new major features with reliability and minimal bugs on top of an existing system with constantly active users",
              },
            ],
          },
        },
        {
          title: "Junior front-end developer",
          subtitle: "Fiqon - ??? to ???",
          content: {
            type: "bullet-list",
            items: [
              {
                content:
                  "Design and implementation of minor features into an existing Vue codebase while maintaining development patterns and guidelines",
              },
              {
                content:
                  "Diagnosing and fixing pre-existing bugs on the interface",
              },
            ],
          },
        },
      ],
    },
  ],
};

export default resumeData;
