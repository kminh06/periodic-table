import React from 'react'

export default function Legend() {
  return (
        <div id='legend' style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0 15px'}}>
          <h2>Legend</h2>
          <ul>
            <li>Cost of shoes correlates to atomic number</li>
            <li>Shoe weight correlates to atomic mass</li>
            <li>Shoe size represents atomic radius</li>
            <li>Each brand represents periodic table blocks (S=Adidas, P=Nike, D=Fila)</li>
            <li>Types of shoes represents the element families on the periodic table (similar properties)</li>
            <li>Shoe sole cushioning/responsiveness correlates to reactivity of family (similar traits)</li>
            <li>Organized by color for period (Up to down: Red, Green, Blue, Violet)</li>
            <li>Color energy on the visible light spectrum correlates to the energy levels of the periods</li>
          </ul>
        </div>
  )
}
