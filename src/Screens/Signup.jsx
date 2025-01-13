import RegisterStepHandler from "../Components/Auth/RegisterStepHandler";

function SignUpPage() {
  return (
    <main>
      <div className="container py-40 mx-auto">
        <RegisterStepHandler />
      </div>
    </main>
  );
}

export { SignUpPage };
