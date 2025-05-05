import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Programmatically navigate to the /signup route
    router.push('/signup');
    router.push('/login');
    router.push('/Chat')
    router.push('/Card')
  }, [router]);
  

  return null; // Optionally, you can return a loading spinner or message here
}

