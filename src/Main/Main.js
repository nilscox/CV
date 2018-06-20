import * as React from 'react';

const Main = () => (
  <main>

    <header>
      <h1>
        <span className="firstname">Nils</span>
        <span className="lastname">Layet</span>
      </h1>
    </header>

    {'<!-- wrap the hr around a div because we\'re in a flex container -->'}
    <div>
      <hr />
    </div>

    <section className="jobs">

      <h2>Expériences professionnelles</h2>

      <div className="job">
        <div className="job-dates">
          <span className="job-start">03 2017</span> &mdash;
          <span className="job-end">08 2018</span>
        </div>
        <div className="job-info">
          <span className="job-title">CDI</span>
          <span className="job-location">Sparted (startup), Paris</span>
          <div className="job-technos-desc">
            <div className="job-technos">HTML5, CSS3, NodeJS, Loopback 2, MithrilJS, AWS</div>
            <div className="job-description">
              Développement back-end et front-end d’une application mobile et d’un back office offrant une solution de
              micro-learning
            </div>
          </div>
        </div>
      </div>

      <div className="job">
        <div className="job-dates">
          <span className="job-start">06</span> &mdash;
          <span className="job-end">10 2016</span>
        </div>
        <div className="job-info">
          <span className="job-title">Projet de fin d'études</span>
          <span className="job-location">Watsize (startup), Paris</span>
          <div className="job-technos-desc">
            <div className="job-technos">Java JEE, ElasticSearch</div>
            <div className="job-description">
              Backend d’un site e-commerce, travail de recherche sur la catégorisation sémantique de catalogues produits
            </div>
          </div>
        </div>
      </div>

      <div className="job">
        <div className="job-dates">
          <span className="job-start">2015</span> &mdash;
          <span className="job-end">2017</span>
        </div>
        <div className="job-info">
          <span className="job-title">Assistant EPITA</span>
          <span className="job-location">EPITA, Paris</span>
          <div className="job-techos-desc">
            <div className="job-description">
              Participation à la formation des étudiants de l’EPITA (enseignement du C, C++, SQL, Java, C#)
            </div>
          </div>
        </div>
      </div>

      <div className="job">
        <div className="job-dates">
          <span className="job-start">09</span> &mdash;
          <span className="job-end">12 2015</span>
        </div>
        <div className="job-info">
          <span className="job-title">Développeur fullstack</span>
          <span className="job-location">Carizy (startup), Paris</span>
          <div className="job-technos-desc">
            <div className="job-technos">PHP, Symfony2</div>
            <div className="job-description">
              Développement d’un site de vente de PaP, mise en place d’un processus d’intégration continue
            </div>
          </div>
        </div>
      </div>

      <div className="job">
        <div className="job-dates">
          <span className="job-start">07</span> &mdash;
          <span className="job-end">08 2014</span>
        </div>
        <div className="job-info">
          <span className="job-title">Développeur android</span>
          <span className="job-location">Hénoïda (startup), Paris</span>
          <div className="job-technos-desc">
            <div className="job-technos">Java, Android</div>
            <div className="job-description">
              Développement d’une application Android pour
              entraîner sa mémoire. PoC et intégration d’un OCR pour les caractères
              chinois
            </div>
          </div>
        </div>
      </div>

    </section>
    <section>

      <h2>Projets</h2>

      A l'EPITA

      08 - 08 2014 42sh C, libpthread
      Implémentation complète d’un shell POSIX from scratch

      04 - 07 2015 YaKaramel Java JEE, SpringMVC, Hibernate, MySQL
      Développement d’un site commercial pour une entreprise fictive
      (rédaction des specs, gestion des risques, planning, implem, …)

      06 - 12 2016 Suggest NodeJS, Sails, Angular2, AWS
      Conception et développement d’une application web de partage et de
      suggestion d’images

      Perso
      2017 - ?? CardsAgainstHumanity Django, rest_framework, React, Redux, SocketIO
      Jeu de cartes au format web et mobile

      2012 - ?? Karmacreep PHP, Ruby, Python, NodeJS, Angular, et plus…
      Book d’une photographe au format web (projet ”sandbox” réalisé
      plusieurs fois pour apprendre à chaque fois une technologie spécifique)

    </section>
    <section>

      <h2>Cursus</h2>

      2012 - (2017) Diplôme d'ingénieur en informatique EPITA, Paris
      Majeure Multimédia et Technologies de l’Information

      S1 2014 Cursus universitaire Erasmus Bahçeşehir Üniversitesi, Istanbul
      Un semestre complet dans une université en Turquie (cours en anglais)

      2009 - 2011 Baccalauréat Scientifique Lycée J. Siegfried, Le Havre
      Mention AB

      2008 - 2009 High School 11th grade Casa Grande High School, Petaluma (CA)
      Une année en immersion complète en Californie

    </section>
    <section>

      <h2>Centres d'intérêts</h2>

      Musique
      Piano ; Basse ; MAO. Participation à plusieurs groupes de musique, autant
      au piano qu’à la basse ; créations solo sur ordinateur

      Magie
      Cartes ; Cordes ; Pièces ; Anneaux… Membre de la Fédération Française
      des Artistes Prestidigitateurs et du Cercle Magique Robert Houdin de Normandie.

    </section>

  </main>
);

export default Main;
