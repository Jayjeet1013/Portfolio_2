import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Jayjeet</Heading>
      <Paragraph className="max-w-xl mt-4">
        Hey there! 👋 I&apos;m Jayjeet Kumar, a freelance frontend developer.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        My Projects
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
