var newGifSpan;
var newGifSpan2;

$(document).ready(function() {
	var entryCount = 0;
	var displayCount = 0;
  
//capture key presses
  $(document).on("keypress", function(e) {
  	e.preventDefault();
  	entryCount ++;
  	displayCount ++;

//translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

//capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      }
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

});

function deleteElement() {
  $(".inner").last().remove();
}

var texta = document.createElement("div");
	texta.setAttribute("class", "text");
	document.body.appendChild(texta);
	texta.innerHTML = "Advance of socialism";

	textb = document.createElement("div");
	textb. setAttribute("class", "text");
	document.body.appendChild(textb);
	textb.innerHTML = "Brotherhood";
	
	textc = document.createElement("div");
	textc.setAttribute("class", "text");
	document.body.appendChild(textc);
	textc.innerHTML = "Communicate and Cooperate";

	textd = document.createElement("div");
	textd.setAttribute("class", "text");
	document.body.appendChild(textd);
	textd.innerHTML = "Disgraceful history";

	texte = document.createElement("div");
	texte.setAttribute("class", "text");
	document.body.appendChild(texte);
	texte.innerHTML = "Economic construction";

	textf = document.createElement("div");
	textf.setAttribute("class", "text");
	document.body.appendChild(textf);
	textf.innerHTML = "Full of hope";

	textg = document.createElement("div");
	textg.setAttribute("class", "text");
	document.body.appendChild(textg);
	textg.innerHTML = "Global peace and justice";

	texth = document.createElement("div");
	texth.setAttribute("class", "text");
	document.body.appendChild(texth);
	texth.innerHTML = "Harmony";

	texti = document.createElement("div");
	texti.setAttribute("class", "text");
	document.body.appendChild(texti);
	texti.innerHTML = "Ideological oneness of the whole society";

	textj = document.createElement("div");
	textj.setAttribute("class", "text");
	document.body.appendChild(textj);
	textj.innerHTML = "Join hands";

	textk = document.createElement("div");
	textk.setAttribute("class", "text");
	document.body.appendChild(textk);
	textk.innerHTML = "Koreans";

	textl = document.createElement("div");
	textl.setAttribute("class", "text");
	document.body.appendChild(textl);
	textl.innerHTML = "Let us all";

	textm = document.createElement("div");
	textm.setAttribute("class", "text");
	document.body.appendChild(textm);
	textm.innerHTML = "Mutual understanding and faith";

	textn = document.createElement("div");
	textn.setAttribute("class", "text");
	document.body.appendChild(textn);
	textn.innerHTML = "New future, new dream, new hope";

	texto = document.createElement("div");
	texto.setAttribute("class", "text");
	document.body.appendChild(texto);
	texto.innerHTML = "One blood, one language, one history, one culture;"

	textp = document.createElement("div");
	textp.setAttribute("class", "text");
	document.body.appendChild(textp);
	textp.innerHTML = "Peace and prosperity of the korean peninsula";

	textq = document.createElement("div");
	textq.setAttribute("class", "text");
	document.body.appendChild(textq);
	textq.innerHTML = "Quality of training talented personnel";

	textr = document.createElement("div");
	textr.setAttribute("class", "text");
	document.body.appendChild(textr);
	textr.innerHTML = "Reunification of Koreas";

	texts = document.createElement("div");
	texts.setAttribute("class", "text");
	document.body.appendChild(texts);
	texts.innerHTML = "Seperation";

	textt = document.createElement("div");
	textt.setAttribute("class", "text");
	document.body.appendChild(textt);
	textt.innerHTML = "Thanks to our proactive and positive efforts";

	textu = document.createElement("div");
	textu.setAttribute("class", "text");
	document.body.appendChild(textu);
	textu.innerHTML = "Unity";

	textv = document.createElement("div");
	textv.setAttribute("class", "text");
	document.body.appendChild(textv);
	textv.innerHTML = "Victory of the socialist";

	textw = document.createElement("div");
	textw.setAttribute("class", "text");
	document.body.appendChild(textw);
	textw.innerHTML = "War";

	textx = document.createElement("div");
	textx.setAttribute("class", "text");
	document.body.appendChild(textx);
	textx.innerHTML = "Moral excellence";

var aNum, bNum, cNum, dNum, eNum, fNum, gNum, hNum, iNum, jNum, kNum, lNum, mNum, nNum, oNum, pNum, qNum, rNum, sNum, tNum, uNum, vNum, wNum, xNum;
	aNum = bNum = cNum = dNum = eNum = fNum = gNum = hNum = iNum = jNum = kNum = lNum = mNum = nNum = oNum = pNum = qNum =rNum = sNum = tNum = uNum = vNum = wNum = xNum = 0;
var r = Math.floor(Math.random()*255);
	g = Math.floor(Math.random()*255);
	b = Math.floor(Math.random()*255);

function createElement(k){
	//i do something here
	
	var elem = $('#cursor');
	  if (k == "a" || k == "A") { 
	  	elem.before('<span class="innera"><img src="sources/a.gif" height="700vh"></span>'); 

	  			setTimeout(function(){ 
					texta.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < aNum <= 5) {	
	  				texta.style.fontSize = (72 + (aNum * 5)) + 'px';
	  				texta.style.color = 'rgb('+ r +', '+ 100 +', '+ 100 +')';
	  				texta.style.top = Math.round(Math.random() * 800) + 'px';
	  				texta.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (aNum > 7) {
	  				texta.style.color = 'black';
	  				texta.style.opacity = '0.6';
	  			}
	  			aNum ++;
	  			console.log(aNum);
	  }
	  if (k == "b" || k == "B") { 
	  	elem.before('<span class="inner"><img src="sources/b.gif" height="700vh"></span>'); 
				
				setTimeout(function(){ 
					textb.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < bNum <= 5) {	
	  				textb.style.fontSize = (72 + (bNum * 5)) + 'px';
	  				textb.style.color = 'rgb('+ r +', '+ 100 +', '+ 0 +')';
	  				textb.style.top = Math.round(Math.random() * 800) + 'px';
	  				textb.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (bNum > 7) {
	  				textb.style.color = 'black';
	  				textb.style.opacity = '0.6';
	  			}
	  			bNum ++;
	  			console.log(bNum);

	  }
	  if (k == "c" || k == "C") { 
	  	elem.before('<span class="inner"><img src="sources/c.gif" height="400vh"></span>'); 

				setTimeout(function(){ 
					textc.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < cNum <= 5) {	
	  				textc.style.fontSize = (72 + (cNum * 5)) + 'px';
	  				textc.style.color = 'rgb('+ r +', '+ 0 +', '+ 0 +')';
	  				textc.style.top = Math.round(Math.random() * 800) + 'px';
	  				textc.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (cNum > 7) {
	  				textc.style.color = 'black';
	  				textc.style.opacity = '0.6';
	  			}
	  			cNum ++;
	  			console.log(cNum);
	  }
	  if (k == "d" || k == "D") { 
	  	elem.before('<span class="innera"><img src="sources/d.gif" height="400vh"></span>'); 

	  			setTimeout(function(){ 
					textd.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < cNum <= 5) {	
	  				textd.style.fontSize = (72 + (dNum * 5)) + 'px';
	  				textd.style.color = 'rgb('+ 100 +', '+ 0 +', '+ b +')';
	  				textd.style.top = Math.round(Math.random() * 800) + 'px';
	  				textd.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (dNum > 7) {
	  				textd.style.color = 'black';
	  				textd.style.opacity = '0.6';
	  			}
	  			dNum ++;
	  			console.log(dNum);
	  }
	  if (k == "e" || k == "E") { 
	  	elem.before('<span class="innere"><img src="sources/e.gif" height="400vh"></span>'); 

	  			setTimeout(function(){ 
					texte.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < eNum <= 5) {	
	  				texte.style.fontSize = (72 + (eNum * 5)) + 'px';
	  				texte.style.color = 'rgb('+ 0 +', '+ 0 +', '+ b +')';
	  				texte.style.top = Math.round(Math.random() * 800) + 'px';
	  				texte.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (eNum > 7) {
	  				texte.style.color = 'black';
	  				texte.style.opacity = '0.6';
	  			}
	  			eNum ++;
	  			console.log(eNum);


	  }
	  if (k == "f" || k == "F") { 
	  	elem.before('<span class="innere"><img src="sources/f.gif" height="400vh"></span>'); 

	  			setTimeout(function(){ 
					textf.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < fNum <= 5) {	
	  				textf.style.fontSize = (72 + (fNum * 5)) + 'px';
	  				textf.style.color = 'rgb('+ 0 +', '+ 100 +', '+ b +')';
	  				textf.style.top = Math.round(Math.random() * 800) + 'px';
	  				textf.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (fNum > 7) {
	  				textf.style.color = 'black';
	  				textf.style.opacity = '0.6';
	  			}
	  			fNum ++;
	  			console.log(fNum);

	  }
	  if (k == "g" || k == "G") { 
	  	elem.before('<span class="innere"><img src="sources/g.gif" height="400vh"></span>'); 

	  			setTimeout(function(){ 
					textg.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < gNum <= 5) {	
	  				textg.style.fontSize = (72 + (gNum * 5)) + 'px';
	  				textg.style.color = 'rgb('+ 10 +', '+ g +', '+ 0 +')';
	  				textg.style.top = Math.round(Math.random() * 800) + 'px';
	  				textg.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (gNum > 7) {
	  				textg.style.color = 'black';
	  				textg.style.opacity = '0.6';
	  			}
	  			gNum ++;
	  			console.log(gNum);

	  }
	  if (k == "h" || k == "H") { 
	  	elem.before('<span class="innera"><img src="sources/h.gif" height="500vh"></span>'); 

	  			setTimeout(function(){ 
					texth.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < hNum <= 5) {	
	  				texth.style.fontSize = (72 + (hNum * 5)) + 'px';
	  				texth.style.color = 'rgb('+ 10 +', '+ g +', '+ 100 +')';
	  				texth.style.top = Math.round(Math.random() * 800) + 'px';
	  				texth.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (hNum > 7) {
	  				texth.style.color = 'black';
	  				texth.style.opacity = '0.6';
	  			}
	  			hNum ++;
	  			console.log(hNum);
	  }
	  if (k == "i" || k == "I") { 
	  	elem.before('<span class="innera"><img src="sources/i.gif" height="600vh"></span>'); 

	  			setTimeout(function(){ 
					texti.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < iNum <= 5) {	
	  				texti.style.fontSize = (72 + (iNum * 5)) + 'px';
	  				texti.style.color = 'rgb('+ 100 +', '+ g +', '+ 100 +')';
	  				texti.style.top = Math.round(Math.random() * 800) + 'px';
	  				texti.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (iNum > 7) {
	  				texti.style.color = 'black';
	  				texti.style.opacity = '0.6';
	  			}
	  			iNum ++;
	  			console.log(iNum);

	  }
	  if (k == "j" || k == "J") { 
	  	elem.before('<span class="innera"><img src="sources/j.gif" height="600vh"></span>'); 

	  			setTimeout(function(){ 
					textj.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < jNum <= 5) {	
	  				textj.style.fontSize = (72 + (jNum * 5)) + 'px';
	  				textj.style.color = 'rgb('+ r +', '+ 100 +', '+ 10 +')';
	  				textj.style.top = Math.round(Math.random() * 800) + 'px';
	  				textj.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (jNum > 7) {
	  				textj.style.color = 'black';
	  				textj.style.opacity = '0.6';
	  			}
	  			jNum ++;
	  			console.log(jNum);

	  }
	  if (k == "k" || k == "K") { 
	  	elem.before('<span class="innera"><img src="sources/k.gif" height="600vh"></span>'); 

	  			setTimeout(function(){ 
					textk.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < kNum <= 5) {	
	  				textk.style.fontSize = (72 + (kNum * 5)) + 'px';
	  				textk.style.color = 'rgb('+ r +', '+ 10 +', '+ 100 +')';
	  				textk.style.top = Math.round(Math.random() * 800) + 'px';
	  				textk.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (kNum > 7) {
	  				textk.style.color = 'black';
	  				textk.style.opacity = '0.6';
	  			}
	  			kNum ++;
	  			console.log(kNum);

	  }
	  if (k == "l" || k == "L") { 
	  	elem.before('<span class="innera"><img src="sources/l.gif" height="600vh"></span>'); 

	  			setTimeout(function(){ 
					textl.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < lNum <= 5) {	
	  				textl.style.fontSize = (72 + (lNum * 5)) + 'px';
	  				textl.style.color = 'rgb('+ 100 +', '+ 10 +', '+ b +')';
	  				textl.style.top = Math.round(Math.random() * 800) + 'px';
	  				textl.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (lNum > 7) {
	  				textl.style.color = 'black';
	  				textl.style.opacity = '0.6';
	  			}
	  			lNum ++;
	  			console.log(lNum);
	  }
	  if (k == "m" || k == "M") { 
	  	elem.before('<span class="innera"><img src="sources/m.gif" height="600vh"></span>'); 

	  			setTimeout(function(){ 
					textm.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < mNum <= 5) {	
	  				textm.style.fontSize = (72 + (mNum * 5)) + 'px';
	  				textm.style.color = 'rgb('+ 10 +', '+ 100 +', '+ b +')';
	  				textm.style.top = Math.round(Math.random() * 800) + 'px';
	  				textm.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (mNum > 7) {
	  				textm.style.color = 'black';
	  				textm.style.opacity = '0.6';
	  			}
	  			mNum ++;
	  			console.log(mNum);
	  }
	  if (k == "n" || k == "N") { 
	  	elem.before('<span class="innera"><img src="sources/n.gif" height="600vh"></span>'); 

	  			setTimeout(function(){ 
					textn.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < nNum <= 5) {	
	  				textn.style.fontSize = (72 + (nNum * 5)) + 'px';
	  				textn.style.color = 'rgb('+ 10 +', '+ g +', '+ b +')';
	  				textn.style.top = Math.round(Math.random() * 800) + 'px';
	  				textn.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (nNum > 7) {
	  				textn.style.color = 'black';
	  				textn.style.opacity = '0.6';
	  			}
	  			nNum ++;
	  			console.log(nNum);

	  }
	  if (k == "o" || k == "O") { 
	  	elem.before('<span class="innera"><img src="sources/o.gif" height="600vh"></span>'); 

	  			setTimeout(function(){ 
					texto.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < oNum <= 5) {	
	  				texto.style.fontSize = (72 + (oNum * 5)) + 'px';
	  				texto.style.color = 'rgb('+ r +', '+ g +', '+ 10 +')';
	  				texto.style.top = Math.round(Math.random() * 800) + 'px';
	  				texto.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (oNum > 7) {
	  				texto.style.color = 'black';
	  				texto.style.opacity = '0.6';
	  			}
	  			oNum ++;
	  			console.log(oNum);
	  }
	  if (k == "p" || k == "P") { 
	  	elem.before('<span class="innera"><img src="sources/p.gif" height="400vh"></span>'); 

	  			setTimeout(function(){ 
					textp.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < pNum <= 5) {	
	  				textp.style.fontSize = (72 + (pNum * 5)) + 'px';
	  				textp.style.color = 'rgb('+ r +', '+ 10 +', '+ b +')';
	  				textp.style.top = Math.round(Math.random() * 800) + 'px';
	  				textp.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (pNum > 7) {
	  				textp.style.color = 'black';
	  				textp.style.opacity = '0.6';
	  			}
	  			pNum ++;
	  			console.log(pNum);
	  }
	  if (k == "q" || k == "Q") { 
	  	elem.before('<span class="innera"><img src="sources/q.gif" height="500vh"></span>'); 

	  			setTimeout(function(){ 
					textq.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < qNum <= 5) {	
	  				textq.style.fontSize = (72 + (qNum * 5)) + 'px';
	  				textq.style.color = 'rgb('+ 225 +', '+ 0 +', '+ b +')';
	  				textq.style.top = Math.round(Math.random() * 800) + 'px';
	  				textq.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (qNum > 7) {
	  				textq.style.color = 'black';
	  				textq.style.opacity = '0.6';
	  			}
	  			qNum ++;
	  			console.log(qNum);
	  }
	  if (k == "r" || k == "R") { 
	  	elem.before('<span class="innera"><img src="sources/r.gif" height="500vh"></span>'); 

	  			setTimeout(function(){ 
					textr.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < rNum <= 5) {	
	  				textr.style.fontSize = (72 + (rNum * 5)) + 'px';
	  				textr.style.color = 'rgb('+ r +', '+ 225 +', '+ 0 +')';
	  				textr.style.top = Math.round(Math.random() * 800) + 'px';
	  				textr.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (rNum > 7) {
	  				textr.style.color = 'black';
	  				textr.style.opacity = '0.6';
	  			}
	  			rNum ++;
	  			console.log(rNum);
	  }
	  if (k == "s" || k == "S") { 
	  	elem.before('<span class="innera"><img src="sources/s.gif" height="600vh"></span>'); 

	  			setTimeout(function(){ 
					texts.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < sNum <= 5) {	
	  				texts.style.fontSize = (72 + (sNum * 5)) + 'px';
	  				texts.style.color = 'rgb('+ 0 +', '+ g +', '+ 225 +')';
	  				texts.style.top = Math.round(Math.random() * 800) + 'px';
	  				texts.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (sNum > 7) {
	  				texts.style.color = 'black';
	  				texts.style.opacity = '0.6';
	  			}
	  			sNum ++;
	  			console.log(sNum);

	  }
	  if (k == "t" || k == "T") { 
	  	elem.before('<span class="innera"><img src="sources/t.gif" height="500vh"></span>'); 

	  			setTimeout(function(){ 
					textt.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < tNum <= 5) {	
	  				textt.style.fontSize = (72 + (tNum * 5)) + 'px';
	  				textt.style.color = 'rgb('+ 50 +', '+ 0 +', '+ b +')';
	  				textt.style.top = Math.round(Math.random() * 800) + 'px';
	  				textt.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (tNum > 7) {
	  				textt.style.color = 'black';
	  				textt.style.opacity = '0.6';
	  			}
	  			tNum ++;
	  			console.log(tNum);
	  }
	  if (k == "u" || k == "U") { 
	  	elem.before('<span class="innera"><img src="sources/plate.gif" height="400vh"></span>'); 

	  			setTimeout(function(){ 
					textu.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < uNum <= 5) {	
	  				textu.style.fontSize = (72 + (uNum * 5)) + 'px';
	  				textu.style.color = 'rgb('+ 0 +', '+ 50 +', '+ b +')';
	  				textu.style.top = Math.round(Math.random() * 800) + 'px';
	  				textu.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (uNum > 7) {
	  				textu.style.color = 'black';
	  				textu.style.opacity = '0.6';
	  			}
	  			uNum ++;
	  			console.log(uNum);
	  }
	  if (k == "v" || k == "V") { 
	  	elem.before('<span class="innera"><img src="sources/v.gif" height="400vh"></span>'); 

	  			setTimeout(function(){ 
					textv.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < vNum <= 5) {	
	  				textv.style.fontSize = (72 + (vNum * 5)) + 'px';
	  				textv.style.color = 'rgb('+ r +', '+ 50 +', '+ 0 +')';
	  				textv.style.top = Math.round(Math.random() * 800) + 'px';
	  				textv.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (vNum > 7) {
	  				textv.style.color = 'black';
	  				textv.style.opacity = '0.6';
	  			}
	  			vNum ++;
	  			console.log(vNum);
	  }
	  if (k == "w" || k == "W") { 
	  	elem.before('<span class="innere"><img src="sources/w.gif" height="400vh"></span>'); 

	  			setTimeout(function(){ 
					textw.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < wNum <= 5) {	
	  				textw.style.fontSize = (72 + (wNum * 5)) + 'px';
	  				textw.style.color = 'rgb('+ r +', '+ 0 +', '+ 50 +')';
	  				textw.style.top = Math.round(Math.random() * 800) + 'px';
	  				textw.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (wNum > 7) {
	  				textw.style.color = 'black';
	  				textw.style.opacity = '0.6';
	  			}
	  			wNum ++;
	  			console.log(wNum);
	  }
	  if (k == "x" || k == "X") { 
	  	elem.before('<span class="innera"><img src="sources/x.gif" height="600vh"></span>');
	  			setTimeout(function(){ 
					textx.style.display = 'inline';
	  			}, 1000); 
	  			if (0 < xNum <= 5) {	
	  				textx.style.fontSize = (72 + (xNum * 5)) + 'px';
	  				textx.style.color = 'rgb('+ r +', '+ 0 +', '+ 0 +')';
	  				textx.style.top = Math.round(Math.random() * 800) + 'px';
	  				textx.style.left = Math.round(Math.random() * 1000) + 'px';
	  			}
	  			if (xNum > 7) {
	  				textx.style.color = 'black';
	  				textx.style.opacity = '0.6';
	  			}
	  			xNum ++;
	  			console.log(xNum);
	  }
	  if (k == "y" || k == "Y") {  
		
		if (newGifSpan2 !== undefined) {
			newGifSpan2.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
			newGifSpan2.style.left = Math.round(Math.random() * document.body.scrollWidth) + 'px';
	  	} else{
		  	var newGif2 = document.createElement("img");
		  	newGif2.src = "sources/y.gif";
			newGif2.style.height = '250px';

		  	newGifSpan2 = document.createElement("span");
		  	newGifSpan2.className = "inner1";
		  	newGifSpan2.appendChild(newGif2);
			newGifSpan2.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
			newGifSpan2.style.left = Math.round(Math.random() * document.body.scrollWidth) + 'px';
		  	document.body.appendChild(newGifSpan2);

	  	}			
	  }
	  if (k == "z" || k == "Z") { 

	  	if (newGifSpan !== undefined) {
			newGifSpan.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
			newGifSpan.style.left = Math.round(Math.random() * document.body.scrollWidth) + 'px';
	  	} else{
		  	var newGif = document.createElement("img");
		  	newGif.src = "sources/z.gif";
			newGif.style.height =  '250px';

		  	newGifSpan = document.createElement("span");
		  	newGifSpan.className = "inner2";
		  	newGifSpan.appendChild(newGif);
			newGifSpan.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
			newGifSpan.style.left = Math.round(Math.random() * document.body.scrollWidth) + 'px';
		  	document.body.appendChild(newGifSpan);

	  	}
	  }
	  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); }
}





