// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/VIP_website/";
    },
  },{id: "nav-vip-teams",
          title: "VIP Teams",
          description: "Explore the teams below to learn about their projects, goals, and opportunities for involvement.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/VIP_website/teams/";
          },
        },{id: "nav-vip-advisors",
          title: "VIP Advisors",
          description: "Meet the faculty, staff, and industry professionals who guide our VIP teams.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/VIP_website/advisors/";
          },
        },{id: "nav-for-faculty",
          title: "For Faculty",
          description: "Information about the faculty",
          section: "Navigation",
          handler: () => {
            window.location.href = "/VIP_website/faculty/";
          },
        },{id: "dropdown-syllabus",
              title: "Syllabus",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/VIP_website/syllabus/";
              },
            },{id: "dropdown-how-to-apply",
              title: "How to Apply",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/VIP_website/apply/";
              },
            },{id: "projects-ai-companion-relationships",
          title: 'AI Companion Relationships',
          description: "Connecting Research, Design, and Policy   Led by Dr. Celeste Campos-Castillo",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/AI_Companion_Relationships/";
            },},{id: "projects-dux-lab",
          title: 'DUX Lab',
          description: "Design &amp; User Experience Lab   Led by Jeff Siarto",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/dux/";
            },},{id: "projects-icer",
          title: 'ICER',
          description: "Institute for Cyber-Enabled Research   Led by Craig Grosch",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/icer/";
            },},{id: "projects-icsas",
          title: 'ICSAS',
          description: "Interregional, Crosslinguistic South Asian Studies Team   Led by Jon Keune",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/ICSAS/";
            },},{id: "projects-mi-diaries",
          title: 'MI Diaries',
          description: "Documenting changes in the lives and language of people living in Michigan   Led by Drs. Sneller and Wagner",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/MI-Diaries/";
            },},{id: "projects-health-communication-amp-community-research",
          title: 'Health Communication &amp;amp; Community Research',
          description: "Empowering Healthier Communities Through Communication   Led by Dr. Mengyan Ma",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/health-communication-community-research/";
            },},{id: "projects-see-insight",
          title: 'SEE-Insight',
          description: "Developing computational tools to accelerate research and discovery   Led by Dirk Colbry",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/see-insight/";
            },},{id: "projects-space-lab",
          title: 'SpaCE Lab',
          description: "Spatial and Community Ecology Lab   Led by Dr. Phoebe Zarnetske",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/space_lab/";
            },},{id: "projects-token-lab",
          title: 'TOKEN Lab',
          description: "Transforming Our Knowing to Empower Nous (TOKEN) Lab   Led by Tianyi Kou-Herrema, Jonathan Barber, and Junlin Yuan",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/token/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
