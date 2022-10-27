import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

const AuthBtn = () => {
  const router = useRouter();

  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div className="auth-btn">loading...</div>;
  }

  if (status === "unauthenticated") {
    return (
      <button
        onClick={() => {
          signIn();
        }}
        className="hover:bg-white hover:border hover:border-orange hover:text-orange rounded-full py-1 px-4 bg-orange text-lg text-gray-100"
      >
        <p>Login</p>
      </button>
    );
  }

  return (
    <div className=" flex items-center justify-center space-x-3">
      <Image
        /* @ts-ignore */
        src={session.user.image}
        /* @ts-ignore */
        alt={session.user.name}
        width={30}
        height={30}
        className="rounded-full"
      />
      <div className="">
        <button
          onClick={() => {
            signOut(), router.push("/");
          }}
          className="text-lg text-gray-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default AuthBtn;
