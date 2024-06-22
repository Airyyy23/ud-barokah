import machineInfo from "../../../utils/machineInfo";

const info = () => {
  return (
    <div className="w-screen 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:px-10 m-auto pt-36">
      <h1 className="text-center">Mesin Pembuat Rokok</h1>
      <ul className="mt-12">
        {machineInfo.map((item, index) => (
          <li key={index} className="mt-5" dangerouslySetInnerHTML={{ __html: item.info }} />
        ))}
      </ul>
    </div>
  );
};

export default info;