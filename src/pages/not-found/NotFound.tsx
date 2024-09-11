export const NotFoundPage = () => {
  return (
    <main className="page-container">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 px-4 py-3 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <h1 className="text-center text-xl sm:text-2xl lg:text-3xl">
          404 - Page Not Found 😢
        </h1>
        <h1 className="text-center text-xl sm:text-2xl lg:text-3xl">
          This route is still under development 🚧
        </h1>
        <button onClick={() => (window.location.href = "/")}>
          Click here to go back
        </button>
      </div>
    </main>
  );
};
