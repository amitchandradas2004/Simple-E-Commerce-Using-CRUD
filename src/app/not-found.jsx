import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-red-200 flex flex-col text-center justify-center space-y-5 text-3xl font-bold">
      This page is not found
      <Link href={"/"}>
        {" "}
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
