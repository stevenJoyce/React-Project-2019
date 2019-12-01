import React from 'react';
import Carousel from '@brainhubeu/react-carousel'; //inmported carousel library
import '@brainhubeu/react-carousel/lib/style.css';//imported css class for carousel library
import Logo from '../images/f1Logo.jpg';
import Farina from '../images/Farina.jpg';
import image1 from '../images/cars/car1951.jpg';
import image2 from '../images/cars/car1952.jpg';
import image3 from '../images/cars/car1953.jpg';
import image4 from '../images/cars/car1954.jpg';
import image5 from '../images/cars/car1955.jpg';
import image6 from '../images/cars/car1956.jpg';
import image7 from '../images/cars/car1957.jpg';
import image8 from '../images/cars/car1958.jpg';
import image9 from '../images/cars/car1959.jpg';
import image10 from '../images/cars/car1960.jpg';
import image11 from '../images/cars/car1961.jpg';
import image12 from '../images/cars/car1962.jpg';
import image13 from '../images/cars/car1963.jpg';
import image14 from '../images/cars/car1964.jpg';
import image15 from '../images/cars/car1965.jpg';
import image16 from '../images/cars/car1966.jpg';
import image17 from '../images/cars/car1967.jpg';
import image18 from '../images/cars/car1968.jpg';
import image19 from '../images/cars/car1969.jpg';
import image20 from '../images/cars/car1970.jpg';
import image21 from '../images/cars/car1971.jpg';
import image22 from '../images/cars/car1972.jpg';
import image23 from '../images/cars/car1973.jpg';
import image24 from '../images/cars/car1974.jpg';
import image25 from '../images/cars/car1975.jpg';
import image26 from '../images/cars/car1976.jpg';
import image27 from '../images/cars/car1977.jpg';
import image28 from '../images/cars/car1978.jpg';
import image29 from '../images/cars/car1979.jpg';
import image30 from '../images/cars/car1980.jpg';
import image31 from '../images/cars/car1981.jpg';
import image32 from '../images/cars/car1982.jpg';
import image33 from '../images/cars/car1983.jpg';
import image34 from '../images/cars/car1984.jpg';
import image35 from '../images/cars/car1985.jpg';
import image36 from '../images/cars/car1986.jpg';
import image37 from '../images/cars/car1987.jpg';
import image38 from '../images/cars/car1988.jpg';
import image39 from '../images/cars/car1989.jpg';
import image40 from '../images/cars/car1990.jpg';
import image41 from '../images/cars/car1991.jpg';
import image42 from '../images/cars/car1992.jpg';
import image43 from '../images/cars/car1993.jpg';
import image44 from '../images/cars/car1994.jpg';
import image45 from '../images/cars/car1995.jpg';
import image46 from '../images/cars/car1996.jpg';
import image47 from '../images/cars/car1997.jpg';
import image48 from '../images/cars/car1998.jpg';
import image49 from '../images/cars/car1999.jpg';
import image50 from '../images/cars/car2000.jpg';
import image51 from '../images/cars/car2001.jpg';
import image52 from '../images/cars/car2002.jpg';
import image53 from '../images/cars/car2003.jpg';
import image54 from '../images/cars/car2004.jpg';
import image55 from '../images/cars/car2005.jpg';
import image56 from '../images/cars/car2006.jpg';
import image57 from '../images/cars/car2007.jpg';
import image58 from '../images/cars/car2008.jpg';
import image59 from '../images/cars/car2009.jpg';
import image60 from '../images/cars/car2010.jpg';
import image61 from '../images/cars/car2011.jpg';
import image62 from '../images/cars/car2012.jpg';
import image63 from '../images/cars/car2013.jpg';
import image64 from '../images/cars/car2014.jpg';
import image65 from '../images/cars/car2015.jpg';
import image66 from '../images/cars/car2016.jpg';
import image67 from '../images/cars/car2017.jpg';
import image68 from '../images/cars/car2018.jpg';
import image69 from '../images/cars/car2019.jpg';
class Content extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    return (
      //Using the imported carousel library I will put all the images of every championship winnning car
      // in a slideshow. Four images will be shown at each iteration with an interactive arrow to see the 
      // next image and a interactive arrow to see the previous image 
      <div className="App">
        <p>
          <img src = {Logo} alt="logo"/>
        </p>
        <h1> F1 History</h1>
        <p>
          Formula One began in 1950. The first offical Race was in May 1950 and it was held at Silverstone <br />
          In its first season ony 7 0f the 20 races were offical and counted towards the Championship. <br />
          The first F1 teams to compete in the championship were; <br />
          Alfa Romeo, Ferrari, Talbot-Lago, Kurtis Kraft Offenhauser,<br />
          Masserati, Deidt Offenhauser, Masserati Milano, Simca Gordini <br />
          The 1st Championship did not have a Constructors Championship only a Drivers Championship <br />
          <img src = {Farina} alt="farina"/><br />
          The 1st Drivers Championship was won by Giuseppe Farina.
        </p>
        <h1> F1 Cars through the Years </h1>
        <Carousel
          slidesPerPage={4}
          arrows
          infinite >
          <img src={image1} alt="one" height="250" width="250"/>
          <img src={image2} alt="two" height="250" width="250"/>
          <img src={image3} alt="three" height="250" width="250"/>
          <img src={image4} alt="four" height="250" width="250"/>
          <img src={image5} alt="five" height="250" width="250"/>
          <img src={image6} alt="six" height="250" width="250"/>
          <img src={image7} alt="seven" height="250" width="250"/>
          <img src={image8} alt="eight" height="250" width="250"/>
          <img src={image9} alt="nine" height="250" width="250"/>
          <img src={image10} alt="ten" height="250" width="250"/>
          <img src={image11} alt="eleven" height="250" width="250"/>
          <img src={image12} alt="twelve" height="250" width="250"/>
          <img src={image13} alt="thirteen" height="250" width="250"/>
          <img src={image14} alt="fourteen" height="250" width="250"/>
          <img src={image15} alt="fifteen" height="250" width="250"/>
          <img src={image16} alt="sixteen" height="250" width="250"/>
          <img src={image17} alt="seventeen" height="250" width="250"/>
          <img src={image18} alt="eighteen" height="250" width="250"/>
          <img src={image19} alt="nineteen" height="250" width="250"/>
          <img src={image20} alt="twenty" height="250" width="250"/>
          <img src={image21} alt="twentyOne" height="250" width="250"/>
          <img src={image22} alt="twentyTwo" height="250" width="250"/>
          <img src={image23} alt="twentyThree" height="250" width="250"/>
          <img src={image24} alt="twentyFour" height="250" width="250"/>
          <img src={image25} alt="twentyFive" height="250" width="250"/>
          <img src={image26} alt="twentySix" height="250" width="250"/>
          <img src={image27} alt="twentySeven" height="250" width="250"/>
          <img src={image28} alt="twentyEight" height="250" width="250"/>
          <img src={image29} alt="twentyNine" height="250" width="250"/>
          <img src={image30} alt="thirty" height="250" width="250"/>
          <img src={image31} alt="thirtyOne" height="250" width="250"/>
          <img src={image32} alt="thirtyTwo" height="250" width="250"/>
          <img src={image33} alt="thirtyThree" height="250" width="250"/>
          <img src={image34} alt="thirtyFour" height="250" width="250"/>
          <img src={image35} alt="thirtyFive" height="250" width="250"/>
          <img src={image36} alt="thirtySix" height="250" width="250"/>
          <img src={image37} alt="thirtySeven" height="250" width="250"/>
          <img src={image38} alt="thirtyEight" height="250" width="250"/>
          <img src={image39} alt="thirtyNine" height="250" width="250"/>
          <img src={image40} alt="forty" height="250" width="250"/>
          <img src={image41} alt="fortyOne" height="250" width="250"/>
          <img src={image42} alt="fortyTwo" height="250" width="250"/>
          <img src={image43} alt="fortyThree" height="250" width="250"/>
          <img src={image44} alt="fortyFour" height="250" width="250"/>
          <img src={image45} alt="fortyFive" height="250" width="250"/>
          <img src={image46} alt="fortySix" height="250" width="250"/>
          <img src={image47} alt="fortySeven" height="250" width="250"/>
          <img src={image48} alt="fortyEight" height="250" width="250"/>
          <img src={image49} alt="fortyNine" height="250" width="250"/>
          <img src={image50} alt="fifty" height="250" width="250"/>
          <img src={image51} alt="fiftyOne" height="250" width="250"/>
          <img src={image52} alt="fiftyTwo" height="250" width="250"/>
          <img src={image53} alt="fiftyThree" height="250" width="250"/>
          <img src={image54} alt="fiftyFour" height="250" width="250"/>
          <img src={image55} alt="fiftyFive" height="250" width="250"/>
          <img src={image56} alt="fiftySix" height="250" width="250"/>
          <img src={image57} alt="fiftySeven" height="250" width="250"/>
          <img src={image58} alt="fiftyEight" height="250" width="250"/>
          <img src={image59} alt="fiftyNine" height="250" width="250"/>
          <img src={image60} alt="Sixty" height="250" width="250"/>
          <img src={image61} alt="SixtyOne" height="250" width="250"/>
          <img src={image62} alt="SixtyTwo" height="250" width="250"/>
          <img src={image63} alt="SixtyThree" height="250" width="250"/>
          <img src={image64} alt="SixtyFour" height="250" width="250"/>
          <img src={image65} alt="SixtyFive" height="250" width="250"/>
          <img src={image66} alt="SixtySix" height="250" width="250"/>
          <img src={image67} alt="SixtySeven" height="250" width="250"/>
          <img src={image68} alt="SixtyEight" height="250" width="250"/>
          <img src={image69} alt="SixtyNine" height="250" width="250"/>
        </Carousel>
      </div>
    );
  }
  
}

export default Content;