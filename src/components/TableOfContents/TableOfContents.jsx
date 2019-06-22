import React from 'react';
import PropTypes from 'prop-types';
import './TableOfContents.scss';
import { Link } from 'react-router-dom';

/* TableOfContents */
export default function TableOfContents() {
  return (
    <div className="table-of-contents">
      <h2>Table of Contents</h2>
      <ul>
        <li>
          <Link to="/poem/toTheReader1">To The Reader</Link>
        </li>
        <li>
          <Link to="/poem/toTheReader2">To The Reader</Link>
        </li>
      </ul>
      <h3 className="section-title">Spleen Et Idéal</h3>
      <ul>
        <li>
          <Link to="/poem/benediction">Benediction</Link>
        </li>
        <li>
          <Link to="/poem/theAlbatross">The Albatross</Link>
        </li>
        <li>
          <Link to="/poem/ember">Ember</Link>
        </li>
        <li>
          <Link to="/poem/correspondances">Correspondances</Link>
        </li>
        <li>
          <Link to="/poem/blanche">Blanche</Link>
        </li>
        <li>
          <Link to="/poem/hepSlears">Hep Slears</Link>
        </li>
        <li>
          <Link to="/poem/theSickenedMuse">The Sickened Muse</Link>
        </li>
        <li>
          <Link to="/poem/theVeneratedMuse">The Venerated Muse</Link>
        </li>
        <li>
          <Link to="/poem/theLemonadeMan">The Lemonade Man</Link>
        </li>
        <li>
          <Link to="/poem/toALoanShark">To A Loan Shark</Link>
        </li>
        <li>
          <Link to="/poem/may">May (The guy gone)</Link>
        </li>
        <li>
          <Link to="/poem/thisAntiTerrorLife">This Anti-Terror Life: III</Link>
        </li>
        <li>
          <Link to="/poem/bohemiansTakeATrip">Bohemians Take A Trip</Link>
        </li>
        <li>
          <Link to="/poem/manAndTheSea">Man & The Sea</Link>
        </li>
        <li>
          <Link to="/poem/donJuanInFurs">
            Don Juan In Furs (what the fuck is mugissement?)
          </Link>
        </li>
        <li>
          <Link to="/poem/chatimentDeLOrgueil">Chatiment De L’Orgueil</Link>
        </li>
        <li>
          <Link to="/poem/beauty">Beauty</Link>
        </li>
        <li>
          <Link to="/poem/dateOfStradivarisDeath">
            Date Of Stradivari’s Death
          </Link>
        </li>
        <li>
          <Link to="/poem/theGiant">The Giant</Link>
        </li>
        <li>
          <Link to="/poem/theYoungGirls">The Young Girls</Link>
        </li>
        <li>
          <Link to="/poem/amSequel">A.M. Sequel</Link>
        </li>
        <li>
          <Link to="/poem/songOfTheBoatShoes">Song Of The Boat Shoes</Link>
        </li>
        <li>
          <Link to="/poem/parfumExotique">Parfum Exotique</Link>
        </li>
        <li>
          <Link to="/poem/laChevalier">La Chevalier</Link>
        </li>
        <li>
          <Link to="/poem/xxiv”)">
            XXIV (“I love you lawyers and your volatile dreams…”)
          </Link>
        </li>
        <li>
          <Link to="/poem/xxv”)">
            XXV (“You put the universe under your thumb…”)
          </Link>
        </li>
        <li>
          <Link to="/poem/iSaidItsNotMarijuana">I Said It’s Not Marijuana</Link>
        </li>
        <li>
          <Link to="/poem/iLikeTryptophan">I Like Tryptophan</Link>
        </li>
        <li>
          <Link to="/poem/leSerpentQuiDanse">Le Serpent Qui Danse</Link>
        </li>
        <li>
          <Link to="/poem/uneCharogne">Une Charogne</Link>
        </li>
        <li>
          <Link to="/poem/deProfundisClamavis">De Profundis Clamavis</Link>
        </li>
        <li>
          <Link to="/poem/theVampire">The Vampire</Link>
        </li>
        <li>
          <Link to="/poem/lethe">Lethe</Link>
        </li>
        <li>
          <Link to="/poem/xxxii">XXXII (“One night in June…”)</Link>
        </li>
        <li>
          <Link to="/poem/deadLetterOffice">Dead Letter Office</Link>
        </li>
        <li>
          <Link to="/poem/theChat">The Chat</Link>
        </li>
        <li>
          <Link to="/poem/ferYelluh">Fer Yelluh</Link>
        </li>
        <li>
          <Link to="/poem/leBalcon">Le Balcon</Link>
        </li>
        <li>
          <Link to="/poem/thePossessed">The Possessed</Link>
        </li>
        <li>
          <Link to="/poem/hateMail">Hate Mail</Link>
        </li>
        <li>
          <Link to="/poem/xxxix">
            XXXIX (“I give you a lake stocked with flying fish, named after a
            Spaniard…”)
          </Link>
        </li>
        <li>
          <Link to="/poem/earthQuakeMenu">Earth Quake Menu</Link>
        </li>
        <li>
          <Link to="/poem/twoTonChair">Two Ton Chair</Link>
        </li>
        <li>
          <Link to="/poem/xlii">
            XLII (“Poa traim driver, qut uor lesses, eu ice a ai…”)
          </Link>
        </li>
        <li>
          <Link to="/poem/auntVivsBoyfriendLayDownInFlames">
            Aunt Viv’s Boyfriend Lay Down In Flames
          </Link>
        </li>
        <li>
          <Link to="/poem/aCelleQuiEstTropGaie">A Celle Qui Est Trop Gaie</Link>
        </li>
        <li>
          <Link to="/poem/reversibilite">Réversibilité</Link>
        </li>
        <li>
          <Link to="/poem/confession">Confession</Link>
        </li>
        <li>
          <Link to="/poem/lAubeSpiritually">L’Aube Spiritually</Link>
        </li>
        <li>
          <Link to="/poem/theTwoDarknesses">The Two Darknesses</Link>
        </li>
        <li>
          <Link to="/poem/theFlask">The Flask</Link>
        </li>
        <li>
          <Link to="/poem/lePoison">Le Poison</Link>
        </li>
        <li>
          <Link to="/poem/cielBrouille">Ciel Brouillé</Link>
        </li>
        <li>
          <Link to="/poem/leChat">Le Chat</Link>
        </li>
        <li>
          <Link to="/poem/liberateTheForwardThinkersFreedomForTheStraightAndNarrow">
            Liberate The Forward Thinkers! Freedom For The Straight And Narrow!
          </Link>
        </li>
        <li>
          <Link to="/poem/infielderNeverTastedLifeInTheBigs">
            Infielder Never Tasted Life In The Bigs
          </Link>
        </li>
        <li>
          <Link to="/poem/erIrbralaple">Er Irbralaple</Link>
        </li>
        <li>
          <Link to="/poem/checkroom">Checkroom</Link>
        </li>
        <li>
          <Link to="/poem/songOfAutumn">Song Of Autumn</Link>
        </li>
        <li>
          <Link to="/poem/toSantaClaus">To Santa Claus</Link>
        </li>
        <li>
          <Link to="/poem/postMidnightSong">Post-Midnight Song</Link>
        </li>
        <li>
          <Link to="/poem/theSinger">The Singer</Link>
        </li>
        <li>
          <Link to="/poem/franciscanLaunderers">Franciscan Launderers</Link>
        </li>
        <li>
          <Link to="/poem/aWomanCriedOle">A Woman Cried Olé</Link>
        </li>
        <li>
          <Link to="/poem/moestaAndErrabunda">Mœsta And Errabunda</Link>
        </li>
        <li>
          <Link to="/poem/theRaven">The Raven</Link>
        </li>
        <li>
          <Link to="/poem/sonnetDAutomne">Sonnet D’Automne</Link>
        </li>
        <li>
          <Link to="/poem/sadStoriesFromTheSurfaceOfTheMoon">
            Sad Stories From The Surface Of The Moon
          </Link>
        </li>
        <li>
          <Link to="/poem/luxembourgsKitties">Luxembourg’s Kitties</Link>
        </li>
        <li>
          <Link to="/poem/theFlightlessBirds">The Flightless Birds</Link>
        </li>
        <li>
          <Link to="/poem/thePipe">The Pipe</Link>
        </li>
        <li>
          <Link to="/poem/theMuseIsDisgustedButCrippled">
            The Muse Is Disgusted But Crippled
          </Link>
        </li>
        <li>
          <Link to="/poem/lecturesOnSeppuku">Lectures On Seppuku</Link>
        </li>
        <li>
          <Link to="/poem/uneGravureFantastique">Une Gravure Fantastique</Link>
        </li>
        <li>
          <Link to="/poem/themDeadJoyOrSomeThem">
            Them Dead Joy Or Some Them
          </Link>
        </li>
        <li>
          <Link to="/poem/deEndIsDeHen">De End Is De Hen</Link>
        </li>
        <li>
          <Link to="/poem/theClockHasFallen">The Clock Has Fallen</Link>
        </li>
        <li>
          <Link to="/poem/spleenlxxv">Spleen</Link>
        </li>
        <li>
          <Link to="/poem/spleenlxxvi">Spleen</Link>
        </li>
        <li>
          <Link to="/poem/spleenlxxvii">Spleen</Link>
        </li>
        <li>
          <Link to="/poem/spleenlxxviii">Spleen</Link>
        </li>
        <li>
          <Link to="/poem/obsession">Obsession</Link>
        </li>
        <li>
          <Link to="/poem/theGhostOfCavemen">The Ghost Of Cavemen</Link>
        </li>
        <li>
          <Link to="/poem/alchemyOfTheDoofus">Alchemy Of The Doofus</Link>
        </li>
        <li>
          <Link to="/poem/horreurSympathique">Horreur Sympathique</Link>
        </li>
        <li>
          <Link to="/poem/theAutoMechanics">The Auto Mechanics</Link>
        </li>
        <li>
          <Link to="/poem/lIrremediable">L’Irrémédiable</Link>
        </li>
        <li>
          <Link to="/poem/theLumberjacksWhore">The Lumberjack’s Whore</Link>
        </li>
      </ul>
      <h3 className="section-title">Tableaux Parisiens</h3>
      <ul>
        <li>
          <Link to="/poem/holyPositionOfPlantStore">
            Holy Position Of Plant Store
          </Link>
        </li>
        <li>
          <Link to="/poem/iWasSwimming">I Was Swimming</Link>
        </li>
        <li>
          <Link to="/poem/toYourRussianAuntMindy">
            To Your Russian Aunt Mindy
          </Link>
        </li>
        <li>
          <Link to="/poem/theSwan">The Swan</Link>
        </li>
        <li>
          <Link to="/poem/theSevenOldDucks">The Seven Old Ducks</Link>
        </li>
        <li>
          <Link to="/poem/theLittleCities">The Little Cities</Link>
        </li>
        <li>
          <Link to="/poem/theAvenues">The Avenues</Link>
        </li>
        <li>
          <Link to="/poem/toAPasserby">To A Passerby</Link>
        </li>
        <li>
          <Link to="/poem/theSqueegeeMan">The Squeegee Man</Link>
        </li>
        <li>
          <Link to="/poem/leCrepesculeDuMatin">Le Crepescule Du Matin</Link>
        </li>
        <li>
          <Link to="/poem/theGame(Poof!You’ReAnOrangeSandwich!)">
            The Game (Poof! You’re An Orange Sandwich!)
          </Link>
        </li>
        <li>
          <Link to="/poem/aScaryCabRide">A Scary Cab Ride</Link>
        </li>
        <li>
          <Link to="/poem/iLoveMyAnsweringMachine">
            I Love My Answering Machine
          </Link>
        </li>
        <li>
          <Link to="/poem/xcix">
            XCIX (“Jenny’s steps forget what she’s seen already…”)
          </Link>
        </li>
        <li>
          <Link to="/poem/c">
            C (“The dog man’s foot servant jumped out of the loose jail…”)
          </Link>
        </li>
        <li>
          <Link to="/poem/broomsAndTears">Brooms And Tears</Link>
        </li>
        <li>
          <Link to="/poem/twoBuddhistMonksGunnedTheirMotorcycles">
            Two Buddhist Monks Gunned Their Motorcycles/Rêve Parisien
          </Link>
        </li>
        <li>
          <Link to="/poem/leCrepesculeDuSoir">Le Crepescule Du Soir</Link>
        </li>
      </ul>
      <h3 className="section-title">Le Vin</h3>
      <ul>
        <li>
          <Link to="/poem/lAmeDuVin">L’Ame Du Vin</Link>
        </li>
        <li>
          <Link to="/poem/youStepOutsideOfTheWeeksShufflingYesses">
            You Step Outside Of The Week’s Shuffling Yesses
          </Link>
        </li>
        <li>
          <Link to="/poem/leavingTheSpanishAdmiral">
            Leaving The Spanish Admiral
          </Link>
        </li>
        <li>
          <Link to="/poem/theSolitaryDrinker">The Solitary Drinker</Link>
        </li>
        <li>
          <Link to="/poem/leavingDaysAMoonMountain">
            Leaving Days A Moon Mountain
          </Link>
        </li>
      </ul>
      <h3 className="section-title">Fleurs du Mal</h3>
      <ul>
        <li>
          <Link to="/poem/laDestruction">La Destruction</Link>
        </li>
        <li>
          <Link to="/poem/aLateMartyr">A Late Martyr</Link>
        </li>
        <li>
          <Link to="/poem/theBothOfThem">The Both Of Them</Link>
        </li>
        <li>
          <Link to="/poem/femmesDamneex">
            Femmes Damneex (Delphine et Hippolyte)
          </Link>
        </li>
        <li>
          <Link to="/poem/femmesDamnees1">Femmes Damnées</Link>
        </li>
        <li>
          <Link to="/poem/femmesDamnees2">Femmes Damnées</Link>
        </li>
        <li>
          <Link to="/poem/ladyBouncers">Lady Bouncers</Link>
        </li>
        <li>
          <Link to="/poem/laughingTundraSong">Laughing Tundra Song</Link>
        </li>
        <li>
          <Link to="/poem/inTheStockingFactory">In The Stocking Factory</Link>
        </li>
        <li>
          <Link to="/poem/laBeatrice">La Béatrice</Link>
        </li>
        <li>
          <Link to="/poem/lesMetAlphonseHortenseAndPamplemousseInMyAccountantsOfficeWithAVampire">
            Les Met Alphonse, Hortense And Pamplemousse In My Accountant’s
            Office With A Vampire
          </Link>
        </li>
        <li>
          <Link to="/poem/unVoyageACythere">
            Un Voyage À Cythère (No Seats On The Plane)
          </Link>
        </li>
        <li>
          <Link to="/poem/lAmourEtLeCrane">L’Amour Et Le Crane</Link>
        </li>
      </ul>
      <h3 className="section-title">Révolte</h3>
      <ul>
        <li>
          <Link to="/poem/theWidowOfSaintPierre">
            The Widow Of Saint Pierre
          </Link>
        </li>
        <li>
          <Link to="/poem/abelAndCain">Abel And Cain</Link>
        </li>
      </ul>
      <h3 className="section-title">La Mort</h3>
      <ul>
        <li>
          <Link to="/poem/lesLitaniesDeSatan">Les Litanies De Satan</Link>
        </li>
        <li>
          <Link to="/poem/lawMorgueDaysAlmonds">Law Morgue Days Almonds</Link>
        </li>
        <li>
          <Link to="/poem/theDeathOfThePoor">The Death Of The Poor</Link>
        </li>
        <li>
          <Link to="/poem/theNorthOfArtists">The North Of Artists</Link>
        </li>
        <li>
          <Link to="/poem/theFinOfTheJourney">The Fin Of The Journey</Link>
        </li>
        <li>
          <Link to="/poem/leReveDUnCurieux">Le Rêve D’Un Curieux</Link>
        </li>
        <li>
          <Link to="/poem/leVoyage">Le Voyage</Link>
        </li>
        <li>
          <Link to="/afterword">Afterword</Link>
        </li>
      </ul>
    </div>
  );
}

TableOfContents.propTypes = {};

TableOfContents.defaultProps = {};
/* */
