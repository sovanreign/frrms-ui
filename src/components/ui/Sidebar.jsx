import {
  MdAnalytics,
  MdDashboard,
  MdFireTruck,
  MdOutlineWarning,
  MdPerson,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    path: "/dashboard",
  },
  {
    name: "Profiling",
    icon: MdPerson,
    path: "/profiling",
  },
  {
    name: "Relief Operation",
    icon: MdFireTruck,
    path: "/relief-operation",
  },
  {
    name: "Evacuation Management",
    icon: MdOutlineWarning,
    path: "/calamities",
  },
  {
    name: "Risk Assessment",
    icon: MdAnalytics,
    path: "/risk-assessment",
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="fixed h-screen w-60 bg-white py-4 border-r-2 ">
      <div className="h-full flex flex-col justify-between">
        <ul className="p-2 text-base-content space-y-2">
          {items.map((item) => (
            <li
              key={item.name}
              className={`flex items-center gap-3 p-2 ${
                location.pathname.startsWith(item.path)
                  ? "bg-primary text-white"
                  : "hover:bg-base-200 text-gray-600"
              }  hover:cursor-pointer rounded-md`}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="w-6 h-6 " />
              <p className=" text-sm">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
