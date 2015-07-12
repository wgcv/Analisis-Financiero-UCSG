var idAgregar;
$( document ).ready(function() {
	$('#EstadoResultados').hide();
		$('#AnalisisHorizontaVerticalER').hide();
		$('#balancegeneral').hide();
		$('#AnalisisHorizontaVerticalBG').hide();
		$('#cambiopatrimonio').hide();
		$('#dupont').hide();
		$("#listamenu").hide();
		//$('#principal').hide();
		
	setInterval('operacion()',1000);

	$("#btnAgregar").click(function() {
		$("#"+idAgregar+" .cuentas").append('<div> <div class="mitad"> <label>'+$('#txtAgregar').val()+' </label> </div> <div class="mitad2"> <input id="'+$('#txtAgregar').val()+'1" class="a1"size="8" value="0.00"> <input id="'+$('#txtAgregar').val()+'2" class="a2"size="8" value="0.00"> </div> </div>');
		$("#agregar").css("display", "none");
		$('#txtAgregar').val('');
	});

	$("#btnAgregarCancelar").click(function() {
		$('#txtAgregar').val('');
		$("#agregar").css("display", "none");

	});

	$("#menu").click(function(){$("#listamenu").show();})
	$("#listamenu li").click(function(){
if($(this).attr('id')=='er'){
	$('#EstadoResultados').show();
		$('#AnalisisHorizontaVerticalER').hide();
		$('#balancegeneral').hide();
		$('#AnalisisHorizontaVerticalBG').hide();
		$('#cambiopatrimonio').hide();
		$('#dupont').hide();
		$('#principal').hide();
		$("#listamenu").hide();
}
if($(this).attr('id')=='aer'){
	$('#EstadoResultados').hide();
		$('#AnalisisHorizontaVerticalER').show();
		$('#balancegeneral').hide();
		$('#AnalisisHorizontaVerticalBG').hide();
		$('#cambiopatrimonio').hide();
		$('#dupont').hide();
		$('#principal').hide();
		$("#listamenu").hide();
}
if($(this).attr('id')=='bg'){
	$('#EstadoResultados').hide();
		$('#AnalisisHorizontaVerticalER').hide();
		$('#balancegeneral').show();
		$('#AnalisisHorizontaVerticalBG').hide();
		$('#cambiopatrimonio').hide();
		$('#dupont').hide();
		$('#principal').hide();
		$("#listamenu").hide();
}
if($(this).attr('id')=='abg'){
	$('#EstadoResultados').hide();
		$('#AnalisisHorizontaVerticalER').hide();
		$('#balancegeneral').hide();
		$('#AnalisisHorizontaVerticalBG').show();
		$('#cambiopatrimonio').hide();
		$('#dupont').hide();
		$('#principal').hide();
		$("#listamenu").hide();
}
if($(this).attr('id')=='cp'){
	$('#EstadoResultados').hide();
		$('#AnalisisHorizontaVerticalER').hide();
		$('#balancegeneral').hide();
		$('#AnalisisHorizontaVerticalBG').hide();
		$('#cambiopatrimonio').show();
		$('#dupont').hide();
		$('#principal').hide();
		$("#listamenu").hide();
}
if($(this).attr('id')=='dp'){
	$('#EstadoResultados').hide();
		$('#AnalisisHorizontaVerticalER').hide();
		$('#balancegeneral').hide();
		$('#AnalisisHorizontaVerticalBG').hide();
		$('#cambiopatrimonio').hide();
		$('#dupont').show();
		$('#principal').hide();
		$("#listamenu").hide();
}
	});	
	
});

function agregar(id)
{	
	idAgregar=id;
	$("#agregar").css("display", "inline-block");

}

