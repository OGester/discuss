import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign Out!</Button>
      </form>

      {/* test to validate the user info is present as expected
        <div>{JSON.stringify(session.user)}</div> */}
      {session?.user ? <div>Signed In</div> : <div>Signed Out</div>}

      <Profile />
    </div>
  );
}
