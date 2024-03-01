import { getServerSession } from "next-auth";

export default async function About() {
  const session = await getServerSession();
  console.log(session);
  return <div>about</div>;
}
