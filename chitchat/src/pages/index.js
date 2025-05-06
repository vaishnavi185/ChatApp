import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Programmatically navigate to the /signup route
  
    router.replace('/Chat')
 
  }, [router]);
  

  return null; // Optionally, you can return a loading spinner or message here
}

