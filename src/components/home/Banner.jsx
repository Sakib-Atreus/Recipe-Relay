// import banner1 from "../../assets/image_01.jpeg";
import { Link } from "react-router-dom";
import banner2 from "../../assets/banner.jpg";

export default function Banner() {
  return (
    <div
      className="hero min-h-[400px] "
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-center">
          <h1 className="mb-5 text-5xl font-bold">Ultimate Recipe Hub!</h1>
          <p className="mb-5 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/dashboard/manage-recipes"><button className="btn btn-warning">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
}
