import { MdAdd, MdOutlineSearch } from "react-icons/md";
import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";

const cards = [
  {
    num: "856",
    desc: "Total Population",
  },
  {
    num: "21",
    desc: "Females",
  },
  {
    num: "18",
    desc: "Males",
  },
  {
    num: "6",
    desc: "Number of Families",
  },
  {
    num: "5",
    desc: "Seniors",
  },
  {
    num: "10",
    desc: "Undergrad",
  },
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
  return (
    <div className="">
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
                <div className=" ">
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
            <button className="btn btn-primary text-white">
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
                <th>Senior Cetizens</th>
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
    </div>
  );
}
