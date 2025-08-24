import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return (
    <main style={{ padding: 16 }}>
      <h1>Post #{id}</h1>
      <p>This page is rendered via a dynamic route: /blog/:postId</p>
    </main>
  );
}
