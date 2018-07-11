import React from 'react';

const SessionsForm = ({ handleChange, handleSubmit, data}) => {

  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Title</label>
        <input
          className="input"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={data.title || ''}
        />
        {/* {data.errors.username && <small>{data.errors.username}</small>} */}
      </div>

      <div className="field">
        <label className="label">Discipline</label>
        <input
          className="input"
          name="discipline"
          placeholder="Discipline"
          onChange={handleChange}
          value={data.discipline || ''}
        />
        {/* {data.errors.username && <small>{data.errors.username}</small>} */}
      </div>

      <div className="field">
        <label className="label">Date</label>
        <input
          type="date"
          className="input"
          name="date"
          placeholder="Date"
          onChange={handleChange}
          value={data.date || ''}
        />
        {/* {data.errors.username && <small>{data.errors.username}</small>} */}
      </div>

      <div className="field">
        <label className="label">Duration</label>
        <input
          className="input"
          name="duration"
          placeholder="Duration"
          onChange={handleChange}
          value={data.duration || ''}
        />
        {/* {data.errors.username && <small>{data.errors.username}</small>} */}
      </div>

      <div className="field">
        <label className="label">Notes</label>
        <textarea
          className="textarea"
          name="notes"
          placeholder="Write your notes here.."
          onChange={handleChange}
          value={data.notes || ''}
        ></textarea>
        {/* {data.errors.username && <small>{data.errors.username}</small>} */}
      </div>

      <button className="button">Submit</button>

    </form>
  );
};

export default SessionsForm;
