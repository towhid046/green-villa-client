import { useContext, useState } from "react";
import { UserContext } from "./../../providers/ContextProvider/ContextProvider";
import axios from "axios";
import { toast } from 'react-toastify';

const AddEstate = () => {
  const { user } = useContext(UserContext);
  // const [userEmail, setUserEmail] = useState(user?.email)

  const handleAddEstate = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const estate = {
      image: photoUrl,
      estate_title: "Luxury Villa with Ocean View",
      email,
      segment_name: "Premium",
      description:
        "Perched atop a cliff overlooking the azure waters of the Pacific Ocean, this luxury villa offers an unparalleled living experience. With expansive floor-to-ceiling windows, every room is bathed in natural light, showcasing the elegant interior design and exquisite furnishings. The outdoor infinity pool seems to merge seamlessly with the horizon, providing a tranquil oasis for relaxation and entertainment. This architectural masterpiece also boasts a private theater, state-of-the-art gym, and a spa for ultimate indulgence. Experience coastal living at its finest in this breathtaking sanctuary.",
      price: "$2,500,000",
      status: "sale",
      area: "5000 sq ft",
      location: "Coastal Paradise, California",
      facilities: ["Infinity Pool", "Home Theater", "Gym", "Spa"],
      bedrooms: 5,
      garages: 3,
      bathrooms: 6,
    };

    axios
    .post(`${import.meta.env.VITE_URL}/estates`, estate)
    .then((res) => {
      if (res.data.insertedId) {
        form.reset();
        toast.success('Estate Added Success')
      }
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <section className="container mx-auto px-4 min-h-screen py-12 ">
      <form onSubmit={handleAddEstate} className="space-y-3">
        <div>
          <strong>User Email</strong>
          <input
            value={user?.email}
            type="text"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <strong>Photo Url</strong>
          <input
            type="text"
            name="photoUrl"
            placeholder="Photo Url"
            className="input input-bordered w-full"
            required
          />
        </div>
        <input
          className="btn btn-error w-full"
          type="submit"
          value="Add Estate"
        />
      </form>
    </section>
  );
};

export default AddEstate;
