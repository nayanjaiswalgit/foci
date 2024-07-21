import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="grid justify-center items-center m-16">
      <SignUp />;
    </div>
  ) 
}