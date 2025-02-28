

let liveResult = null;
let verResult = null;
let notExistResult = null;
let disabledResult = null;
let mailResult = null;
let transactionId = null;

var desktopScreen = window.matchMedia("(min-width: 1024px)");
var mobileScreen = window.matchMedia("(max-width: 1023px)"); 

 // LAMP INDICATOR
     
     //Warna lampu
    const colors = ["red", "yellow", "green", "blue", "orange", "purple"];
    const lamps = document.querySelectorAll(".lamp");
    const buttonX = document.getElementById("buttonX");
    const buttonY = document.getElementById("buttonY");

    let currentLamp = 0;
    let intervalId = null;

    // Fungsi untuk menyalakan lampu
    function startLamps() {
      if (!intervalId) {
        intervalId = setInterval(() => {
          // Matikan semua lampu
          lamps.forEach((lamp) => {
            lamp.style.backgroundColor = "gray";
          });

          // Nyalakan lampu saat ini
          lamps[currentLamp].style.backgroundColor = colors[currentLamp];

          // Pindah ke lampu berikutnya
          currentLamp = (currentLamp + 1) % lamps.length;
        }, 200); // Interval 500ms
      }
    }

    // Fungsi untuk mematikan lampu
    function stopLamps() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;

        // Matikan semua lampu
        lamps.forEach((lamp) => {
          lamp.style.backgroundColor = "gray";
        });
      }
    }



let allResult = {
    ver: [],
    good: [],
    notExist: [],
    disable: [],
};
var mails2 = [];
var model = 2;
var nums = 100;
var key = generateRandomHex()
function generateRandomHex() {

    const randomBytes = crypto.getRandomValues(new Uint8Array(16));


    let hexString = '';
    randomBytes.forEach(byte => {
        hexString += byte.toString(16).padStart(2, '0');
    });

    return hexString;
}


    (function() {
      mailInput = CodeMirror.fromTextArea(document.getElementById("mailInput-cm"), {
          lineNumbers: false,
          mode: "text",
          lineWrapping: true,
          readOnly: false
      });
      liveResult = CodeMirror.fromTextArea(document.getElementById("live-cm"), {
          lineNumbers: false,
          mode: "text",
          lineWrapping: true,
          readOnly: true
      });
      verResult = CodeMirror.fromTextArea(document.getElementById("ver-cm"), {
          lineNumbers: false,
          mode: "text",
          lineWrapping: true,
          readOnly: true
      });
      disabledResult= CodeMirror.fromTextArea(document.getElementById("disabled-cm"), {
          lineNumbers: false,
          mode: "text",
          lineWrapping: true,
          readOnly: true
      });    
      notExistResult = CodeMirror.fromTextArea(document.getElementById("notExist-cm"), {
          lineNumbers: false,
          mode: "text",
          lineWrapping: true,
          readOnly: true
      });
	  mailResult = CodeMirror.fromTextArea(document.getElementById("mailResult-cm"), {
		lineNumbers: true,
		mode: "javascript"
	});
  
  

  function highlightLines() {
    const doc = mailResult.getDoc();
    const lines = doc.lineCount();
    const keywords = ['LIVE', 'VER', 'DISABLED', 'NOT EXIST', 'TAPAI'];
    const classes = ['live', 'ver', 'disabled', 'notExist', 'tapai'];

    for (let i = 0; i < lines; i++) {
      const lineContent = doc.getLine(i);
      for (let j = 0; j < keywords.length; j++) {
        if (lineContent.includes(keywords[j])) {
          mailResult.addLineClass(i, 'color', classes[j]);
          break;
        }
      }
    }
  }

  // Highlight lines on mailResult initialization
  highlightLines();

  // Re-highlight lines whenever the content changes
  mailResult.on('change', highlightLines);    

       
      mailInput.on('change', function(instance) {
        var value = instance.getValue();
        if (value.trim().length > 0) {
          instance.setOption('lineNumbers', true);
        } else {
          instance.setOption('lineNumbers', false);
        }
      });
      
      liveResult.on('change', function(instance) {
        var value = instance.getValue();
        if (value.trim().length > 0) {
          instance.setOption('lineNumbers', true);
        } else {
          instance.setOption('lineNumbers', false);
        }
      });
      
      verResult.on('change', function(instance) {
        var value = instance.getValue();
        if (value.trim().length > 0) {
          instance.setOption('lineNumbers', true);
        } else {
          instance.setOption('lineNumbers', false);
        }
      });
      
      disabledResult.on('change', function(instance) {
        var value = instance.getValue();
        if (value.trim().length > 0) {
          instance.setOption('lineNumbers', true);
        } else {
          instance.setOption('lineNumbers', false);
        }
      });
      
      notExistResult.on('change', function(instance) {
        var value = instance.getValue();
        if (value.trim().length > 0) {
          instance.setOption('lineNumbers', true);
        } else {
          instance.setOption('lineNumbers', false);
        }
      });    
    

	 var cmWrapper = mailInput.getWrapperElement();
	cmWrapper.setAttribute("data-placeholder", `1   example1@gmail.com
	2   example2@gmail.com
	3   example3@gmail.com
	...`);

	// Tambahkan gaya CSS untuk placeholder
	var style = document.createElement("style");
	style.innerHTML = `
		.CodeMirror-empty::before {
			content: attr(data-placeholder);
			color: #aaa;
			position: absolute;
			pointer-events: none;
			padding: 4px;
		}
	`;
	document.head.appendChild(style);

	// Periksa apakah editor kosong
	mailInput.on("change", function () {
		if (mailInput.getValue().trim() === "") {
			cmWrapper.classList.add("CodeMirror-empty");
		} else {
			cmWrapper.classList.remove("CodeMirror-empty");
		}
	});

	// Inisialisasi status placeholder
	if (mailInput.getValue().trim() === "") {
		cmWrapper.classList.add("CodeMirror-empty");
	}

document.getElementById("file-upload").addEventListener("change", () => {
  const file = document.getElementById("file-upload").files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      mailInput.refresh();
      mailInput.setValue(reader.result);
    };
    reader.readAsText(file);
  }
});

