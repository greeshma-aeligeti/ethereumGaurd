import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from '@/components/Navbar';
import { AuthContextProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useRouter } from 'next/router';
const noAuthRequired = ["/", "/login", "/signup"];
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      <NavbarComp />
      {noAuthRequired.includes(router.pathname ) ? (
        <Component {...pageProps} />
      ) : (
          <ProtectedRoute >
            <Component {...pageProps}/>
          </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}
