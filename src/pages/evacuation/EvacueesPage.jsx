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
            <h1 className="text-2xl font-bold text-blue-500 ml-4">
              HOUSEHOLD INFORMATION
            </h1>
            <div className="border-gray-300 border-2 rounded-lg p-1">
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-6 p-6">
                <div className="w-full lg:w-1/3 flex justify-center">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Placeholder Image"
                    className="w-60 h-60 object-cover rounded-lg shadow-lg"
                  />
                </div>

                <div className="w-full lg:w-2/3">
                  <div className="grid grid-cols-4 gap-4">
                    <input
                      type="text"
                      placeholder="Input 1"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 2"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 3"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 4"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 5"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 6"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 7"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 8"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 9"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 10"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 11"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 12"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 13"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 14"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 15"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 16"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 17"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 18"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 19"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                  </div>
                </div>
              </div>
              <hr className="border-gray-400 mt-4" />
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-6 p-6 ">
                <div className="w-full lg:w-1/3 flex justify-center">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Placeholder Image"
                    className="w-60 h-60 object-cover rounded-lg shadow-lg"
                  />
                </div>

                <div className="w-full lg:w-2/3">
                  <div className="grid grid-cols-4 gap-4">
                    <input
                      type="text"
                      placeholder="Input 1"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 2"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 3"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 4"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 5"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 6"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 7"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 8"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 9"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 10"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 11"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 12"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 13"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 14"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                    <input
                      type="text"
                      placeholder="Input 15"
                      className="input input-bordered w-full h-8 p-1 rounded shadow"
                    />
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <button className="btn btn-outline btn-error">
                      Delete
                    </button>
                    <button className="btn btn-outline btn-info">Add</button>
                  </div>
                </div>
              </div>
            </div>
            <p>No. of Vulnerable Family Member</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="0"
                className="input-bordered p-1 rounded shadow w-14 text-center "
              />
              <p className="">No. of Older Persons</p>
              <input
                type="text"
                placeholder="0"
                className="input-bordered p-1 rounded shadow w-14 text-center "
              />
              <p className="">
                No. of Pregnant & Lactating <br />
                Mothers
              </p>
              <input
                type="text"
                placeholder="0"
                className="input-bordered p-1 rounded shadow w-14 text-center "
              />
              <p className="">
                No. of PWDs & with Medical <br />
                Conditions
              </p>
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
        <dialog
          id="addEvacuee"
          className={`modal ${isModalOpen ? "modal-open" : ""}`}
        >
          <div className="modal-box w-[90%] h-[90%] max-w-none fixed-size shadow-lg rounded-lg">
            <form>
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
                <button
                  className="btn bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={closeAddEvacueeModal}
                >
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
