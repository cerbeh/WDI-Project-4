import React from 'react';

const SessionsForm = ({ handleChange, handleSubmit, data, errors}) => {

  return(
    <form onSubmit={handleSubmit}>
      <div className="columns is-multiline">
        <div className="column is-12">
          <div className="field">
            <label className="label">Title</label>
            <input
              className="input"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={data.title || ''}
            />
            {errors.title && <small>{errors.title}</small>}
          </div>
        </div>

        <div className="column is-6">
          <div className="field">
            <label className="label">Discipline</label>
            <div className="control">
              <div className="select is-fullwidth">
                {data &&  <select name="discipline" onChange={handleChange} value={data.discipline || ''}>
                  <option value="" disabled>Please choose</option>
                  <option>Kata</option>
                  <option>Keiko</option>
                  <option>Shiai</option>
                  <option>Jodan</option>
                  <option>Nito</option>
                  <option>Shin-sa</option>
                  <option>Mitori-geiko</option>
                  <option>Asa-geiko</option>
                </select>}
              </div>
            </div>
            {errors.discipline && <small>{errors.discipline}</small>}
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
            {errors.date && <small>{errors.date}</small>}
          </div>

          <div className="field">
            <label className="label">Duration in minutes</label>
            <input
              className="input"
              name="duration"
              placeholder="Duration"
              onChange={handleChange}
              value={data.duration || ''}
            />
            {errors.duration && <small>{errors.duration}</small>}
          </div>

        </div>
        <div className="column is-6">
          <div className="field">
            <label className="label">Notes</label>
            <textarea
              className="textarea"
              name="notes"
              placeholder="Write your notes here.."
              rows="7"
              onChange={handleChange}
              value={data.notes || ''}
            ></textarea>
            {errors.notes && <small>{errors.notes}</small>}
          </div>
        </div>
      </div>





      <button className="submitBtn button">Submit</button>

    </form>
  );
};

export default SessionsForm;
