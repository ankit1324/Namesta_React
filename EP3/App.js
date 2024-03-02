import React from "react";
import ReactDOM from "react-dom/client";

//Todo=> Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "Heading 1"
// );
// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//   },
//   "Heading 2"
// );
// const heading3 = React.createElement(
//   "h2",
//   {
//     id: "title",
//   },
//   "Heading 3"
// );
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2, heading3]
// );

//todo=> Create the same element using JSX
// const container = (
//   <div id="container">
//     <h2>Heading1</h2>
//     <h2>Heading2</h2>
//     <h2>Heading3</h2>
//   </div>
// );

//todo=> Create a functional component of the same with JSX
// const Container = () => {
//   return (
//     <div id="container">
//       <h2>Heading1</h2>
//       <h2>Heading2</h2>
//       <h2>Heading3</h2>
//     </div>
//   );
// };

//todo=> Pass attributes into the tag in JSX
//?Composition of Component(Add a component inside another)
// function MyComponent() {
//   // Define attributes
//   const src =
//     "https://images.unsplash.com/photo-1706509511714-2a1e0f74321e?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   const altText = "An image";
//   const className = "image-container";
//   const width = "20%";

//   return (
//     <div>
//       <Container />;{/* Pass attributes to the <img> tag */}
//       <img src={src} alt={altText} className={className} width={width} />
//     </div>
//   );
// }
function Headers() {
  const widthImg = "10%";
  return (
    <div className="Navbar">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/delivery-service-with-mask-design_23-2148504209.jpg?size=626&ext=jpg&ga=GA1.1.2068682575.1709405903&semt=ais"
          alt=""
          width={widthImg}
        />
      </div>
      <div class="searchContainer">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" class="input" />
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>History</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const App = () => {
  return <Headers />;
};

console.log(<App />);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(<App />);
