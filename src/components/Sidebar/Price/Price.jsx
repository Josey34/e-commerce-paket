import Input from "../../Input/Input";
import "./Price.css";

const Price = ({ handleFilter }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Harga</h2>

        <label className="sidebar-label-container">
          <input onChange={handleFilter} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleFilter}
          value={10000}
          title="Rp.0 - 10.000"
          name="test2"
        />

        <Input
          handleChange={handleFilter}
          value={25000}
          title="Rp.0 - 25.000"
          name="test2"
        />

        <Input
          handleChange={handleFilter}
          value={50000}
          title="Rp.0 - Rp.50.000"
          name="test2"
        />

        <Input
          handleChange={handleFilter}
          value={100000}
          title="Rp. 0 - 50.000+"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
