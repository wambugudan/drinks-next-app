import Link from "next/link";

export default function HomePage() {

  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold"> Multi-task App </h1>
      <Link href='/client' className="btn btn-accent"> Get Started </Link>
    </div>
  );
}
