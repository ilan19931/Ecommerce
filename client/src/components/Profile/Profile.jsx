import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProfile, updateProfile } from "../../redux/actions/profile.actions";

import styles from "./profile.module.css";

import listOfCountries from "../../utils/data/listOfCountries";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    city: "",
    street: "",
    zipCode: "",
    homeNumber: "",
    floor: "",
    apartment: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        ...profile,
      });
    }
  }, [profile]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateProfile(dispatch, formData);
  }

  return (
    <div className={styles.profile}>
      <h1>Update Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.table}>
          <div className={`${styles.tableItem} form-group`}>
            <label htmlFor="firstName">First Name: </label>
            <input
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
            />
          </div>

          <div className={`${styles.tableItem} form-group`}>
            <label htmlFor="lastName">Last Name: </label>
            <input
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
            />
          </div>

          <div className={`${styles.tableItem} form-group`}>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              value={formData.phoneNumber}
              onChange={handleChange}
              type="number"
              name="phoneNumber"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>

          <h3>Address</h3>

          <div className={`${styles.tableItem} form-group`}>
            <label htmlFor="country">Country: </label>

            <select name="country" defaultValue={profile.country} onChange={handleChange}>
              {listOfCountries.map((country) => (
                <option value={country.name}>{country.name}</option>
              ))}
            </select>
          </div>

          <div className={`${styles.tableItem} form-group`}>
            <label htmlFor="city">City: </label>
            <input
              value={formData.city}
              onChange={handleChange}
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
            />
          </div>

          <div className={`${styles.tableItem} form-group`}>
            <label htmlFor="street">Street: </label>
            <input
              value={formData.street}
              onChange={handleChange}
              type="text"
              name="street"
              className="form-control"
              placeholder="Street"
            />
          </div>

          <div className={`${styles.tableItem} form-group`}>
            <label htmlFor="zipCode">Zip Code: </label>
            <input
              value={formData.zipCode}
              onChange={handleChange}
              type="number"
              name="zipCode"
              className="form-control"
              placeholder="Zip Code"
            />
          </div>

          <div className={`${styles.tableItemCentered} form-group`}>
            <div className="form-group">
              <label htmlFor="homeNumber">Home Number: </label>
              <input
                value={formData.homeNumber}
                onChange={handleChange}
                type="number"
                name="homeNumber"
                className="form-control"
                placeholder="Home Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="floor">Floor: </label>
              <input
                value={formData.floor}
                onChange={handleChange}
                type="number"
                name="floor"
                className="form-control"
                placeholder="Floor"
              />
            </div>

            <div className="form-group">
              <label htmlFor="apartment">Apartment: </label>
              <input
                value={formData.apartment}
                onChange={handleChange}
                type="number"
                name="apartment"
                className="form-control"
                placeholder="Apartment"
              />
            </div>
          </div>

          <button className="btn btn-success">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
