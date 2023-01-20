// quiz create
$(document).ready(function(){
		document.querySelector(".cqq").onclick=function(){
			var wrapp = document.querySelector(".quizbody");
			   var row;
			    ques1=document.createElement('div');
				ques1.setAttribute('class'," ques1");
				
				quesheader1=document.createElement('div');
				quesheader1.setAttribute('class',"quesheader1");
				
				addques1=document.createElement('p');
				addques1.setAttribute('class',"addques1 btn bg-secondary");
				addques1.setAttribute('onclick',"addquestion()");
				addques1.textContent="Add Question";
				addques1.style.marginRight="10px";
				
				addquesname1=document.createElement('input');
				addquesname1.setAttribute('class',"addquesname1 quesnumber1");
				addquesname1.setAttribute('id',"quesnum1");
				addquesname1.setAttribute('name',"addquesname1");
				addquesname1.setAttribute('type',"text");
				addquesname1.setAttribute('value',"Question?");
				
			
				quesheader1.appendChild(addques1);
				quesheader1.appendChild(addquesname1);
				ques1.appendChild(quesheader1);
			    wrapp.appendChild(ques1);
			    document.querySelector(".cqq").style.display = "none";	
			};
			
	
	});
	
	function loopquestion()
	{
		
		var lng=document.getElementsByClassName("quesheader1").length;
		var wrapp = document.querySelector(".quizbody");
			   var row;
			    ques1=document.createElement('div');
				ques1.setAttribute('class'," ques"+(lng+1));
				
				quesheader1=document.createElement('div');
				quesheader1.setAttribute('class',"quesheader1");
				
				addques1=document.createElement('p');
				addques1.setAttribute('class',"addques1 btn bg-secondary");
				addques1.setAttribute('onclick',"addquestion()");
				addques1.textContent="Add Question";
				addques1.style.marginRight="10px";
				
				addquesname1=document.createElement('input');
				addquesname1.setAttribute('class',"addquesname1 quesnumber"+(lng+1));
				addquesname1.setAttribute('id',"quesnum"+(lng+1));
				addquesname1.setAttribute('name',"addquesname1");
				addquesname1.setAttribute('type',"text");
				addquesname1.setAttribute('value',"Question?");
				
			
				quesheader1.appendChild(addques1);
				quesheader1.appendChild(addquesname1);
				ques1.appendChild(quesheader1);
			    wrapp.appendChild(ques1);
			    document.querySelector(".cqq").style.display = "none";
	}
	function addquestion()
{
	var lng=document.getElementsByClassName("quesheader1").length;
	lng=lng-1;
	var header=document.getElementsByClassName("quesheader1");
	header[lng].style.display="none";
	var wrapp = document.querySelector(".quizbody");
	var ques1 = document.querySelector(".ques"+lng+"");
	//var ques1=document.getElementsByClassName("ques"+(lng+1));
	var addoption1=document.createElement('div');
	addoption1.setAttribute('class',"addoption"+(lng+1));
	
	dl=document.createElement('dl');
	dl.setAttribute('class',"dlclass"+(lng+1));
	
	dt=document.createElement('dt');
	
	span1=document.createElement('span');
	span1.setAttribute('style',"font-size:20px");
	span1.textContent=(lng+1)+")  ";
	
	span2=document.createElement('span');
	span2.setAttribute('class',"quest1");
	
	var value =document.getElementsByClassName("addquesname1");
	span2.textContent=value[lng].value;
	
	 dt.appendChild(span1);
	 dt.appendChild(span2);
	 dl.appendChild(dt);
	 addoption1.appendChild(dl);
	 //ques1.appendChild(addoption1);
     wrapp.appendChild(  addoption1);
    
    addbutton1=document.createElement('div');
	addbutton1.setAttribute('class',"addbutton"+(lng+1));
	
	p1=document.createElement('p');
	p1.setAttribute('class',"qbutton1 btn bg-secondary");
	p1.setAttribute('onclick',"addoption()");
	p1.textContent="Add Option";
	p1.style.marginRight="10px";
	
	
    inputop1=document.createElement('input');
	inputop1.setAttribute('class',"inputop"+(lng+1));
	inputop1.setAttribute('name',"inputop1");
	inputop1.setAttribute('type',"text");
	inputop1.setAttribute('value',"option?");
	
	addbutton1.appendChild(p1);
	addbutton1.appendChild(inputop1);
	//ques1.appendChild(addbutton1);
	wrapp.appendChild( addbutton1);
   document.getElementsByClassName("quizsave")[0].style.display = "none";
	//var value =  document.querySelector(".addquesname1").value;
	//document.querySelector(".quest1").innerHTML=value;
}
function addoption( ){
	  document.getElementsByClassName("quizsave")[0].style.display = "none";
		var lng=document.getElementsByClassName("quesheader1").length;
		var lngg=document.getElementsByClassName("dd1").length+1;
	var dl = document.querySelector(".dlclass"+lng);
	var addoption1 = document.querySelector(".addoption"+lng);
    var addbutton1 = document.querySelector(".addbutton"+lng);
	var wrapp = document.querySelector(".quizbody");
	
	dd=document.createElement('dd');
	dd.setAttribute('class',"dd"+lng);
	
	optionch1=document.createElement('input');
	optionch1.setAttribute('class',"optionch"+lng);
	optionch1.setAttribute('name',"optionch1");
	optionch1.setAttribute('type',"checkbox");
	
	optionval1=document.createElement('span');
	optionval1.setAttribute('class',"optionval"+lng);
	var value =  document.querySelector(".inputop"+lng).value;
	optionval1.textContent=value;
	optionval1.setAttribute('value',value);
	
	
	dd.appendChild(optionch1);
	dd.appendChild(optionval1);
	dl.appendChild(dd);
	addoption1.appendChild(dl);

	var ll=document.getElementsByClassName("dd"+lng).length;
	if(ll==2)
	{
	end=document.createElement('p');
	end.setAttribute('class',"end btn bg-secondary");
	end.setAttribute('onclick',"endop()");
	end.textContent="End";
	end.style.marginLeft="10px";
	addbutton1.appendChild(end);
	}
	
	wrapp.appendChild(addoption1);
	wrapp.appendChild(addbutton1);
	
}

