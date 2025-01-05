import { MdAdd, MdOutlineSearch } from "react-icons/md";
import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";

const cards = [
  { num: "856", desc: "Total Population" },
  { num: "21", desc: "Females" },
  { num: "18", desc: "Males" },
  { num: "6", desc: "Number of Families" },
  { num: "5", desc: "Seniors" },
  { num: "10", desc: "Undergrad" },
];

const evacuees = [
  {
    id: "HHID",
    name: "Dela Cruz, Juan",
    infant: "2",
    toddlers: "0",
    preSchool: "0",
    schoolAge: "3",
    teen: "5",
    adult: "3",
    senior: "0",
    personPerFam: "9",
    lactating: "0",
    pregnant: "0",
    pwd: "0",
    soloParent: "0",
  },
  {
    id: "HHID",
    name: "Dela Cruz, Juan",
    infant: "2",
    toddlers: "0",
    preSchool: "0",
    schoolAge: "3",
    teen: "5",
    adult: "3",
    senior: "0",
    personPerFam: "9",
    lactating: "0",
    pregnant: "0",
    pwd: "0",
    soloParent: "0",
  },
  {
    id: "HHID",
    name: "Dela Cruz, Juan",
    infant: "2",
    toddlers: "0",
    preSchool: "0",
    schoolAge: "3",
    teen: "5",
    adult: "3",
    senior: "0",
    personPerFam: "9",
    lactating: "0",
    pregnant: "0",
    pwd: "0",
    soloParent: "0",
  },
  {
    id: "HHID",
    name: "Dela Cruz, Juan",
    infant: "2",
    toddlers: "0",
    preSchool: "0",
    schoolAge: "3",
    teen: "5",
    adult: "3",
    senior: "0",
    personPerFam: "9",
    lactating: "0",
    pregnant: "0",
    pwd: "0",
    soloParent: "0",
  },
  {
    id: "HHID",
    name: "Dela Cruz, Juan",
    infant: "2",
    toddlers: "0",
    preSchool: "0",
    schoolAge: "3",
    teen: "5",
    adult: "3",
    senior: "0",
    personPerFam: "9",
    lactating: "0",
    pregnant: "0",
    pwd: "0",
    soloParent: "0",
  },
  {
    id: "HHID",
    name: "Dela Cruz, Juan",
    infant: "2",
    toddlers: "0",
    preSchool: "0",
    schoolAge: "3",
    teen: "5",
    adult: "3",
    senior: "0",
    personPerFam: "9",
    lactating: "0",
    pregnant: "0",
    pwd: "0",
    soloParent: "0",
  },
  {
    id: "HHID",
    name: "Dela Cruz, Juan",
    infant: "2",
    toddlers: "0",
    preSchool: "0",
    schoolAge: "3",
    teen: "5",
    adult: "3",
    senior: "0",
    personPerFam: "9",
    lactating: "0",
    pregnant: "0",
    pwd: "0",
    soloParent: "0",
  },
];

export function EvacueesPage() {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("household");

  // Open/Close Modal
  const openAddEvacueeModal = () => setIsModalOpen(true);
  const closeAddEvacueeModal = () => setIsModalOpen(false);

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "household":
        return (
          <>
            <h1 className="text-2xl font-bold text-blue-500 ">
              HOUSEHOLD INFORMATION
            </h1>
            <img src="" alt="" />
            <div className="border border-gray-300 p-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Input 1"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Input 2"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Input 3"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Input 4"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Input 5"
                />
              </div>
              <hr className="border-gray-400 mt-4" />
            </div>
          </>
        );
      case "details":
        return <div>House Details Content</div>;
      case "vulnerability":
        return (
          <div>
            <h3 className="font-bold">Vulnerability Index Assessment</h3>
          </div>
        );
      case "assistance":
        return <div>Family Assistance Record Content</div>;
      default:
        return <div>Household Information Content</div>;
    }
  };

  return (
    <div>
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60">
        <Navbar />

        <section className="py-6 px-8">
          <h2 className="uppercase text-2xl font-bold text-gray-800">
            Private EC - Edward Magadap
          </h2>
          <p className="text-gray-700">An overview of evacuees</p>

          <div className="mt-10 grid grid-cols-6 gap-3">
            {cards.map((card) => (
              <div key={card.num} className="card bg-blue-500 p-4">
                <div>
                  <p className="text-3xl font-bold text-white">{card.num}</p>
                  <p className="text-white">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex mt-10 justify-end items-center gap-8">
            <label className="input input-bordered rounded-full bg-white flex items-center gap-2">
              <MdOutlineSearch className="w-6 h-6 text-gray-600" />
              <input type="text" className="grow" placeholder="Search" />
            </label>
            <button
              onClick={openAddEvacueeModal}
              className="btn btn-primary text-white"
            >
              <MdAdd className="w-6 h-6" />
              Add Evacuee
            </button>
          </div>

          <table className="mt-4 table table-xs bg-white">
            <thead>
              <tr>
                <th>HH ID</th>
                <th>Name of Family Head</th>
                <th>Infant</th>
                <th>Toddlers</th>
                <th>Pre-school</th>
                <th>School Age</th>
                <th>Teen Age</th>
                <th>Adult</th>
                <th>Senior Citizens</th>
                <th># of Persons per Family</th>
                <th>Lactating Mothers</th>
                <th>Pregnant</th>
                <th>PWD</th>
                <th>Solo Parent</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {evacuees.map((evac) => (
                <tr key={evac.id}>
                  <th>{evac.id}</th>
                  <th>{evac.name}</th>
                  <th>{evac.infant}</th>
                  <th>{evac.toddlers}</th>
                  <th>{evac.preSchool}</th>
                  <th>{evac.schoolAge}</th>
                  <th>{evac.teen}</th>
                  <th>{evac.adult}</th>
                  <th>{evac.senior}</th>
                  <th>{evac.personPerFam}</th>
                  <th>{evac.lactating}</th>
                  <th>{evac.pregnant}</th>
                  <th>{evac.pwd}</th>
                  <th>{evac.soloParent}</th>
                  <th>
                    <button className="btn btn-xs btn-outline btn-primary">
                      Update
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog id="addEvacuee" className="modal" open>
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              {/* Tab Navigation */}
              <nav>
                <ul className="flex space-x-4">
                  <li
                    onClick={() => setActiveTab("household")}
                    className={`cursor-pointer ${
                      activeTab === "household"
                        ? "text-blue-500 border-b-4 border-blue-500"
                        : ""
                    }`}
                  >
                    Household Information
                  </li>
                  <li
                    onClick={() => setActiveTab("details")}
                    className={`cursor-pointer ${
                      activeTab === "details"
                        ? "text-blue-500 border-b-4 border-blue-500"
                        : ""
                    }`}
                  >
                    House Details
                  </li>
                  <li
                    onClick={() => setActiveTab("vulnerability")}
                    className={`cursor-pointer ${
                      activeTab === "vulnerability"
                        ? "text-blue-500 border-b-4 border-blue-500"
                        : ""
                    }`}
                  >
                    Vulnerability Index Assessment
                  </li>
                  <li
                    onClick={() => setActiveTab("assistance")}
                    className={`cursor-pointer ${
                      activeTab === "assistance"
                        ? "text-blue-500 border-b-4 border-blue-500"
                        : ""
                    }`}
                  >
                    Family Assistance Record
                  </li>
                </ul>
              </nav>

              {/* Close button */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeAddEvacueeModal}
              >
                ✕
              </button>

              <hr className="my-4" />

              {/* Tab Content */}
              {renderTabContent()}
            </form>

            {/* Save button */}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={closeAddEvacueeModal}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