$('#upload-btn').click(() => $('#file-upload').click());
$('#upload-btn').css({position:"absolute",top:"6px",right:"5px"})

const radioServers = document.querySelectorAll('input[name="server"]');

radioServers.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      model = radio.value === 'server1' ? 1 : 2;
      console.log('Server:', model);
    }
  });
});


const fbShare = document.querySelector('.fb-share');
const waShare = document.querySelector('.wa-share');
const igShare = document.querySelector('.ig-share');
const twShare = document.querySelector('.tw-share');

fbShare.addEventListener('click', () => {
  const url = window.location.href;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(shareUrl, '_blank');
});

waShare.addEventListener('click', () => {
  const url = window.location.href;
  const shareUrl = `https://wa.me/?text=${url}`;
  window.open(shareUrl, '_blank');
});

igShare.addEventListener('click', () => {
  const url = window.location.href;
  const shareUrl = `https://www.instagram.com/direct/new/?text=${url}`;
  window.open(shareUrl, '_blank');
});

twShare.addEventListener('click', () => {
  const url = window.location.href;
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
  window.open(shareUrl, '_blank');
});

$('.community-link a').click(function(event) {
  event.preventDefault();
  window.open($(this).attr('href'), '_blank', 'width=600,height=2000');
});


if (mobileScreen.matches) {		

	$(document).on("click",
        "#reset-btn-mob",
        function() {
			document.querySelector("#mail-progress-bar").style.cssText="width:0!important;transition:2s";
			document.querySelector(".mail-result").style.cssText = "z-index:-1";	
			document.querySelector("#mail-input .title-result").style.cssText = "display:none";
			document.querySelector(".mail-input-header").style.cssText = "display:flex";
			document.querySelector(".executor").style.cssText = "display:flex";
			document.querySelector(".server-selection").style.cssText = "display:block";
			document.querySelector(".mobile-panel").style.cssText = "display: none";			
			
			mailResult.setValue("");
            mailInput.setValue("");
			liveResult.setValue("");
			verResult.setValue("");
			disabledResult.setValue("");
			notExistResult.setValue("");
			allResult = {
				ver: [],
				good: [],
				notExist: [],
				disable: [],
			};
			mails2 = [];
        });			
	}			
			
    $(document).on("click",
        "#reset-btn",
        function() {
			document.querySelector("#mail-progress-bar").style.cssText="width:0!important;transition:2s";
            mailInput.setValue("");
			liveResult.setValue("");
			verResult.setValue("");
			disabledResult.setValue("");
			notExistResult.setValue("");
			allResult = {
				ver: [],
				good: [],
				notExist: [],
				disable: [],
			};
			mails2 = [];
        });
	$(document).on("click",
        "#run-btn",
        function() {		
			liveResult.setValue("");
			verResult.setValue("");
			notExistResult.setValue("");
			disabledResult.setValue("");
			allResult = {
				ver: [],
				good: [],
				notExist: [],
				disable: [],
			};
			mails2 = [];			
        });

	$(document).on("click",
        "#copy-live",
        async function copy_good() {
			const goodtocopy = liveResult.getValue()
			navigator.clipboard.writeText(goodtocopy);
        });
	$(document).on("click",
        "#copy-ver",
        async function copy_ver() {
			const vertocopy = verResult.getValue()
			navigator.clipboard.writeText(vertocopy);
        });
	$(document).on("click",
        "#copy-disabled",
        async function copy_disable() {
			const disabletocopy = disabledResult.getValue()
			navigator.clipboard.writeText(disabletocopy);
        });
	$(document).on("click",
        "#copy-notExist",
        async function copy_notExist() {
			const notExisttocopy = notExistResult.getValue()
			navigator.clipboard.writeText(notExisttocopy);
        });
   $(document).on("click",
        "#run-btn",
        function() {
            var mails = mailInput.getValue().split("\n");
 			var mails1 = mailInput.getValue().split("\n");
			mails2 = mailInput.getValue().split("\n");
			if (mails.filter(x => x).length === 0) {
				infoNotify(" ❌ Please enter an email!");
				return;
			}
			const validKey = getCookie("validKey");
			if (validKey) {
				if (mails.filter(x => x).length > 100000) return alert("❌ Not allowed! Max 100000 mails/check");
				nums = 100;
			} else {

				if (mails.filter(x => x).length > 50) {
					infoNotify("Activate now to get unlimited access!");
					warnNotify("❌ Not allowed! Max 50 mails/check in trial mode");
					return;
				}
				nums = 10;
			}
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
			if(ok == 0){
				warnNotify(" ⚠️ No email detected. Please ensure the email you entered is a Gmail address");
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

let lastMouseMoveTime = 0;
let isStandby = false;
let hasCheckedMails = false; 

setInterval(() => {
  const currentTime = new Date().getTime();
  const idleTime = (currentTime - lastMouseMoveTime) / 1000; // dalam detik
  if (idleTime > 10 && !isStandby) { 
    document.querySelector("#standby-msg").style.cssText='z-index:4';
    document.querySelector("#ready-msg").style.cssText='z-index:3';
    document.getElementById('standby-msg').textContent = 'STANDBY';
    document.getElementById('ready-msg').textContent = '';
    isStandby = true;
  }
}, 120000);

document.addEventListener('mousemove', () => {
    lastMouseMoveTime = new Date().getTime();
    if (isStandby) {
        document.querySelector("#standby-msg").style.cssText = 'z-index:3';
        document.querySelector("#ready-msg").style.cssText = 'z-index:4';

        // Perbarui pesan berdasarkan status hasCheckedMails
        if (hasCheckedMails) {
            document.getElementById('ready-msg').textContent = 'Start check again?';
        } else {
            document.getElementById('ready-msg').textContent = 'Are you ready?';
        }

        document.getElementById('standby-msg').textContent = '';
        isStandby = false;
    }
});

async function getUIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip; 
    } catch (error) {
        return null;
    }
}

// Fungsi utama untuk memeriksa email
async function checkMails(smallParts, totalNeedCheck) {
    const UIP = await getUIP();
    if (!UIP) {
        alert("Error");
        return;
    }

    const CIP = `checkCount_${UIP}`;
    let checkCount = getCookie(CIP);
    if (checkCount === null) {
        checkCount = 0;
    }
    checkCount = parseInt(checkCount) + 1;

    setCookie(CIP, checkCount, 12);

    console.log(`IP: ${UIP}, Jumlah Check: ${checkCount}`);

    const validKey = getCookie("validKey");
    if (validKey) {
        hasCheckedMails = true;
        checkMailsProcess(smallParts, totalNeedCheck);
        return;
    }

    if (checkCount > 10) {
        alert("Daily limit exceeded. Come back tomorrow. Join our community to get a free key!");
        return;
    }
    
    hasCheckedMails = true;
    checkMailsProcess(smallParts, totalNeedCheck);
}

let abortController = null;

async function checkMailsProcess(smallParts, totalNeedCheck) {

    abortController = new AbortController(); // <-- Buat controller baru
    const signal = abortController.signal;

    try {
        // Update tampilan UI
        document.querySelector("#run").style.cssText = "z-index:1";
        document.querySelector("#stby").style.cssText = "z-index:0";
        document.querySelector(".totalRes-counter").style.cssText = "z-index:5";
        document.querySelector(".res-counter").style.cssText = "z-index:5";
		document.querySelector("#standby-msg").style.cssText = "z-index:0";
		document.querySelector("#ready-msg").style.cssText = "z-index:0";
		document.querySelector("#run-btn").style.cssText = "pointer-events:none";
		document.querySelector("#reset-btn").style.cssText = "pointer-events:none";
		document.querySelector("#greeting-msg").style.cssText = "z-index:0";
		if (mobileScreen.matches) {
			document.querySelector(".mail-result").style.cssText = "z-index:2";	
			document.querySelector("#mail-input .title-result").style.cssText = "display:block";
			document.querySelector(".mail-input-header").style.cssText = "display:none";
		}		

        // Mulai animasi lampu
        startLamps();

        // Reset counter
        $("#live-count").text(" 0 ");
        $("#ver-count").text(" 0 ");
        $("#disabled-count").text(" 0 ");
        $("#notExist-count").text(" 0 ");
        $("#total-count").text(" 0 ");

        let totalChecked = 0;

        // Loop untuk memproses setiap bagian email
        for (let i = 0; i < smallParts.length; i++) {
            // Cek apakah proses di-abort
            if (signal.aborted) {
                console.log("Proses diinterupsi!");
                break;
            }
            let mails = smallParts[i];
            let result;

            // Loop untuk memeriksa hasil request
            while (true) {if (signal.aborted) {
                console.log("Proses diinterupsi selama request!");
                break;
            }
						
                try {
                    result = await requestCheckMails(mails);
                    if (result === false) {
                        if (model == 1) {
                            model = 2;
                            warnNotify("Slow network detected");
                        } else if (model == 2) {
                            model = 1;
                            warnNotify("Slow network detected");
                        } else if (model == 3) {
                            await sleep(5000);
                            warnNotify("Slow network detected");
                            break;
                        }
                        await sleep(1000);
                        continue;
                    } else {
                        break;
                    }
                } catch (error) {
                    console.error("Error in requestCheckMails:", error);
                    warnNotify("Error occurred while checking mails. Retrying...");
                    await sleep(1000);
                    continue;
                }
            }

            // Jika hasil kosong, hentikan proses
            if (!result || result.length == 0) {
                console.warn("No result returned from requestCheckMails.");
                return;
            }

            // Proses hasil
            report(result);
            totalChecked += result.length;

        if (desktopScreen.matches) {
          result.forEach(email => {
            if (email.status === "live") {
              allResult.good.push(email.email);
              liveNotify(email.email + " (LIVE) ");
            } else if (email.status === "Verify") {
              allResult.ver.push(email.email);
              verNotify(email.email + " (VER) ");
            } else if (email.status === "Disabled") {
              allResult.disable.push(email.email);
              disabledNotify(email.email + " (DISABLED) ");
            } else if (email.status === "Unregistered") {
              allResult.notExist.push(email.email);
              notExistNotify(email.email + " (NOT EXIST) ");
            } else if (email.status === "Error") {
              allResult.notExist.push(email.email);
              notExistNotify(email.email + " (NOT EXIST) ");
            }
          });

          // Update progress bar
          let percent = Math.floor((totalChecked / totalNeedCheck) * 100);
          $("#mail-progress-bar")[0].style.width = `${percent}%`;
          $("#mail-progress-bar")[0].textContent = `${percent}%`;
          $("#total-count").text(totalChecked);

          // Update hasil di editor
          let goodValue = [...allResult.good];
          liveResult.setValue(goodValue.join("\n"));
          liveResult.setCursor(liveResult.lineCount(), 0);

          let verValue = [...allResult.ver];
          verResult.setValue(verValue.join("\n"));
          verResult.setCursor(verResult.lineCount(), 0);

          let notExistValue = [...allResult.notExist];
          notExistResult.setValue(notExistValue.join("\n"));
          notExistResult.setCursor(notExistResult.lineCount(), 0);

          let disableValue = [...allResult.disable];
          disabledResult.setValue(disableValue.join("\n"));
          disabledResult.setCursor(disabledResult.lineCount(), 0);

        } else if (mobileScreen.matches) {
          result.forEach(email => {
            if (email.status === "live") {
              allResult.good.push(email.email + ' |LIVE');
            } else if (email.status === "Verify") {
              allResult.ver.push(email.email + ' | VER');
            } else if (email.status === "Disabled") {
              allResult.disable.push(email.email + ' |DISABLED');
            } else if (email.status === "Unregistered") {
              allResult.notExist.push(email.email + ' |NOT EXIST');
            } else if (email.status === "Error") {
              allResult.notExist.push(email.email + ' |NOT EXIST');
            }
          });
		  
          // Update progress bar
          let percent = Math.floor((totalChecked / totalNeedCheck) * 100);
          $("#mail-progress-bar")[0].style.width = `${percent}%`;
          $("#mail-progress-bar")[0].textContent = `${percent}%`;
          $("#total-count").text(totalChecked);

          // Update hasil di editor
          let allres = [
            ...allResult.good,
            ...allResult.ver,
            ...allResult.notExist,
            ...allResult.disable
          ];
          mailResult.setValue(allres.join("\n"));
          mailResult.setCursor(mailResult.lineCount(), 0);
		  
          let goodValue = [...allResult.good];
          liveResult.setValue(goodValue.join("\n"));

          let verValue = [...allResult.ver];
          verResult.setValue(verValue.join("\n"));

          let notExistValue = [...allResult.notExist];
          notExistResult.setValue(notExistValue.join("\n"));

          let disableValue = [...allResult.disable];
          disabledResult.setValue(disableValue.join("\n"));	  
 
        }
     }

        // Selesai memproses
        console.log("Proses pengecekan selesai.");
    } catch (error) {
        console.error("Error in checkMailsProcess:", error);
        warnNotify("An unexpected error occurred. Please try again.");
    } finally {
        // Reset UI dan state
        document.querySelector("#run").style.cssText = "z-index:0";
        document.querySelector("#stby").style.cssText = "z-index:1";
		document.querySelector("#run-btn").style.cssText = "pointer-events:auto";
		document.querySelector("#reset-btn").style.cssText = "pointer-events:auto";
		document.querySelector(".totalRes-counter").style.cssText = "z-index:0";
        document.querySelector(".res-counter").style.cssText = "z-index:0";
		if (mobileScreen.matches) {	
		document.querySelector(".mobile-panel").style.cssText = "display: flex";		
		document.querySelector(".executor").style.cssText = "display:none";
		document.querySelector(".server-selection").style.cssText = "display:none";
		
		}
        stopLamps();
        abortController = null;
    }
}

function report(mails) {
    if (!mails || mails.length == 0) return;
    let good = mails.filter(email => email.status === "live").length;
    let ver = mails.filter(email => email.status === "Verify").length;
    let dis = mails.filter(email => email.status === "Disabled").length;
    let notExist = mails.filter(email => email.status === "Unregistered").length;
	let notFound = mails.filter(email => email.status === "Error").length;
    increaseReport("#live-count", good);
    increaseReport("#ver-count", ver);
    increaseReport("#disabled-count", dis);
    increaseReport("#notExist-count", notExist);
	increaseReport("#notExist-count", notFound);
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
    }
}


