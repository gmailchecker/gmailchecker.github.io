

let goodEditor = null;
let verEditor = null;
let notExistEditor = null;
let disableEditor = null;
let transactionId = null;
let allResult = {
    ver: [],
    good: [],
    notExist: [],
    disable: [],
};
	var model = 1;
	var nums = 50;	
var mails2 = [];
var key = generateRandomHex()
function generateRandomHex() {

    const randomBytes = crypto.getRandomValues(new Uint8Array(16));


    let hexString = '';
    randomBytes.forEach(byte => {
        hexString += byte.toString(16).padStart(2, '0');
    });

    return hexString;
}
function getCookie(name)
	{
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	 
	    if(arr=document.cookie.match(reg))
	 
	        return unescape(arr[2]);
	    else
	        return null;
	}
(function() {
    let inputEditor = CodeMirror.fromTextArea(document.getElementById("mail_input"), {
		lineNumbers: true
	});
    goodEditor = CodeMirror.fromTextArea(document.getElementById("good_output"), {
		lineNumbers: true
	});
	verEditor = CodeMirror.fromTextArea(document.getElementById("ver_output"), {
		lineNumbers: true
	});
	disableEditor = CodeMirror.fromTextArea(document.getElementById("dis_output"), {
		lineNumbers: true
	});	
	notExistEditor = CodeMirror.fromTextArea(document.getElementById("notfound_output"), {
		lineNumbers: true
	});
inputEditor.focus();		
inputEditor.setValue("example@gmail.com");

	
    $(document).on("click",
        "#recheck_btn",
        function() {
			document.querySelector("#check_btn").style.cssText="pointer-events:visible;opacity:1";
			$(".mode").toggle();
			document.querySelector(".mode").style.cssText="display:flex";
			document.querySelector(".mail_input").style.cssText="width:100;height:100";
			document.querySelector(".good_output").style.cssText="width:0;height:0";
			document.querySelector(".ver_output").style.cssText="width:0;height:0";
			document.querySelector(".dis_output").style.cssText="width:0;height:0";
			document.querySelector(".notfound_output").style.cssText="width:0;height:0";
			document.querySelector(".res_tab_menu").style.cssText="border-color:#604020";
			document.querySelector("#good_res").style.cssText="background:#996633;color:#fff";
			document.querySelector("#ver_res").style.cssText="background:none;color:#cccccc";
			document.querySelector("#dis_res").style.cssText="background:none;color:#cccccc";
			document.querySelector("#notfound_res").style.cssText="background:none;color:#cccccc";
			$("#good_badge").text("");
			$("#ver_badge").text("");
			$("#dis_badge").text("");
			$("#notfound_badge").text("");
			$(".res_tab_menu h3").show();
			$(".res_btn").hide();
			$("#recheck_btn").hide();
			$("#check_btn").show();
			document.querySelector("#mail-progress-bar").style.cssText="width:0!important;transition:2s";
			$("#mail-progress-bar").text("0%")
            inputEditor.setValue("example@gmail.com");
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
        });
	$(document).on("click",
        "#check_btn",
        function() {
			document.querySelector("#mail-progress-bar").style.cssText="width:0!important;transition:2s";
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
        });		
	$(document).on("click",
        "#paste_clip",
        async function paste() {
			const text = await navigator.clipboard.readText();
			inputEditor.setValue(text);
			inputEditor.focus();
			inputEditor.setCursor(inputEditor.lineCount(), 0);			
        });
	$(document).on("click",
        "#copy_clip1",
        async function copy_good() {
			const goodtocopy = goodEditor.getValue()
			navigator.clipboard.writeText(goodtocopy);
        });
	$(document).on("click",
        "#copy_clip2",
        async function copy_ver() {
			const vertocopy = verEditor.getValue()
			navigator.clipboard.writeText(vertocopy);
        });
	$(document).on("click",
        "#copy_clip3",
        async function copy_disable() {
			const disabletocopy = disableEditor.getValue()
			navigator.clipboard.writeText(disabletocopy);
        });
	$(document).on("click",
        "#copy_clip4",
        async function copy_notExist() {
			const notExisttocopy = notExistEditor.getValue()
			navigator.clipboard.writeText(notExisttocopy);
        });
    $(document).on("click",
        "#check_btn",
        function() {
            var mails = inputEditor.getValue().split("\n");
 			var mails1 = inputEditor.getValue().split("\n");
			mails2 = inputEditor.getValue().split("\n");
			if (mails.filter(x => x).length === 0) {
				abp.notify.error(" ❌ Please enter Gmail!");
				return;
			}
			if (mails.filter(x => x).length > 100000) return alert("❌ Max 100000 ");
			transactionId = null;
			$("#mail-progress-bar")[0].style.width = "0%";
			$("#mail-progress-bar")[0].textContent = "0%";
			mails.length = 0;
			let ok = 0;
			for(let i = 0; i < mails1.length; i++){
				let indek = mails1[i].indexOf('@gmail.com')
				if(mails1[i].indexOf('@gmail.com') != '-1'){
					ok++;
				}
			}
			console.log(mails)
			if(ok == 0){
				abp.notify.error(" ⚠️ Wrong Gmail!");
				return;
			}

			$.ajaxSettings.async = true;

            let smallParts = chunk(mails1, nums);
            checkMails(smallParts, mails1.length);
        });
})();



