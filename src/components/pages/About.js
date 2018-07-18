import React from 'react';

const AboutPage = () => {
  return(
    <section className="about-section">
      <h1 className="about-header title is-2">About Kendo.io</h1>
      <p className="about-text">
        Kendo.io is the brain child of Linda and Martin from General Assembly London: WDI-34. Created for you to be able to input your practice sessions for Kendo and easily track your practice hours and progress made per disciplines.
      </p>
      <div className="columns is-centered">
        <div className="column is-5">
          <h2 className="about-header title is-4">About Linda</h2>
          <p className="about-text">
            Originally created to conquer the Earth and rule with an iron fist, Linda decided coding was a much better option and has turned her artistic eye towards creating beautiful and stylistic sites.
          </p>
          <img className="about-image" src="https://media.licdn.com/dms/image/C4D03AQFeCLnOxdNYog/profile-displayphoto-shrink_800_800/0?e=1537401600&v=beta&t=Muk52jykhU3Vx_Pdw5ryYv-U11ZO7QEQL2oJJ1owju0" />
        </div>
        <div className="column is-5">
          <h2 className="about-header title is-4">About Martin</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies tortor at magna iaculis, quis sagittis elit pretium. Nullam eu ante dolor. Ut gravida suscipit vulputate. Nullam amet.
          </p>
        </div>
      </div>
    </section>

  );
};


export default AboutPage;
