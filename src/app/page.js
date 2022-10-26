import Link from "next/link";

const Page = () => {
  return (
    <>
      <div>This is my page</div>
      <Link href="/second">Second page</Link>
    </>
  );
};

export default Page;
