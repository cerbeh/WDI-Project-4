import React from 'react';

const UsersForm = ({ handleChange, handleSubmit, data }) => {

  console.log(data);
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Username</label>
        <input className="input" name="username" placeholder="Username" onChange={handleChange} value={data.username || ''}/>
        {data.errors.username && <small>{data.errors.username}</small>}
      </div>
      <div className="field">
        <label className="label">Date of Birth</label>
        <input className="input" type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} value={data.dob || ''} />
        {data.errors.dob && <small>{data.errors.dob}</small>}
      </div>
      <div className="field">
        <label className="label">Gender</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="gender" onChange={handleChange} value={data.gender || ''}>
              <option value="" disabled>Please choose</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        {data.errors.gender && <small>{data.errors.gender}</small>}
      </div>
      <div className="field">
        <label className="label">Height</label>
        <input className="input" name="image" placeholder="Height" onChange={handleChange} value={data.height || ''}/>
        {data.errors.height && <small>{data.errors.height}</small>}
      </div>
      <div className="field">
        <label className="label">Weight</label>
        <input className="input" name="image" placeholder="Weight" onChange={handleChange} value={data.weight || ''}/>
        {data.errors.weight && <small>{data.errors.weight}</small>}
      </div>
      <div className="field">
        <label className="label">Grade</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="grade" onChange={handleChange} value={data.grade || ''}>
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
            </select>
          </div>
        </div>
        {data.errors.grade && <small>{data.errors.grade}</small>}
      </div>
      <button className="button">Submit</button>
    </form>
  );
};

export default UsersForm;
