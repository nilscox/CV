import * as React from 'react';

import Header from './Header';
import Jobs from './Jobs';
import Projects from './Projects';

const Main = ({ id, summary, jobs, projects }) => (
  <main>

    <Header {...id} summary={summary} />
    <Jobs {...jobs} />
    <Projects {...projects} />

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
