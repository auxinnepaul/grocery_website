import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for could not be found.
          </p>

          <Button className=" mt-4 hover:text-black hover:bg-white focus:outline-none focus:ring">
            <Link
              href="/"
              className=" inline-block rounded px-5 py-3 text-sm font-medium"
            >
              Go Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
