import { MdLogout, MdMenu } from "react-icons/md";

export function Navbar() {
  return (
    <nav className="navbar bg-white w-full border-y-2 py-4">
      <div className="mx-2 flex-1 px-2">
        <div className="flex gap-6 items-center">
          <MdMenu className="w-7 h-7 text-gray-600" />
          <img src="/logo.svg" alt="" />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="border-2 border-gray-400 rounded-full py-1 px-2 flex items-center gap-6 justify-between">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="/avatar.png" />
              </div>
            </div>
            <p className="text-gray-600 font-medium">Secretary</p>
          </div>

          <div className="rounded-full bg-primary p-2">
            <MdLogout className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
