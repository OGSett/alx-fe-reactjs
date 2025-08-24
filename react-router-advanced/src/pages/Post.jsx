import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return (
    <main style={{ padding: 16 }}>
      <h1>Post #{postId}</h1>
      <p>This page is rendered via a dynamic route: /blog/:postId</p>
    </main>
  );
}
