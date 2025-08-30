import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "PaperTrail" },
    { name: "description", content: "Smart Feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications and Resume Ratings</h1>

      </div>
    </section>
  </main>
}
