// UpdateProfile.js
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";

import Topbar from "../../component/Topbar";
import GalleryAdd from '../../assets/GalleryAdd.png'

const UpdateProfile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [lga, setLga] = useState("");
  const [state, setState] = useState("");

  const [preview, setPreview] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);


  useEffect(() => {
    if (successMessage) {
        const timeout = setTimeout(() => {
            setSuccessMessage(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  const onClose = () => {
    setPreview(null);
  }
  const onCrop = (pv) => {
    setCroppedImage(pv);
  }

  

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 716800) {
        alert('file is too big!');
        elem.target.value = "";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('button clicked')
    const profileData = {
      preview,
      fullName,
      email,
      phoneNumber,
      gender,
      address,
      city,
      lga,
      state,
    };
    // Save profileData to your profile file or send it to the server
    console.log("Profile Data:", profileData);
    setTimeout(() => {
        setSuccessMessage(true);
    }, 1000)

  };

  return (
    <div className="bg-light max-w-screen-4xl w-full min-h-screen  mx-auto">
        <Topbar />
        <div className="flex items-center justify-center">
            <div className="w-96 md:w-[501px] lg:w-[771px] rounded-lg bg-white shadow-xl mt-10 mb-16 p-4 flex justify-center h-fit">
                <form onSubmit={handleSubmit} className="w-full px-12 flex flex-col items-center">
                    {successMessage && (
                        <div className="bg-green text-white p-4 mb-4 rounded-md">
                            Profile updated successfully!
                        </div>
                    )}
                    <div className="mb-4">
                        {!preview && (
                            <Avatar
                            width={200}
                            height={200}
                            onCrop={onCrop}
                            onClose={onClose}
                            label='Upload new image'
                            onBeforeFileLoad={onBeforeFileLoad}
                            src={null}
                            />
                        )}
                        {croppedImage && !preview && (
                            <button onClick={() => setPreview(croppedImage)} className="bg-midnight text-white py-2 px-8 rounded-lg mt-2">Save</button>
                        )}
                        {preview && (
                            <div>
                                <img src={preview} alt="Preview" className="relative w-32 shadow-xl rounded-full"/>
                                <button onClick={() => setPreview(null)} className="absolute top-56 ml-24 bg-white rounded-lg">
                                    <img src={GalleryAdd} alt="Add profile icon" />
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-8 w-full">
                        <div>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block mb-1">
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block mb-1">
                                    Phone number
                                </label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block mb-1">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lga" className="block mb-1">
                                    L.G.A
                                </label>
                                <input
                                    type="text"
                                    id="lga"
                                    value={lga}
                                    onChange={(e) => setLga(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="gender" className="block mb-1">
                                    Gender
                                </label>
                                <input
                                    type="text"
                                    id="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block mb-1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="state" className="block mb-1">
                                    State
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Add similar input fields for other profile information */}
                    <button
                    type="submit"
                    className="bg-midnight text-white px-4 py-2 rounded hover:bg-faded hover:px-5 hover:py-3"
                    >
                    Save
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default UpdateProfile;
