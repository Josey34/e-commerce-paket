import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleFilter }) => { 
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          
        </div>
        <Price handleFilter={handleFilter} />
      </section>
    </>
  );
};

export default Sidebar;