async function requestCheckMails(mails, options = {}) {
    return new Promise(async (resolve, reject) => {
        const { signal } = options;
        let attempt = 0;
        const maxAttempts = 5;

        // Cek jika proses sudah di-abort sebelum memulai
        if(signal?.aborted) {
            return reject(new DOMException('Aborted', 'AbortError'));
        }

        let fastCheck = '';
        if(model == 1) fastCheck = false;
        else if(model == 3) fastCheck = true;

        const data = {
            mail: mails,
            key: key,
            fastCheck: fastCheck
        };

        while(attempt < maxAttempts) {
            try {
                // Cek abort sebelum setiap percobaan
                if(signal?.aborted) {
                    throw new DOMException('Aborted', 'AbortError');
                }

                attempt++;
                
                let res;
                const axiosConfig = {};
                
                // Terapkan signal ke konfigurasi axios
                if(signal) {
                    axiosConfig.signal = signal; // Untuk axios >= 0.22.0
                }

                if(model == 1 || model == 3) {
                    res = await axios.post('https://gmailver.com/php/check1.php', data, axiosConfig);
                } else {
                    res = await axios.post('https://gmailver.com/php/check2.php', data, axiosConfig);
                }

                if(!res.data.status) {
                    warnNotify("");
                    return resolve(false);
                }

                return resolve(res.data.data);
                
            } catch(error) {
                // Handle abort error
                if(error.name === 'AbortError') {
                    return reject(error);
                }
                
                // Handle error lainnya
                if(attempt >= maxAttempts) {
                    return resolve(false);
                }
            }
        }
    });
}

