import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";

export function Home() {
  return (
    <div className="">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60">
        <Navbar />

        <div className="w-full flex flex-col justify-center items-center h-[80vh]">
          <h1 className="text-4xl font-bold text-gray-600">Home Page</h1>
          <p className="text-gray-600">
            All pages available in Evacuation Management section
          </p>
        </div>
      </div>
    </div>
  );
}
