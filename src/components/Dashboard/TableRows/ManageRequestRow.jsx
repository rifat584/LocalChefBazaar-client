import axios from "axios";
import toast from "react-hot-toast";

const ManageRequestRow = ({ userRole }) => {
  const { userEmail, requestStatus, requestType } = userRole;

  const handleAcceptUserRole = async () => {
    try {
      const acceptRequest= await axios.patch(`${import.meta.env.VITE_API_BASE_URL}/user/${userEmail}`)
      console.log(acceptRequest);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  const handleRejectUserRole = async () => {
        console.log("clicked");

  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{userEmail}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{requestType}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="">{requestStatus}</p>
      </td>

      <td className="px-5 py-5 text-sm space-x-3">
        <button
          className="btn btn-active btn-success text-white border-none"
          onClick={handleAcceptUserRole}
        >
          Accept
        </button>
        <button
          className="btn btn-active btn-error text-white border-none"
          onClick={handleRejectUserRole}
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default ManageRequestRow;
