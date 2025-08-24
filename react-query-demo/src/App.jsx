import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>React Query Demo — Posts</h1>
      <PostsComponent />
    </QueryClientProvider>
  );
}