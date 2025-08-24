import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,
    cacheTime: 1000 * 60,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p role="alert">Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing…" : "Refetch Posts"}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ margin: "12px 0" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
