import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";

export function Home() {
  return (
    <div className="">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60">
        <Navbar />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          ligula at elit hendrerit consectetur.
        </p>
      </div>
    </div>
  );
}