document.getElementById('stop-btn').addEventListener('click', () => {
    if(abortController) {
        abortController.abort();
		alert("Check email process was interrupted!");
    }
});


if (mobileScreen.matches) {
	const radioButtons = document.querySelectorAll('input[name="save-option"]');

	radioButtons.forEach(button => {
	  button.addEventListener('change', () => {
		const selectedValue = button.value;
		const contentDivs = document.querySelectorAll('#live-save, #ver-save, #disabled-save');

		contentDivs.forEach(div => {
		  if (div.id === selectedValue) {
			div.style.display = 'flex';
		  } else {
			div.style.display = 'none';
		  }
		});
	  });
	});
}




document.getElementById("save-live").onclick = function () {
var textcontent = liveResult.getValue();
var downloadableLink = document.createElement('a');
const date = new Date();
 const formattedDate = date.toLocaleDateString() + "-" +date.toLocaleTimeString();
downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
downloadableLink.download = "live-Blue-Gmail-Checker-" + formattedDate + ".txt";
document.body.appendChild(downloadableLink);
downloadableLink.click();
document.body.removeChild(downloadableLink);
};

document.getElementById("save-ver").onclick = function () {
var textcontent = verResult.getValue();
var downloadableLink = document.createElement('a');
const date = new Date();
 const formattedDate = date.toLocaleDateString() + "-" +date.toLocaleTimeString();
downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
downloadableLink.download = "ver-Blue-Gmail-Checker-" + formattedDate + ".txt";
document.body.appendChild(downloadableLink);
downloadableLink.click();
document.body.removeChild(downloadableLink);
};

