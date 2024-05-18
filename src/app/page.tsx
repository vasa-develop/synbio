import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 bg-gray-50 ">
      <div className="fixed top-0 left-0 w-full h-full">
        <video
          src="/bg_video_compressed.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="w-full max-w-2xl p-4 lg:p-8 bg-white shadow-lg hover:shadow-md group transition-shadow rounded-lg relative">
      <a
            href="https://github.com/vasa-develop/awesome-synthetic-biology"
            className=" flex sm:flex-row flex-col justify-center sm:justify-start items-center gap-4 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image src="/dna.png" alt="Synthetic Biology" width={250} height={250} className="w-12 h-12" />
              </div>
        <div className="text-center sm:text-left" >
          <h1 className="md:text-2xl text-xl group-hover:underline font-bold text-gray-800" >
            Project 1: Awesome Synthetic Biology
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            A curated list of resources dedicated to Synthetic Biology.
          </p>
        </div>
        </a>
      </div>
      <footer className="mt-8 text-center relative">
        <p>Built with ❤️ by <a href="https://twitter.com/vasa_develop" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">vasa</a></p>
      </footer>
    </main>
  );
}
