// const tabsData = [
//     {
//       label: "Home",
//       content: <p>Welcome to the home tab content!</p>,
//     },
//     {
//       label: "Profile",
//       content: (
//         <div>
//           <h3>User Profile</h3>
//           <p>This is your profile info.</p>
//         </div>
//       ),
//     },
//     {
//       label: "Settings",
//       content: (
//         <div>
//           <h3>Settings</h3>
//           <p>Manage your preferences here.</p>
//         </div>
//       ),
//     },
//   ];


const tabsData = [
    {
      label: "Home",
      content: (
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {["Box 1", "Box 2", "Box 3", "Box 4"].map((boxLabel) => (
            <button key={boxLabel} className="box-button">
              {boxLabel}
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Profile",
      content: (
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["Link A", "Link B", "Link C"].map((linkLabel) => (
            <a
              key={linkLabel}
              href="#"
              className="box-link"
              onClick={(e) => e.preventDefault()}
            >
              {linkLabel}
            </a>
          ))}
        </div>
      ),
    },
    {
      label: "Settings",
      content: <p>Manage your preferences here.</p>,
    },
  ];

  export default tabsData