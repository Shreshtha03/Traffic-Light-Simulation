const Box1= document.getElementById("Box1");
const RedLight= document.getElementById("Red");
const YellowLight= document.getElementById("Yellow");
const GreenLight= document.getElementById("Green");

function setLight(activeLight) {
            RedLight.classList.remove('active');
            YellowLight.classList.remove('active');
            GreenLight.classList.remove('active');
            activeLight.classList.add('active');
        }

        function trafficLightCycle() {
            setLight(RedLight);
            setTimeout(() => {
                setLight(YellowLight);
                setTimeout(() => {
                    setLight(GreenLight);
                    setTimeout(trafficLightCycle, 2000); 
                }, 2000); 
            }, 2000); 
        }

        trafficLightCycle(); 