function operacion(){
	//ventas
	var UtilidadBruta1=0;
	var UtilidadBruta2=0;
	$('#ventas .cuentas').find( "input" ).each(function(index, element){
		if (!isNaN($(element).val()) &&  !$(element).val()=='')
			if($(element).hasClass( "a1" )){
				UtilidadBruta1+=parseFloat($(element).val());
			}
			if($(element).hasClass( "a2" )){
				UtilidadBruta2+=parseFloat($(element).val());
			}
		});
	$('#UtilidadBruta1').val(parseFloat(UtilidadBruta1).toFixed(2));
	$('#UtilidadBruta2').val(parseFloat(UtilidadBruta2).toFixed(2));

	//UAII
	var UAII1=0;
	var UAII2=0;
	$('#uiia .cuentas').find( "input" ).each(function(index, element){
		if (!isNaN($(element).val()) &&  !$(element).val()=='')
			if($(element).hasClass( "a1" )){
				UAII1+=parseFloat($(element).val());
			}
			if($(element).hasClass( "a2" )){
				UAII2+=parseFloat($(element).val());
			}

		});
	UAII1=UtilidadBruta1+UAII1;
	UAII2=UtilidadBruta2+UAII2;
	$('#totaluiia1').val(parseFloat(UAII1).toFixed(2));
	$('#totaluiia2').val(parseFloat(UAII2).toFixed(2));

	//UAI
	var UAI1=0;
	var UAI2=0;
	$('#uai .cuentas').find( "input" ).each(function(index, element){
		if (!isNaN($(element).val()) &&  !$(element).val()=='')
			if($(element).hasClass( "a1" )){
				UAI1+=parseFloat($(element).val());
			}
			if($(element).hasClass( "a2" )){
				UAI2+=parseFloat($(element).val());
			}
		});
	UAI1=UAI1+UAII1;
	UAI2=UAI2+UAII2;
	$('#totaluai1').val(parseFloat(UAI1).toFixed(2));
	$('#totaluai2').val(parseFloat(UAI2).toFixed(2));

	//Utilidad Neta
	var utilidadneta1=0;
	var utilidadneta2=0;
	$('#utilidadneta .cuentas').find( "input" ).each(function(index, element){
		if (!isNaN($(element).val()) &&  !$(element).val()=='')
			if($(element).hasClass( "a1" )){
				utilidadneta1+=parseFloat($(element).val());
			}
			if($(element).hasClass( "a2" )){
				utilidadneta2+=parseFloat($(element).val());
			}
		});
	utilidadneta1=UAI1+utilidadneta1;
	utilidadneta2=UAI2+utilidadneta2;
	$('#totalutilidadneta1').val(parseFloat(utilidadneta1).toFixed(2));
	$('#totalutilidadneta2').val(parseFloat(utilidadneta2).toFixed(2));

//Utilidad Retenida
var utilidadretenida1=0;
var utilidadretenida2=0;
$('#utilidadretenida .cuentas').find( "input" ).each(function(index, element){
	if (!isNaN($(element).val()) &&  !$(element).val()=='')
		if($(element).hasClass( "a1" )){
			utilidadretenida1+=parseFloat($(element).val());
		}
		if($(element).hasClass( "a2" )){
			utilidadretenida2+=parseFloat($(element).val());
		}
	});
utilidadretenida1=utilidadneta1+utilidadretenida1;
utilidadretenida2=utilidadneta2+utilidadretenida2;
$('#totalutilidadretenida1').val(parseFloat(utilidadretenida1).toFixed(2));
$('#erutilidadretenida1').val(parseFloat(utilidadretenida1).toFixed(2));

$('#totalutilidadretenida2').val(parseFloat(utilidadretenida2).toFixed(2));
$('#erutilidadretenida2').val(parseFloat(utilidadretenida2).toFixed(2));
	//activos corrientes
	var acorrientes1=0;
	var acorrientes2=0;
	$('#eractivosc .cuentas').find( "input" ).each(function(index, element){
		if (!isNaN($(element).val()) &&  !$(element).val()=='')
			if($(element).hasClass( "a1" )){
				acorrientes1+=parseFloat($(element).val());
			}
			if($(element).hasClass( "a2" )){
				acorrientes2+=parseFloat($(element).val());
			}
		});
	$('#totalacorrientes1').val(parseFloat(acorrientes1).toFixed(2));
	$('#totalacorrientes2').val(parseFloat(acorrientes2).toFixed(2));

	//activos fijos
	var afijos1=0;
	var afijos2=0;
	$('#eractivoslp .cuentas').find( "input" ).each(function(index, element){
		if (!isNaN($(element).val()) &&  !$(element).val()=='')
			if($(element).hasClass( "a1" )){
				afijos1+=parseFloat($(element).val());
			}
			if($(element).hasClass( "a2" )){
				afijos2+=parseFloat($(element).val());
			}
		});
	$('#totalafijo1').val(parseFloat(afijos1).toFixed(2));
	$('#totalafijo2').val(parseFloat(afijos2).toFixed(2));

	//activos otros
	var aotros1=0;
	var aotros2=0;
	$('#eractivoso .cuentas').find( "input" ).each(function(index, element){
		if (!isNaN($(element).val()) &&  !$(element).val()=='')
			if($(element).hasClass( "a1" )){
				aotros1+=parseFloat($(element).val());
			}
			if($(element).hasClass( "a2" )){
				aotros2+=parseFloat($(element).val());
			}
		});
	$('#totalaotros1').val(parseFloat(aotros1).toFixed(2));
	$('#totalaotros2').val(parseFloat(aotros2).toFixed(2));

	//activos
	var atotal1=0;
	var atotal2=0;
	atotal1=parseFloat(acorrientes1+afijos1+aotros1);
	atotal2=parseFloat(acorrientes2+afijos2+aotros2);
	$('#totalatotal1').val(parseFloat(atotal1).toFixed(2));
	$('#totalatotal2').val(parseFloat(atotal2).toFixed(2));


	//pasivos circulantes
	var pcirculante1=0;
	var pcirculante2=0;
	$('#erpcirculante .cuentas').find( "input" ).each(function(index, element){
		if (!isNaN($(element).val()) &&  !$(element).val()=='')
			if($(element).hasClass( "a1" )){
				pcirculante1+=parseFloat($(element).val());
			}
			if($(element).hasClass( "a2" )){
				pcirculante2+=parseFloat($(element).val());
			}
		});
	$('#totalpcircualnte1').val(parseFloat(pcirculante1).toFixed(2));
	$('#totalpcircualnte2').val(parseFloat(pcirculante2).toFixed(2));
//pasivos largo plazo
var plargoplazo1=0;
var plargoplazo2=0;
$('#erplargoplazo .cuentas').find( "input" ).each(function(index, element){
	if (!isNaN($(element).val()) &&  !$(element).val()=='')
		if($(element).hasClass( "a1" )){
			plargoplazo1+=parseFloat($(element).val());
		}
		if($(element).hasClass( "a2" )){
			plargoplazo2+=parseFloat($(element).val());
		}
	});
$('#totalplargoplazo1').val(parseFloat(plargoplazo1).toFixed(2));
$('#totalplargoplazo2').val(parseFloat(plargoplazo2).toFixed(2));

//pasivos
var ptotal1=0;
var ptotal2=0;
ptotal1=parseFloat(pcirculante1+plargoplazo1);
ptotal2=parseFloat(pcirculante2+plargoplazo2);
$('#totalptotal1').val(parseFloat(ptotal1).toFixed(2));
$('#totalptotal2').val(parseFloat(ptotal2).toFixed(2));
//patrimonio
var patrimonio1=0;
var patrimonio2=0;
$('#erpatrimonio .cuentas').find( "input" ).each(function(index, element){
	if (!isNaN($(element).val()) &&  !$(element).val()=='')
		if($(element).hasClass( "a1" )){
			patrimonio1+=parseFloat($(element).val());
		}
		if($(element).hasClass( "a2" )){
			patrimonio2+=parseFloat($(element).val());
		}
	});
$('#totalpatotal1').val(parseFloat(patrimonio1).toFixed(2));
$('#totalpatotal2').val(parseFloat(patrimonio2).toFixed(2));
	//Total pasivos y patrimonio
	var pptotal1=0;
	var pptotal2=0;
	pptotal1=parseFloat(ptotal1+patrimonio1);
	pptotal2=parseFloat(ptotal2+patrimonio2);
	$('#totalpptotal1').val(parseFloat(pptotal1).toFixed(2));
	$('#totalpptotal2').val(parseFloat(pptotal2).toFixed(2));

//Cambio patrimonio
var cptotal=0;
	
	cptotal=parseFloat(utilidadretenida1)+parseFloat(utilidadneta2)+ parseFloat($('#dividendo2').val());
	
	$('#urcp').val(parseFloat(utilidadretenida1).toFixed(2));
	$('#uncp').val(parseFloat(utilidadneta2).toFixed(2));
	$('#dcp').val(parseFloat($('#dividendo2').val()).toFixed(2));
	$('#totalcp').val(parseFloat(cptotal).toFixed(2));

	//dupoin
	var msvad1 = utilidadneta1/parseFloat($('#ventas1').val());
	var raad1 = parseFloat($('#ventas1').val())/atotal1;
	var msvad2 = utilidadneta2/parseFloat($('#ventas2').val());
	var raad2 = parseFloat($('#ventas2').val())/atotal2;
	$('#msvad1').val((parseFloat(msvad1)*100).toFixed(2));
	$('#raad1').val((parseFloat(raad1)*100).toFixed(2));
	$('#rdada1').val((parseFloat(raad1*msvad1)*100).toFixed(2));
	$('#msvad2').val((parseFloat(msvad2)*100).toFixed(2));
	$('#raad2').val((parseFloat(raad2)*100).toFixed(2));
	$('#rdada2').val((parseFloat(raad2*msvad2)*100).toFixed(2));



analisisverticaler();
analisishorizontalbg();
analisishorizontal();
analisisverticalbg();
tipocuentabg();
}

