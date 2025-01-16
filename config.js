	$( ".header" ).append( $( "<p class='server_info1'>SERVER : 1</>" ) );
	$( ".header" ).append( $( "<p class='server_info2'>SERVER : 2</>" ) );
	$(".server_info2").hide();
	$(".turbo_on").hide();
	var model = 1;
	var nums = 100;	
	$(document).on("click",
        "#turbo-btn",
        function() {
			$(".turbo_off").toggle();
			$(".turbo_on").toggle();
			$("#mailoutput2").toggle();
			$("#mailoutput4").toggle();
			$(".h3_disabled").toggle();
			$(".h3_trash").toggle();
			$("#mailoutput3 .download_item").toggle();
			$("#downres_ver").toggle();
			$("#downres_notfound").toggle();
			$(".downres_disabled").toggle();
			$(".downres_trash").toggle();
			$(".turbo_active").toggle();
			$(".turbo_nonactive").toggle();
			$("#turbo_indi").toggle();
			$(".snow_image").toggle();
			$(".lightning").toggle();
			$(".lightning1").toggle();
			$(".lightning2").toggle();
			$(".announcement").toggle();
			document.querySelector('#turbo_audio').play();	
			document.querySelector("#mail-progress-bar").style.cssText="width:0!important;transition:2s";
			$("#rp-good").text(" - ");
			$("#rp-ver").text(" - ");
			$("#rp-disabled").text(" - ");
			$("#rp-notfound").text(" - ");
			$("#good_res").text("");
			$("#ver_res").text("");
			$("#dis_res").text("");
			$("#notfound_res").text("");
			$(".res_bad").css("opacity", "0");			
			goodEditor.setValue("");
			verEditor.setValue("");
			notExistEditor.setValue("");
			disableEditor.setValue("");
			allResult = {
				ver: [],
				good: [],
				notExist: [],
				disable: [],
			};
			mails2 = [];
			if (model === "3") {
			  model = "1";
			} else {
			  model = "3";
			}

        });
		
	$(document).on("click",
        "#server1",
        function() {
			document.querySelector(".turbo_btn").style.cssText="pointer-events:visible;filter: grayscale(0);z-index:999";
			$(".turbo_off").show();
			$(".turbo_on").hide();
			$("#active_server1").show();	
			$("#active_server2").hide();
			$(".server_info1").show();
			$(".server_info2").hide();			
			$("#mailoutput2").show();
			$("#mailoutput4").show();
			$(".h3_disabled").show();
			$(".h3_trash").hide();
			$("#mailoutput3 .download_item").show();
			$("#downres_ver").show();
			$("#downres_notfound").show();
			$(".downres_disabled").show();
			$(".downres_trash").hide();
			$(".turbo_active").hide();
			$(".turbo_nonactive").show();
			$("#turbo_indi").hide();
			$(".snow_image").hide();
			$(".lightning").show();
			$(".lightning1").show();
			$(".lightning2").hide();
			$(".announcement").show();
			document.querySelector('#mode_audio').play();	
			document.querySelector(".turbo_btn").classList.remove("turbo_btn_active");
			document.querySelector("#server1").style.cssText="color:#00cc99";
			document.querySelector("#server2").style.cssText="color:#fff";
			document.querySelector("#mail-progress-bar").style.cssText="width:0!important;transition:2s";
			$("#rp-good").text(" - ");
			$("#rp-ver").text(" - ");
			$("#rp-disabled").text(" - ");
			$("#rp-notfound").text(" - ");
			$("#good_res").text("");
			$("#ver_res").text("");
			$("#dis_res").text("");
			$("#notfound_res").text("");
			$(".res_bad").css("opacity", "0");			
			goodEditor.setValue("");
			verEditor.setValue("");
			notExistEditor.setValue("");
			disableEditor.setValue("");
			allResult = {
				ver: [],
				good: [],
				notExist: [],
				disable: [],
			};
			mails2 = [];
			model = 1;
			nums = 100;
        });

	$(document).on("click",
        "#server2",
        function() {
			document.querySelector(".turbo_btn").style.cssText="pointer-events:none;filter: grayscale(1);z-index:999";
			$(".turbo_off").show();
			$(".turbo_on").hide();
			$("#active_server1").hide();
			$("#active_server2").show();
			$(".server_info1").hide();
			$(".server_info2").show();				
			$("#mailoutput2").show();
			$("#mailoutput4").show();
			$(".h3_disabled").show();
			$(".h3_trash").hide();
			$("#mailoutput3 .download_item").show();
			$("#downres_ver").show();
			$("#downres_notfound").show();
			$(".downres_disabled").show();
			$(".downres_trash").hide();
			$(".turbo_active").hide();
			$(".turbo_nonactive").show();
			$("#turbo_indi").hide();
			$(".snow_image").hide();
			$(".lightning").show();
			$(".lightning1").show();			
			$(".lightning2").hide();
			$(".announcement").show();
			document.querySelector('#mode_audio').play();	
			document.querySelector(".turbo_btn").classList.remove("turbo_btn_active");
			document.querySelector("#server1").style.cssText="color:#fff";
			document.querySelector("#server2").style.cssText="color:#00cc99";			
			document.querySelector("#mail-progress-bar").style.cssText="width:0!important;transition:2s";
			$("#rp-good").text(" - ");
			$("#rp-ver").text(" - ");
			$("#rp-disabled").text(" - ");
			$("#rp-notfound").text(" - ");
			$("#good_res").text("");
			$("#ver_res").text("");
			$("#dis_res").text("");
			$("#notfound_res").text("");
			$(".res_bad").css("opacity", "0");			
			goodEditor.setValue("");
			verEditor.setValue("");
			notExistEditor.setValue("");
			disableEditor.setValue("");
			allResult = {
				ver: [],
				good: [],
				notExist: [],
				disable: [],
			};
			mails2 = [];
			model = 2;
			nums = 999;			
        });	


		$(".verify_on").hide();	
		$(".reset_on").hide();
		$(".reset_hover").hide();
		
	var btnhoverscreen = window.matchMedia("(min-width: 1025px)");
		if (btnhoverscreen.matches){

		$("#check-btn").hover(function(){
			$(".verify_on").toggle();
			$(".verify_off").toggle();
		});
		
		$("#clear-editor").hover(function(){
			$(".reset_hover").toggle();
			$(".reset_off").toggle();
		});
		}	
