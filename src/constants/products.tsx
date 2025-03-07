import sidefolioAuraui from "public/images/auraui.webp";
import sidefolioWeb3Campus from "public/images/web3campus.webp";
import sidefolioFitnessAI from "public/images/fitnessai.webp";
import sidefolioFlashloom from "public/images/flashloom.png";
import sidefolioLandJobber from "public/images/landjobber.png";
import sidefolioLandJobber2 from "public/images/landjobber2.png";
import sidefolioPortfolio from "public/images/portfolio.png";
import sidefolioPortfolio2 from "public/images/portfolio2.png";


export const products = [
  {
    href: "https://auraui.com/",
    title: "AuraUI",
    description:
      "AuraUI is an open-source component library crafted to help developers build stunning, high-performance websites with ease.",
    thumbnail: sidefolioAuraui,
    images: [sidefolioAuraui],
    stack: ["Nextjs", "Typescript", "Tailwindcss"],
    slug: "auraui",
    content: (
      <div>
        <p>
          Welcome to AuraUI, where design meets functionality. AuraUI is an
          open-source component library crafted to help developers build
          stunning, high-performance websites with ease. Whether you&apos;re
          working on a personal project or building the next big thing, AuraUI
          offers a collection of beautifully designed, fully customizable
          components that integrate seamlessly with Next.js and Tailwind CSS.
        </p>
        <p>
          Our mission is to empower developers with tools that simplify the
          development process while maintaining a professional and polished
          aesthetic. Join our growing community of contributors and innovators,
          and let&apos;s create something extraordinary together. Explore
          AuraUI, and see how it can elevate your next project.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://web3-campus.vercel.app/",
    title: "Web3Campus",
    description:
      "Web3 Campus is an educational platform dedicated to teaching Web3.",
    thumbnail: sidefolioWeb3Campus,
    images: [sidefolioWeb3Campus],
    stack: [
      "Nextjs",
      "Typescript",
      "MongoDB",
      "Airtable",
      "Node JS",
      "Tailwindcss",
    ],
    slug: "web3campus",
    content: (
      <div>
        <p>
          WEB3CAMPUS is a platform dedicated to mastering the intricacies of
          Web3 technology.It empowers individuals with the knowledge and skills
          needed to thrive in the decentralized future. You can learn about
          platforms, YouTube channels, tech, and courses related to Web3.
        </p>
        <p>
          You can also explore documentaries, whitepapers, projects, and a Web3
          glossary. Additionally, you can earn through participating in
          hackathons and finding jobs. The platform aims to unleash the power of
          Web3 education.At Web3Campus, we are passionate about empowering
          individuals with the knowledge and skills needed to thrive in the
          decentralized future.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://fitness-ai-theta.vercel.app/",
    title: "FitnessAI",
    description:
      "Fitness AI is an intelligent health application that helps users achieve their wellness goals.",
    thumbnail: sidefolioFitnessAI,
    images: [sidefolioFitnessAI],
    stack: ["Nextjs", "AI", "Tailwindcss"],
    slug: "fitnessai",
    content: (
      <div>
        <p>
          Fitness AI Support is an AI-powered chatbot designed to assist users
          with their health and fitness-related queries. Built with a
          user-friendly interface, it provides real-time support, guidance, and
          answers to common fitness concerns.
        </p>
        <p>
          THe chatbot is designed to help users achieve their wellness goals by
          providing personalized recommendations and advice. Whether you&apos;re
          looking to lose weight, build muscle, or improve your overall health,
          Fitness AI Support is here to help. Get started today and take the
          first step towards a healthier, happier you.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://flashloom-ai.vercel.app/",
    title: "Flashloom",
    description:
      "A Flashcard generator that uses AI to help you learn and remember things faster.",
    thumbnail: sidefolioFlashloom,
    images: [sidefolioFlashloom],
    stack: ["Nextjs", "AI", "Clerk", "Firebase", "Tailwindcss"],
    slug: "flashloom",
    content: (
      <div>
        <p>
          Revolutionize your learning experience with our innovative AI-curated
          interactive flashcards, designed to elevate your knowledge retention
          and engagement! Features:- 1. Simply input your text and let our
          software do the rest. Creating flashcards has never been easier 2 .Our
          AI intelligently breaks down your text into concise flaschards,
          perfect for studying. 3. Access your flashcards from any device, at
          anytime. Study on the go with ease.
        </p>
        <p>
          It is built using modern web technologies, including: Next.js: For
          fast and efficient server-side rendering (SSR) and static site
          generation (SSG). Firebase: For backend services like authentication,
          database, and storage. Clerk: For user authentication and management.
          AI Integration: Likely used to generate flashcards automatically based
          on input topics. TypeScript: For better code safety and
          maintainability. Tailwind CSS: For styling and responsive UI design.
          This tool is designed to streamline studying by automating the
          flashcard creation process, making learning faster and more
          interactive. 🚀
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://landjobber.vercel.app/",
    title: "LandJobber",
    description: "Explore Job Opportunities with LandJobber",
    thumbnail: sidefolioLandJobber,
    images: [sidefolioLandJobber, sidefolioLandJobber2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "landjobber",
    content: (
      <div>
        <p>
          LandJobber – Your Gateway to Endless Job Opportunities 🚀 .It is a
          powerful job discovery platform that connects job seekers with over 80
          top job platforms.
        </p>
        <p>
          Whether you&apos;re looking for remote work, freelancing gigs,
          full-time roles, or niche job boards, LandJobber makes it easy to
          explore and access the best opportunities in one place. Simplify your
          job search and find your perfect career path today! 🔍💼
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://jayjeet-portfolio-tan.vercel.app/",
    title: "Old Portfolio",
    description: "This is my old portfolio website.",
    thumbnail: sidefolioPortfolio,
    images: [sidefolioPortfolio, sidefolioPortfolio2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "portfolio",
    content: (
      <div>
        <p>
          Jayjeet&apos;s Portfolio – Showcasing Skills & Projects 🚀 This portfolio
          is a personal website designed to highlight Jayjeet&apos;s expertise as a
          software developer. It provides a well-structured overview of his
          technical skills, professional experience, and notable projects. Built
          with a clean and minimalistic design, it offers visitors insights into
          his work, tech stack, and achievements.
        </p>
        <p>
          Key features of this portfolio: ✅ About Section – A brief
          introduction to Jayjeet and his professional journey. ✅ Projects
          Showcase – Displays a collection of past and ongoing projects with
          descriptions. ✅ Skills & Technologies – Highlights the programming
          languages, frameworks, and tools used. ✅ Contact Information –
          Provides easy ways to connect and collaborate. This portfolio serves
          as an online resume, making it easy for recruiters, collaborators, and
          potential clients to explore Jayjeet&apos;s work in one place. 🚀💻
        </p>{" "}
      </div>
    ),
  },
];
