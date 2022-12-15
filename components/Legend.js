import React from 'react'

export default function Legend() {
  return (
        <div id='legend' style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0 15px'}}>
          <p style={{fontWeight: 700, fontSize: '20px'}}>Legend</p>
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
          <p style={{fontSize: '12px'}}>The visible light spectrum has a scaling of colors that are lined up by wavelengths and frequencies. The colors with the lowest frequency have the least energy, while higher frequency colors have higher energy. This understanding of the visual light spectrum is used to display and correspond the energy levels within different periods on the periodic table. The first period with only one and two energy levels is represented with low energy colors such as red and green. The bottom periods with more energy levels are represented with colors that have higher energies such as blue and purple.</p>
        </div>
  )
}
