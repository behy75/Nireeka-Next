import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      {/*
        This example requires updating your template:

        ```
        <html className="h-full">
        <body className="h-full">
        ```
      */}
      <main className="min-h-screen sm:bg-top bg-404 bg-no-repeat object-cover bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-sm font-light text-black text-opacity-50 uppercase tracking-wide">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-light text-white tracking-tight sm:text-5xl">
            Uh oh! I think you’re lost.
          </h1>
          <p className="mt-2 text-lg font-light text-black text-opacity-50">
            It looks like the page you’re looking for doesn’t exist.
          </p>
          <div className="mt-6">
            <Link href="/">
              <p className=" cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-light rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
                Go back home
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
