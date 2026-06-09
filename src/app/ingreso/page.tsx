import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import LoginComp from "../components/Login";
import { verifySession } from "@/src/lib/session";

export default async function LoginPage() {
  const cookieStore = await cookies();

  const token = cookieStore.get("session")?.value;

  if (token) {
    const session = await verifySession(token);

    if (session) {
      redirect("/clientes");
    }
  }
  return (
    <div>
      <LoginComp />
    </div>
  );
}

// import LoginComp from "../components/Login";

// export default function LoginPage() {
//   return (
//     <div>
//       <LoginComp />
//     </div>
//   );
// }
