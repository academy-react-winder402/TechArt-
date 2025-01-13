import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import LoginForm from "../Components/Login/LoginForm";
import SidebarNav from "../Components/Login/SidebarNav";
import PageSections from "./../Components/Login/PageSections";

function LoginPage() {
  return (
    <main>
      <div className="container border-2 border-red mx-auto">
        <Heading />

        <PageSections />
      </div>
    </main>
  );
}

export { LoginPage };
