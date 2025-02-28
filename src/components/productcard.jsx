
import ViewButton from "./button"; 
import pImage from "../assets/download (2).jpeg"
const Productcard = () => {

  const pName = "Awesome ";
  const pPrice = "$49.99";

  return (
    <div className=" p-4 rounded-lg text-center mt-[150px] bg-white">
      <img
        src={pImage}
        alt={pName}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{pName}</h2>
      <p className="text-gray-600 text-sm">{pPrice}</p>
      <ViewButton />
    </div>
  );
};

export default Productcard;
