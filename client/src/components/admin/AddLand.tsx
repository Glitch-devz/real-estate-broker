import { useState } from "react";
import axios from "axios";
const AddLand = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(process.env.SERVER_ADDRESS);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_ADDRESS}/admin/land/add`,
        formData
      );
      //   console.log(process.env.SERVER_ADDRESS);
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name of the land</label>
          <input
            type="text"
            name="name"
            placeholder="Land name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone number for contact</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email address for contact</label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Land address</label>
          <input
            type="text"
            name="address"
            placeholder="Land address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price of the land</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddLand;
