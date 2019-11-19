import React from 'react';
import ReactTable from "react-table";  
import "react-table/react-table.css";  //A preset react css file
class DriverChampionship extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render  
  render() {  
     const data = [
       {  
        name: 'Michael Schumacher',
        nationality: 'German', 
        noOfChampionships: 7,
        year: '1994, 1995, 2000, 2001, 2002, 2003, 2004',
        wins: 91,
        noOfSeasons: 19
      },
      {  
        name: 'Lewis Hamilton',
        nationality: 'English', 
        noOfChampionships: 6,
        year: '2008, 2014, 2015, 2017, 2018, 2019',
        wins: 83,
        noOfSeasons: 13
      },
      {  
        name: 'Juan Manuel Fangio',  
        nationality: 'Argentinian', 
        noOfChampionships: 5,
        year: '1051, 1954, 1955, 1956, 1957',
        wins: 24,
        noOfSeasons: 8 
      },
      {  
        name: 'Alain Prost',  
        nationality: 'French', 
        noOfChampionships: 4,
        year: '1985, 1986, 1989, 1993',
        wins: 51,
        noOfSeasons: 13      
      },
      {  
        name: 'Sebastian Vettel',  
        nationality: 'German', 
        noOfChampionships: 4,
        year: '2010, 2011, 2012, 2013',
        wins: 53,
        noOfSeasons: 13
      },
      {  
        name: 'Ayrton Senna',  
        nationality: 'Brazilian', 
        noOfChampionships: 3,
        year: '1988, 1989, 1991',
        wins: 41,
        noOfSeasons: 11 
      },
      {  
        name: 'Jackie Stewart',  
        nationality: 'English', 
        noOfChampionships: 3,
        year: '1969, 1971, 1973',
        wins: 27,
        noOfSeasons: 9
      },
      {  
        name: 'Jack Brabham',  
        nationality: 'Australian', 
        noOfChampionships: 3,
        year: '1959, 1960, 1966',
        wins: 14,
        noOfSeasons: 16 
      },
      {  
        name: 'Brazil Nelson Piquet	',  
        nationality: 'Brazilian', 
        noOfChampionships: 3,
        year: '1981, 1983, 1987',
        wins: 23,
        noOfSeasons: 14 
      },
      {  
        name: 'Niki Lauda',  
        nationality: 'Austrian', 
        noOfChampionships: 3,
        year: '1975, 1977, 1984',
        wins: 25,
        noOfSeasons: 13 
      },
      { 
        name: 'Alberto Ascari	',  
        nationality: 'Italian', 
        noOfChampionships: 2,
        year: '1952, 1953',
        wins: 13,
        noOfSeasons: 6 
      },
      {  
        name: 'Graham Hill',  
        nationality: 'English', 
        noOfChampionships: 2,
        year: '1962, 1968',
        wins: 14,
        noOfSeasons: 18 
      },
      {  
        name: 'Emerson Fittipaldi',  
        nationality: 'Brazilian', 
        noOfChampionships: 2,
        year: '1972, 1974',
        wins: 14,
        noOfSeasons: 11 
      },
      {  
        name: 'Fernando Alonso',  
        nationality: 'Spanish', 
        noOfChampionships: 2,
        year: '2005, 2006',
        wins: 32,
        noOfSeasons: 17 
      },
      {  
        name: 'Mika Häkkinen',  
        nationality: 'Finnish', 
        noOfChampionships: 2,
        year: '1998, 1999',
        wins: 20,
        noOfSeasons: 11 
      },
      {  
        name: 'Jim Clark',  
        nationality: 'Scottish', 
        noOfChampionships: 2,
        year: '1963, 1965',
        wins: 25,
        noOfSeasons: 9 
      },
      {  
        name: 'Giuseppe Farina',  
        nationality: 'Italian', 
        noOfChampionships: 1,
        year: '1950',
        wins: 5,
        noOfSeasons: 7 
      },
      {  
        name: 'Mike Hawthorn',  
        nationality: 'English', 
        noOfChampionships: 1,
        year: '1958',
        wins: 3,
        noOfSeasons: 7 
      },
      {  
        name: 'Jody Scheckter',  
        nationality: 'South African', 
        noOfChampionships: 1,
        year: '1979',
        wins: 10,
        noOfSeasons: 9 
      },
      {  
        name: 'Jacques Villeneuve',  
        nationality: 'Canadian', 
        noOfChampionships: 1,
        year: '1997',
        wins: 11,
        noOfSeasons: 11 
      },
      {  
        name: 'John Surtees',  
        nationality: 'English', 
        noOfChampionships: 1,
        year: '1964',
        wins: 6,
        noOfSeasons: 14 
      },
      {  
        name: 'Phil Hill',  
        nationality: 'American', 
        noOfChampionships: 1,
        year: '1961',
        wins: 3,
        noOfSeasons: 8 
      },
      {  
        name: 'Keke Rosberg',  
        nationality: 'Finnish', 
        noOfChampionships: 1,
        year: '1982',
        wins: 5,
        noOfSeasons: 9 
      },
      {  
        name: 'Nigel Mansell',  
        nationality: 'English', 
        noOfChampionships: 1,
        year: '1992',
        wins: 31,
        noOfSeasons: 15 
      },
      {  
        name: 'Jochen Rindt',  
        nationality: 'Austrian', 
        noOfChampionships: 1,
        year: '1970',
        wins: 6,
        noOfSeasons: 7 
      },
      {  
        name: 'Alan Jones',  
        nationality: 'Australian', 
        noOfChampionships: 1,
        year: '1980',
        wins: 12,
        noOfSeasons: 10
      },
      {  
        name: 'Damon Hill',  
        nationality: 'English', 
        noOfChampionships: 1,
        year: '1996',
        wins: 22,
        noOfSeasons: 8 
      },
      {  
        name: 'Kimi Räikkönen',  
        nationality: 'Finnish', 
        noOfChampionships: 1,
        year: '2007',
        wins: 21,
        noOfSeasons: 17 
      },
      {  
        name: 'Denis Hulme',  
        nationality: 'New Zealanders', 
        noOfChampionships: 1,
        year: '1967',
        wins: 3,
        noOfSeasons: 7 
      },
      {  
        name: 'James Hunt',  
        nationality: 'English', 
        noOfChampionships: 1,
        year: '1976',
        wins: 10,
        noOfSeasons: 7 
      },
      {  
        name: 'Mario Andretti',  
        nationality: 'American', 
        noOfChampionships: 1,
        year: '1978',
        wins: 12,
        noOfSeasons: 15 
      },
      {  
        name: 'Nico Rosberg',  
        nationality: 'German', 
        noOfChampionships: 1,
        year: '2016',
        wins: 23,
        noOfSeasons: 11
      },
      {  
        name: 'Jenson Button',  
        nationality: 'English', 
        noOfChampionships: 1,
        year: '2009',
        wins: 15,
        noOfSeasons: 18
      }
    ]  
     const columns = [
       {  
          Header: 'Name',  
          accessor: 'name'  
       },
       {  
         Header: 'Nationality',  
         accessor: 'nationality'  
       },
       {  
        Header: 'Year(s)',  
        accessor: 'year'  
      },
      {  
        Header: 'Number of Wins',  
        accessor: 'wins'  
      },
      {  
        Header: 'Number of Seasons',  
        accessor: 'noOfSeasons'  
      }
      ]  
    return (  
          <div>  
            <h1> All-Time F1 World Champions </h1>
              <ReactTable  
                  data={data}  
                  columns={columns}   />  
          </div>        
    )  
  }  
}  
export default DriverChampionship;