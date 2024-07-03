import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = () => { //{ handleChange }
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          
        </div>
        <Price handleChange="{handleChange}" />
      </section>
    </>
  );
};

export default Sidebar;