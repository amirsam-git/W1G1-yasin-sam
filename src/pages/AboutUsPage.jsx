import { useEffect, useState } from "react";

export default function AboutUsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container posts-area">
      <div className="m-lg-5 m-sm-1">
        <h2>All Posts</h2>
        <div>
          {posts.length === 0 && <p>Loading...</p>}

          {posts.map((post) => (
            <div key={post.id} style={{ marginBottom: "20px" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
