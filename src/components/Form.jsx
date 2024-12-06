import React, { useState } from "react";

function Form() {
  const [tags, setTags] = useState([]);
  const [tags2, setTags2] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [filteredSuggestions2, setFilteredSuggestions2] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    farmname: "",
    farmlocation: "",
    contactEmail: "",
    contactPhone: "",
    farmsize: "",
    supplyFreq: "",
    produceType: [],
    offerings: [],
    distributionChannel: "",
    refarral: "",
    challanges: "",
    update: false,
  });

  const supplyFreqOption = ["Twice a week", "Once a month", "Others"];

  // Example suggestions
  const suggestions2 = [
    "Organic certification",
    "Farm tours",
    "Packaging Service",
    "Value added product",
    "Direct-to-customer sales",
    "Pesticide-Free Product",
  ];
  // Example suggestions
  const suggestions = [
    "Pawpaw",
    "Pineapple",
    "Orange",
    "Mango",
    "Banana",
    "Apple",
  ];

  // Add a tag
  const addTag = (tag) => {
    if (!tags.includes(tag) && tag.trim() !== "") {
      setTags([...tags, tag]);
      setInputValue("");
      setFilteredSuggestions([]);
      setFormData((prevData) => ({
        ...prevData,
        offerings: [...tags, tag],
      }));
    }
  };

  // Remove a tag
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
    setFormData((prevData) => ({
      ...prevData,
      offerings: prevData.offerings.filter((tag) => tag !== tagToRemove),
    }));
  };

  // Handle input changes
  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions
    if (value.trim() !== "") {
      setFilteredSuggestions(
        suggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase()) &&
            !tags.includes(suggestion)
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  const addTag2 = (tag) => {
    if (!tags2.includes(tag) && tag.trim() !== "") {
      setTags2([...tags2, tag]);
      setInputValue2("");
      setFilteredSuggestions2([]);
      setFormData((prevData) => ({
        ...prevData,
        produceType: [...tags2, tag],
      }));
    }
  };

  // Remove a tag
  const removeTag2 = (tagToRemove) => {
    setTags2(tags.filter((tag) => tag !== tagToRemove));
    setFormData((prevData) => ({
      ...prevData,
      produceType: prevData.produceType.filter((tag) => tag !== tagToRemove),
    }));
  };

  // Handle input changes
  const handleInput2 = (e) => {
    const value = e.target.value;
    setInputValue2(value);

    // Filter suggestions
    if (value.trim() !== "") {
      setFilteredSuggestions2(
        suggestions2.filter(
          (suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase()) &&
            !tags.includes(suggestion)
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Handle dropdown selection
  const handleSuggestionClick2 = (suggestion) => {
    addTag2(suggestion);
  };
  // Handle dropdown selection
  const handleSuggestionClick = (suggestion) => {
    addTag(suggestion);
  };

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox differently
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData, tags);
  }

  return (
    <section className="my-11 mx-auto md:w-1/2 w-full px-8 py-12 rounded-md border border-gray-200">
      <form onSubmit={handleSubmit} className="">
        <h1 className="font-bold text-center text-2xl mb-10">
          Register Your Farm with Konectar
        </h1>
        <div className="">
          <label className="font-bold" htmlFor="username">
            Full Name
          </label>
          <input
            value={formData.username}
            onChange={handleInputChange}
            type="text"
            className="bg-[#dcd6ec99] my-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full"
            required
            name="username"
            placeholder="Enter your full name"
          />
        </div>
        <div className="">
          <label className="font-bold" htmlFor="farm-name">
            Farm Name
          </label>
          <input
            value={formData.farmname}
            onChange={handleInputChange}
            type="text"
            className="bg-[#dcd6ec99] my-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full"
            required
            name="farmname"
            placeholder="Enter your farm name"
          />
        </div>
        <div className="">
          <label className="font-bold" htmlFor="farm-location">
            Farm Location
          </label>
          <input
            value={formData.farmlocation}
            onChange={handleInputChange}
            type="text"
            className="bg-[#dcd6ec99] my-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full"
            required
            name="farmlocation"
            placeholder="Where is your farm located (city, state, country)?"
          />
        </div>
        <div className="">
          <label className="font-bold" htmlFor="contact-info">
            Contact Information
          </label>
          <input
            value={formData.contactEmail}
            onChange={handleInputChange}
            type="text"
            className="bg-[#dcd6ec99] my-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full"
            required
            name="contactEmail"
            placeholder="Enter email address"
          />
          <input
            value={formData.contactPhone}
            onChange={handleInputChange}
            type="text"
            className="bg-[#dcd6ec99] mb-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full"
            required
            name="contactPhone"
            placeholder="Enter email address"
          />
        </div>
        <div className="">
          <label className="font-bold" htmlFor="farm-size">
            Farm Size
          </label>
          <input
            value={formData.farmsize}
            onChange={handleInputChange}
            type="text"
            className="bg-[#dcd6ec99] my-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full"
            required
            name="farmsize"
            placeholder="What is the approximate size of your farm (in, plots, acres or hectares e.g., 2-7 acres, less than 2 acres, more than 20 acres, etc."
          />
        </div>
        <div className="">
          <div className="w-full">
            <label className="font-bold">Types of Produce</label>
            <div className="relative flex items-center flex-wrap gap-2 p-2 mt-2 border rounded border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded"
                >
                  {tag}
                  <button
                    className="ml-2 text-gray-500 hover:text-red-500"
                    onClick={() => removeTag(tag)}
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={handleInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTag(inputValue);
                  }
                }}
                placeholder="What types of fruits and vegetables do you grow on your farm?"
                className="flex-grow border-none h-10 w-full outline-none focus:ring-0"
              />
              {filteredSuggestions.length > 0 && (
                <ul className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
                  {filteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Indicate in the input field above if you don't see your category
              here.
            </p>
          </div>
        </div>
        <div className="">
          <label htmlFor="" className="font-bold">
            Supply Frequency
          </label>
          <select
            required
            value={formData.supplyFreq}
            onChange={handleInputChange}
            name="supplyFreq"
            className="h-10 text-gray-400 outline-none border mb-3 border-gray-200 w-full rounded-lg box-border shadow"
          >
            <option className="text-gray-200" value="">
              How often do you supply fruits and vegetables to
              buyers/businesses?
            </option>
            {supplyFreqOption.map((supply, index) => {
              return (
                <option key={index} value={supply}>
                  {supply}
                </option>
              );
            })}
          </select>
        </div>
        <div className="">
          <label htmlFor="" className="font-bold">
            Distrubution Channels
          </label>
          <select
            required
            value={formData.distributionChannel}
            onChange={handleInputChange}
            name="distributionChannel"
            className="h-10 text-gray-400 outline-none border mb-3 border-gray-200 w-full rounded-lg box-border shadow"
          >
            <option value="">
              How do you currently distribute your produce
            </option>
            <option value="Local market">Local market</option>
            <option value="Wholesalers">Wholesalers</option>
            <option value="Direct sales">Direct sales</option>
          </select>
        </div>
        <div className="w-full">
          <label className="font-bold">Types of Produce</label>
          <div className="relative flex items-center flex-wrap gap-2 p-2 mt-2 border rounded border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
            {tags2.map((tag, index) => (
              <span
                key={index}
                className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded"
              >
                {tag}
                <button
                  className="ml-2 text-gray-500 hover:text-red-500"
                  onClick={() => removeTag2(tag)}
                >
                  ×
                </button>
              </span>
            ))}
            <input
              type="text"
              value={inputValue2}
              onChange={handleInput2}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag2(inputValue2);
                }
              }}
              placeholder="Do you offer any additional services or product to your farm?"
              className="flex-grow border-none h-10 w-full outline-none focus:ring-0"
            />
            {filteredSuggestions2.length > 0 && (
              <ul className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
                {filteredSuggestions2.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSuggestionClick2(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="">
          <label htmlFor="" className="font-bold">
            Refarral Source
          </label>
          <select
            required
            value={formData.refarral}
            onChange={handleInputChange}
            name="refarral"
            className="h-10 text-gray-400 outline-none border mb-3 border-gray-200 w-full rounded-lg box-border shadow"
          >
            <option value="">How do you hear about us?</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="challange" className="font-bold">
            Main Challenges
          </label>
          <textarea
            required
            value={formData.challanges}
            onChange={handleInputChange}
            className="h-[300px] bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full"
            name="challanges"
            placeholder="Describe the challenges you face"
          ></textarea>
        </div>
        <br />
        <br />
        <label className="font-bold" htmlFor="">
          Update and Notifications
        </label>
        <div className="">
          <input
            className="mt-3"
            type="checkbox"
            name="update"
            id="update-check"
            checked={formData.update}
            onChange={handleInputChange}
          />
          <label className="ml-2 text-[0.8rem]" htmlFor="update-check">
            I agree to receive updates and notifications from Konectar
          </label>
        </div>
        <br />
        <button
          type="submit"
          className="bg-[#009933] px-6 py-2 md:px-7 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem] w-full"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
