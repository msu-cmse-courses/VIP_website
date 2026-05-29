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
  },{id: "nav-teams",
          title: "Teams",
          description: "VIP Teams.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/VIP_website/teams/";
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
            },{id: "dropdown-peer-evaluation",
              title: "Peer Evaluation",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/VIP_website/peer_evaluation/";
              },
            },{id: "projects-dux-lab",
          title: 'DUX Lab',
          description: "Led by Jeff Siarto",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/dux/";
            },},{id: "projects-health-communication-amp-community-research",
          title: 'Health Communication &amp;amp; Community Research',
          description: "Led by Mengyan Ma",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/health-communication-community-research/";
            },},{id: "projects-see-insight",
          title: 'SEE-Insight',
          description: "Led by Dirk Colbry",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/see-insight/";
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
