export default function Home() {
  return (
    <main style={{ fontFamily: "monospace", padding: "2rem" }}>
      <h1>Talent Intelligence API</h1>
      <p>
        POST <code>/api/research</code> with{" "}
        <code>{"{ company, role, location, seniority, job_function, stage, focus }"}</code>
      </p>
    </main>
  );
}
