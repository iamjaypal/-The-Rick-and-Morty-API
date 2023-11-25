import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import '../Styles/Home.css'
function Home() {
  const [cardItems, SetCartItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [filter, setFilter] = useState({
    status: 'None',
    gender: 'None',
    species: 'None',
  });


  const [searchQuery, SetsearchQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://rickandmortyapi.com/api/character');
      SetCartItems(res.data.results);
      setFilterItems(res.data.results);
    }
    fetchData();
  }, [])

  const applyFilter = () => {
    const filterItemss = cardItems.filter(item => {
      return (
        (filter.status === 'None' || item.status === filter.status) &&
        (filter.gender === 'None' || item.gender === filter.gender) &&
        (filter.species === 'None' || item.species === filter.species)
      );
    });
    setFilterItems(filterItemss);
  }

  function handleSearch(e) {
    SetsearchQuery(e.target.value);
    setFilterItems(cardItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())));
  }

  return (
    <>
      <div className='cardbook' >
      <div className='Top_heading' style={{ textAlign: 'center', fontSize: '20px' }}>
        <h1>This is my CardBook</h1>
      </div>
      <div className='searchbaar'>
        <input type="text" placeholder='search here....' value={searchQuery}
          onChange={handleSearch} />

      </div>
      <div className='filterbox'>
        <div>
          <label>Status:</label>
          <select onChange={(e) => setFilter({ ...filter, status: e.target.value })} style={{ fontSize: "20px" }}>
            <option value="None">None</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
          </select>
        </div>
        <div>
          <label>Gender:</label>
          <select onChange={(e) => setFilter({ ...filter, gender: e.target.value })} style={{ fontSize: "20px" }}>
            <option value="None">None</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Species:</label>
          <select onChange={(e) => setFilter({ ...filter, species: e.target.value })} style={{ fontSize: "20px" }}>
            <option value="None">None</option>
            <option value="None">Human</option>
            <option value="None">Alien</option>
          </select>
        </div>
        <button className="apply-filter-btn" onClick={applyFilter}>Apply Filter</button>

      </div>
      <div className='Container' >
        {
          /* mapping the Array Items */
          filterItems.map((item) =>
            <Card item={item} />
          )
        }
      </div>
      </div>


    </>
  )
}

export default Home

