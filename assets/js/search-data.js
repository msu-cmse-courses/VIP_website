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
  },{id: "nav-labs",
          title: "Labs",
          description: "Labs offering VIP courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/VIP_website/labs/";
          },
        },{id: "nav-faculty",
          title: "Faculty",
          description: "Information about the faculty",
          section: "Navigation",
          handler: () => {
            window.location.href = "/VIP_website/faculty/";
          },
        },{id: "dropdown-syllabus",
              title: "syllabus",
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
            },{id: "projects-see-insight",
          title: 'SEE-Insight',
          description: "Lab led by Dirk Colbry",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/see-insight/";
            },},{id: "projects-dux-lab",
          title: 'DUX Lab',
          description: "Led by Jeff Siarto",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/dux/";
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