function analisisverticaler(){
	$('#avResultado').empty();
	var llabel = [];
	$('#EstadoResultados').find( "label" ).each(function(index, element){
		llabel.push(element.innerHTML);
	});
	var avhtml='';
	var avi=0;
	$('#EstadoResultados').find( "input" ).each(function(index, element){

		if ((index+1)%2 ==0) { 
			avhtml+='<input class="a2"  size="8" value="'+($(element).val()/$("#ventas2").val()*100).toFixed(2)+'%"></div></div>';
		}
		else{
			
			avhtml+='<div><div class="mitad"><label>'+llabel[avi]+'</label></div><div class="mitad2"><input class="a1" size="8" value="'+($(element).val()/$("#ventas1").val()*100).toFixed(2)+'%">';
			avi+=1;
		}
	});
	$('#avResultado').append(avhtml);
}
var avbginput = [];


function analisishorizontalbg(){
	$('#ahbg').empty();
	var avbglabel = [];
	$('#balancegeneral').find( "label" ).each(function(index, element){
		avbglabel.push(element.innerHTML);
	});
	var avbghtml='';
	var avbgi=0;
	$('#balancegeneral').find( "input" ).each(function(index, element){
		avbginput.push(element);

	});
	$.each(avbglabel,function(index, element){

		var relativa = 0 ;
		avbghtml+='<div><div class="mitad"><label>'+element+'</label></div><div class="mitad2"><input class="a1" size="8" value="'+($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val()).toFixed(2)+'">';
		if($(avbginput[index*2]).val()!=0){

			relativa = (($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val())/$(avbginput[index*2]).val()*100).toFixed(2)
		}
		avbghtml+='<input class="a2"  size="8" value="'+relativa+'%"></div></div>';

	});
	$('#ahbg').append(avbghtml);
}

