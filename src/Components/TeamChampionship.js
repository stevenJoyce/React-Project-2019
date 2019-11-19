import React from 'react';
import ReactTable from "react-table";  
import "react-table/react-table.css"; //A preset react css file 
class TeamChampionship extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render() {  
    const data = [
      {  
       name: 'Ferrari',
       firstSeason: 1950,
       lastSeason: 2019, 
       nationality: 'Italian', 
       noOfChampionships: 16,
       year: '1961, 1964, 1975, 1976, 1977, 1979, 1982, 1983, 1999, 2000, 2001, 2002, 2003, 2004, 2007, 2008',
       wins: 238,
       poles: 228,
       noOfSeasons: 70
     },
     {  
      name: 'Williams',
      firstSeason: 1975,
      lastSeason:2019, 
      noOfChampionships: 9,
      year: '1980, 1981, 1986, 1987, 1992, 1993, 1994, 1996, 1997',
      wins: 114,
      poles: 128,
      noOfSeasons: 44
     },
     {  
       name: 'McLaren',
       firstSeason: 1966,
       lastSeason:2019, 
       noOfChampionships: 8,
       year: '1974, 1984, 1985, 1988, 1989, 1990, 1991, 1998',
       wins: 182,
       poles: 155,
       noOfSeasons: 54
     },
     {  
      name: 'Lotus',
      firstSeason: 1958,
      lastSeason: 2015, 
      noOfChampionships: 7,
      year: '1963, 1965, 1968, 1970, 1972, 1973, 1978',
      wins: 81,
      poles: 76,
      noOfSeasons: 43
    },
    {  
      name: 'Mercedes',
      firstSeason: 1954,
      lastSeason: 2019,  
      noOfChampionships: 6,
      year: '2014, 2015, 2016, 2017, 2018, 2019',
      wins: 101,
      poles: 110,
      noOfSeasons: 12
    },
    {  
      name: 'Red Bull',
      firstSeason: 2005,
      lastSeason: 2019, 
      noOfChampionships: 4,
      year: '2010, 2011, 2012, 2013',
      wins: 62,
      poles: 62,
      noOfSeasons: 15
    },
    {  
      name: 'Cooper',
      firstSeason: 1950,
      lastSeason:1969, 
      noOfChampionships: 2,
      year: '1959, 1960',
      wins: 16,
      poles: 11,
      noOfSeasons: 19
    },
    {  
      name: 'Brabham',
      firstSeason: 1962,
      lastSeason: 1992, 
      noOfChampionships: 2,
      year: '1966, 1967',
      wins: 35,
      poles: 39,
      noOfSeasons: 30
    },
    {  
      name: 'Renault',
      firstSeason: 1977,
      lastSeason: 2019,  
      noOfChampionships: 2,
      year: '2005, 2006',
      wins: 35,
      poles: 51,
      noOfSeasons: 23
    },
    {  
      name: 'Benetton',
      firstSeason: 1986,
      lastSeason:2001, 
      noOfChampionships: 1,
      year: '1995',
      wins: 27,
      poles: 15,
      noOfSeasons: 16
    },
    {  
      name: 'Brawn GP',
      firstSeason: 2009,
      lastSeason: 2009, 
      noOfChampionships: 1,
      year: '2009',
      wins: 8,
      poles: 5,
      noOfSeasons: 1
    },
    {  
      name: 'BRM',
      firstSeason: 1951,
      lastSeason: 1977,  
      noOfChampionships: 1,
      year: '1962',
      wins: 17,
      poles: 11,
      noOfSeasons: 23
    },
    {  
      name: 'Matra',
      firstSeason: 1967,
      lastSeason:1972, 
      noOfChampionships: 1,
      year: '1969',
      wins: 9,
      poles: 4,
      noOfSeasons: 6
    },
    {  
      name: 'Tyrrell',
      firstSeason: 1970,
      lastSeason: 1998, 
      noOfChampionships: 1,
      year: '1971',
      wins: 23,
      poles: 14,
      noOfSeasons: 29
    },
    {  
      name: 'Vanwall',
      firstSeason: 1954,
      lastSeason:1960, 
      noOfChampionships: 1,
      year: '1958',
      wins: 9,
      poles: 7,
      noOfSeasons: 7
    },
   ]  
    const columns = [
      {  
         Header: 'Team Name',  
         accessor: 'name' ,
         width: 130 
      },
      {
        Header: 'First Season',
        accessor: 'firstSeason',
        width: 100
      },
      {
        Header: 'Last Season',
        accessor: 'lastSeason',
        width: 100
      },
      {  
        Header: 'Titles',  
        accessor: 'noOfChampionships', 
        width: 100
      },
      {  
       Header: 'Year(s)',  
       accessor: 'year' ,
       width:400,
       style: { 'white-space': 'unset' }
     },
     {  
       Header: 'Number of Wins',  
       accessor: 'wins' ,
       width: 150 
     },
     {
        Header: 'Pole Position',
        accessor: 'poles',
        width: 100
     },
     {  
       Header: 'Number of Seasons',  
       accessor: 'noOfSeasons' , 
       width:150
     }
     ]  
   return (  
         <div>  
           <h1> All- Time F1 Constructor Champions </h1>
             <ReactTable  
                 data={data}  
                 columns={columns}  />  
         </div>        
   )  
 }  
}  

export default TeamChampionship;