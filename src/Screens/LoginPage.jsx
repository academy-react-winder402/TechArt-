import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import LoginForm from "../Components/Login/LoginForm";
import SidebarNav from "../Components/Login/SidebarNav";
import PageSections from "./../Components/Login/PageSections";

function LoginPage() {
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />

      <PageSections />
    </div>
  );
}

export { LoginPage };
