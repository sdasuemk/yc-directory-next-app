import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: "2024-11-07T10:30:00Z",
      views: 120,
      author: { _id: 1, name: "Alice Johnson", bio: "Tech enthusiast and robotics engineer." },
      _id: 1,
      description: "Exploring the latest advancements in AI-powered robotics.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",  // Robotics image
      category: "Technology",
      title: "AI Robots: The Future of Automation",
    },
    {
      _createdAt: "2024-11-05T08:15:00Z",
      views: 89,
      author: { _id: 2, name: "Brian Smith", bio: "Environmental scientist and eco-blogger." },
      _id: 2,
      description: "How renewable energy sources are revolutionizing the world.",
      image: "https://images.unsplash.com/photo-1541414773974-101aef85f63b",  // Renewable energy
      category: "Environment",
      title: "Renewable Energy: Powering the Future",
    },
    {
      _createdAt: "2024-11-01T14:50:00Z",
      views: 143,
      author: { _id: 3, name: "Catherine Lee", bio: "Traveler and cultural journalist." },
      _id: 3,
      description: "Exploring the rich history and cultural landmarks of Kyoto, Japan.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",  // Kyoto travel
      category: "Travel",
      title: "Kyoto: A Journey Through Time",
    },
    {
      _createdAt: "2024-10-28T17:30:00Z",
      views: 230,
      author: { _id: 4, name: "Daniel Green", bio: "Professional chef and food critic." },
      _id: 4,
      description: "A dive into the secrets of French cuisine and its global influence.",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",  // French cuisine
      category: "Food",
      title: "The Art of French Cooking",
    },
    {
      _createdAt: "2024-10-25T12:00:00Z",
      views: 310,
      author: { _id: 5, name: "Emma White", bio: "AI researcher and tech blogger." },
      _id: 5,
      description: "Understanding the ethics of artificial intelligence and data privacy.",
      image: "https://images.unsplash.com/photo-1526378722236-0a3f4c5e7a5d",  // AI ethics
      category: "Ethics",
      title: "AI and Ethics: What You Need to Know",
    },
  ];
  
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
