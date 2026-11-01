import { fetchPortfolioInfo } from '@/lib/api';
import Navbar from './Navbar';

// This is a server component that fetches the name and passes it to Navbar
export default async function NavbarWrapper() {
  const info = await fetchPortfolioInfo();
  return <Navbar name={info.name} />;
}
