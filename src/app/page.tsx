import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeSnippet } from "@/components/ui/code-snippet";
import { CheckCircle2 } from "lucide-react";
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

  const steps = [
    {
      title: "Clone the Template",
      description: "Start by creating a new project using this template:",
      code: "pnpm create next-app -e https://github.com/theodenanyoh11/krumalabs-nextjs-starter",
    },
    {
      title: "Install Dependencies",
      description: "Navigate to your project directory and install dependencies:",
      code: "cd your-project-name\npnpm install",
    },
    {
      title: "Start Development",
      description: "Run the development server:",
      code: "pnpm dev",
    },
    {
      title: "Open in Browser",
      description: "View your application at:",
      code: "http://localhost:3000",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src="/logo/Logo-black.svg"
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

        {/* Features Section */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Getting Started</h2>
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center bg-primary text-primary-foreground w-6 h-6 rounded-full text-sm">
                      {index + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeSnippet code={step.code} />
                </CardContent>
              </Card>
            ))}
          </div>
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
