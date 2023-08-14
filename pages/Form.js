import React, { useState } from 'react';

const Step1 = ({ formData, handleChange }) => (<>
  <div className="mb-4">
    <h2 className="text-xl font-semibold mb-4">LOCK OUT TAG OUT PERMIT</h2>
    <hr className='pb-5' />
    <input
      type="date"
      name="date"
      className="mt-1 p-2 w-full border rounded-md"
      value={formData.date}
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-4">
    <select
      name="equipmentType"
      className="mt-1 p-2 w-full border rounded-md"
      value={formData.equipmentType}
      onChange={handleChange}
      required
    >
      <option value="">Select equipment type</option>
      <option value="type1">Type 1</option>
      <option value="type2">Type 2</option>
      <option value="type3">Type 3</option>
    </select>
  </div>
  
  <div className="mb-4">
    <input
      type="number"
      name="numberOfLocks"
      className="mt-1 p-2 w-full border rounded-md"
      value={formData.numberOfLocks}
      onChange={handleChange}
      placeholder='Number of Locks'
      required
    />
  </div>

  <div className="mb-4">
    <textarea
      name="description"
      className="mt-1 p-2 w-full border rounded-md"
      value={formData.description}
      onChange={handleChange}
      placeholder='Description'
      rows="4"
    />
  </div>
  </>
);

const Step2 = ({ formData, handleChange }) => (
  <>
  <h2 className="text-xl font-semibold mb-4">ENERGY ISOLATION</h2>
  <hr />
 <div className="mb-4">
      <label className="block text-sm font-medium pt-10 text-gray-700">
        Equipment De-energized (Electrical Isolation)
      </label>
      <select
        name="equipmentDeEnergized"
        className="mt-1 p-2 w-full border rounded-md"
        value={formData.equipmentDeEnergized}
        onChange={handleChange}
      >
        <option value="">Select option</option>
        <option value="yes">Yes</option>
        <option value="n/a">N/A</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Equipment Locked or Tagged (Tagout)
      </label>
      <select
        name="equipmentLockedTagged"
        className="mt-1 p-2 w-full border rounded-md"
        value={formData.equipmentLockedTagged}
        onChange={handleChange}
      >
        <option value="">Select option</option>
        <option value="yes">Yes</option>
        <option value="n/a">N/A</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Necessary tags, warning devices, and signs placed?
      </label>
      <select
        name="necessaryTagsPlaced"
        className="mt-1 p-2 w-full border rounded-md"
        value={formData.necessaryTagsPlaced}
        onChange={handleChange}
      >
        <option value="">Select option</option>
        <option value="yes">Yes</option>
        <option value="n/a">N/A</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Maintenance/Service Workers Briefed on Process Hazards?
      </label>
      <select
        name="maintenanceWorkersBriefed"
        className="mt-1 p-2 w-full border rounded-md"
        value={formData.maintenanceWorkersBriefed}
        onChange={handleChange}
      >
        <option value="">Select option</option>
        <option value="yes">Yes</option>
        <option value="n/a">N/A</option>
      </select>
    </div>
  </>
);

