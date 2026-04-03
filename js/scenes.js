(function(){
  let bgLayer = null;
  function setBackgroundLayer(element){ bgLayer = element; }
  
  function getMdCloudsHTML(){ return `
    <div class="bg-element cloud-md md-shadow" style="top:10%; left:-250px; animation-duration:35s;"></div>
    <div class="bg-element cloud-md md-shadow" style="top:25%; left:30%; animation-duration:45s; transform:scale(0.8);"></div>
    <div class="bg-element cloud-md md-shadow" style="top:25%; left:70%; animation-duration:90s; transform:scale(1.4);"></div>`; 
  }
  
  function getSunHTML(customStyle=''){ return `<div class="bg-element sun-md md-shadow md-circle" style="${customStyle}"></div>`; }
  
  function getColosseumHTML(customStyle=''){ 
    let arches=''; 
    for(let i=0;i<21;i++) arches += '<div class="arch"></div>'; 
    return `<div class="bg-element colosseum-md md-shadow" style="${customStyle}">${arches}</div>`; 
  }
  
  function generateBackground(type){
    if(!bgLayer) return; 
    bgLayer.innerHTML=''; 
    let html='';
    
    if(!['forest','rome-finale','japan','savanna','australia'].includes(type)) html += getSunHTML();
    
    switch(type){
      case 'wind':
        bgLayer.style.background='#81D4FA'; html += getMdCloudsHTML();
        html += `<div class="bg-element mountain-md dark md-shadow" style="left:-10%; border-bottom-width:45vh; border-left-width:30vw; border-right-width:30vw;"></div>`;
        html += `<div class="bg-element mountain-md md-shadow" style="left:15%; border-bottom-width:35vh; border-left-width:25vw; border-right-width:25vw;"></div>`;
        html += `<div class="bg-element mountain-md light md-shadow" style="left:45%; border-bottom-width:25vh; border-left-width:20vw; border-right-width:20vw;"></div>`;
        html += `<div class="bg-element mountain-md dark md-shadow" style="left:65%; border-bottom-width:40vh; border-left-width:35vw; border-right-width:35vw;"></div>`;
        html += `<div class="bg-element turbine-stick md-shadow" style="left:50%; transform:translateX(-50%); height:50vh;"><div class="turbine-head"></div><div class="turbine-blades-container"><div class="blade-md" style="transform:rotate(0deg);"></div><div class="blade-md" style="transform:rotate(120deg);"></div><div class="blade-md" style="transform:rotate(240deg);"></div></div></div>`;
        html += `<div class="bg-element turbine-stick md-shadow" style="left:20%;"><div class="turbine-head"></div><div class="turbine-blades-container" style="animation-duration:3s;"><div class="blade-md" style="transform:rotate(0deg);"></div><div class="blade-md" style="transform:rotate(120deg);"></div><div class="blade-md" style="transform:rotate(240deg);"></div></div></div>`;
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-5s;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:10vh; transform:scale(0.8);"></div>`;
        html += `<div class="bg-element biplane-md md-shadow"><div class="biplane-tail"></div><div class="biplane-wing" style="top:-4px;"></div><div class="biplane-wing" style="top:31px;"></div><div class="biplane-prop"></div></div>`;
        html += `<div class="bg-element balloon-md md-shadow" style="left:75%; bottom:70%;"><div class="balloon-basket"></div></div>`;
        html += `<div class="bg-element acquilone-md md-shadow" style="top: 30%; right: 10%; bottom: auto; left: auto;"><div class="acquilone-tail"><div class="acquilone-bow uno"></div><div class="acquilone-bow due"></div></div></div>`;        break;
        
      case 'egypt':
        bgLayer.style.background = 'linear-gradient(to top, #FFCA28 0%, #FF9800 35%, #E65100 70%, #D32F2F 100%)';
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-4s;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:7vh; transform:scale(0.8);animation-delay:-5s;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:45%; top:10vh; transform:scale(0.8);"></div>`;
        html += `<div class="bg-element pyramid-md pyramid-shadow md-shadow" style="left:10%; border-bottom-width:350px;"></div><div class="bg-element pyramid-md md-shadow" style="left:10%; border-bottom-width:350px;"></div>`;
        html += `<div class="bg-element pyramid-md pyramid-shadow md-shadow" style="left:50%; transform:scale(0.8); bottom:15vh;"></div><div class="bg-element pyramid-md md-shadow" style="left:50%; transform:scale(0.8); bottom:15vh;"></div>`;
        html += `<div class="bg-element pyramid-md pyramid-shadow md-shadow" style="left:75%; transform:scale(0.5); bottom:15vh;"></div><div class="bg-element pyramid-md md-shadow" style="left:75%; transform:scale(0.5); bottom:15vh;"></div>`;
        html += `<div class="bg-element nile-md"></div><div class="bg-element balloon-md md-shadow" style="bottom:75vh; left:75%;background:#91bfa9"><div class="balloon-basket"></div></div>`;
        html += `<div class="bg-element cammello-md md-shadow" style="left:25%; animation-delay:-2s;"><div class="cammello-hump uno"></div><div class="cammello-hump due"></div><div class="cammello-head"></div><div class="cammello-leg front"></div><div class="cammello-leg back"></div></div>`;
        html += `<div class="bg-element cammello-md md-shadow" style="left:55%; transform:scale(0.8); animation-delay:-7s;"><div class="cammello-hump uno"></div><div class="cammello-hump due"></div><div class="cammello-head"></div><div class="cammello-leg front"></div><div class="cammello-leg back"></div></div>`;
        break;
        
      case 'sea':
        bgLayer.style.background='#80DEEA'; html += getMdCloudsHTML();

        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-5s; border-bottom-color:#ececec;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:10vh; transform:scale(0.8); border-bottom-color:#ececec;"></div>`;
        html += `<div class="bg-element building-md md-shadow" style="left:10%; width:100px; height:220px; bottom:40vh;"></div><div class="bg-element building-md md-shadow" style="left:25%; width:120px; height:280px; bottom:40vh; background:#B0BEC5;"></div>`;
        html += `<div class="bg-element balloon-md md-shadow" style="left:75%; bottom:75vh;"><div class="balloon-basket"></div></div><div class="bg-element sea-md" style="background:#007ad4b8;"></div><div class="bg-element sand-md"></div>`;
        html += `<div class="bg-element bike-md md-shadow"><div class="bike-wheel back"></div><div class="bike-wheel front"></div><div class="bike-frame"></div><div class="bike-person-leg"></div><div class="bike-person-body"></div><div class="bike-person-head"></div></div>`;
        html += `<div class="bg-element bike-md md-shadow" style="animation-delay:-1s;"><div class="bike-wheel back"></div><div class="bike-wheel front"></div><div class="bike-frame"></div><div class="bike-person-leg"></div><div class="bike-person-body" style="background:#f400a1;"></div><div class="bike-person-head"></div></div>`;
        html += `<div class="bg-element bike-md md-shadow" style="animation-delay:4s; transform:rotate(-25deg); left:-200px;"><div class="bike-wheel back"></div><div class="bike-wheel front"></div><div class="bike-frame" style="border-color:#ffeb3b; transform:rotate(-25deg);"></div><div class="bike-person-leg"></div><div class="bike-person-body" style="background:#03a9f4;"></div><div class="bike-person-head"></div></div>`;
        html += `<div class="bg-element battello-romantico md-shadow" style="animation-duration:35s; animation-delay:-5s;scale:2.0;"><div class="battello-chimney"></div><div class="battello-cabin"><div class="battello-window"></div><div class="battello-window"></div><div class="battello-window"></div></div><div class="battello-wheel"></div></div>`;
        break;
        
      case 'rome':
        bgLayer.style.background='#90CAF9'; html += getMdCloudsHTML();
        html += `<div class="bg-element gazometro-md md-shadow" style="bottom:28vh;right:48vh;scale:0.8"></div>`;
        html += `<div class="bg-element pantheon-md md-shadow" style="bottom:30%;scale:1.5;"><div class="pantheon-top"></div></div>`;
       /* html += `<div class="bg-element trevi-md md-shadow" style="bottom:30%;"><div class="trevi-arch"></div><div class="trevi-arch two"></div><div class="trevi-arch three"></div><div class="water-md"></div></div>`; */
        html += getColosseumHTML('bottom:30vh;');
        html += `<div class="bg-element street-md" style="bottom:15vh;"></div><div class="bg-element pino-stem md-shadow" style="left:15%; bottom:30vh;"><div class="pino-top md-shadow"></div></div><div class="bg-element pino-stem md-shadow" style="left:85%; transform:scale(1.2); bottom:30vh;"><div class="pino-top md-shadow"></div></div><div class="bg-element river-md"></div><div class="bg-element boat md-shadow"><div class="boat-sail"></div></div><div class="bg-element boat md-shadow" style="left:50%; animation-duration:15s; transform:scale(0.7);"><div class="boat-sail"></div></div>`;
        html += `<div class="bg-element basilica-sp-md md-shadow" style="bottom:30vh;right:3vh;"><div class="sp-tower"><div class="sp-tower-top"></div></div><div class="sp-facade"><div class="sp-pediment"></div><div class="sp-cross"></div><div class="sp-rose-window"></div><div class="sp-portico"><div class="sp-column"></div><div class="sp-column"></div><div class="sp-column"></div><div class="sp-column"></div><div class="sp-column"></div><div class="sp-column"></div></div></div><div class="sp-nave"><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div></div></div>`;
        break;

      case 'country':
        bgLayer.style.background='#A5D6A7'; html += getMdCloudsHTML();
        html += `<div class="bg-element hill-md"></div><div class="bg-element hay-md md-shadow" style="left:70%; bottom:30%;"></div>`;
        ['60/30','75/30','72/20','62/25','65/27','80/32','50/33'].forEach(v=>{const [l,b]=v.split('/'); html += `<div class="bg-element sheep-md md-shadow" style="left:${l}%; bottom:${b}%;"></div>`});
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="top:15vh; animation-delay:-2s;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="top:25vh; left:40%; animation-delay:-8s; transform:scale(0.8);"></div><div class="bg-element track-md"></div>`;
        html += `<div class="bg-element tractor md-shadow"><div class="tractor-wheel md-shadow" style="left:8px;"></div><div class="tractor-wheel md-shadow" style="right:8px;"></div></div>`;
        html += `<div class="bg-element train-md md-shadow"><div class="train-cab"></div><div class="train-chimney"></div><div class="train-wheel" style="left:15px;"></div><div class="train-wheel" style="left:70px;"></div><div class="train-wheel" style="left:120px;"></div></div>`;
        html += `<div class="bg-element barn-md md-shadow" style="left:15%; bottom:17%;"><div class="barn-roof"></div><div class="barn-door"></div></div>`;
        html += `<div class="bg-element tree-md md-shadow" style="left:30%; bottom:20%; transform:scale(1.2);"><div class="tree-crown"></div></div><div class="bg-element tree-md md-shadow" style="left:80%; bottom:20%; transform:scale(0.8);"><div class="tree-crown"></div></div>`;
        /* Aggiunta Mulino a vento del Texas */
        html += `<div class="bg-element texas-windmill-md md-shadow" style="left:5%;bottom:23%;"><div class="texas-windmill-base"></div><div class="texas-windmill-fan"></div><div class="texas-windmill-tail"></div></div>`;
        break;
        
      case 'forest':
        bgLayer.style.background='#C8E6C9'; html += getMdCloudsHTML();
        for(let i=0;i<15;i++){ const scale=(Math.random()*1+.5).toFixed(2); const left=(Math.random()*95).toFixed(2); const bottom=(Math.random()*10).toFixed(2); html += `<div class="bg-element forest-tree-md md-shadow" style="left:${left}%; transform:scale(${scale}); bottom:${bottom}vh;"></div>`; }
        html += `<div class="bg-element fox-md md-triangle md-shadow"></div><div class="bg-element tractor md-shadow"><div class="tractor-wheel md-shadow" style="left:8px;"></div><div class="tractor-wheel md-shadow" style="right:8px;"></div></div><div class="bg-element piccione-md md-triangle md-shadow" style="top:20vh;"></div>`;
        /* Aggiunta Scoiattoli */
        html += `<div class="bg-element scoiattolo-md md-shadow" style="left:40%; animation-delay:-1s;"><div class="scoiattolo-ear"></div><div class="scoiattolo-tail"></div></div>`;
        html += `<div class="bg-element scoiattolo-md md-shadow" style="left:70%; transform:scale(0.8) scaleX(-1); animation-delay:-0.5s;"><div class="scoiattolo-ear"></div><div class="scoiattolo-tail"></div></div>`;
        break;
        
      case 'japan':
        bgLayer.style.background='#C5CAE9'; html += getMdCloudsHTML() + getSunHTML('background:#F44336; top:40px; right:10%;');
        html += `<div class="bg-element mountain-md fuji-md md-shadow" style="left:50%; transform:translateX(-50%); border-bottom-width:350px; border-left-width:250px; border-right-width:250px;"><div class="fuji-snow"></div></div>`;
        html += `<div class="bg-element tree-md md-shadow" style="left:15%; bottom:20%; transform:scale(1.3);"><div class="tree-crown sakura-crown"></div></div><div class="bg-element tree-md md-shadow" style="left:85%; bottom:15%; transform:scale(1);"><div class="tree-crown sakura-crown"></div></div><div class="bg-element track-md"></div><div class="bg-element shinkansen-md md-shadow"></div>`;
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-5s;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:10vh; transform:scale(0.8);"></div>`;
        break;
        
      case 'newyork':
        bgLayer.style.background='#90A4AE'; html += getMdCloudsHTML();
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-5s;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:10vh; transform:scale(0.8);"></div><div class="bg-element street-md" style="bottom:15vh;"></div>`;
        html += `<div class="bg-element skyscraper-md md-shadow" style="left:10%; width:100px; height:45vh;">${'<div class="window-md"></div>'.repeat(12)}</div>`;
        html += `<div class="bg-element skyscraper-md md-shadow" style="left:35%; width:140px; height:60vh; background:#455A64;">${'<div class="window-md"></div>'.repeat(24)}</div>`;
        html += `<div class="bg-element skyscraper-md md-shadow" style="left:75%; width:90px; height:50vh;">${'<div class="window-md"></div>'.repeat(15)}</div>`;
        html += `<div class="bg-element auto-md taxi-md md-shadow"><div class="auto-top"></div><div class="auto-wheel" style="left:15px;"></div><div class="auto-wheel" style="right:15px;"></div></div>`;
        html += `<div class="bg-element auto-md taxi-md md-shadow" style="animation-delay:-7s;animation:drive-md 11s linear infinite;z-index:7"><div class="auto-top"></div><div class="auto-wheel" style="left:15px;"></div><div class="auto-wheel" style="right:15px;"></div></div>`;
        /* Aggiunta Autobus standard */
        html += `<div class="bg-element autobus-md md-shadow" style="animation-delay:-3s;scale:1.8;"><div class="autobus-windows"><div class="autobus-glass"></div><div class="autobus-glass"></div><div class="autobus-glass"></div><div class="autobus-glass"></div></div><div class="autobus-wheel front"></div><div class="autobus-wheel back"></div></div>`;
        break;
        
      case 'savanna':
        bgLayer.style.background='#FFCC80';
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-5s;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:10vh; transform:scale(0.8);"></div>`;
        html += getSunHTML('background:#FF7043; right:40%; bottom:30vh; top:auto; width:180px; height:180px;');
        html += `<div class="bg-element sand-md" style="background:#FFA726; height:15vh; bottom:0;"></div><div class="bg-element acacia-stem md-shadow" style="left:70%;"><div class="acacia-top"></div></div><div class="bg-element acacia-stem md-shadow" style="left:10%; transform:scale(0.8);"><div class="acacia-top"></div></div>`;
        html += `<div class="bg-element elephant-md md-shadow" style="left:40%;"><div class="elephant-ear"></div><div class="elephant-trunk"></div></div>`;
        html += `<div class="bg-element auto-md md-shadow" style="background:#4CAF50; animation-delay:-10s;"><div class="auto-top" style="border-color:#4CAF50;"></div><div class="auto-wheel" style="left:15px;"></div><div class="auto-wheel" style="right:15px;"></div></div>`;
        /* Aggiunta Giraffe */
        html += `<div class="bg-element giraffa-md md-shadow" style="left:20%;"><div class="giraffa-neck"><div class="giraffa-head"></div></div><div class="giraffa-leg front"></div><div class="giraffa-leg back"></div><div class="giraffa-spot uno"></div><div class="giraffa-spot due"></div><div class="giraffa-spot tre"></div></div>`;
        html += `<div class="bg-element giraffa-md md-shadow" style="left:65%; transform:scale(0.8); animation-delay:-2.5s;"><div class="giraffa-neck"><div class="giraffa-head"></div></div><div class="giraffa-leg front"></div><div class="giraffa-leg back"></div><div class="giraffa-spot uno"></div><div class="giraffa-spot due"></div><div class="giraffa-spot tre"></div></div>`;
        break;
        
      case 'arctic':
        bgLayer.style.background='#B2DFDB'; html += getMdCloudsHTML();
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-5s; border-bottom-color:#ffffff;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:10vh; transform:scale(0.8); border-bottom-color:#ffffff;"></div>`;
        html += `<div class="bg-element sea-md" style="background:#0097A7; height:25vh;"></div>`;
        html += `<div class="bg-element pyramid-md iceberg-shadow md-shadow" style="left:10%; bottom:20vh; border-bottom-width:200px;"></div><div class="bg-element pyramid-md iceberg-md" style="left:20%; bottom:20vh; border-bottom-width:200px;"></div><div class="bg-element pyramid-md iceberg-shadow md-shadow" style="left:30%; bottom:20vh; border-bottom-width:200px;"></div><div class="bg-element pyramid-md iceberg-md" style="left:40%; bottom:20vh; border-bottom-width:200px;"></div><div class="bg-element pyramid-md iceberg-shadow md-shadow" style="left:80%; bottom:15vh; border-bottom-width:300px; transform:scale(0.8);"></div><div class="bg-element pyramid-md iceberg-md" style="left:60%; bottom:15vh; border-bottom-width:300px; transform:scale(0.8);"></div>`;
        html += `<div class="bg-element penguin-md md-shadow" style="left:20%;"><div class="penguin-belly"></div><div class="penguin-beak"></div></div><div class="bg-element penguin-md md-shadow" style="left:30%; animation-delay:-0.5s; transform:scale(0.8);"><div class="penguin-belly"></div><div class="penguin-beak"></div></div>`;
        break;
        
      case 'paris':
        bgLayer.style.background = 'linear-gradient(180deg, #757DB4, #F1B1D0 428px, #F1B1D0 428px)'; html += getMdCloudsHTML();
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-5s; border-bottom-color:#ffffff;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:10vh; transform:scale(0.8); border-bottom-color:#ffffff;"></div>`;
               
        html += `<div class="bg-element tree-md md-shadow" style="left:20%; bottom:15%;"><div class="tree-crown"></div></div><div class="bg-element balloon-md md-shadow" style="right:45vh; bottom:70vh;"><div class="balloon-basket"></div></div>`;
        html += `<div class="bg-element bike-md md-shadow" style="bottom:30vh;"><div class="bike-wheel back"></div><div class="bike-wheel front"></div><div class="bike-frame"></div><div class="bike-person-leg"></div><div class="bike-person-body"></div><div class="bike-person-head"></div></div>`;
        /*Aggiunta vera Torre Eiffel in lontananza*/
        
        // 1. Aggiungo le stelle
        html += `<div class="stars"></div>`;

        // 2. Aggiungo gli edifici della città, il ramo e gli alberi in lontananza
        html += `<div class=blocks><div class=block-1></div><div class=block-3></div><div class=block-2></div><div class=block-4></div><div class=block-6></div><div class=block-5></div><div class=branch></div><div class=trees></div></div>`
        
        // 3. Aggiungo la Torre Eiffel
        html+='<div class="eiffel">\n    <div class="top">\n        <div class="cross-1"></div>\n        <div class="cross-2"></div>\n        <div class="cross-3"></div>\n    </div>\n    <div class="center">\n<div class="left"></div>\n<div class="right"></div>\n </div>\n<div class="bottom">\n<div class="half"></div>\n<div class="left"></div>\n <div class="right"></div>\n</div>\n <div class="light-left"></div>\n<div class="light-right"></div>\n</div>';
        // 4. Aggiungo la strada in lontananza
       
        html += `<div class="bg-element street-md" style="bottom:15vh;"></div>`;
        /* Aggiunta Autobus rosso a due piani (tour della città) */
        //html += `<div class="bg-element autobus-rosso-md md-shadow" style="animation-delay:-4s;scale:1.6;"><div class="autobus-rosso-windows-row top"><div class="autobus-rosso-glass"></div><div class="autobus-rosso-glass"></div><div class="autobus-rosso-glass"></div><div class="autobus-rosso-glass"></div></div><div class="autobus-rosso-windows-row bottom"><div class="autobus-rosso-glass"></div><div class="autobus-rosso-glass"></div><div class="autobus-rosso-glass"></div></div><div class="autobus-rosso-wheel front"></div><div class="autobus-rosso-wheel back"></div></div>`;
        /* Aggiunta Autobus standard */
        html += `<div class="bg-element autobus-md md-shadow" style="animation-delay:-3s;scale:1.6;bottom:20vh;"><div class="autobus-windows"><div class="autobus-glass"></div><div class="autobus-glass"></div><div class="autobus-glass"></div><div class="autobus-glass"></div></div><div class="autobus-wheel front"></div><div class="autobus-wheel back"></div></div>`;
 
        // 6 Aggiungo Mare 
        html += `<div class="bg-element sea-md" style="background:#666fb0; height:15vh"></div>`;

        
        break;
        
      case 'holland':
        bgLayer.style.background='#81D4FA'; html += getMdCloudsHTML();
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-5s; border-bottom-color:#ffffff;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:10vh; transform:scale(0.8); border-bottom-color:#ffffff;"></div><div class="bg-element hill-md" style="background:#8BC34A;"></div>`;
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="top:15vh; animation-delay:-2s;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="top:25vh; left:40%; animation-delay:-8s; transform:scale(0.8);"></div>`;
        html += `<div class="bg-element turbine-stick md-shadow" style="left:60%; height:40vh; background:#A1887F; width:40px; border-radius:10px 10px 0 0;"><div class="turbine-head" style="left:4px; top:-10px;"></div><div class="turbine-blades-container" style="left:20px; animation-duration:8s;"><div class="blade-md" style="background:#795548; transform:rotate(0deg);"></div><div class="blade-md" style="background:#795548; transform:rotate(90deg);"></div><div class="blade-md" style="background:#795548; transform:rotate(180deg);"></div><div class="blade-md" style="background:#795548; transform:rotate(270deg);"></div></div></div>`;
        for(let i=10;i<40;i+=5){ const yellow = i%2===0 ? 'yellow' : ''; html += `<div class="bg-element tulip-stem md-shadow" style="left:${i}%;"><div class="tulip-flower ${yellow}"></div></div>`; }
        html += `<div class="bg-element bike-md md-shadow" style="bottom:27vh;"><div class="bike-wheel back"></div><div class="bike-wheel front"></div><div class="bike-frame"></div><div class="bike-person-leg"></div><div class="bike-person-body"></div><div class="bike-person-head"></div></div>`;
        break;
        
      case 'australia':
        bgLayer.style.background='#FFCC80'; html += getMdCloudsHTML();
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="left:20%; top:15vh; animation-delay:-5s;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="left:30%; top:10vh; transform:scale(0.8);"></div>`;
        html += getSunHTML('background:#FF9800; right:15%; top:10vh;');
        html += `<div class="bg-element sand-md" style="background:#FFAB91; height:15vh; bottom:0;"></div><div class="bg-element uluru-md md-shadow"></div>`;
        html += `<div class="bg-element kangaroo-md md-shadow" style="left:30%;"><div class="kangaroo-tail"></div></div><div class="bg-element kangaroo-md md-shadow" style="left:70%; transform:scale(0.8); animation-delay:-0.5s;"><div class="kangaroo-tail"></div></div>`;
        html += `<div class="bg-element auto-md md-shadow" style="background:#F44336; animation-delay:-5s;"><div class="auto-top" style="border-color:#F44336;"></div><div class="auto-wheel" style="left:15px;"></div><div class="auto-wheel" style="right:15px;"></div></div>`;
        break;
        
      case 'rome-finale':
        bgLayer.style.background='linear-gradient(to bottom,#1a237e,#e91e63,#ff9800)'; html += getMdCloudsHTML();
        html += `<div class="bg-element pantheon-md md-shadow"><div class="pantheon-top"></div></div><div class="bg-element trevi-md md-shadow"><div class="trevi-arch"></div><div class="trevi-arch two"></div><div class="trevi-arch three"></div><div class="water-md"></div></div>`;
        html += getColosseumHTML('');
        html += `<div class="bg-element street-md" style="bottom:1vh;z-index: 20"></div><div class="bg-element pino-stem md-shadow" style="left:15%; bottom:1vh;"><div class="pino-top md-shadow"></div></div><div class="bg-element pino-stem md-shadow" style="left:85%; transform:scale(1.2); bottom:1vh;"><div class="pino-top md-shadow"></div></div></div></div>/div>`;
        html += getSunHTML('background:#FF5722; box-shadow:0 0 50px #ff5722; bottom:30vh; top:auto; width:150px; height:150px; right:15%;');
        html += `<div class="bg-element piccione-md md-triangle md-shadow" style="top:10vh;"></div><div class="bg-element piccione-md md-triangle md-shadow" style="top:15vh; animation-delay:-2s; transform:scale(0.8);"></div>`;
        html += `<div class="bg-element basilica-sp-md md-shadow" style="bottom:15vh;right:3vh;"><div class="sp-tower"><div class="sp-tower-top"></div></div><div class="sp-facade"><div class="sp-pediment"></div><div class="sp-cross"></div><div class="sp-rose-window"></div><div class="sp-portico"><div class="sp-column"></div><div class="sp-column"></div><div class="sp-column"></div><div class="sp-column"></div><div class="sp-column"></div><div class="sp-column"></div></div></div><div class="sp-nave"><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div><div class="sp-window"></div></div></div>`;
        html += `<div class="bg-element gazometro-md md-shadow" style="bottom:15vh;right:48vh;scale:0.8"></div>`;

        break;
        
      default:
        bgLayer.style.background='#C5E1A5'; html += getMdCloudsHTML(); html += `<div class="bg-element hill-md"></div>`;
    }
    
    bgLayer.innerHTML = html;
  }
  
  window.GDTScenes = { setBackgroundLayer, generateBackground };
})();