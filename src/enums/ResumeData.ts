const resumeData: ResumeData = {
  name: "Tailan B. Morita",
  job_title: "Front-end Engineer",
  portfolio: {
    label: "www.tailan.site",
    href: "https://tailan.site",
  },
  column_left: [
    {
      title: "Summary",
      items: [
        {
          content:
            "Highly skilled **modern front-end engineer** with **3 years of experience** designing, developing, and implementing **complex web applications**",
        },
        {
          content:
            "Proven ability to **mentor** and **collaborate** with **development teams**, translate designs into functional interfaces, troubleshoot, and fix bugs. Extensive experience working with Vue.js, Typescript, CSS, Figma, and collaborating with UX/UI designers and back-end developers",
        },
      ],
      type: "simple-list",
    },
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
          percentage: 93,
        },
        {
          content: "Javascript / Typescript",
          percentage: 91,
        },
        {
          content: "CSS",
          percentage: 95,
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
    // {
    //   title: "Languages",
    //   type: "bullet-list",
    //   items: [
    //     { content: "Portuguese (br) - native" },
    //     { content: "English - fluent" },
    //   ],
    // },
  ],
  column_right: [
    {
      title: "Experience",
      type: "simple-list",
      items: [
        {
          title: "Lead front-end developer",
          subtitle: "FiqOn - August(2023) to July(2024)",
          content: {
            type: "bullet-list",
            items: [
              {
                content:
                  "Led the development of the **System Integrations IDE Platform**, crafting a new **front-end foundation** by:",
              },
              {
                content: {
                  type: "bullet-list",
                  items: [
                    {
                      content:
                        "Thoroughly **researching new technologies and libraries** - hand-picking which ones to be used in this new codebase while considering **performance**, **ease of use**, **future-proofing**, and **customization**",
                    },
                    {
                      content:
                        "Defining **clear guidelines**, **technical documentation of development patterns**, and a **robust architecture** to ease onboarding, ensure code reliability, and swift collaboration within the front-end team - up to 5 concurrent contributors",
                    },
                  ],
                },
              },
              {
                content:
                  "Coordinated the front-end development of said project encompassing over 150 files. Fostered a **productive front-end development team**, providing mentorship through **code reviews**, **implementation suggestions** and **insightful guidance**",
              },
              {
                content:
                  "Worked closely with **designers** and **back-end developers** to ensure **clear communication of front-end requirements** and **cohesion** throughout development",
              },
              {
                content:
                  "Translated intricate **Figma designs** into robust and functional **web interfaces**, ensuring a seamless user experience. Adhered to relevant **guidelines**, **browser support**, and **best practices**",
              },
            ],
          },
        },
        {
          title: "Mid front-end developer",
          subtitle: "FiqOn - November(2022) to  August(2023)",
          content: {
            type: "bullet-list",
            items: [
              {
                content:
                  "Worked alongside the **UX team** to improve **user satisfaction** through **smoothing transitions**, **animations**, and **feedback** on the interface",
              },
              {
                content:
                  "Developed and configured the **core UI library** used within the project with **Vue**, **JavaScript**, and **CSS**",
              },
              {
                content:
                  "Developed **new major features** with reliability and minimal bugs on top of an existing system with **constantly active users**",
              },
            ],
          },
        },
        {
          title: "Junior front-end developer",
          subtitle: "FiqOn - June(2022) to November(2022)",
          content: {
            type: "bullet-list",
            items: [
              {
                content:
                  "Design and implementation of **minor features** into an **existing Vue codebase** while maintaining development patterns and guidelines",
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
