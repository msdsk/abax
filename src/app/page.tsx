import { gql } from "@apollo/client";
import { ProductHuntPosts } from '@/types/producthunt';
import PostItem from "@/components/PostItem";
import { getClient } from "@/lib/client";
import Sidebar from "@/components/Sidebar";

const query = gql`query HomeQuery {
    posts (featured: true, first: 20) {
      nodes {
        id
        name 
        tagline 
        thumbnail{
          url(height:80, width:80)
        }
        topics(first: 3) {
          nodes {
            name
          }
        }  
        url
      }
    }
}`;


export default async function Home() {
  const client = getClient();
  const { data } = await client.query<ProductHuntPosts>({ query });

  return (
    <main className="p-8 max-w-5xl mx-auto lg:flex">
      <div>
        <h1 className="text-xl font-bold mt-8 border-b border-gray-300 pb-4">
          Top Products Launching Today
        </h1>
        {data?.posts.nodes.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
      <Sidebar />
    </main>
  )
}
