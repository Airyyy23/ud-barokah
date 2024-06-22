import serviceList from "../../../utils/service";
import icon1 from "../../../assets/icon/ic_layanan1.svg";
import icon2 from "../../../assets/icon/ic_layanan2.svg";
import icon3 from "../../../assets/icon/ic_layanan3.svg";
import icon4 from "../../../assets/icon/ic_layanan4.svg";

const Service = () => {
  return (
    <div className="w-screen 2xl:px-56 xl:px-44 lg:px-32 md:px-20 text-center mt-36">
      <h1>Layanan</h1>
      <div className="flex flex-wrap xl:justify-between justify-center items-center md:items-start gap-20 mt-12">
        {
          serviceList.map((service, index) => {
            let icon;
            switch (index % 4) {
              case 0:
                icon = icon1;
                break;
              case 1:
                icon = icon2;
                break;
              case 2:
                icon = icon3;
                break;
              case 3:
                icon = icon4;
                break;
              default:
                icon = icon1;
            }
            return (
              <div key={index} className="w-80 lg:w-[340px] xl:w-[480px] flex flex-col items-center justify-center text-center gap-3">
                <img src={icon} alt="icon" className="w-24" />
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  )
};

export default Service;