const Step3 = ({ formData, handleChange }) => (
  <>

<h4 className="text-xl font-semibold mb-4">SAFETY EQUIPMENT REQUIRED</h4>
<hr className='pb-5'  />
  <div className="flex items-center mb-4">
      <label className="block text-sm mr-4 font-medium text-gray-700">
        Goggles
      </label>
      <input
        type="checkbox"
        name="goggles"
        className="mt-1 mr-2 h-6 w-6"
        checked={formData.goggles}
        onChange={handleChange}
      />
    </div>
    
    <div className="flex items-center mb-4">
      <label className="block text-sm mr-4 font-medium text-gray-700">
        Extinguisher
      </label>
      <input
        type="checkbox"
        name="extinguisher"
        className="mt-1 mr-2 h-6 w-6"
        checked={formData.extinguisher}
        onChange={handleChange}
      />
    </div>
    
    <div className="flex items-center mb-4">
      <label className="block text-sm mr-4 font-medium text-gray-700">
        Safety Harness
      </label>
      <input
        type="checkbox"
        name="safetyHarness"
        className="mt-1 mr-2 h-6 w-6"
        checked={formData.safetyHarness}
        onChange={handleChange}
      />
    </div>
    
    <div className="flex items-center mb-4">
      <label className="block text-sm mr-4 font-medium text-gray-700">
        Safety Gloves
      </label>
      <input
        type="checkbox"
        name="safetyGloves"
        className="mt-1 mr-2 h-6 w-6"
        checked={formData.safetyGloves}
        onChange={handleChange}
      />
    </div>
    
    <div className="flex items-center mb-4">
      <label className="block text-sm mr-4 font-medium text-gray-700">
        Face Shield
      </label>
      <input
        type="checkbox"
        name="faceShield"
        className="mt-1 mr-2 h-6 w-6"
        checked={formData.faceShield}
        onChange={handleChange}
      />
    </div>
    
    <div className="flex items-center mb-4">
      <label className="block text-sm mr-4 font-medium text-gray-700">
        Rubber Suit
      </label>
      <input
        type="checkbox"
        name="rubberSuit"
        className="mt-1 mr-2 h-6 w-6"
        checked={formData.rubberSuit}
        onChange={handleChange}
      />
    </div>
    
  </>
);

const Step4 = ({ formData, handleChange }) => (
  <>
  <h4 className="text-xl font-semibold mb-4">ADDITIONAL PERMITS REQUIRED</h4>
       <hr className='pb-5' />
    <div className="mb-4">
      <div className="flex items-center mb-4">
      <label className="text-sm mr-4 font-medium text-gray-700">Hot Work</label>
        <input
          type="checkbox"
          name="hotWork"
          className="mt-1 mr-2 h-6 w-6"
          checked={formData.hotWork}
          onChange={handleChange}
        />
      </div>
    </div>
    
    <div className="flex items-center mb-4">
      <label className="block text-sm mr-4 font-medium text-gray-700">
        Confined Space
      </label>
      <input
        type="checkbox"
        name="confinedSpace"
        className="mt-1 mr-2 h-6 w-6"
        checked={formData.confinedSpace}
        onChange={handleChange}
      />
    </div>
    
    <div className="flex items-center mb-4">
      <label className="block text-sm mr-4 font-medium text-gray-700">
        Excavation
      </label>
      <input
        type="checkbox"
        name="excavation"
        className="mt-1 mr-2 h-6 w-6"
        checked={formData.excavation}
        onChange={handleChange}
      />
    </div>
    
    <div className="flex items-center mb-4">
      <label className="block text-sm  mr-4 font-medium text-gray-700">
        Other
      </label>
      <input
        type="checkbox"
        name="otherCheckbox"
        className="mt-1 mr-2 h-6 w-6"
        checked={formData.otherCheckbox}
        onChange={handleChange}
      />
    </div>

    {formData.otherCheckbox && (
      <div className="flex items-center mb-4">
        <label className="block text-sm mr-4 font-medium text-gray-700">
          Other Details
        </label>
        <textarea
          name="otherDetails"
          className="mt-1 p-2 w-full border rounded-md"
          value={formData.otherDetails}
          onChange={handleChange}
          rows="4"
        />
      </div>
    )}
  </>
);


const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    numberOfLocks: '',
    equipmentType: '',
    description: '',
    equipmentDeEnergized: '', 
    equipmentDepressed: '', 
    equipmentLockedTagged: '', 
    necessaryTagsPlaced: '', 
    maintenanceWorkersBriefed: '',
    goggles: false,
    extinguisher: false,
    safetyHarness: false,
    safetyGloves: false,
    faceShield: false,
    rubberSuit: false,
    hotWork: false,
    confinedSpace: false,
    excavation: false,
    otherCheckbox: false,
    otherDetails: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to a server or perform some action.
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
    setFormData((prevData) => ({
      ...prevData,
      [name]: !prevData[name], // Toggle the checkbox value
    }));
  } else {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleGoBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
        {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
        {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
        {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}
        {step === 4 && <Step4 formData={formData} handleChange={handleChange} />}
        <div className="mt-4">
          {step > 1 && (
            <button
              type="button"
              className="mr-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              onClick={handleGoBack}
            >
              Go Back
            </button>
          )}
          {step < 4 ? (
            <button
              type="button"
              className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
