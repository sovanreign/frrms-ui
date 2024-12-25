import { MdAdd } from "react-icons/md";
import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";

const stats = [
  { label: "Infant (< 1 yrs. old)", value: 3 },
  { label: "Toddler (1-3 yrs. old)", value: 1 },
  { label: "Pre-schooler (4-5 yrs. old)", value: 6 },
  { label: "School Age (6-9 yrs. old)", value: 8 },
  { label: "Teenage (13-19 yrs. old)", value: 15 },
  { label: "Adult (20-59 yrs. old)", value: 15 },
  { label: "Senior Citizen (>59 yrs. old)", value: 5 },
  { label: "Pregnant Women", value: 1 },
  { label: "Breastfeeding Mothers", value: 6 },
  { label: "Persons with disabilities", value: 3 },
  { label: "Single Headed", value: 1 },
  { label: "Persons with serious illness", value: 0 },
];

const centers = [
  {
    name: "Magadap Residence",
    zone: "Zone 1",
    type: "Private EC",
    contactPerson: "Edward Magadap",
    contactNumber: "09123457812",
  },
  {
    name: "Barangay Hall Buenavista",
    zone: "Zone 3",
    type: "Public EC",
    contactPerson: "Iska Maria Martinez",
    contactNumber: "09872363211",
  },
  {
    name: "Barangay Hall Buenavista",
    zone: "Zone 3",
    type: "Public EC",
    contactPerson: "Iska Maria Martinez",
    contactNumber: "09872363211",
  },
  {
    name: "Magadap Residence",
    zone: "Zone 1",
    type: "Private EC",
    contactPerson: "Edward Magadap",
    contactNumber: "09123457812",
  },
];

export function CalamityInfoPage() {
  return (
    <div className="">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60">
        <Navbar />

        <section className="py-6 px-8">
          <div className="card bg-base-200 w-full">
            <div className="card-body ">
              <div className="flex">
                <div className="w-1/4">
                  <div className="text-primary">
                    <h2 className="uppercase text-3xl font-bold">
                      Typhoon Egay
                    </h2>
                    <p>An overview of evacuees</p>
                  </div>

                  <div className="ml-10">
                    <div
                      className="radial-progress text-primary mt-10"
                      style={{ "--value": 70, "--size": "8rem" }}
                      role="progressbar"
                    >
                      69
                    </div>
                  </div>
                </div>
                <div className="card bg-white w-3/4">
                  <div className="card-body">
                    <div className="grid grid-cols-4 gap-2">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className="flex justify-center gap-2 items-center text-center   rounded-lg"
                        >
                          <div
                            className="radial-progress text-primary text-3xl"
                            style={{ "--value": stat.value, "--size": "4rem" }}
                          >
                            {stat.value}
                          </div>
                          <p className=" text-gray-600 text-xs">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-white w-full mt-10">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-gray-600 text-xl">
                  Evacuation Center List
                </h2>
                <button className="btn btn-primary text-white">
                  <MdAdd className="w-6 h-6" />
                  Add Evacuation Center
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 justify-between mt-6">
                {centers.map((center, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-4 shadow-sm relative"
                  >
                    <div className="text-lg font-semibold text-gray-800">
                      {center.name}
                    </div>
                    <div className="text-sm text-gray-500">{center.zone}</div>
                    <div className="text-sm text-gray-500">{center.type}</div>
                    <div className="text-sm text-gray-700 mt-2">
                      {center.contactPerson}
                      {center.contactNumber && (
                        <span> - {center.contactNumber}</span>
                      )}
                    </div>
                    <div className="absolute top-2 right-2">
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0zM18 10a2 2 0 11-4 0 2 2 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
