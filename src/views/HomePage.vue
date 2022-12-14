<template>
  <div class="home">
    <section id="side">
      <img
        class="rounded"
        src="../assets/Heather-prof.jpg"
        @mouseover="flipImage"
      />
      <a
        id="resume"
        href="https://hetd54.github.io/files/heather-resume_20210218.pdf"
        >Resume</a
      >
    </section>
    <section id="main">
      <article id="About">
        <h2 class="separator">About</h2>
        <h3>Current Work</h3>
        <p>
          I am currently a lab manager at Brown University, where I work with
          <a href="https://sites.brown.edu/bltlab/people/"> Roman Feiman</a> to
          build research projects using JavaScript and Python. Occasionally I
          will develop iPad apps for the aforementioned research studies, as
          well as create 3D models using Blender. Currently, I am developing a
          FileMaker app for the Brown Developmental labs to use for recruitment
          and study tracking.
        </p>
        <p>
          I am also currently attending Boston University as an online Masters
          student in the Computer Information Systems discipline. I have created
          a relational database project on Nursing Home admissions using SQL,
          and I have built a simple catalogue using Python. Because I love to
          learn, it's been really fun thus far!
        </p>
        <h3>Interests</h3>
        <p>
          Professionally, I have had the most fun when learning how to turn our
          JavaScript web app into a working iOS app. While it was intimidating
          at first, I felt so proud when the app finally came together! I am
          also quite interested in getting better at the things that I already
          know. Therefore, I am excited to be taking a course that will be going
          over Vue.js. I also want to convert another study to React instead of
          relying on PHP and JS scripts to work!
        </p>
        <p>
          In my spare time, I love playing video games with my friends and
          cuddling with my two cats! I enjoy teaching my husband new words in
          ASL and reading together on the couch. Making Blender animations is
          also a lot of fun, so I am looking forward to having more time to
          spend on improving my modeling skills soon.
        </p>
      </article>

      <article id="Education">
        <h2 class="separator">Education</h2>
        <table>
          <thead>
            <tr>
              <th colspan="2">School Name</th>
              <th>Location</th>
              <th>Degree</th>
              <th>Dates Attended</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="../assets/MU.png" alt="MU's Logo" class="logo" />
              </td>
              <td>University of Missouri- Columbia</td>
              <td>Columbia, MO</td>
              <td>B.A. in Psychology</td>
              <td>Sept 2013 - May 2017</td>
            </tr>
            <tr>
              <td>
                <img src="../assets/BU.png" alt="BU's Logo" class="logo" />
              </td>
              <td>Boston University</td>
              <td>Boston, MA</td>
              <td>Master's in Computer Information Systems</td>
              <td>Aug 2021 - May 2024</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article id="Skills">
        <h2 class="separator">Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>R</li>
          <li>SQL</li>
          <li>FileMaker Pro 19</li>
          <li>Blender 3D</li>
          <li>Adobe Photoshop, Premiere, and InDesign</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    flipImage: function (event) {
      const clickedCard = event.target;
      clickedCard.classList.add("flip");

      setTimeout(() => {
        clickedCard.classList.remove("flip");
        return;
      }, 1200);
    },
  },
};
</script>

<style scoped>
.home {
  color: #2c3e50;
  margin: 20px;
}

ul li {
  display: flex;
  font-size: 18px;
  padding: 10px 30px 10px 0px;
  flex-wrap: wrap;
  flex-direction: column;
}

table {
  text-align: left;
}

th,
td {
  padding: 7px 10px 10px 10px;
}

th {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 90%;
  border-bottom: 2px solid var(--dark-blue);
  border-top: 1px solid var(--light-orange);
  text-align: left;
}

.rounded {
  border: thick double #e56a49;
  border-radius: 9999px;
  width: 250px;
}

.rounded.flip {
  transform: rotateY(180deg);
}

.separator {
  border-bottom: thick double #e56a49;
}

.logo {
  width: 40px;
  padding: 5px;
}

#side {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#side a {
  margin: 10px 200px;
  padding: 10px 10px;
  text-decoration: none;
  background-color: #2c3e50;
  border-radius: 9999px;
  color: whitesmoke;
}

#side a:hover {
  background-color: #455665;
}
</style>
