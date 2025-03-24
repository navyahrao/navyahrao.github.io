const Education = () => {
  return (
    <div className="mb-6">
      <h2 className="font-medium text-2xl space-x-2 mb-4">Education</h2>
      <div className="py-4 pl-5 pr-3 space-y-2 mb-4 rounded-lg bg-indigo-50 shadow-md">
        <h3 className="text-lg">Masters Degree</h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="font-medium text-md">
              University of Illinois at Chicago
            </h4>
            <div>Business Analytics</div>
          </div>
          <div className="text-tiny text-gray-lite md:ml-auto">2017 - 2018</div>
        </div>
      </div>
      <div className="py-4 pl-5 pr-3 space-y-2 mb-4 rounded-lg bg-indigo-50 shadow-md">
        <h3 className="text-lg">Bachelors Degree</h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="font-medium text-md">
              Visveswaraya Technological University{' '}
            </h4>
            <div>Computer Science and Engineering</div>
          </div>
          <div className="text-tiny text-gray-lite md:ml-auto">2010 - 2014</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
