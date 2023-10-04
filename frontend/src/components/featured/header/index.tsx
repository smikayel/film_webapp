export function Header() {
  return (
    <header className="bg-gray-950 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo ml-4 sm:ml-0">
            <img
              className="w-[150px] h-auto"
              src="/appLogos/header-logo.svg"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
