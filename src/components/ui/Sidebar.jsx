import {
  MdAnalytics,
  MdDashboard,
  MdFireTruck,
  MdOutlineWarning,
  MdPerson,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

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
    name: "Calamity",
    icon: MdOutlineWarning,
    path: "/calamities",
    subItems: [
      { name: "Evacuation", path: "/calamities" },
      { name: "Risk Management", path: "" },
      { name: "Reliefs", path: "" },
    ],
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null); // Track the active dropdown

  const toggleDropdown = (name) => {
    setActiveItem((prev) => (prev === name ? null : name));
  };

  return (
    <aside className="fixed h-screen w-60 bg-white py-4 border-r-2">
      <div className="h-full flex flex-col justify-between">
        <ul className="p-2 text-base-content space-y-2">
          {items.map((item) => (
            <li key={item.name} className="relative">
              <div
                className={`flex items-center justify-between gap-3 p-2 ${
                  location.pathname.startsWith(item.path)
                    ? "bg-primary text-white"
                    : "hover:bg-base-200 text-gray-600"
                } hover:cursor-pointer rounded-md`}
                onClick={() =>
                  item.subItems
                    ? toggleDropdown(item.name)
                    : navigate(item.path)
                }
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-6 h-6" />
                  <p className="text-sm">{item.name}</p>
                </div>
                {/* Dropdown icon */}
                {item.subItems && (
                  <MdKeyboardArrowDown
                    className={`w-5 h-5 transition-transform ${
                      activeItem === item.name ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </div>

              {/* Sub-items for dropdown */}
              {item.subItems && activeItem === item.name && (
                <ul className="ml-8 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <li
                      key={subItem.name}
                      className={`p-2 cursor-pointer rounded-md hover:bg-base-200 text-sm ${
                        location.pathname === subItem.path
                          ? "bg-primary text-white"
                          : "text-gray-600"
                      }`}
                      onClick={() => navigate(subItem.path)}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
