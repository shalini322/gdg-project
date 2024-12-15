"use client"
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";


interface UserPageProps {
  params: { username: string };
}

export default async function UserPage({ params }: UserPageProps) {
  const { toast } = useToast(); 
  const { username } = params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${username}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      toast({
        title: "Error",
        description: `We couldn't find a user with the username: ${username}`,
        variant: "destructive",
      });

      return (
        <div>
          <p>We couldn't find a user with the username: {username}</p>
        </div>
      );
    }

    const user = await res.json();

    toast({
      title: "User Found",
      description: `Successfully fetched details for ${user.username}`,
      variant: "default",
    });

    return (
      <div>
        <h1>Welcome, {user.username || "User"}!</h1>
        <p>Your User ID: {user.id}</p>
        <p>Email: {user.email || "Not available"}</p>
      </div>
    );
  } catch (error) {

    toast({
      title: "Error",
      description: "Something went wrong while fetching the user data.",
      variant: "destructive"
    });

    return (
      <div>
        <p>We couldn't fetch user data. Please try again later.</p>
      </div>
    );
  }
}
