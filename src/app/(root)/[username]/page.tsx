import { Metadata } from 'next';

// Define a more specific type for the user
interface User {
  id: string;
  username: string;
  email: string;
}

// Modify the interface to match PageProps expectations with more specific types
export interface UserPageProps {
  params: Promise<{ username: string }>;
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function UserPage({ params }: UserPageProps) {
  // Await the params Promise
  const resolvedParams = await params;
  const { username } = resolvedParams;
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${username}`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    return (
      <div>
        <p>We couldn&apos;t find a user with the username: {username}</p>
      </div>
    );
  }
  
  const user = await res.json() as User;

  return (
    <div>
      <h1>Welcome, {user.username || 'User'}!</h1>
      <p>Your User ID: {user.id}</p>
      <p>Email: {user.email || 'Not available'}</p>
    </div>
  );
}

// Add generateMetadata that matches the Promise-based params
export async function generateMetadata({ params }: UserPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { username } = resolvedParams;
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${username}`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    return {
      title: 'User Not Found',
    };
  }
  
  const user = await res.json() as User;
  
  return {
    title: `${user.username}'s Profile`,
  };
}