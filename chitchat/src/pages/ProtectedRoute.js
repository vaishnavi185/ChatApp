import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage
    if (!token) {
      router.push('/login'); // Redirect to login if no token is found
    }
  }, [router]);

  return children; // Render the children if the user is authenticated
}