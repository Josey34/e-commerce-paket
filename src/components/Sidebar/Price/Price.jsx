import Input from "../../Input/Input";
import "./Price.css";

const Price = () => { //{ handleChange }
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Harga</h2>

        <label className="sidebar-label-container">
          <input onChange="{handleChange}" type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange="{handleChange}"
          value={50}
          title="Rp.0 - 10.000"
          name="test2"
        />

        <Input
          handleChange="{handleChange}"
          value={100}
          title="Rp.10.000 - 25.000"
          name="test2"
        />

        <Input
          handleChange="{handleChange}"
          value={150}
          title="Rp.25.000 - Rp.50.000"
          name="test2"
        />

        <Input
          handleChange="{handleChange}"
          value={200}
          title="Diatas Rp.50.000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
