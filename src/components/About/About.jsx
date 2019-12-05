import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';

/* About */
const About = (props) => {
  const {} = props;

  return (
    <div className="about">
      <h1>About</h1>
      <p>
        About? About what? That seems good and vague. In good time, with any
        luck or perhaps more than luck me prodding myself to actually finish
        this site (and by prodding I mean kicking myself repeatedly in the ass)
        I will manage to put actually relevant information here.
      </p>
      <p>
        What might I consider relevant? Well for starters there's simple
        information about the book, <em>Flowers of Bad</em>, from which all the
        poems on this site are derived, information about the author and of
        course there is the matter of the <em>other</em> author (ahem) M.
        Charles Baudelaire. He wrote a book too, you know. It's quite famous
        actually. It's called <em>Les Fleurs du mal</em> and among many other
        places a wealth of information about it can be found at fleursdumal.com.
      </p>
      <p>
        For the time being though this is all I can give you. For the most part
        all of the poems are up here, although the second version of "To The
        Reader" presents certain challenges I haven't yet addressed. If you feel
        as though you've found soemthing else, some misspelling or a broken link
        or such please send me an email at dc@[this website].
      </p>
      <p>
        The last thing I'll mention is the book itself. <em>Flowers of Bad</em>{' '}
        was first published back around 2007 and the run was about 850 copies,
        which was reasonable for a first book of poems not being handled by a
        major publisher I guess. It seems that now, some twelve or so years
        later, all copies of the book that were held by myself or by the
        distributor have been sold. It has been suggested to me that I do a
        second run of the book so that it can continue to be sold but at the
        moment I am undecided about whether I should invest the time and effort.
        If you feel as though I should do another run and you'd buy a
        (reasonably priced) copy then please drop me a line and let me know. If
        enough people weigh in affirmatively then I will likely go ahead with
        getting a second printing out.
      </p>
      <p>
        Oh, and all these poems and the afterword are not to be reprinted
        anywhere without my (I'm the author) express permission, which I'd
        probably be glad to grant if you were only to ask nicely.
      </p>
      <p></p>
      <p>David Cameron, 12/2019</p>
    </div>
  );
};

About.propTypes = {};

About.defaultProps = {};

export default About;
/* */