function analisishorizontal(){
	$('#ahResultado').empty();

	var hinbox = [];

	var ahhtml='';
	var ahi=0;
	$('#EstadoResultados').find( "input" ).each(function(index, element){
		hinbox.push(element);


	});

	$('#EstadoResultados').find( "label" ).each(function(index, element){

		//element.innerHTML
		if($(hinbox[ahi]).val()<0){
			var ahdif=(($(hinbox[ahi+1]).val()*-1)-($(hinbox[ahi]).val()*-1)).toFixed(2);

		}else{
			var ahdif=($(hinbox[ahi+1]).val()-$(hinbox[ahi]).val()).toFixed(2);

		}
		ahhtml+='<div><div class="mitad"><label>'+element.innerHTML+'</label></div><div class="mitad2"><input class="a1" size="8" value="'+ahdif+'">';
		if($(hinbox[ahi+1]).val()==0){
			ahpor=0;
		}else{
			if($(hinbox[ahi+1]).val()<0){
				var ahpor=(ahdif/($(hinbox[ahi+1]).val()*-1)).toFixed(2);

			}else{
				var ahpor=(ahdif/($(hinbox[ahi+1]).val())).toFixed(2);

			}
			if (isNaN(ahpor) ){
				ahpor=0;
			}

			if (ahpor<1 ){
				ahpor=ahpor*-1;
			}
			ahpor=ahpor*100;

		}
		ahhtml+='<input class="a2"  size="8" value="'+ahpor+'%"></div></div>';

		ahi+=2;

	});
	$('#ahResultado').append(ahhtml);
}

