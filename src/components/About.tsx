"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
       
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there! 👋 I&apos;m Jayjeet Kumar, a freelance frontend developer with
          experience in building modern, responsive web applications using
          technologies like React.js, Next.js, and Tailwind CSS. I graduated in
          July 2024 with a B.Tech in Computer Science and Engineering from Amity
          University and have worked on several projects that have helped me
          improve my skills. 🌐✨
        </Paragraph>
        <Paragraph className=" mt-4">
          💻 One project I&apos;m proud of is AuraUI, a UI component library
          that helps developers build websites faster by providing reusable,
          customizable components. I&apos;m also working on Web3Campus, a
          platform aimed at teaching people about decentralized web
          technologies, where I use Next.js and MongoDB for scalability and
          responsiveness. 🚀
        </Paragraph>

        <Paragraph className=" mt-4">
          🔗 I&apos;ve gained practical experience through roles like the
          Software Engineer Fellow at Headstarter, where I built SaaS products
          and a fitness AI customer support agent. At Kyte, I worked as a
          Frontend Developer to create responsive UI components using Material
          UI and Tailwind CSS.
        </Paragraph>
        <Paragraph className=" mt-4">
          🤖 I&apos;ve participated in hackathons, winning the Polygon Pool
          Prize at the Road to Web3 Hackathon. I&apos;m passionate about Web3
          and AI and always eager to learn new technologies.🌐💡
        </Paragraph>
        <Paragraph className=" mt-4">
          🌈 In short, I&apos;m a frontend developer focused on building
          user-friendly, scalable applications, with a strong interest in new
          technologies and innovation. 🚀👨‍💻
        </Paragraph>

        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
