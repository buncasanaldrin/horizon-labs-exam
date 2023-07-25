interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="w-full">
        <div className="bg-moonraker text-easybay p-4">
          <p className="text-2xl text-center font-semibold">
            Horizon Labs - CRUD Application
          </p>
        </div>
      </header>
      <div className="flex flex-col justify-between items-center">
        <main className="w-full min-h-[756px]">{children}</main>
        <footer className="w-full">
          <div className="bg-easybay text-white text-center p-4 w-full">
            &copy; 2023 Aldrin Buncasan
          </div>
        </footer>
      </div>
    </>
  );
};

export default DefaultLayout;
