import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-black dark:via-zinc-950 dark:to-black flex items-center justify-center font-sans">
      
      <main className="container mx-auto px-6 py-32 flex flex-col items-center text-center gap-10">

        {/* Logo / Badge */}
        <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-zinc-600 dark:text-zinc-300 dark:border-zinc-700">
          <Image
            src="/next.svg"
            alt="Next.js"
            width={20}
            height={20}
            className="dark:invert"
          />
          Built with Next.js
        </div>

        {/* Heading */}
        <h1 className="max-w-3xl text-4xl md:text-6xl font-bold leading-tight text-zinc-900 dark:text-white">
          Build modern & fast websites <br />
          <span className="text-red-600">with confidence</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          This is your starting point to create a beautiful personal website,
          blog, or portfolio using Next.js and Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">

          <Link
            href="/blog"
            className="px-8 py-3 rounded-full bg-red-600 text-white font-medium 
            hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Blog
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 
            text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 
            transition-all duration-300"
          >
            Contact Me
          </Link>

        </div>

      </main>
    </div>
  );
}
