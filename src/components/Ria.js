import { motion } from 'framer-motion';

function Ria() {
    // Create the main container div
    const container = document.createElement('div');
    container.style.width = '731px';
    container.style.height = '329px';
    container.style.position = 'relative';
    container.style.background = 'linear-gradient(180deg, white 0%, #E1E1E1 100%)';
    container.style.borderRadius = '16px';
  
    // Create the title div for "Calories"
    const title = document.createElement('div');
    title.style.position = 'absolute';
    title.style.left = '20px';
    title.style.top = '20px';
    title.style.color = '#202125';
    title.style.fontSize = '24px';
    title.style.fontFamily = 'Chillax';
    title.style.fontWeight = '400';
    title.style.lineHeight = '30px';
    title.textContent = 'Calories';
    container.appendChild(title);
  
    // Create the vertical labels div
    const labels = document.createElement('div');
    labels.style.width = '34px';
    labels.style.left = '20px';
    labels.style.top = '87px';
    labels.style.position = 'absolute';
    labels.style.display = 'flex';
    labels.style.flexDirection = 'column';
    labels.style.justifyContent = 'space-between';
    labels.style.alignItems = 'flex-start';
  
    // Array of label values
    const labelValues = ['2000', '1000', '500', '100', '0'];
    labelValues.forEach(value => {
      const label = document.createElement('div');
      label.style.color = '#8F8F8F';
      label.style.fontSize = '14px';
      label.style.fontFamily = 'Chillax';
      label.style.fontWeight = '400';
      label.style.lineHeight = '21px';
      label.textContent = value;
      labels.appendChild(label);
    });
  
    container.appendChild(labels);
  
    // Create the bars container div
    const barsContainer = document.createElement('div');
    barsContainer.style.width = '633px';
    barsContainer.style.height = '233px';
    barsContainer.style.left = '78px';
    barsContainer.style.top = '76px';
    barsContainer.style.position = 'absolute';
    barsContainer.style.display = 'flex';
    barsContainer.style.justifyContent = 'space-between';
    barsContainer.style.alignItems = 'flex-end';
    barsContainer.style.gap = '3px'; // Space between bars
  
    // Create a dotted line for the bar chart
    const dottedLine = document.createElement('div');
    dottedLine.style.width = '634px';
    dottedLine.style.height = '0px';
    dottedLine.style.border = '1px #8F8F8F dotted';
    barsContainer.appendChild(dottedLine);
  
    // Data for the bars
    const barData = [
      { height: 172, month: 'Jan', gradient: 'linear-gradient(180deg, #FEECBA 0%, #FFBB00 100%)' },
      { height: 127, month: 'Feb', gradient: 'linear-gradient(180deg, #FEE6A7 6%, #FEC012 100%)' },
      { height: 189, month: 'Mar', gradient: 'linear-gradient(180deg, #FEE7A9 0%, #FEC526 100%)' },
      { height: 156, month: 'Apr', gradient: 'linear-gradient(180deg, #FEE5A0 0%, #FEC62B 100%)' },
      { height: 127, month: 'May', gradient: 'linear-gradient(180deg, #FEE5A0 0%, #FEC62B 100%)' },
      { height: 172, month: 'Jun', gradient: 'linear-gradient(180deg, #FEE5A0 0%, #FEC62B 100%)' },
      { height: 189, month: 'Jul', gradient: 'linear-gradient(180deg, #FEE5A0 0%, #FEC62B 100%)' },
      { height: 233, month: 'Sep', gradient: 'linear-gradient(180deg, #FEE192 0%, #FEC834 100%)' },
      { height: 156, month: 'Aug', gradient: 'linear-gradient(180deg, #FEE5A0 0%, #FEC62B 100%)' },
      { height: 197, month: 'Oct', gradient: 'linear-gradient(180deg, #0C25AF 0%, #7584D7 100%)' },
      { height: 122, month: 'Nov', gradient: 'linear-gradient(180deg, #FEE5A0 0%, #FEC62B 100%)' },
      { height: 156, month: 'Dec', gradient: 'linear-gradient(180deg, #FEE5A0 0%, #FEC62B 100%)' }
    ];
  
    // Loop through the bar data and create bars
    barData.forEach((bar, index) => {
      const barContainer = document.createElement('div');
      barContainer.style.display = 'flex';
      barContainer.style.flexDirection = 'column';
      barContainer.style.alignItems = 'center';
      
      const barDiv = document.createElement('div');
      barDiv.style.width = '32px';
      barDiv.style.height = `${bar.height}px`;
      barDiv.style.background = bar.gradient;
      barDiv.style.borderRadius = '18px';
  
      const monthLabel = document.createElement('div');
      monthLabel.style.color = '#202125';
      monthLabel.style.fontSize = '16px';
      monthLabel.style.fontFamily = 'Chillax';
      monthLabel.style.fontWeight = bar.month === 'Oct' ? '600' : '400';
      monthLabel.style.lineHeight = '24px';
      monthLabel.textContent = bar.month;
  
      barContainer.appendChild(barDiv);
      barContainer.appendChild(monthLabel);
      barsContainer.appendChild(barContainer);
    });
  
    container.appendChild(barsContainer);
  
    // Create the "Month" div with toggle icon
    const monthDiv = document.createElement('div');
    monthDiv.style.height = '32px';
    monthDiv.style.paddingLeft = '12px';
    monthDiv.style.paddingRight = '12px';
    monthDiv.style.left = '610px';
    monthDiv.style.top = '20px';
    monthDiv.style.position = 'absolute';
    monthDiv.style.background = '#EFECFE';
    monthDiv.style.borderRadius = '16px';
    monthDiv.style.display = 'flex';
    monthDiv.style.justifyContent = 'flex-end';
    monthDiv.style.alignItems = 'center';
    monthDiv.style.gap = '8px';
  
    const monthText = document.createElement('div');
    monthText.style.color = '#202125';
    monthText.style.fontSize = '16px';
    monthText.style.fontFamily = 'Chillax';
    monthText.style.fontWeight = '400';
    monthText.textContent = 'Month';
  
    const toggleIcon = document.createElement('div');
    toggleIcon.style.width = '16px';
    toggleIcon.style.height = '16px';
    toggleIcon.style.position = 'relative';
    toggleIcon.style.background = 'white';
    toggleIcon.style.borderRadius = '100px';
    toggleIcon.style.overflow = 'hidden';
  
    const lineDiv = document.createElement('div');
    lineDiv.style.width = '6px';
    lineDiv.style.height = '2.57px';
    lineDiv.style.left = '5px';
    lineDiv.style.top = '7px';
    lineDiv.style.position = 'absolute';
    lineDiv.style.border = '1px #1C274C solid';
  
    toggleIcon.appendChild(lineDiv);
    monthDiv.appendChild(monthText);
    monthDiv.appendChild(toggleIcon);
  
    container.appendChild(monthDiv);
  
    // Append the container to the body or any other parent element
    document.body.appendChild(container);
  }
  
  
  
 
  
  
  
  

  export default Ria;
  