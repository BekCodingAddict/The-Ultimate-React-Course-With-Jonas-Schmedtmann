import SignInButton from "../_components/SignInButton";
import { singInAction } from "../_lib/action";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <form action={singInAction}>
      <div className="flex flex-col gap-10 mt-10 items-center">
        <h2 className="text-3xl font-semibold">
          Sign in to access your guest area
        </h2>
        <SignInButton />
      </div>
    </form>
  );
}
