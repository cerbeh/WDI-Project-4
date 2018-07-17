import React from 'react';

const UsersForm = ({ handleChange, handleSubmit, user, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Username<span className="req">*</span></label>
        {user && <input className="input" name="username" placeholder="Username" onChange={handleChange} value={user.username || ''}/>}
        {errors.username && <small>{errors.username}</small>}
      </div>
      <div className="field">
        <label className="label">Date of Birth</label>
        {user && <input className="input" type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} value={user.dob || ''} />}
        {errors.dob && <small>{errors.dob}</small>}
      </div>
      <div className="field">
        <label className="label">Gender</label>
        <div className="control">
          <div className="select is-fullwidth">
            {user &&  <select name="gender" onChange={handleChange} value={user.gender || ''}>
              <option value="" disabled>Please choose</option>
              <option>Male</option>
              <option>Female</option>
              <option>Transgender</option>
              <option>Non-binary</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>}
          </div>
        </div>
        {errors.gender && <small>{errors.gender}</small>}
      </div>
      <div className="field">
        <label className="label">Height(cm)</label>
        {user && <input className="input" name="height" placeholder="Height" onChange={handleChange} value={user.height || ''}/>}
        {errors.height && <small>{errors.height}</small>}
      </div>
      <div className="field">
        <label className="label">Weight(kg)</label>
        {user && <input className="input" name="weight" placeholder="Weight" onChange={handleChange} value={user.weight || ''}/>}
        {errors.weight && <small>{errors.weight}</small>}
      </div>
      <div className="field">
        <label className="label">Grade</label>
        <div className="control">
          <div className="select is-fullwidth">
            { user &&  <select name="grade" onChange={handleChange} value={user.grade || ''}>
              <option value="" disabled>Please choose</option>
              <option>1st Kyu</option>
              <option>1st Dan</option>
              <option>2nd Dan</option>
              <option>3rd Dan</option>
              <option>4th Dan</option>
              <option>5th Dan</option>
              <option>6th Dan</option>
              <option>7th Dan</option>
              <option>8th Dan</option>
            </select>}
          </div>
        </div>
        {errors.grade && <small>{errors.grade}</small>}
      </div>
      <button className="submitBtn button">Submit</button>
    </form>
  );
};

export default UsersForm;
