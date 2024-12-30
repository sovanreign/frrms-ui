import { MdAdd, MdMoreHoriz } from "react-icons/md";
import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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

// const centers = [
//   {
//     name: "Magadap Residence",
//     zone: "Zone 1",
//     type: "Private EC",
//     contactPerson: "Edward Magadap",
//     contactNumber: "09123457812",
//   },
//   {
//     name: "Barangay Hall Buenavista",
//     zone: "Zone 3",
//     type: "Public EC",
//     contactPerson: "Iska Maria Martinez",
//     contactNumber: "09872363211",
//   },
//   {
//     name: "Barangay Hall Buenavista",
//     zone: "Zone 3",
//     type: "Public EC",
//     contactPerson: "Iska Maria Martinez",
//     contactNumber: "09872363211",
//   },
//   {
//     name: "Magadap Residence",
//     zone: "Zone 1",
//     type: "Private EC",
//     contactPerson: "Edward Magadap",
//     contactNumber: "09123457812",
//   },
// ];

export function CalamityInfoPage() {
  const [evacuation, setEvacuation] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvacuation, setCurrentEvacuation] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const evacuationCenter =
      JSON.parse(localStorage.getItem("evacuation_center")) || [];
    setEvacuation(evacuationCenter);
  }, []);

  const onSubmit = (data) => {
    if (isEditing) {
      // Update existing calamity
      const updatedEvacuation = evacuation.map((evac) =>
        evac.id === currentEvacuation.id ? { ...evac, ...data } : evacuation
      );
      localStorage.setItem(
        "evacuation-center",
        JSON.stringify(updatedEvacuation)
      );
      setEvacuation(updatedEvacuation);
    } else {
      // Add new calamity
      data.id = `C${evacuation.length + 1}`;
      localStorage.setItem(
        "evacuation_center",
        JSON.stringify([...evacuation, data])
      );
      setEvacuation([...evacuation, data]);
    }

    // Close modal and reset form
    document.getElementById("add-evacuation").close();
    reset();
    setIsEditing(false);
    setCurrentEvacuation(null);
  };

  // Open modal for adding a new evacuation
  const openAddModal = () => {
    setIsEditing(false);
    setCurrentEvacuation(null);
    reset(); // Clear the form
    document.getElementById("add-evacuation").showModal();
  };

  // Open modal for editing a calamity
  const openEditModal = (evac) => {
    setIsEditing(true);
    setCurrentEvacuation(evac);
    reset(evac);
    document.getElementById("add-evacuation").showModal();
  };

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
                <button
                  className="btn btn-primary text-white"
                  onClick={() => openAddModal()}
                >
                  <MdAdd className="w-6 h-6" />
                  Add Evacuation Center
                </button>
              </div>

              {evacuation.length === 0 ? (
                <div className="mt-8 flex flex-col items-center">
                  <img src="/no-data.svg" alt="" className="w-96 h-96" />
                  <p className="text-gray-700 font-bold">No Data Available</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4 justify-between mt-6">
                  {evacuation.map((center, index) => (
                    <div
                      onClick={() => navigate("/calamities/info/evacuees")}
                      key={index}
                      className="border cursor-pointer border-gray-300 rounded-lg p-4 shadow-sm relative"
                    >
                      <div className="text-lg font-semibold text-gray-800">
                        {center.name}
                      </div>
                      <div className="text-sm text-gray-500">{center.zone}</div>
                      <div className="text-sm text-gray-500">
                        {center.evacuationType}
                      </div>
                      <div className="text-sm text-gray-700 mt-2">
                        {center.siteManager}
                        {center.contact && <span> - {center.contact}</span>}
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className="dropdown dropdown-end">
                          <MdMoreHoriz
                            tabIndex={0}
                            role="button"
                            className="w-6 h-6 cursor-pointer"
                          />

                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                          >
                            <li>
                              <a className="text-gray-600">View Evacuees</a>
                            </li>
                            <li>
                              <a className="text-gray-600">
                                View Relief Inventory
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <dialog id="add-evacuation" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                document.getElementById("add-evacuation").close();
                reset();
              }}
            >
              ✕
            </button>
            <h3 className="font-bold text-primary text-2xl uppercase">
              Evacuation Center Information
            </h3>
            <div className="py-4">
              <div className="border-4 p-4 rounded">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {/* Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-600 font-medium">
                        Name of evacuation center
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Zone */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-600 font-medium">
                        Zone
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      {...register("zone", {
                        required: "Zone is required",
                      })}
                    />
                    {errors.zone && (
                      <span className="text-red-500 text-sm">
                        {errors.zone.message}
                      </span>
                    )}
                  </div>

                  {/* Type of Calamity */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Evacuation Type</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      {...register("evacuationType", {
                        required: "Evacuation type is required",
                      })}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Private">Private</option>
                      <option value="Public">Public</option>
                    </select>
                    {errors.evacuationType && (
                      <span className="text-red-500 text-sm">
                        {errors.evacuationType.message}
                      </span>
                    )}
                  </div>

                  {/* Site Manager */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-600 font-medium">
                        Name of site manager
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      {...register("siteManager", {
                        required: "Site Manager is required",
                      })}
                    />
                    {errors.siteManager && (
                      <span className="text-red-500 text-sm">
                        {errors.siteManager.message}
                      </span>
                    )}
                  </div>

                  {/* Contact */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-600 font-medium">
                        Contact Information
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      {...register("contact", {
                        required: "Contact is required",
                      })}
                    />
                    {errors.contact && (
                      <span className="text-red-500 text-sm">
                        {errors.contact.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button type="submit" className="btn btn-primary text-white">
                  {isEditing ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
