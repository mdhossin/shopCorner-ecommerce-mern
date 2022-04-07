import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Country, State, City } from "country-state-city";
import { saveShippingInfo } from "../../redux/actions/cartActions";

import { AiFillHome } from "react-icons/ai";
import { FaCity } from "react-icons/fa";
import {
  MdPinDrop,
  MdOutlinePublic,
  MdTransferWithinAStation,
} from "react-icons/md";

import { BsFillTelephoneFill } from "react-icons/bs";
import CheckoutSteps from "../../components/Common/CheckoutSteps/CheckoutSteps";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 11 || phoneNo.length > 11) {
      alert("Phone Number should be 11 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    navigate("/order/confirm");
  };

  return (
    <section className="containter-div section shipping">
      <CheckoutSteps activeStep={0} />
      <div className="shipping__container">
        <div className="shipping__box">
          <h2 className="shipping__heading">Shipping Details</h2>

          <form
            className="shipping__form grid"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <AiFillHome />
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <FaCity />
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <MdPinDrop />
              <input
                type="number"
                name="pincode"
                placeholder="Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <div>
              <BsFillTelephoneFill />
              <input
                type="number"
                name="phonenumber"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="11"
              />
            </div>

            <div>
              <MdOutlinePublic />

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div>
                <MdTransferWithinAStation />

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <input
              type="submit"
              value="Continue"
              className="button"
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
