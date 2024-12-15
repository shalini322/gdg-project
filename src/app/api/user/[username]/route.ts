import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const { username } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { 
        username: username 
      },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
      }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching user', error }, 
      { status: 500 }
    );
  }
}