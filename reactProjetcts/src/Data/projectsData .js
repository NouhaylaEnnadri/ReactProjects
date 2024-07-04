import {
  NoylRead_Dark,
  NoylRead_Light,
  NoylRead_Themes,
  noylisDelicous_Dark,
  noylisDelicous_Light,
  noylisDelicous_details,
  project1,
  project1Light,
} from "../assets";

export const projectsData = [
  {
    id: 1,
    projectName: "NoylRead",
    LightImage: NoylRead_Light,
    DarkImage: NoylRead_Dark,
    link: "https://noylread.netlify.app/",
    tags: ["React", "tailwind", "UX/UI"],
    overview:
      "NoylRead is a personal blog dedicated to books, designed to showcase favorite reads, books on the 'to-be-read' (TBR) list, and favorite authors. It serves as a platform to share book reviews, personal opinions, and insights into various literary works. This project marks the first venture into UX and UI design, as well as the journey into learning React. Please note that the site is still under construction and improvements are ongoing.",
    features: [
      "Detailed reviews and personal opinions on various books, providing insights and recommendations for readers.",
      "Organized lists of favorite books and TBR books, making it easy for visitors to explore and discover new reads.",
      "Biographical information and notable works of favorite authors, celebrating their contributions to literature.",
      "User-friendly interface designed with UX principles in mind, ensuring an enjoyable browsing experience.",
    ],
    techDetails:
      "Built with React for a component-based architecture and styled with Tailwind CSS for a responsive design. Deployed on Netlify for reliable hosting.",
    futurePlans:
      "Adding user accounts for saving favorite books and customizing the TBR list.",
    challenges:
      "Managing state across various components and implementing responsive design principles.",
    lessonsLearned:
      "Improved my skills in React state management, component design, and responsive layout techniques.",
    collaborators: ["Your Name"],
    githubLink: "https://github.com/yourusername/noylread",
    liveSiteLink: "https://noylread.netlify.app/",
    additionalImages: [NoylRead_Themes],
    title: "NoylRead Themes",
  },
  {
    id: 2,
    projectName: "NoylDo",
    LightImage: project1Light,
    DarkImage: project1,
    link: "https://noyldo.netlify.app/",
    tags: ["React", "Tailwind CSS", "Task Management"],
    overview:
      "NoylDo is a task management application designed to help users organize their to-do lists and manage tasks efficiently. The application features task creation, categorization, and status updates.",
    features: [
      "Create, edit, and delete tasks.",
      "Organize tasks into categories.",
      "Mark tasks as completed or pending.",
      "Filter tasks by category and status.",
      "User-friendly interface with drag-and-drop functionality.",
    ],
    techDetails:
      "Built with React for a component-based architecture, styled with Tailwind CSS, and deployed on Netlify.",
    futurePlans: "Adding user authentication and task sharing features.",
    challenges:
      "Implementing drag-and-drop functionality and managing state across various components.",
    lessonsLearned:
      "Improved skills in React state management and drag-and-drop implementations.",
    collaborators: ["Your Name"],
    githubLink: "https://github.com/yourusername/noyldo",
    liveSiteLink: "https://noyldo.netlify.app/",
    additionalImages: [], // Add more images as available
  },
  {
    id: 3,
    projectName: "NoylisDelicous",
    LightImage: noylisDelicous_Light,
    DarkImage: noylisDelicous_Dark,
    link: "https://noylisdelicious.netlify.app/",
    tags: ["React", "Tailwind", "spoonacular  API"],
    overview: "Noylis Delicious is a food exploration website powered by the Spoonacular API. Users can search for recipes, view ingredients and instructions, and explore a diverse range of recipes categorized into Thai, American, Italian, and Japanese cuisines.",
    features: [
      "Search for recipes by ingredient, cuisine, or meal type using the Spoonacular API.",
      "View detailed recipe information including ingredients, instructions, and nutritional facts.",
      "Explore recipes categorized into four main categories: Thai, American, Italian, and Japanese.",
      "Responsive design ensuring a seamless experience on both desktop and mobile devices.",
      "A clean and modern user interface with advanced search and filter options for recipes."
    ],
    techDetails: "Built with React for dynamic user interactions and Tailwind CSS for a sleek and modern design. Integrated Spoonacular API for fetching recipe data, and deployed on Netlify for robust and reliable hosting.",
    githubLink: "https://github.com/yourusername/noylisdelicious",
    liveSiteLink: "https://noylisdelicious.netlify.app/",
    additionalImages: [noylisDelicous_details],
    title: "Recipe Details ",
  },
];
