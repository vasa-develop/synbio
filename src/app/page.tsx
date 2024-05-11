import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 font-family-big-caslon">
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/475172324?h=91fc031bb5&dnt=1&app_id=122963&quality=720p&api=1&autoplay=1&muted=1&background=1&playsinline=1&loop=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg relative">
        <div className="mb-6 flex justify-center">
          <Image
            src="/awesome_syn_bio.png"
            alt="Banner Image"
            width={1024}
            height={300}
            priority
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "'Big Caslon', serif" }}>
            Featured Project
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Explore this curated list of resources dedicated to Synthetic Biology.
          </p>
          <a
            href="https://github.com/vasa-develop/awesome-synthetic-biology"
            className="mt-4 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        </div>
      </div>
      <footer className="mt-8 text-center relative">
        <p>Built with ❤️ by <a href="https://twitter.com/vasa_develop" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">vasa</a></p>
      </footer>
    </main>
  );
}
