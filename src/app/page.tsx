import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex items-center justify-center text-8xl text-yellow-400 pb-12">
        Charles Wefso
      </div>
      <Image
        src={"/images/my-photo.jpeg"}
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-full"
      />
    </main>
  );
}
