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
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function CalamityPage() {
  const [calamities, setCalamities] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.id = "COO1";
    // Add the new calamity to the list
    const updatedCalamities = [...calamities, data];

    // Update state
    setCalamities(updatedCalamities);

    // Log the updated JSON data
    console.log(
      "Updated JSON Data:",
      JSON.stringify(updatedCalamities, null, 2)
    );

    document.getElementById("add-calamity").close();
    reset();
  };

  // Fetch the JSON data from the `data` folder
  useEffect(() => {
    const fetchCalamities = async () => {
      try {
        const response = await fetch("/data/calamities.json");
        if (!response.ok) {
          throw new Error("Failed to fetch calamities data");
        }
        const data = await response.json();
        setCalamities(data);
      } catch (error) {
        console.error("Error fetching calamities data:", error);
      }
    };

    fetchCalamities();
  }, []);

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
              onClick={() =>
                document.getElementById("add-calamity").showModal()
              }
            >
              <MdAdd className="w-6 h-6" />
              Add Calamity
            </button>
          </div>

          <div className="mt-8">
            <div className="overflow-x-auto">
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
                        <MdMoreHoriz className="w-6 h-6 cursor-pointer" />
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
        </section>
      </div>

      <dialog id="add-calamity" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("add-calamity").close()}
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
                      <option value="Earthquake">Earthquake</option>
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
                      <option value="Low">Low</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Severe">Severe</option>
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
                      <option value="Heavy Rains">Heavy Rains</option>
                      <option value="Seismic Activity">Seismic Activity</option>
                      <option value="Overflowing River">
                        Overflowing River
                      </option>
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
                      <option value="Mandatory Evacuation">
                        Mandatory Evacuation
                      </option>
                      <option value="Voluntary Evacuation">
                        Voluntary Evacuation
                      </option>
                      <option value="Advisory Only">Advisory Only</option>
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
                      <option value="Resolved">Resolved</option>
                      <option value="Monitoring">Monitoring</option>
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
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