function chunk(arr, number) {
    let result = [];
    let times = arr.length / number;
    for (let i = 0; i < times; i++) {
        result.push(arr.slice(i * number, (i + 1) * number));
    }
    return result;
}

async function sleep(ms) {
    return new Promise(r => setTimeout(() => r(), ms));
}

async function checkMails(smallParts, totalNeedCheck) {
	abp.notify.info(" Checking...");
		goodEditor.setValue("Checking...");	
		verEditor.setValue("Checking...");	
		notExistEditor.setValue("Checking...");	
		disableEditor.setValue("Checking...");
		document.querySelector(".mail_input").style.cssText="width:0%;height:0%";		
		document.querySelector(".good_output").style.cssText="width:100%;height:100%";
		document.querySelector("#good_res").style.cssText="background:#996633;color:#fff";
		$(".res_tab_menu h3").hide();
		$(".res_btn").show();
		document.querySelector("#check_btn").style.cssText="pointer-events:none;opacity:0.3";
		document.querySelector(".res_tab_menu").style.cssText="border-color:#996633;background:#604020";
		$(".mode").toggle();
		$("#good_badge").text(" 0 ");
		$("#ver_badge").text(" 0 ");
		$("#dis_badge").text(" 0 ");
		$("#notfound_badge").text(" 0 ");
		
	
		
    abp.ui.setBusy($("body"));
    let totalChecked = 0;
    for (let i = 0; i < smallParts.length; i++) {
        let mails = smallParts[i];
        let result;
        while (true) {
            result = await requestCheckMails(mails);
            if (result === false) {
                abp.notify.info(" 📡 network error!");
				abp.notify.info(" ⚠️ please check your connection or try to change server...");
                await sleep(2500);
                continue;
            } else {
                break;
            }
        }
        console.log(result);
        if (!result || result.length == 0) {
            abp.ui.clearBusy();
            return;
        }
        report(result);
        totalChecked += result.length;

        result.forEach(email => {
            if (email.status === "live") {
                allResult.good.push(email.email);
            } else if (email.status === "Verify") {
                allResult.ver.push(email.email);
			} else if (email.status === "Disabled") {
                allResult.disable.push(email.email);			
            } else if (email.status === "Unregistered") {
                allResult.notExist.push(email.email);			
            } else if (email.status === "Error") {
                allResult.notExist.push(email.email);
			}
        });


        let percent = Math.floor((totalChecked / totalNeedCheck) * 100);
        $("#mail-progress-bar")[0].style.width = `${percent}%`;
        $("#mail-progress-bar")[0].textContent = `${percent}%`;

        abp.notify.success("✅ " + totalChecked + " Checked ");

        let goodValue = [
            ...allResult.good,
        ];

        goodEditor.setValue(goodValue.join("\n"));
		
		var goodScreen = window.matchMedia("(min-width: 1px)");
		if (goodScreen.matches){
		goodEditor.setCursor(goodEditor.lineCount(), 0);
		}
		
        let verValue = [
            ...allResult.ver,
        ];

        verEditor.setValue(verValue.join("\n"));
		
		var verScreen = window.matchMedia("(min-width: 1px)");
		if (verScreen.matches){
		verEditor.setCursor(verEditor.lineCount(), 0);
		}

		let notExistValue = [
            ...allResult.notExist,
        ];

        notExistEditor.setValue(notExistValue.join("\n"));
		
		var notExistScreen = window.matchMedia("(min-width: 1px)");
		if (notExistScreen.matches){
		notExistEditor.setCursor(notExistEditor.lineCount(), 0);
		}	
		
		let disableValue = [
            ...allResult.disable,
        ];

        disableEditor.setValue(disableValue.join("\n"));
		
		var disableScreen = window.matchMedia("(min-width: 1px)");
		if (disableScreen.matches){
		disableEditor.setCursor(disableEditor.lineCount(), 0);
		}	
		
    }
	$("#check_btn").hide();
	$("#recheck_btn").show();
    abp.ui.clearBusy();
	
	
			
}
function report(mails) {
    if (!mails || mails.length == 0) return;
    let good = mails.filter(email => email.status === "live").length;
    let ver = mails.filter(email => email.status === "Verify").length;
    let dis = mails.filter(email => email.status === "Disabled").length;
    let notExist = mails.filter(email => email.status === "Unregistered").length;
	let notFound = mails.filter(email => email.status === "Error").length;
    increaseReport("#good_badge", good);
    increaseReport("#ver_badge", ver);
    increaseReport("#dis_badge", dis);
    increaseReport("#notfound_badge", notExist);
	increaseReport("#notfound_badge", notFound);
}