document.getElementById("save-disabled").onclick = function () {
var textcontent = disabledResult.getValue();
var downloadableLink = document.createElement('a');
const date = new Date();
 const formattedDate = date.toLocaleDateString() + "-" +date.toLocaleTimeString();
downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
downloadableLink.download = "DISABLED-Blue-Gmail-Checker-" + formattedDate + ".txt";
document.body.appendChild(downloadableLink);
downloadableLink.click();
document.body.removeChild(downloadableLink);
};

document.getElementById("save-notExist").onclick = function () {
var textcontent = notExistResult.getValue();
var downloadableLink = document.createElement('a');
const date = new Date();
 const formattedDate = date.toLocaleDateString() + "-" +date.toLocaleTimeString();
downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
downloadableLink.download = "notExist-Blue-Gmail-Checker-" + formattedDate + ".txt";
document.body.appendChild(downloadableLink);
downloadableLink.click();
document.body.removeChild(downloadableLink);
};



document.getElementById("save-live-mob").onclick = function () {
    // Ambil konten dari liveResult
    var textcontent = liveResult.getValue();

    // Hapus kata-kata yang mengandung |LIVE, |VER, |DISABLED, dan |NOT EXIST
    textcontent = textcontent.replace(/\|LIVE/g, '') // Hapus |LIVE
                             .replace(/\|VER/g, '')  // Hapus |VER
                             .replace(/\|DISABLED/g, '') // Hapus |DISABLED
                             .replace(/\|NOT EXIST/g, ''); // Hapus |NOT EXIST

    // Buat elemen <a> untuk download
    var downloadableLink = document.createElement('a');

    // Dapatkan tanggal dan waktu saat ini
    const date = new Date();
    const formattedDate = date.toLocaleDateString() + "-" + date.toLocaleTimeString();

    // Set atribut href dengan konten yang sudah diolah
    downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));

    // Set nama file untuk download
    downloadableLink.download = "live-Blue-Gmail-Checker-" + formattedDate + ".txt";

    // Tambahkan elemen <a> ke body
    document.body.appendChild(downloadableLink);

    // Klik elemen <a> untuk memulai download
    downloadableLink.click();

    // Hapus elemen <a> setelah download selesai
    document.body.removeChild(downloadableLink);
};

