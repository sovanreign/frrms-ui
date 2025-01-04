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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PORT } from "../../utils/constants";

export function CalamityPage() {
  const [calamities, setCalamities] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCalamity, setCurrentCalamity] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Fetch calamities from the API
  useEffect(() => {
    fetchCalamities();
  }, []);

  const fetchCalamities = async () => {
    try {
      const response = await axios.get(`${PORT}/calamities`, {
        params: { q: searchQuery },
      });
      setCalamities(response.data);
    } catch (error) {
      console.error("Error fetching calamities:", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (isEditing) {
        await axios.put(`${PORT}/calamities/${currentCalamity.id}`, data);
      } else {
        await axios.post(`${PORT}/calamities`, data);
      }

      fetchCalamities();

      // Close modal and reset form
      document.getElementById("add-calamity").close();
      reset();
      setIsEditing(false);
      setCurrentCalamity(null);
    } catch (error) {
      console.error("Error saving calamity:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update the query
    fetchCalamities(); // Fetch data based on the updated query
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
              <input
                type="text"
                className="grow w-"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
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
                        <td>{calamity.date}</td>
                        <td>{calamity.type}</td>
                        <td>{calamity.severity_level}</td>
                        <td>{calamity.cause}</td>
                        <td>{calamity.alert_level}</td>
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
                                <a
                                  className="text-gray-600"
                                  onClick={() => navigate("/calamities/info")}
                                >
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
                      type="datetime-local"
                      className="input input-bordered w-full"
                      {...register("date", {
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
                      {...register("type", {
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
                      {...register("severity_level", {
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
                      {...register("cause", {
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
                      {...register("alert_level", {
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
