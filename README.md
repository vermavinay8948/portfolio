
# Personal Portfolio Website - Vinay Verma

This is a Next.js and Firebase Studio powered personal portfolio website for Vinay Verma, showcasing skills, experience, education, and projects. It's built with modern web technologies to be fast, responsive, and easily customizable.

## ✨ Features

*   **Responsive Design**: Looks great on all devices, from desktops to mobile phones.
*   **Modern UI**: Built with ShadCN UI components and Tailwind CSS for a clean and professional look.
*   **Animated Sections**: Subtle animations on scroll to enhance user experience.
*   **Interactive Cards**: Hover effects on project, experience, and skill cards.
*   **Easy Data Management**: Portfolio content (contact info, education, skills, experience, projects) is managed in a single TypeScript file (`src/data/portfolio-data.ts`).
*   **SEO Friendly**: Next.js provides excellent SEO capabilities.
*   **Schedule a Meet**: Direct link to schedule a meeting via Google Calendar.
*   **Dark Mode Ready**: Theme supports dark mode (though not explicitly toggled in the current UI, the CSS is prepared).

## 🚀 Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **AI (Optional, if Genkit is used)**: [Genkit (Firebase)](https://firebase.google.com/docs/genkit)
*   **Deployment**: [Vercel](https://vercel.com/)

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository (if applicable, or start from your Firebase Studio project):**
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running Locally

1.  **Start the development server:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```
    This will start the Next.js development server, usually on `http://localhost:9002` (as configured in `package.json`).

2.  **If using Genkit for AI features (optional):**
    You might need to run the Genkit development server in a separate terminal:
    Using npm:
    ```bash
    npm run genkit:dev
    ```
    Or using yarn:
    ```bash
    yarn genkit:dev
    ```

## 📂 Project Structure

Here's a brief overview of the key directories and files:

```
.
├── public/                 # Static assets (images, fonts, etc.) - currently not used for main content images
├── src/
│   ├── ai/                 # Genkit AI flows and configuration (if used)
│   │   ├── dev.ts
│   │   └── genkit.ts
│   ├── app/                # Next.js App Router: pages, layouts, global styles
│   │   ├── globals.css     # Global styles and Tailwind CSS theme
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main portfolio page
│   ├── components/         # React components
│   │   ├── sections/       # Components for different portfolio sections (Hero, Skills, etc.)
│   │   ├── shared/         # Reusable shared components (AnimatedSection, SectionContainer, etc.)
│   │   └── ui/             # ShadCN UI components
│   ├── data/               # Data files
│   │   └── portfolio-data.ts # Centralized data for portfolio content
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── services/           # (Optional) Business logic, API calls (not currently used for core portfolio)
├── .env.example            # Example environment variables (if any)
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Files to ignore in Git
├── apphosting.yaml         # Firebase App Hosting configuration (can be removed if exclusively using Vercel)
├── components.json         # ShadCN UI configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## ✏️ Personalization

To customize this portfolio with your own information, primarily edit the `src/data/portfolio-data.ts` file. This file contains structured data for:

*   **Contact Information**: Your name, title, email, phone, LinkedIn, and intro.
*   **Education**: Your educational background.
*   **Skills**: Your skills, categorized, with optional icons.
*   **Work Experience**: Your professional experience.
*   **Projects**: Your personal or professional projects.

You can also update:

*   **Metadata**: In `src/app/layout.tsx`, change the `title` and `description` for SEO.
*   **Avatar**: The avatar in `src/components/sections/hero-section.tsx` currently uses `ui-avatars.com`. You can replace this with a direct image link or by adding an image to the `public` folder and referencing it.
*   **Styling**: Modify colors and styles in `src/app/globals.css` and Tailwind utility classes throughout the components.

## 🚀 Deployment

This project is optimized for deployment with **Vercel**.

To deploy with Vercel:

1.  **Sign up or Log in to Vercel**: Go to [vercel.com](https://vercel.com/).
2.  **Connect your Git Repository**:
    *   Create a new project on Vercel.
    *   Connect Vercel to your GitHub, GitLab, or Bitbucket account where your project is hosted.
    *   Select the repository for your portfolio.
3.  **Configure Project Settings**:
    *   Vercel usually auto-detects Next.js projects and configures them correctly.
    *   Ensure the "Framework Preset" is set to "Next.js".
    *   Set up any necessary environment variables (e.g., for Genkit API keys if you are using AI features).
4.  **Deploy**: Click the "Deploy" button. Vercel will build and deploy your site.

Vercel will automatically redeploy your site whenever you push changes to the connected Git branch (usually `main` or `master`).

You might also want to remove the `apphosting.yaml` file if you are exclusively using Vercel and not Firebase App Hosting.

## 🤝 Contributing

This is a personal portfolio, but if you find any bugs or have suggestions for improvement, feel free to open an issue or submit a pull request if this were a public template.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (if you choose to add one). For a personal project, a license might not be strictly necessary, but it's good practice for open-source code.

---

Happy Coding! ✨
Let me know if you'd like any adjustments to this README.
