import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { getCurrentUser } from "@/services/authService";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
