export type Figure = {
  src: string;
  alt: string;
  caption?: string;
};

export type Approach = {
  title: string;
  body: string[];
  figures?: Figure[];
};

export type Challenge = {
  challenge: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  client: string;
  short: string;
  roles: string[];
  website?: string;
  overview: string;
  highlights?: string[];
  problem: string[];
  goals: string[];
  role: {
    responsibilities: string[];
    collaborators: string[];
  };
  approaches: Approach[];
  challenges: Challenge[];
  takeaways: string[];
  extra?: {
    heading: string;
    body: string[];
    bullets?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "facebook-dating-expiring-matches",
    title: "Facebook Dating: Expiring Matches",
    year: 2024,
    client: "Meta",
    short:
      "Shipped contextual copy that helped people message matches before they expired.",
    roles: ["UX writing", "Voice and tone", "Figma"],
    overview:
      "I wrote the contextual message for Facebook Dating’s Expiring Matches feature. It shipped in June 2024.",
    problem: [
      "About 40% of matches never turn into a conversation. People match, then never talk.",
      "Older matches move out of view and a backlog builds. This happens quickly for women, since only three matches fit in the viewport.",
    ],
    goals: [
      "Expire matches seven days after they happen so inventory can recirculate.",
      "Drive more matches and more conversations by making the time limit clear.",
    ],
    role: {
      responsibilities: [
        "Wrote the copy for the contextual message on the matches page.",
      ],
      collaborators: [
        "Lead content designer",
        "Product designer",
        "Two product managers",
        "Two software engineers",
      ],
    },
    approaches: [
      {
        title: "UX writing",
        body: [
          "Early drafts leaned on missing out on potential love, mentioned that matches might be suggested again, and used an urgent tone to reach out before it was too late. The team wanted a more neutral sentiment that did not emphasize love and could work for friend matches too.",
          "After revisions, the header kept urgency (“Time’s running out”). The first sentence states the rule: matches expire if you don’t send a message. Earlier drafts implied that instead of saying it. The second sentence keeps a light fear-of-missing-out beat and a clear call to action.",
        ],
        figures: [
          {
            src: "/projects/expiring-matches/iterations.png",
            alt: "Copy iterations for the expiring matches contextual message",
          },
          {
            src: "/projects/expiring-matches/indicators.png",
            alt: "Expiring matches indicators in the Facebook Dating interface",
          },
        ],
      },
    ],
    challenges: [
      {
        challenge:
          "The product designer and product managers gave conflicting direction on the copy.",
        solution:
          "I mocked people’s suggestions so the team could react to real options, then revised until a direction worked for the majority.",
      },
    ],
    takeaways: [
      "The experiment showed a positive impact on Dating topline and engagement, including conversation daily active users (CDAU) for US/CA and US/CA young adult users.",
      "The first seven days isolated the impact of the contextual message. The following seven days showed the impact of expiring matches and recirculating candidates.",
      "On Android US/CA, matches lifted 10.34 ± 2.07 in the message period and 10.29 ± 1.98 as expiration recirculated inventory. iOS US/CA matches lifted 2.31 ± 1.22, then 10.14 ± 1.45.",
      "People were more likely to message before a match expired, and they got another chance with previous matches without the same overwhelm.",
    ],
  },
  {
    slug: "facebook-dating-returning-users",
    title: "Facebook Dating: Returning Users",
    year: 2024,
    client: "Meta",
    short:
      "Named the Save Profile feature and wrote deletion and re-entry flows that launched in October 2024.",
    roles: ["UX writing", "Voice and tone", "Figma", "Naming"],
    overview:
      "I led naming for a new Facebook Dating feature and wrote the copy for every screen in the flows. Save Profile launched in October 2024.",
    problem: [
      "People deleted their profiles to reset matches and the dating queue, then created a new profile. The existing UI offered delete or refresh recommendations.",
      "Returning users accounted for 31% of all new Dating profile creations. Most dropped off at the welcome screen.",
    ],
    goals: [
      "Help people recreate a profile and onboard faster if they had deleted one.",
    ],
    role: {
      responsibilities: [
        "Facilitated the naming brainstorm (namestorm).",
        "Wrote copy for the deletion flow.",
        "Wrote copy for the re-entry flow.",
      ],
      collaborators: [
        "Lead content designer",
        "Product designer",
        "Product manager",
        "Two software engineers",
      ],
    },
    approaches: [
      {
        title: "Namestorm",
        body: [
          "I prepared the FigJam file and agenda. With six content designers and one product designer, I framed how the feature related to the rest of Dating. In twenty minutes we landed on two to three name candidates.",
          "I then built a decision framework: Dating context, standalone clarity, user expectations, localization, name in action, and appeal. The team chose “Save profile” — not one of the top scored ideas — because it was straightforward in every locale.",
        ],
        figures: [
          {
            src: "/projects/returning-users/namestorm.png",
            alt: "Namestorm FigJam session for the returning users feature",
          },
          {
            src: "/projects/returning-users/framework.png",
            alt: "Decision-making framework used to evaluate feature names",
            caption: "Decision-making framework I created to determine the feature name.",
          },
        ],
      },
      {
        title: "Deletion flow",
        body: [
          "I explored value-prop copy about easy onboarding, formal versus conversational language, active versus passive voice, and “profile info” versus “your profile.” Privacy partners required us to say what was saved, what was deleted, and how someone could delete saved info.",
          "After critiques and a working session with the product designer and lead content designer, the copy provides security and reassurance. “In case you rejoin” covers more than one reason to come back. The seven-day cooldown is the existing wait between delete and rejoin. The 90-day deletion of saved info sits on the last screen so it doesn’t overload people before they decide.",
        ],
        figures: [
          {
            src: "/projects/returning-users/deletion.png",
            alt: "Deletion flow screens for saving a Dating profile",
          },
        ],
      },
      {
        title: "Re-entry flow",
        body: [
          "I tested informative versus encouraging headlines, body copy, and CTAs for the welcome screen and bottom sheet.",
          "The welcome headline greets people back. Body copy reminds them they have a saved profile and explains restore versus delete. CTA labels make the choice obvious. The deletion modal is clear that they would start from scratch.",
          "Knowing returning users are 31% of new profile creations, the bottom sheet leans into wanting a fresh start, with an encouraging tone.",
        ],
        figures: [
          {
            src: "/projects/returning-users/reentry.png",
            alt: "Re-entry flow screens for restoring a saved Dating profile",
          },
        ],
      },
    ],
    challenges: [
      {
        challenge:
          "Dating already had similar features. This one needed to be distinct so people wouldn’t confuse it with the others.",
        solution:
          "I used plain, informative language in the deletion flow and put the important details in the bottom sheet so people could decide before deleting.",
      },
    ],
    takeaways: [
      "In experiment, people who saved and then restored a profile saw more engagement than people who didn’t.",
      "US/CA young adult conversation DAU showed a positive overall effect (436 ± 277; 0.0091 ± 0.0058% metric impact).",
      "Dating engagement DAU also moved in the right direction (1.008K ± 0.353K overall effect; 0.0061 ± 0.0021% metric impact).",
    ],
  },
  {
    slug: "zeroheight-learning-hub",
    title: "zeroheight Learning Hub",
    year: 2022,
    client: "zeroheight",
    short:
      "Wrote and managed 40+ help center articles in one voice, with processes teams could actually use.",
    roles: ["Design systems", "Documentation", "UX writing", "Voice and tone"],
    website:
      "https://learninghub.zeroheight.com/hc/en-us/categories/6181523279131-Help-Center",
    overview:
      "I was the only person dedicated to creating and managing documentation in the Learning Hub, zeroheight’s help center.",
    highlights: [
      "Wrote documentation in one voice so customers could use product features.",
      "Worked with product, support, customer success, sales, and design advocates to improve articles from feedback.",
      "Set up request processes for help center updates and product-release docs.",
    ],
    problem: [
      "Product managers, customer success managers, design advocates, and support all owned Learning Hub content.",
      "Without a dedicated writer, style and grammar were inconsistent, and articles went stale while people juggled their main jobs.",
    ],
    goals: [
      "Build a help center people could use to solve problems in zeroheight.",
      "Change how teams worked so they had a partner focused on documentation.",
      "Create processes for updates and new-feature docs that would scale as the company grew.",
    ],
    role: {
      responsibilities: [
        "Aligned existing content to one voice and style.",
        "Wrote documentation that was understandable for all users.",
      ],
      collaborators: [
        "Product managers",
        "Customer success managers",
        "Design advocates",
        "Customer support",
        "Sales",
        "Product marketing managers",
      ],
    },
    approaches: [
      {
        title: "Help center style guide",
        body: [
          "I logged inconsistencies across articles — for example, bold versus italics for user actions — and studied other help centers.",
          "I wrote a Learning Hub style guide covering voice and tone, grammar, and terminology, based on Flapjack, zeroheight’s design system.",
          "Then I edited pages that didn’t match and wrote new articles in the same format.",
        ],
        figures: [
          {
            src: "/projects/learning-hub/style-guide.png",
            alt: "zeroheight help center style guide",
            caption: "zeroheight help center style guide",
          },
        ],
      },
      {
        title: "How-to articles",
        body: [
          "Most docs were already usable. Some needed clearer steps or less internal rationale that didn’t help customers.",
          "I used a repeating pattern: an introduction that names the feature, what you can do with it, and why it helps a design system; action-based subheads with numbered steps; then FAQs. Screenshots and GIFs showed the feature in use.",
        ],
        figures: [
          {
            src: "/projects/learning-hub/howto-before.png",
            alt: "Original how-to article for Synced Pages written by a product manager",
            caption: "Before: original how-to article for the Synced Pages feature.",
          },
          {
            src: "/projects/learning-hub/howto-after.png",
            alt: "Revised how-to article for Synced Pages",
            caption: "After: revised how-to article for the Synced Pages feature.",
          },
        ],
      },
    ],
    challenges: [
      {
        challenge:
          "I was the first person hired to manage documentation, so partners were still learning how to work with me.",
        solution:
          "I met stakeholders regularly, learned their pain points, and set up request templates in Slack and Notion — the tools they already used.",
      },
      {
        challenge:
          "Product, some CSMs, and support worked GMT. I worked PST.",
        solution:
          "I used the two-hour overlap for meetings and questions, drafted release docs in Notion for review overnight, and turned around edits the next morning.",
      },
      {
        challenge:
          "I was new to design-system terminology and how customers talked about the product.",
        solution:
          "I met a design advocate weekly, researched on my own, and confirmed details with subject-matter experts.",
      },
    ],
    takeaways: [
      "I added and updated 40+ how-to articles in less than a year.",
      "Cross-functional relationships mattered as much as the words. My manager’s feedback was that people trusted me to deliver quality work on time.",
    ],
  },
  {
    slug: "learning-hub-information-architecture",
    title: "New Learning Hub Information Architecture",
    year: 2022,
    client: "zeroheight",
    short:
      "Reorganized help content after a Zendesk migration so related topics lived in one place.",
    roles: [
      "Information architecture",
      "Content management",
      "Design systems",
      "Figma",
    ],
    website:
      "https://learninghub.zeroheight.com/hc/en-us/categories/6181523279131-Help-Center",
    overview:
      "I refined the information architecture of the Learning Hub after content moved from zeroheight into Zendesk.",
    highlights: [
      "Created wireframes in Figma.",
      "Collaborated with design advocates to improve the IA.",
    ],
    problem: [
      "Two style guides held separate best-practice and product documentation.",
      "After the Zendesk migration, everything lived on one site and needed a new structure.",
    ],
    goals: [
      "Organize content using current categories, condensing them where they overlapped.",
    ],
    role: {
      responsibilities: [
        "Created the first IA iteration that a design advocate (who led the migration) then expanded.",
      ],
      collaborators: [
        "Head of content and community",
        "Design advocate",
        "Contract frontend developer",
      ],
    },
    approaches: [
      {
        title: "Information architecture",
        body: [
          "On a tight deadline I focused on top and subsection navigation. I combined small, related sections and moved overlapping best-practice material into help center sections.",
          "Because we worked across time zones, I submitted a proposed sitemap at the end of the project lead’s day. By the time I started the next morning, the final sitemap was already done.",
          "If I did this again, I would ask for the reasoning behind those decisions and whether data supported them.",
        ],
        figures: [
          {
            src: "/projects/learning-hub-ia/original.png",
            alt: "Original information architecture for the zeroheight help center and best practices guides",
            caption: "Original IA for the help center and best practices guides.",
          },
          {
            src: "/projects/learning-hub-ia/proposed.png",
            alt: "Proposed information architecture for the new Learning Hub",
            caption: "My proposed IA for the new Learning Hub.",
          },
          {
            src: "/projects/learning-hub-ia/final.png",
            alt: "Final information architecture created by the project lead",
            caption: "Final IA created by the project lead.",
          },
        ],
      },
    ],
    challenges: [
      {
        challenge: "I joined in the middle of the project.",
        solution:
          "I met the design advocate and head of content and community to get current, then stayed in regular contact so I could step in where needed.",
      },
    ],
    takeaways: [
      "The first iteration was good enough for the time we had. As a startup we moved fast and cleaned up IA for current needs rather than a fully scalable structure.",
    ],
    extra: {
      heading: "Revisiting a year later",
      body: [
        "Authors had added enough content that categories became catch-alls. The next goal was an IA that could grow with the product.",
        "I was laid off before I could lead that revamp. The plan was to work with design advocates, product managers, customer success, and support.",
      ],
      bullets: [
        "Informally interview teams and customers in the zeroheight community Slack",
        "Audit the Help Center, Guides, and Resources",
        "Run usability tests with internal and external users",
        "Create a sitemap and a taxonomy of search terms",
        "Rearrange content and watch page views plus support tickets that the hub could have answered",
      ],
    },
  },
  {
    slug: "code-for-san-jose",
    title: "Code for San Jose Website Redesign",
    year: 2021,
    client: "Code for San Jose",
    short:
      "Audited the old site and wrote plain-language volunteer copy for a redesign that was later paused.",
    roles: [
      "Content audit",
      "Content inventory",
      "UX writing",
      "Wireframing",
      "Figma",
    ],
    overview:
      "I was the only person on UX writing and content strategy for the Code for San Jose website redesign.",
    highlights: [
      "Audited and inventoried the old site to find what the new one should fix.",
      "Wrote, edited, and wireframed web copy in plain language in the organization’s voice.",
      "Used Google Analytics to set goals, metrics, and KPIs for new pages.",
    ],
    problem: [
      "New volunteers were unclear how to onboard and join projects.",
      "Without a straightforward process, many stopped volunteering.",
      "The existing site did not give clear onboarding instructions.",
    ],
    goals: [
      "Reduce how many volunteers needed extra onboarding help.",
      "Increase traffic to the website.",
      "Improve how volunteers felt about onboarding.",
    ],
    role: {
      responsibilities: [
        "Audit and inventory the current website.",
        "Write and wireframe copy for the new pages.",
        "Develop goals, metrics, and KPIs for each page.",
      ],
      collaborators: ["Project manager", "UX designers", "Frontend engineer"],
    },
    approaches: [
      {
        title: "Content inventory and audit",
        body: [
          "The site had never been audited. I used research from the Director of Design and Usability to understand who used it, and asked: how does this content help volunteers join projects and stay?",
          "There were no metadata or text headers — a problem for SEO and accessibility on a GitHub-hosted site. Average session time was about 55 seconds. Content was outdated across pages.",
          "I recommended a platform that made metadata and updates easier, and advocated for h1s and metadata to improve search, accessibility, and traffic.",
        ],
        figures: [
          {
            src: "/projects/code-for-san-jose/audit.png",
            alt: "Content audit notes for the Code for San Jose website",
          },
        ],
      },
      {
        title: "Wireframing and writing copy",
        body: [
          "The FAQ explained what the organization did and what skills volunteers might have, but not how to become a volunteer or what was required.",
          "I wrote from a new volunteer’s questions, in a friendly, helpful voice.",
        ],
        figures: [
          {
            src: "/projects/code-for-san-jose/faq-before.png",
            alt: "Original Code for San Jose FAQ page",
            caption: "Before: Code for San Jose FAQ page.",
          },
          {
            src: "/projects/code-for-san-jose/faq-after.png",
            alt: "Proposed FAQ page mockup with new UX copy",
            caption: "After: proposed FAQ page mockup.",
          },
        ],
      },
    ],
    challenges: [
      {
        challenge:
          "I was working in a silo and learning process as I went.",
        solution:
          "I read about content strategy and UX writing and applied it while doing the work.",
      },
      {
        challenge:
          "Volunteers juggled other priorities, so people dropped out.",
        solution:
          "I jumped in on interface copy and recommendations wherever it unblocked the team.",
      },
    ],
    takeaways: [
      "I left for a new job before the redesign finished, and the project was later scrapped.",
      "As the only UX writer I under-advocated for the work. I learned I need to keep making the case for content.",
      "I should have talked to volunteers. In a staff role I would test whether the content actually helped.",
    ],
  },
  {
    slug: "cms-migration",
    title: "CMS Migration",
    year: 2019,
    client: "Chinese Historical Society of America",
    short:
      "Migrated 3,000 records, set taxonomy and training, and made the collection easier to find.",
    roles: [
      "Content management",
      "Content migration",
      "Content standards",
      "Information architecture",
      "Nomenclature",
      "Taxonomy",
    ],
    overview:
      "I led a CMS migration for the Chinese Historical Society of America.",
    highlights: [
      "Advocated for the project and its impact on the museum’s mission.",
      "Established taxonomy and an information framework for archival types.",
      "Created workflow and documentation to train interns and volunteers.",
    ],
    problem: [
      "Historians, other museums, and researchers asked to use artifacts for exhibitions, publications, and research.",
      "The database was outdated, so finding artifacts to fulfill those requests was hard.",
      "A team of six had to hunt objects by hand — a poor use of time.",
    ],
    goals: [
      "Make the CMS usable enough to fulfill requests.",
      "Connect the database to the museum website so anyone could view artifacts.",
      "Support the mission of promoting Chinese American contributions.",
    ],
    role: {
      responsibilities: [
        "Research database options and information structures.",
        "Collaborate with the vendor on the migration.",
        "Establish IA, taxonomy, nomenclature, and content standards.",
        "Set the information framework for each record.",
        "Create documentation and training for interns and volunteers.",
      ],
      collaborators: [
        "CMS software vendors",
        "Gallery and facilities coordinator",
      ],
    },
    approaches: [
      {
        title: "Information architecture",
        body: [
          "I organized the database the way peer systems do, using Archives, Objects, and Photos so collections staff and researchers could find their way.",
        ],
        figures: [
          {
            src: "/projects/cms-migration/categories.png",
            alt: "Database categories for the museum’s collection",
            caption: "Database categories for the museum’s collection.",
          },
        ],
      },
      {
        title: "Framework for content",
        body: [
          "I defined attributes people need to find an object in public search (tags, nomenclature, collection name) and attributes collections staff need (dimensions, record number, donor).",
          "I wrote naming rules, required fields, and a training document, then ran sessions with interns and volunteers.",
        ],
        figures: [
          {
            src: "/projects/cms-migration/record.png",
            alt: "Collection record example in the new CMS",
            caption: "Collection record example.",
          },
        ],
      },
    ],
    challenges: [
      {
        challenge:
          "The museum ran multiple programs at once. A team of six had to cover everything.",
        solution:
          "There was no hard launch date, so I sequenced migration around program needs.",
      },
      {
        challenge:
          "A lot of content had never been entered. I had to choose between updating old records and adding new ones.",
        solution:
          "I prioritized new content so more of the collection could reach an audience.",
      },
      {
        challenge:
          "Office space was small. I was the only collections staff member and could not effectively train more than a few people at once.",
        solution:
          "Interns and volunteers came on staggered days. I capped the group at four based on time and space.",
      },
    ],
    takeaways: [
      "Migrated more than 3,000 content types (images and text).",
      "Increased usability of content for end users by 71%.",
      "Increased records available by 22% after training more than ten interns and volunteers over two years.",
      "The database improved research requests and supported the museum’s mission. I would set foundations first instead of building them as I went — updating existing records would have given new entries a stronger base.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