function increaseReport(id, number) {
    try {
        if (number <= 0 || isNaN(number)) return;
        let ele = $(id);
        if (!ele || ele.length == 0) return;
        let currentValue = Number(ele.text());
        if (isNaN(currentValue)) ele.text(number);
        ele.text(currentValue + number);
    } catch (error) {
        console.log(error);
    }
}

async function requestCheckMails(mails) {
	return new Promise(async (r) => {
		let attempt = 0;
		const maxAttempts = 5; 

		let fastCheck = ''
		if (model == 1) {
			fastCheck = false;
		} else if (model == 3) {
			fastCheck = true;
		}
		let data = {
			mail: mails,
			key: key,
			fastCheck: fastCheck
		};

		const self = this;

		while (attempt < maxAttempts) {
			try {
				attempt++;
				var res;
				if (model == 1 || model == 3) {
					res = await axios.post('https://gmailver.com/php/check1.php', data);
				} else {
					res = await axios.post('https://gmailver.com/php/check2.php', data);
				}

				const responseData = res.data;
				if (!responseData.status) {
					abp.notify.warn("");
					return r(false);
				}
				const result = res.data.data;
				const transactionId = result.transactionId;

				return r(result);
			} catch (error) {

				console.error('Request failed, retrying...', error);

				if (attempt >= maxAttempts) {

					return r(false);
				}
			}
		}
	});
}


function downloadFile(type) {
    if (!type) return;
    let mails = [];
    let mailsq = [];

    for (let i = 0; i < allResult[type].length; i++) {
        mailsq[i] = allResult[type][i].slice(type.length + 1);
        let one = mails2.filter(function (t) {
            return t.search(mailsq[i]) > -1;
        });
        mails.push(one);
    }

    if (!mails || mails.length === 0) return;

    let currentTime = new Date();
    let fileName = `${type}_${currentTime.toLocaleDateString()}_${currentTime.toLocaleTimeString()}.txt`;


    let decodedMails = mails.map(function (mailArray) {
        return mailArray.map(function (mail) {
            try {
                return decodeURIComponent(mail);
            } catch (e) {
                console.error(`Error decoding: ${mail}`);
                return mail;
            }
        });
    });

    let csvContent = "data:text;charset=utf-8," + decodedMails.join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
	abp.notify.warn(" Preparing download file...");
}

function getCookie(cookieName) {
			    var name = cookieName + "=";
			    var decodedCookie = decodeURIComponent(document.cookie);
			    var cookieArray = decodedCookie.split(';');
			    for (var i = 0; i < cookieArray.length; i++) {
			        var cookie = cookieArray[i];
			        while (cookie.charAt(0) == ' ') {
			            cookie = cookie.substring(1);
			        }
			        if (cookie.indexOf(name) == 0) {
			            return cookie.substring(name.length, cookie.length);
			        }
			    }
			    return "";
			}