function endop()
{
		var lng=document.getElementsByClassName("quesheader1").length;
		
	    var checked=0;
        var chks = document.getElementsByClassName("optionch"+lng);
        //Loop and count the number of checked CheckBoxes.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                checked++;
            }
        }
 
        if (checked > 0) {
            //alert(checked + " CheckBoxe(s) are checked.");
          var abs="addbutton"+lng;
          document.getElementsByClassName(abs)[0].style.display = "none";
          loopquestion();
          
          	var qlng=document.getElementsByClassName("qsubmit").length;
          	if(qlng==0)
          	{
	
	        var wrapp = document.querySelector(".quizsave");
          	p1=document.createElement('p');
			p1.setAttribute('class',"qsubmit btn bg-primary");
			p1.setAttribute('onclick',"quizsave()");
			p1.textContent="Submit";
			p1.style.marginRight="10px";
			
			p2=document.createElement('p');
			p2.setAttribute('class',"qcancel btn bg-success");
			p2.setAttribute('onclick',"quizcancel()");
			p2.textContent="Cancel";
			p2.style.marginRight="10px";
			
			wrapp.appendChild(p1);
				wrapp.appendChild(p2);
            }
          	
          	
            document.getElementsByClassName("quizsave")[0].style.display = "block";
            
            var jsonlng=document.getElementsByClassName("addquesname1").length-2;
           // console.log({jsonlng});
            var wrapp = document.getElementsByClassName("addquesname1");
            var question=new Array(1);
             question[0]=wrapp[jsonlng].value;
             var ans1=wrapp[jsonlng].value;
            // alert(  question[0]);
           
            
            var oplng=document.getElementsByClassName("optionval"+(jsonlng+1)).length;
            var questionop= new Array(oplng);
            var questionans= new Array(checked);
            var ch=0;
            var ans2=" ";
            for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                 questionans[ch]=i;
                // ans2=ans2+i;
				 ch++;
                // console.log(questionans[ch++]);
               }
            }
            
            
            for(var i=0;i<oplng;i++)
            {
	        questionop[i]=document.getElementsByClassName("optionval"+(jsonlng+1))[i].innerHTML;
	
            } 
     
           
            var jsonoutput=[questionop];//ok
            wrapp[jsonlng].setAttribute('value',jsonoutput);//ok
               //wrapp[jsonlng].setAttribute('value',questionop);//ok
                      
            
        } else {
            alert("Please select Answer.");
        }
	
}
 function quizsave()
 {
	var lng=document.getElementsByClassName("quesheader1").length;
	
	
	    document.getElementsByClassName("quizsave")[0].style.display = "none";
	    document.getElementsByClassName("quesheader1")[(lng-1)].style.display = "none";
	    var elemk = document.getElementsByClassName("ques"+lng)[0];
        elemk.parentNode.removeChild(elemk);
        
        
        //quiz result
         var quizlng=document.getElementsByClassName("addquesname1").length;
         var quizoutputresult=new Array(quizlng);
        
         for(var i=0;i<quizlng;i++)
         {
	        //problem here
	        quizoutputresult[i]=document.getElementById("quesnum1").value;
         }
         var resultset = document.querySelector(".quizresult");
         
	     resultset.setAttribute('value',quizoutputresult[0]);
	    
	     var wrappptag = document.getElementsByClassName("quizresultoption");
	     wrappptag[0].textContent=quizoutputresult;
	    console.log(quizoutputresult);
	    
}

function quizcancel()
{
	var lng=document.getElementsByClassName("quesheader1").length;
	for(var i=1;i<=lng;i++)
	{
		 var elem = document.getElementsByClassName("ques"+i)[0];
         elem.parentNode.removeChild(elem);
	}
	
	for(var i=1;i<lng;i++)
	{
		 var elem = document.getElementsByClassName("addoption"+i)[0];
         elem.parentNode.removeChild(elem);
          var elemm = document.getElementsByClassName("addbutton"+i)[0];
         elemm.parentNode.removeChild(elemm);
         
	}
     var elemk = document.getElementsByClassName("qsubmit")[0];
         elemk.parentNode.removeChild(elemk);
     var eleml = document.getElementsByClassName("qcancel")[0];
         eleml.parentNode.removeChild(eleml);
   
      document.querySelector(".cqq").style.display = "inline"; 
  
}
