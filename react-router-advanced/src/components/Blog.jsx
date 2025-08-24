import { Link } from "react-router-dom";

const demoPosts = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Another Post" },
  { id: 3, title: "Routing Deep Dive" },
];

export default function BlogPost() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Blog</h1>
      <ul>
        {demoPosts.map((p) => (
          <li key={p.id}>
            <Link to={`/blog/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <p>Click any post to see dynamic route: /blog/:postId</p>
    </main>
  );
}