document.getElementById("save-ver-mob").onclick = function () {
    var textcontent = liveResult.getValue();
    textcontent = textcontent.replace(/\|LIVE/g, '') 
                             .replace(/\|VER/g, '')  
                             .replace(/\|DISABLED/g, '') 
                             .replace(/\|NOT EXIST/g, ''); 
    var downloadableLink = document.createElement('a');
    const date = new Date();
    const formattedDate = date.toLocaleDateString() + "-" + date.toLocaleTimeString();
    downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
    downloadableLink.download = "ver-Blue-Gmail-Checker-" + formattedDate + ".txt";
    document.body.appendChild(downloadableLink);
    downloadableLink.click();
    document.body.removeChild(downloadableLink);
};

document.getElementById("save-disabled-mob").onclick = function () {
    var textcontent = liveResult.getValue();
    textcontent = textcontent.replace(/\|LIVE/g, '') 
                             .replace(/\|VER/g, '')  
                             .replace(/\|DISABLED/g, '') 
                             .replace(/\|NOT EXIST/g, ''); 
    var downloadableLink = document.createElement('a');
    const date = new Date();
    const formattedDate = date.toLocaleDateString() + "-" + date.toLocaleTimeString();
    downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
    downloadableLink.download = "disabled-Blue-Gmail-Checker-" + formattedDate + ".txt";
    document.body.appendChild(downloadableLink);
    downloadableLink.click();
    document.body.removeChild(downloadableLink);
};
		
