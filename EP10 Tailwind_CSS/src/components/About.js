// import Info from "./Info";
import InfoClass from "./infoClass";

const About = () => {
  return (
    <>
      <div className="container">
        <h1>About Us</h1>
        {/* <Info name={"Ankit(function)"} location={"Palampur"} /> */}
        <InfoClass name={"Ankit(Class)"} location={"Dharamshala"} />
      </div>
    </>
  );
};

export default About;
