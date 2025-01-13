// src/layouts/PublicLayout.js
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const PublicLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// src/layouts/PrivateLayout.js

// export const PrivateLayout = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// src/layouts/AuthLayout.js

// export const AuthLayout = () => {
//   return (
//     <div>
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// };
