import {
  MdAdd,
  MdArrowBackIos,
  MdArrowForwardIos,
  MdMoreHoriz,
  MdOutlineSearch,
} from "react-icons/md";
import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export function CalamityPage() {
  const [calamities, setCalamities] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCalamity, setCurrentCalamity] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const calamitiesData = JSON.parse(localStorage.getItem("calamities")) || [];
    setCalamities(calamitiesData);
  }, []);

  const onSubmit = (data) => {
    if (isEditing) {
      // Update existing calamity
      const updatedCalamities = calamities.map((calamity) =>
        calamity.id === currentCalamity.id ? { ...calamity, ...data } : calamity
      );
      localStorage.setItem("calamities", JSON.stringify(updatedCalamities));
      setCalamities(updatedCalamities);
    } else {
      // Add new calamity
      data.id = `C${calamities.length + 1}`;
      localStorage.setItem("calamities", JSON.stringify([...calamities, data]));
      setCalamities([...calamities, data]);
    }

    // Close modal and reset form
    document.getElementById("add-calamity").close();
    reset();
    setIsEditing(false);
    setCurrentCalamity(null);
  };

  // Open modal for adding a new calamity
  const openAddModal = () => {
    setIsEditing(false);
    setCurrentCalamity(null);
    reset(); // Clear the form
    document.getElementById("add-calamity").showModal();
  };

  // Open modal for editing a calamity
  const openEditModal = (calamity) => {
    setIsEditing(true);
    setCurrentCalamity(calamity);
    reset(calamity);
    document.getElementById("add-calamity").showModal();
  };

  return (
    <div className="">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60">
        <Navbar />

        <section className="py-12 px-8">
          <div className="flex justify-between items-center ">
            <label className="input input-bordered rounded-full bg-white flex items-center gap-2">
              <MdOutlineSearch className="w-6 h-6 text-gray-600" />
              <input type="text" className="grow w-" placeholder="Search" />
            </label>
            <button
              className="btn btn-primary text-white"
              onClick={() => openAddModal()}
            >
              <MdAdd className="w-6 h-6" />
              Add Calamity
            </button>
          </div>

          {calamities.length === 0 ? (
            <div className="mt-8 flex flex-col items-center">
              <img src="/no-data.svg" alt="" className="w-96 h-96" />
              <p className="text-gray-700 font-bold">No Data Available</p>
            </div>
          ) : (
            <div className="mt-8">
              <div className="">
                <table className="table table-sm bg-white">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date & Time</th>
                      <th>Type of Calamity</th>
                      <th>Severity Level</th>
                      <th>Cause of Calamity</th>
                      <th>Evacuation Alert Level Issued</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {calamities.map((calamity) => (
                      <tr key={calamity.id} className="hover:bg-base-100">
                        <th>{calamity.id}</th>
                        <td>{calamity.dateTime}</td>
                        <td>{calamity.typeOfCalamity}</td>
                        <td>{calamity.severityLevel}</td>
                        <td>{calamity.causeOfCalamity}</td>
                        <td>{calamity.evacuationAlert}</td>
                        <td>{calamity.status}</td>
                        <td className="">
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
                                <a
                                  className="text-gray-600"
                                  onClick={() => openEditModal(calamity)}
                                >
                                  View Information
                                </a>
                              </li>
                              <li>
                                <a className="text-gray-600">
                                  View Information Board
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end">
                <div className="mt-6 flex items-center gap-3">
                  <p className="text-gray-600 font-medium">1-15 of 15</p>
                  <button className="flex items-center justify-center btn btn-sm btn-circle btn-outline ">
                    <MdArrowBackIos className="text-center" />
                  </button>
                  <button className="flex items-center justify-center btn btn-sm btn-circle btn-outline ">
                    <MdArrowForwardIos className="text-center" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      <dialog id="add-calamity" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                document.getElementById("add-calamity").close();
                reset();
              }}
            >
              ✕
            </button>
            <h3 className="font-bold text-primary text-2xl uppercase">
              Calamity Information
            </h3>
            <div className="py-4">
              <div className="border-4 p-4 rounded">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {/* Date & Time Input */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-600 font-medium">
                        Date & Time
                      </span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered w-full"
                      {...register("dateTime", {
                        required: "Date & Time is required",
                      })}
                    />
                    {errors.dateTime && (
                      <span className="text-red-500 text-sm">
                        {errors.dateTime.message}
                      </span>
                    )}
                  </div>

                  {/* Type of Calamity */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Type of Calamity</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      {...register("typeOfCalamity", {
                        required: "Type of Calamity is required",
                      })}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Flood">Flood</option>
                      <option value="Typhoon">Typhoon</option>
                    </select>
                    {errors.typeOfCalamity && (
                      <span className="text-red-500 text-sm">
                        {errors.typeOfCalamity.message}
                      </span>
                    )}
                  </div>

                  {/* Severity Level */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Severity Level</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      {...register("severityLevel", {
                        required: "Severity Level is required",
                      })}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Low">Minor</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Major">Major</option>
                      <option value="Severe">Severe</option>
                      <option value="Catastrophic">Catastrophic</option>
                    </select>
                    {errors.severityLevel && (
                      <span className="text-red-500 text-sm">
                        {errors.severityLevel.message}
                      </span>
                    )}
                  </div>

                  {/* Cause of Calamity */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Cause of Calamity</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      {...register("causeOfCalamity", {
                        required: "Cause of Calamity is required",
                      })}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Heavy Rainfall">Heavy Rainfall</option>
                      <option value="River Overflow">River Overflow</option>
                      <option value="Urban Drainage Overflow">
                        Urban Drainage Overflow
                      </option>
                      <option value="Typhoon">Typhoon</option>
                    </select>
                    {errors.causeOfCalamity && (
                      <span className="text-red-500 text-sm">
                        {errors.causeOfCalamity.message}
                      </span>
                    )}
                  </div>

                  {/* Evacuation Alert Level */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Evacuation Alert Level Issued
                      </span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      {...register("evacuationAlert", {
                        required: "Evacuation Alert Level is required",
                      })}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Pre Evacuation">Pre Evacuation</option>
                      <option value="Mandatory Evacuation">
                        Mandatory Evacuation
                      </option>
                    </select>
                    {errors.evacuationAlert && (
                      <span className="text-red-500 text-sm">
                        {errors.evacuationAlert.message}
                      </span>
                    )}
                  </div>

                  {/* Current Status */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Current Status</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      {...register("status", {
                        required: "Current Status is required",
                      })}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Under Control">Under Control</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.currentStatus && (
                      <span className="text-red-500 text-sm">
                        {errors.currentStatus.message}
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
