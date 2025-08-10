"use server";

import * as auth from "@/auth";

export async function signIn() {
  // specifying the oauth providers, in this case just github, more can be added in the future
  return auth.signIn("github");
}
