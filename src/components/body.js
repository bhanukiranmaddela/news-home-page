import React from "react";
import "../components/Body.css";
import Logo from "../images/image-web-3-desktop.jpg";
import Retro from "../images/image-retro-pcs.jpg";
import Laptop from "../images/image-top-laptops.jpg";
import Game from "../images/image-gaming-growth.jpg";

const Body = () => {
  return (
    <div className="body">
      <div>
        <nav className="navBar">
          <li className="symbol">W.</li>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
        <div className="img-new">
          <div>
            <img src={Logo} alt="alt" />
            <div className="below-img">
              <h1 className="web">The Bright Future of Web3.0</h1>
              <div className="btn-and-info">
                <p className="info">
                  We dive into next evolution of dev that claims to put the
                  power of the platforms back into the hands of the people But
                  is it really fulfilling it's promise?
                </p>
                <div className="read-more">Read More</div>
              </div>
            </div>
          </div>
          <div className="new">
            <h1 class="heading">New</h1>
            <div>
              <h3>Hydrogen vs Electric Cars</h3>
              <p>Will Hydrogen-fueld cars ever catch up to EVs?</p>
              <hr />
            </div>
            <div>
              <h3>Hydrogen vs Electric Cars</h3>
              <p>Will Hydrogen-fueld cars ever catch up to EVs?</p>
              <hr />
            </div>
            <div>
              <h3>Hydrogen vs Electric Cars</h3>
              <p>Will Hydrogen-fueld cars ever catch up to EVs?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img className="card-img" src={Game} alt="retro-img" />
          <div className="text">
            <h1 className="rank">01</h1>
            <h3 className="title">Reviving Retro PCs</h3>
            <p className="desc">
              What happens if old pcs are given new updates
            </p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img className="card-img" src={Retro} alt="retro-img" />
          </div>
          <div className="text">
            <h1 className="rank">02</h1>
            <h3 className="title">Top 10 laptops for 2022</h3>
            <p className="desc">Our best products for best needs and budgets</p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img className="card-img" src={Laptop} alt="retro-img" />
          </div>
          <div className="text">
            <h1 className="rank">03</h1>
            <h3 className="title">Growth of gaming</h3>
            <p className="desc">
              How pandemic spark with creative opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
