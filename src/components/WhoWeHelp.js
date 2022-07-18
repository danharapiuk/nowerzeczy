import '../scss/main.scss';
import Heading from './Heading';
import '../scss/WhoWeHelp.scss';
import { useState } from 'react';
import { useEffect } from 'react';


const data = {
  fundacjom: [
    {
      id:1,
      name: "fundacja 1",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
    {
      id:2,
      name: "fundacja 2",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
  ],

  organizacjom: [
    {
      id:1,
      name: "fundacorgja 1",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
    {
      id:2,
      name: "org 2",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
        {
      id:3,
      name: "fundacorgja 1",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
    {
      id:4,
      name: "org 2",
      subName: "fdsfdfdsfdfs",
      others: ["zabawki", "inne"]
    },
        {
      id:5,
      name: "fundacordfdsfdsfsdfdsfdsfdsfsdffdsfdfdsfsdfsdgja 1",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
    {
      id:6,
      name: "org 2 ---- ddfd",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
        {
      id:7,
      name: "fundacorgja 1",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
    {
      id:8,
      name: "org 2",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
  ],
  
  inne: [
    {
      id:1,
      name: "inne 1",
      subName: "funadacja",
      others: ["zabawki", "dupa"]
    },
    {
      id:2,
      name: "inne 2",
      subName: "funadacja",
      others: ["zabawki", "inne"]
    },
  ]
}


function WhoWeHelp() {

  const [current, setCurrent] = useState("fundacjom");
  const [fundations, setFundations] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    setFundations(data[current])
  }, [current])

  const getData = () => {
    const offset = currentPage * 3;
    const limit = offset + 3; 
    return fundations.slice(offset, limit)
  }

  const paginate = () => new Array(Math.ceil(fundations.length / 3)).fill(null).map((_, i) => (
    <li key={i} onClick={() => setCurrentPage(i)}>{i + 1}</li>
  ))

  return (
    <section className='whoWeHelp container' id='fundacja'>
      <Heading
        text='hello'
      />

      <div className='buttons'>
        <button onClick={() => setCurrent("fundacjom")}>Fundacjom</button>
        <button onClick={() => setCurrent("organizacjom")}>Ogranizacjom</button>
        <button onClick={() => setCurrent("inne")}>Inne</button>
      </div>
      <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
      {getData()?.map(el => (
        <div key={el.id}>{el.name} | {el.subName} | {el.others.join(",")}</div>
      ))}
      <ul>
        {paginate()}
      </ul>
    </section>

  );
}

export default WhoWeHelp;
