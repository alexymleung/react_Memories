import Header from "./Header";

function HeaderNav({ SubNavbar, headerData }) {
  return (
    <>
      <div className="sticky">{<SubNavbar />}</div>
      <Header pic={headerData.image} alt={headerData.alt} />
    </>
  );
}

export default HeaderNav;
