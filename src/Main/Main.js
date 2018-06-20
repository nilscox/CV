import * as React from 'react';

import Header from './Header';
import Jobs from './Jobs';

const Main = ({ id, summary, jobs }) => (
  <main>

    <Header {...id} summary={summary} />

    <Jobs {...jobs} />

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