$(document).on("click", "#copy-live-mob", async function () {
    const goodtocopy = liveResult.getValue();
    const cleanedText = goodtocopy
        .replace(/\|LIVE/g, '') 
        .replace(/\|VER/g, '')  
        .replace(/\|DISABLED/g, '') 
        .replace(/\|NOT EXIST/g, ''); 


    await navigator.clipboard.writeText(cleanedText);
});	

$(document).on("click", "#copy-ver-mob", async function () {
    const goodtocopy = liveResult.getValue();
    const cleanedText = goodtocopy
        .replace(/\|LIVE/g, '') 
        .replace(/\|VER/g, '')  
        .replace(/\|DISABLED/g, '') 
        .replace(/\|NOT EXIST/g, ''); 


    await navigator.clipboard.writeText(cleanedText);
});	

$(document).on("click", "#copy-disabled-mob", async function () {
    const goodtocopy = liveResult.getValue();
    const cleanedText = goodtocopy
        .replace(/\|LIVE/g, '') 
        .replace(/\|VER/g, '')  
        .replace(/\|DISABLED/g, '') 
        .replace(/\|NOT EXIST/g, ''); 


    await navigator.clipboard.writeText(cleanedText);
});		



    if (window.location.href.indexOf("mbahbabat.github.io") > -1 || 
        window.location.href.indexOf("gmailchecker.github.io") > -1) {
    } else {
        window.location.href = "mbahbabat.github.io/Copyright-strike";
    }

//SYSTEM

// Fungsi untuk membuat notifikasi
function createSystemNotification(message, customClass = "") {
  const NotificationContainer = document.getElementById("System-Notification-container");

  // Membuat elemen notifikasi
  const SystemNotification = document.createElement("div");
  SystemNotification.className = `SystemNotification${customClass ? ` ${customClass}` : ""}`;
  SystemNotification.innerHTML = `
    <span>${message}</span>
    <button class="close-btn" onclick="removeSystemNotification(this.parentElement)">×</button>
  `;

  NotificationContainer.appendChild(SystemNotification);

  // Trigger animation
  setTimeout(() => SystemNotification.classList.add("show"), 10);

  // Auto-remove setelah 3 detik
  setTimeout(() => removeSystemNotification(SystemNotification), 3000);
}

// Fungsi untuk menghapus notifikasi
function removeSystemNotification(SystemNotification) {
  if (!SystemNotification) return;

  SystemNotification.classList.add("exit"); // Tambahkan animasi keluar

  setTimeout(() => {
    const NotificationContainer = document.getElementById("System-Notification-container");
    SystemNotification.remove();

    // Hapus NotificationContainer jika tidak ada notifikasi lagi
    if (NotificationContainer && NotificationContainer.children.length === 0) {
      NotificationContainer.remove();
    }
  }, 1000); // Sesuaikan dengan durasi transisi
}

// Queue system
const SystemNotificationQueue = [];
let isProcessQueue = false;

function processingQueue() {
  if (isProcessQueue || SystemNotificationQueue.length === 0) return;

  isProcessQueue = true;
  const { message, customClass } = SystemNotificationQueue.shift();
  
  // Pastikan NotificationContainer ada
  if (!document.getElementById("System-Notification-container")) {
    const NotificationContainer = document.createElement("div");
    NotificationContainer.id = "System-Notification-container";
    document.querySelector("#system-msg").appendChild(NotificationContainer); // Pasang di root document
  }
  
  createSystemNotification(message, customClass);

  setTimeout(() => {
    isProcessQueue = false;
    processingQueue();
  }, 0); // Jarak antar notifikasi
}

function addNewNotification(message, customClass = "") {
  SystemNotificationQueue.push({ message, customClass });
  processingQueue();
}





function successNotify(message) {
  addNewNotification(message, "green");
}

function warnNotify(message) {
  addNewNotification(message, "yellow");
}

function dangerNotify(message) {
  addNewNotification(message, "red");
}
function infoNotify(message) {
  addNewNotification(message, "blue");
}





