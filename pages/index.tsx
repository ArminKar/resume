import Head from 'next/head';


import data from '../data/data';
import Experience from '../components/experience';
import Education from '../components/education';
import Introduction from '../components/introduction';
import Skills from '../components/skills';
import Languages from '../components/languages';
import Social from '../components/social';
import Projects from '../components/projects';

const styles = (
    <style jsx global>{`
      body, h1, h2, h3, h4, h5, h6 {
        border: 0;
        padding: 0; 
        margin: 0;
      }
  
      body, h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
      }
      a {
        text-decoration: none;
        color: black;
      }
      h1 {
        font-weight: 500;
      }
      h3 {
        font-size: 2rem;
        font-weight: 400;
        margin: 2rem 0;
        background-color: #d0d3d9;
        padding: 1rem;
      }
      h4 {
        font-size: 1.7rem;
        font-weight: 500;
      }
      h5 {
        font-weight: 400;
        font-size: 1.5rem;
      }
      h6 {
        font-weight: 400;
        font-size: 1.2rem;
      }
      p {
        max-width: 800px;
      }
  
      .Resume {
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;
        width: 100vw;
        max-width: 1500px;
        margin: auto;
        box-sizing: border-box;
      }
      .Resume-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .Resume-main {
        flex: 2;
        width: 520px;
        margin: 0 1rem;
      }
      .Resume-sidebar {
        flex: 1;
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 1rem;
        height: 100%;
      }
      .Resume-sidebar-section {
        margin-bottom: 5rem;
      }
    `}</style>
  );
  
  const Resume = () => (
    <section className="Resume">
      <Head>
        <title>{data.introduction.name}</title>
        <meta name="description" content={data.introduction.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Introduction data={data.introduction} />
      <section className="Resume-content">
        <section className="Resume-sidebar">
          <div className="Resume-sidebar-section">
            <Projects data={data.projects} />
          </div>
          <div className="Resume-sidebar-section">
            <Languages data={data.languages} />
          </div>
        </section>
        <section className="Resume-main">
          <Experience data={data.experience} />
          <Education data={data.education} />
        </section>
        <section className="Resume-sidebar">
          <div className="Resume-sidebar-section">
            <Skills data={data.skills} />
          </div>
          <div className="Resume-sidebar-section">
            <Social data={data.socials} />
          </div>
        </section>
      </section>
      {styles}
    </section>
  );

export default (Resume);