import sidefolioAuraui from "public/images/auraui.webp";
import sidefolioWeb3Campus from "public/images/web3campus.webp";
import sidefolioFitnessAI from "public/images/fitnessai.webp";

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
          stunning, high-performance websites with ease. Whether you&apos;re working
          on a personal project or building the next big thing, AuraUI offers a
          collection of beautifully designed, fully customizable components that
          integrate seamlessly with Next.js and Tailwind CSS.
        </p>
        <p>
          Our mission is to empower developers with tools that simplify the
          development process while maintaining a professional and polished
          aesthetic. Join our growing community of contributors and innovators,
          and let&apos;s create something extraordinary together. Explore AuraUI, and
          see how it can elevate your next project.
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
    stack: ["Nextjs", "Typescript", "Tailwindcss"],
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
];