// Style CSS
const Notifstyle = document.createElement('style');
Notifstyle.textContent = `
#System-Notification-container {
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
  display: flex;
  z-index: 1000;
  transition: transform 0.3s ease-in-out; /* Animasi tambahan */
  flex-direction: column-reverse; /* Membalikkan urutan */
  justify-content: flex-end;

}

.systemNotification {
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  font-weight: bold;
  opacity: 0; /* Mulai dengan transparan */
  transform: translateY(-5px); /* Mulai dari atas */
  animation: slideDown 0.3s ease-out forwards; /* Animasi turun */
  padding: 1px 3px;
  font-family: 'Open Sans', sans-serif;
}

@keyframes slideDown {
  to {
    opacity: 1;
    transform: translateY(0); /* Berakhir di posisi normal */
  }
}

.systemNotification.show {
  opacity: 1;
}

.systemNotification.exit {
  transform: translateY(-5px); /* Naik ke atas */
  opacity: 0; /* Menghilang */
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: none;
  place-items: center;
  margin-left: 8px;
  flex-shrink: 0;
}

.systemNotification.yellow {
  color: #ffcc00;
}

.systemNotification.blue {
  color: #0099cc;
}

.systemNotification.red {
  color: #ff6666;
}

.systemNotification.green {
  color: #00cc99;
}


`;



document.head.appendChild(Notifstyle);







//MAIL



// Fungsi untuk membuat notifikasi
function createNotification(message, customClass = "") {
  const container = document.getElementById("notification-container");

  // Membuat elemen notifikasi
  const notification = document.createElement("div");
  notification.className = `notification${customClass ? ` ${customClass}` : ""}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button class="close-btn" onclick="removeNotification(this.parentElement)">×</button>
  `;

  container.appendChild(notification);

  // Trigger animation
  setTimeout(() => notification.classList.add("show"), 10);

  // Auto-remove setelah 3 detik
  setTimeout(() => removeNotification(notification), 3000);
}

// Fungsi untuk menghapus notifikasi
function removeNotification(notification) {
  if (!notification) return;

  notification.classList.add("exit"); // Tambahkan animasi keluar

  setTimeout(() => {
    const container = document.getElementById("notification-container");
    notification.remove();

    // Hapus container jika tidak ada notifikasi lagi
    if (container && container.children.length === 0) {
      container.remove();
    }
  }, 1000); // Sesuaikan dengan durasi transisi
}

// Queue system
const notificationQueue = [];
let isProcessingQueue = false;

function processQueue() {
  if (isProcessingQueue || notificationQueue.length === 0) return;

  isProcessingQueue = true;
  const { message, customClass } = notificationQueue.shift();
  
  // Pastikan container ada
  if (!document.getElementById("notification-container")) {
    const container = document.createElement("div");
    container.id = "notification-container";
    document.querySelector(".animation-list").appendChild(container); // Pasang di root document
  }
  
  createNotification(message, customClass);

  setTimeout(() => {
    isProcessingQueue = false;
    processQueue();
  }, 0); // Jarak antar notifikasi
}

function addNotificationToQueue(message, customClass = "") {
  notificationQueue.push({ message, customClass });
  processQueue();
}





function liveNotify(message) {
  addNotificationToQueue(message, "green");
}

function verNotify(message) {
  addNotificationToQueue(message, "yellow");
}

function disabledNotify(message) {
  addNotificationToQueue(message, "red");
}
function notExistNotify(message) {
  addNotificationToQueue(message, "blue");
}





// Style CSS
const style = document.createElement('style');
style.textContent = `
#notification-container {
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
  display: flex;
  z-index: 1000;
  transition: transform 0.3s ease-in-out; /* Animasi tambahan */
  flex-direction: column-reverse; /* Membalikkan urutan */
  justify-content: flex-end;

}

.notification {
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  font-weight: bold;
  opacity: 0; /* Mulai dengan transparan */
  transform: translateY(-5px); /* Mulai dari atas */
  animation: slideDown 0.3s ease-out forwards; /* Animasi turun */
  padding: 1px 3px;
  font-family: 'Open Sans', sans-serif;
}

@keyframes slideDown {
  to {
    opacity: 1;
    transform: translateY(0); /* Berakhir di posisi normal */
  }
}

.notification.show {
  opacity: 1;
}

.notification.exit {
  transform: translateY(-5px); /* Naik ke atas */
  opacity: 0; /* Menghilang */
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: none;
  place-items: center;
  margin-left: 8px;
  flex-shrink: 0;
}

.notification.yellow {
  color: #ffcc00;
}

.notification.blue {
  color: #0099cc;
}

.notification.red {
  color: #ff6666;
}

.notification.green {
  color: #00cc99;
}


`;



document.head.appendChild(style);

