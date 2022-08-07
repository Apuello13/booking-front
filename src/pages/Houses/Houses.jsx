import "./Houses.css";
import boquillaHouse from "../../assets/img/houses/house_yard.jpeg";
import boquillaKiosk from "../../assets/img/houses/kiosk_table.jpeg";
const Houses = () => {
  return (
    <>
      <div className="p-3 text-center">
        <h3 className="title">
          Make your vacations your{" "}
          <span className="text-primary">own spaces</span>
        </h3>
      </div>
      <div className="gallery p-3">
        <div className="container-house mb-3">
          <img src={boquillaHouse} alt="Boquilla House image" />
          <div className="container-detail">
            <h3 className="subTitle">Boquilla House's</h3>
            <p className="text text-secondary">
              Enjoy with your family your vacations, we have pool, soccer field,
              kitche, rooms and more.
            </p>
            <ul className="services">
              <li>Pool</li>
              <li>Soccer field</li>
            </ul>
            <button className="btn btn-primary mt-3">See details</button>
          </div>
        </div>
        <div className="container-house mb-3">
          <div className="container-detail">
            <h3 className="subTitle">Boquilla Kiosk's</h3>
            <p className="text text-secondary">
              Enjoy with your family your vacations, we have pool, soccer field,
              kitche, rooms and more.
            </p>
            <ul className="services">
              <li>Pool</li>
              <li>Seaview</li>
            </ul>
            <button className="btn btn-primary mt-3">See details</button>
          </div>
          <img src={boquillaKiosk} alt="Boquilla Kiosk image" />
        </div>
      </div>
    </>
  );
};
export default Houses;