function analisisverticalbg(){
	$('#avbg').empty();

	//activos
	var avbglabel = [];
	$('#eractivos').find( "label" ).each(function(index, element){
		avbglabel.push(element.innerHTML);
	});
	var avbghtml='';
	var avbgi=0;
	var avbginput = [];
	$('#eractivos').find( "input" ).each(function(index, element){
		avbginput.push(element);

	});
	$.each(avbglabel,function(index, element){
//totalatotal1
var relativa = 0 ;
avbghtml+='<div><div class="mitad"><label>'+element+'</label></div><div class="mitad2"><input class="a1" size="8" value="'+($(avbginput[index*2]).val()/$('#totalatotal1').val()*100).toFixed(2)+'%">';

avbghtml+='<input class="a2"  size="8" value="'+($(avbginput[(index*2)+1]).val()/$('#totalatotal2').val()*100).toFixed(2)+'%"></div></div>';

});
	$('#avbg').append(avbghtml);
	//pasivos
	var avbglabel = [];
	$('#erpasivo').find( "label" ).each(function(index, element){
		avbglabel.push(element.innerHTML);
	});
	var avbghtml='';
	var avbgi=0;
	var avbginput = [];
	$('#erpasivo').find( "input" ).each(function(index, element){
		avbginput.push(element);

	});
	$.each(avbglabel,function(index, element){
//totalatotal1
console.log($(avbginput[index*2]).val());
avbghtml+='<div><div class="mitad"><label>'+element+'</label></div><div class="mitad2"><input class="a1" size="8" value="'+($(avbginput[index*2]).val()/$('#totalptotal1').val()*100).toFixed(2)+'%">';

avbghtml+='<input class="a2"  size="8" value="'+($(avbginput[(index*2)+1]).val()/$('#totalptotal2').val()*100).toFixed(2)+'%"></div></div>';

});
	$('#avbg').append(avbghtml);

	//patrimonio
	var avbglabel = [];
	$('#erpatrimonio').find( "label" ).each(function(index, element){
		avbglabel.push(element.innerHTML);
	});
	var avbghtml='';
	var avbgi=0;
	var avbginput = [];
	$('#erpatrimonio').find( "input" ).each(function(index, element){
		avbginput.push(element);

	});
	$.each(avbglabel,function(index, element){
//totalatotal1
var relativa = 0 ;
avbghtml+='<div><div class="mitad"><label>'+element+'</label></div><div class="mitad2"><input class="a1" size="8" value="'+($(avbginput[index*2]).val()/$('#totalpatotal1').val()*100).toFixed(2)+'%">';

avbghtml+='<input class="a2"  size="8" value="'+($(avbginput[(index*2)+1]).val()/$('#totalpatotal2').val()*100).toFixed(2)+'%"></div></div>';

});
	$('#avbg').append(avbghtml);
}
function tipocuentabg(){
	$('#tcuentas').empty();

	var avbglabel = [];
		var avbginput = [];
	$('#balancegeneral').find( "label" ).each(function(index, element){
		avbglabel.push(element);
	});
	
	var avbgi=0;
	$('#balancegeneral').find( "input" ).each(function(index, element){
		avbginput.push(element);

	});
	
	$.each(avbglabel,function(index, element){
var avbghtml='';
		var cuenta = 'Uso';
		if($('#eractivos').has($(element)).length>0){
			console.log(element.innerHTML+ '- ' +$(element).val() + ' - ' + ($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val()).toFixed(2));
			if(($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val()).toFixed(2)<0){
				cuenta = 'Fuente'
			}
		}
		if($('#erpasivo').has($(element)).length>0){
					console.log(element.innerHTML+ '- ' +$(element).val() + ' - ' + ($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val()).toFixed(2));
									if(($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val()).toFixed(2)>0){
				cuenta = 'Fuente'
			}
		}
		if($('#erpatrimonio').has($(element)).length>0){
					console.log(element.innerHTML+ '- ' +$(element).val() + ' - ' + ($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val()).toFixed(2));
							if(($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val()).toFixed(2)>0){
				cuenta = 'Fuente'
			}
		}
		if($('#erppatrimonio').has($(element)).length>0){
					console.log(element.innerHTML+ '- ' +$(element).val() + ' - ' + ($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val()).toFixed(2));
							if(($(avbginput[(index*2)+1]).val()-$(avbginput[index*2]).val()).toFixed(2)>0){
				cuenta = 'Fuente'
			}
		}
		avbghtml+='<div><div class="mitad"><label>'+element.innerHTML+'</label></div><div class="mitad2"><input class="a1" size="8" value="'+cuenta+'">';
		
		avbghtml+='</div></div>';
	$('#tcuentas').append(avbghtml);
	});

}