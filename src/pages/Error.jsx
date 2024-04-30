import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status == "404") {
    return (
      <main className="min-h-screen grid place-content-center text-center">
        <h1 className="text-5xl font-bold text-primary mb-3 lg:text-8xl">
          404
        </h1>
        <p className="text-4xl font-bold text-neutral mb-5 lg:text-6xl">
          Page Not Found
        </p>
        <Link className="btn btn-primary lg:btn-md">Back Home</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen grid place-content-center text-center">
      <h1 className="text-5xl font-bold text-primary mb-3 lg:text-8xl">
        Ups...!
      </h1>
      <p className="text-4xl font-bold text-neutral mb-5 lg:text-6xl">
        Something went wrong
      </p>
      <Link className="btn btn-primary lg:btn-md">Back Home</Link>
    </main>
  );
}

export default Error;
