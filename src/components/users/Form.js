import React from 'react';

const UsersForm = ({ handleChange, handleSubmit, data, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Username<span className="req">*</span></label>
        {data && <input className="input" name="username" placeholder="Username" onChange={handleChange} value={data.username || ''}/>}
        {errors.username && <small>{errors.username}</small>}
      </div>
      <div className="field">
        <label className="label">Date of Birth</label>
        {data && <input className="input" type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} value={data.dob || ''} />}
        {errors.dob && <small>{errors.dob}</small>}
      </div>
      <div className="field">
        <label className="label">Gender</label>
        <div className="control">
          <div className="select is-fullwidth">
            {data &&  <select name="gender" onChange={handleChange} value={data.gender || ''}>
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
        {data && <input className="input" name="height" placeholder="Height" onChange={handleChange} value={data.height || ''}/>}
        {errors.height && <small>{errors.height}</small>}
      </div>
      <div className="field">
        <label className="label">Weight(kg)</label>
        {data && <input className="input" name="weight" placeholder="Weight" onChange={handleChange} value={data.weight || ''}/>}
        {errors.weight && <small>{errors.weight}</small>}
      </div>
      <div className="field">
        <label className="label">Grade</label>
        <div className="control">
          <div className="select is-fullwidth">
            { data &&  <select name="grade" onChange={handleChange} value={data.grade || ''}>
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
