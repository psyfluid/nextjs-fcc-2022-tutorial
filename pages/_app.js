import { MainLayout } from '@/src/components/MainLayout';
import '@/styles/globals.sass';
import '@/styles/general.sass';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
