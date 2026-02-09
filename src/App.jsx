import { ChevronDown, ChevronRight, SquarePen, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import sections from "./data/fica_data";

const App = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [checkedItem, setCheckedItem] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [entityName, setEntityName] = useState("");
  const [outstandingReq, setOutstandingReq] = useState("");
  const [outstandingReqs, setOutstandingReqs] = useState([]);

  const [personalChecklist, setpersonalChecklist] = useState(
    JSON.parse(localStorage.getItem("checklists")) || [],
  );

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  function toggleSection(section) {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  //saved personal checklist to local storage upon updating array
  useEffect(() => {
    localStorage.setItem("checklists", JSON.stringify(personalChecklist));
  }, [personalChecklist]);

  function addRequirement(e) {
    e.preventDefault();
    console.log(outstandingReq);
    setOutstandingReqs([...outstandingReqs, outstandingReq]);
    setOutstandingReq("");
  }

  function saveOR() {
    const newPersonalChecklist = {
      id: Date.now(),
      entityName: entityName,
      outstandingReqs: outstandingReqs,
    };
    setpersonalChecklist([...personalChecklist, newPersonalChecklist]);
    setOutstandingReqs([]);
    setEntityName("");
    closeModal();
  }

  // delete personal check list
  function deleteChecklist(id) {
    setpersonalChecklist(
      personalChecklist.filter((checklist) => checklist.id !== id),
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          FICA Desk Aid For Legal Entities
        </h1>
        <p className="text-2xl text-center text-gray-400 mb-12">
          (Current RMCP)
        </p>

        <div className="grid grid-cols-3 gap-4">
          {/* Accordion Sections */}
          <div className="col-span-2 space-y-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur"
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    {expandedSections[section.id] ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                    <span className="text-xl font-semibold">
                      {section.title}
                    </span>
                  </div>
                </button>

                {/* Section Content */}
                {expandedSections[section.id] && section.checklistItems && (
                  <div className="px-5 pb-5 pt-2 text-gray-300 border-t border-gray-700">
                    <div className="space-y-3 pl-6">
                      {section.checklistItems.map((checklistItem) => (
                        <div
                          id={checkedItem.id}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            checked={checkedItem.isChecked}
                            onClick={() => setCheckedItem(!checkedItem)}
                            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                          />
                          <div className="flex-1">
                            <div className="text-gray-300">
                              {checklistItem.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur">
              <button
                onClick={openModal}
                className="w-full flex items-center justify-center p-5 hover:bg-gray-700/50 transition-colors duration-200"
              >
                <span className="italic text-sm text-gray-400">
                  Create Outstanding Requirements
                </span>
              </button>
            </div>
            {/* Personal check list section*/}
            {personalChecklist &&
              personalChecklist.map((OR) => (
                <div
                  key={OR.id}
                  className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur mt-3"
                >
                  <div className="flex items-center">
                    <span className="w-full flex p-5 italic text-sm text-gray-400">
                      {OR.entityName}
                    </span>
                    <div className="flex gap-2 p-5">
                      {/* <button>
                        <SquarePen />
                      </button> */}

                      <button
                        onClick={() => deleteChecklist(OR.id)}
                        className="hover:text-gray-400/50"
                      >
                        <Trash />
                      </button>
                    </div>
                  </div>

                  {OR.outstandingReqs.map((requirement) => (
                    <div
                      key={requirement}
                      className="flex items-center pl-5 mb-2 gap-2"
                    >
                      <input
                        type="checkbox"
                        checked={checkedItem.isChecked}
                        onClick={() => setCheckedItem(!checkedItem)}
                        className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                      />
                      <div className="flex-1">
                        <div className="text-gray-300">{requirement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Backdrop */}
                <div
                  className="fixed inset-0 backdrop-blur-sm"
                  onClick={closeModal}
                ></div>

                {/* Modal Content */}
                <div className="relative bg-gray-900 rounded-lg shadow-xl p-6 max-w-md w-full mx-4 z-10">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    X
                  </button>

                  {/* Content */}
                  <h2 className="text-xl font-bold mb-4">Create O/R</h2>
                  <div>
                    <input
                      type="text"
                      className="text-gray-300 p-2 w-full"
                      name="Entity name"
                      value={entityName}
                      onChange={(e) => setEntityName(e.target.value)}
                      placeholder="Entity name"
                    />
                    <br />
                    <form onSubmit={addRequirement}>
                      <input
                        type="text"
                        className="text-gray-300 p-2 w-full"
                        value={outstandingReq}
                        onChange={(e) => setOutstandingReq(e.target.value)}
                        placeholder="Outstanding requirement"
                      />
                    </form>
                  </div>
                  <div>
                    {outstandingReqs.map((requirment) => (
                      <div className="flex" key={requirment}>
                        <ChevronRight className="flex-shrink-0 text-gray-600  " />
                        <p>{requirment}</p>
                      </div>
                    ))}
                  </div>

                  {/* Footer Buttons */}
                  <div className="flex gap-3 justify-end mt-4">
                    <button
                      onClick={saveOR}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
