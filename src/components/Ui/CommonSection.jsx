/* eslint-disable react/prop-types */
export const CommonSection = ({ title }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-[5rem]">
        <div className="w-[80%] h-[40vh] bg-gray-200 bg-cover bg-center flex flex-col justify-center items-center rounded-[5rem]">
          <h1 className="text-4xl font-medium">{title}</h1>
        </div>
      </div>
    </>
  );
};
