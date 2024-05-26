import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import { AuthLayout } from "../Components/ForgetPass";

function ForgetPassPage() {
  return (
    <div className="container  mx-auto">
      <Heading />
      <AuthLayout />
      <Footer />
    </div>
  );
}

export { ForgetPassPage };
