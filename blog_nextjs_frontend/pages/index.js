import Image from "next/image";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog NextJS</title>
      </Head>
      <div className="mb-10 p-3 border rounded">
        <Image
          className="object-cover rounded"
          src="/top.png"
          alt="top"
          width={1280}
          height={500}
        />
      </div>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="text-lg mb-3">Blog Posts</div>
        <div className="border w-14"></div>
      </div>
    </div>

  );
}
