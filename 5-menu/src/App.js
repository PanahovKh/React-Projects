import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategoreis = ['all', ...new Set(items.map((item) => item.category))]

console.log(allCategoreis);
function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCatogeries] = useState(allCategoreis)

const filterItems = (category) => {
  if(category === 'all'){
    setMenuItems(items)
    return
  }
  const newItem = items.filter((item) => item.category === category)
  setMenuItems(newItem)
}

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
