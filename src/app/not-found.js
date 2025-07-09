import { LoginButton } from "@/components/LoginButton";

export default async function NotFound() {
  return (
    <div className="main">
      <div className="goHome">
        <h1>Please login first!!!</h1>
        <LoginButton />
      </div>
    </div>
  );
}
