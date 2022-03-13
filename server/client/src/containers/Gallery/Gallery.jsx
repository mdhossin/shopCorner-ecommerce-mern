import React from "react";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
} from "../../assets/gallery";

const Gallery = () => {
  return (
    <section className="gallery container-div section">
      <div class="gallery__container hover">
        <div>
          <figure>
            <img src={gallery1} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery2} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery3} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery4} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery5} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery8} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery6} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery7} alt="" />
          </figure>
        </div>

        <div>
          <figure>
            <img src={gallery9} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery10} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery11} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={gallery12} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
