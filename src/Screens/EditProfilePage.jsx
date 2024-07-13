import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import EditProfile from "./../Components/StudentPanell/EditProfile";

function EditProfilePage() {
  return (
    <div className="container  mx-auto">
      <Heading />
      <EditProfile />
      <Footer />
    </div>
  );
}

export { EditProfilePage };
