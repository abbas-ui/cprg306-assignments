import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">Go to Week 2 Assignment</Link>/<br />
      <Link href="/week-3">Go to week 3 Assignment</Link>
    </main>
  );
}