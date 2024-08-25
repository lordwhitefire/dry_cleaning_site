import React, { useState} from 'react'

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [delivery, setDelivery] = useState("");
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");
  const [description, setDescription] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('button clicked')
    const profileData = {
      fullName,
      email,
      phoneNumber,
      delivery,
      address,
      landmark,
      description,
      instructions,
    };
    // Save profileData to your profile file or send it to the server
    console.log("Profile Data:", profileData);

  };

  return (
    <div className="w-full mx-auto">
        <div className="flex items-center justify-center">
            <div className="w-full rounded-lg bg-white shadow-xl mt-10 p-4 flex justify-center h-fit">
                <form onSubmit={handleSubmit} className="w-full px-12 flex flex-col items-center">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-8 w-full">
                        <div>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block mb-1">
                                    Full Name
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
                                <label htmlFor="landmark" className="block mb-1">
                                    Closest Landmark
                                </label>
                                <input
                                    type="text"
                                    id="landmark"
                                    value={landmark}
                                    onChange={(e) => setLandmark(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block mb-1">
                                    Description
                                </label>
                                <textarea
                                    type="text"
                                    id="description"
                                    rows="4" 
                                    cols="10"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
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
                                <label htmlFor="delivery" className="block mb-1">
                                    Delivery/Pickup Option
                                </label>
                                <input
                                    type="text"
                                    id="delivery"
                                    value={delivery}
                                    onChange={(e) => setDelivery(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="instructions" className="block mb-1">
                                    Special Instruction (Optional)
                                </label>
                                <textarea
                                    type="text"
                                    id="instructions"
                                    rows="5" 
                                    value={instructions}
                                    onChange={(e) => setInstructions(e.target.value)}
                                    className="appearance-none block w-full text-darkgrey border border-darkgrey rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact