import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Next.js 15",
      description: "Latest version with improved performance and features",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
    },
    {
      title: "Shadcn UI",
      description: "Beautiful, accessible component library",
    },
    {
      title: "TypeScript",
      description: "Type-safe development with better developer experience",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src="/logo/Logo.svg"
            alt="KrumaLabs Logo"
            width={270}
            height={56}
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Next.js Starter Template
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mt-4">
            A modern, feature-rich starter template to accelerate your Next.js project development.
            Built with the latest technologies and best practices.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="https://www.krumalabs.com" target="_blank">
              <Button size="lg">
                Visit KrumaLabs
              </Button>
            </Link>
            <Link href="https://github.com/theodenanyoh11/krumalabs-nextjs-starter" target="_blank">
              <Button variant="outline" size="lg">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <footer className="w-full text-center border-t pt-8 mt-8">
          <p className="text-sm text-muted-foreground">
            Created with ❤️ by{" "}
            <Link
              href="https://www.krumalabs.com"
              className="font-medium underline underline-offset-4"
              target="_blank"
            >
              KrumaLabs Innovation Lab
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
