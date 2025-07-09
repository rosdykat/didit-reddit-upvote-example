import { db } from "@/db";
import { UserPostList } from "@/components/UserPostList";

export default async function UserPage({ params }) {
  const userId = Number(params.userProfile);
  return (
    <>
      {/* {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))} */}
      <UserPostList userId={userId} />
    </>
  );
}
