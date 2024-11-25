// ====================Start Global Variables
var siteNameInput = document.getElementById("BookmarkName");
var siteUrlInput = document.getElementById("SiteUrl");
var btnSubmitInput = document.getElementById("btnSubmit");
var sitesList = [];

// load site rows from local storage

if (localStorage.getItem("sitesContainer") !== null) {
  sitesList = JSON.parse(localStorage.getItem("sitesContainer"));
  displayData();
}

// ====================End Global Variables

// ====================Start Functions

//Function to Add a new Site

function addsite() {
  if (validationName() && validationUrl()) {
    var site = {
      name: siteNameInput.value,
      url: siteUrlInput.value,
    };
    sitesList.push(site);

    localStorage.setItem("sitesContainer", JSON.stringify(sitesList));
    displayData();

    clearForm();
  } else {
    // Swal.fire();
    Swal.fire({
      html: `
      <div class="d-flex"><div style="width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #F15F5D;" class="dot"></div>
      <div style="width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #FEBE2E;margin-left:5px" class="dot"></div>
      <div style="width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #4DB748;margin-left:5px" class="dot"></div>
      </div>
      <h3 class="fs-5 text-start py-3 fw-bold w-100" style="  font-family: "Bree Serif", serif;>Site Name or Url is not valid, Please follow the rules below :</h3>
      <p style="text-align:left">
          <span style="color:#BB4120">
            <i class="fa-regular fa-circle-right"></i>
          </span>
          Site name must contain at least 3 characters
        </p>
        <p style="text-align:left">
          <span style="color:#BB4120">
            <i class="fa-regular fa-circle-right"></i>
          </span>
          Site URL must be a valid one
        </p>`,
      showCloseButton: true,
      showConfirmButton: false,
      padding: "24px",
    });
  }
}
//Function to Clear Data
function clearForm() {
  siteNameInput.value = null;
  siteUrlInput.value = null;
}

//Function to Display Data
function displayData() {
  var cartona = "";
  for (var i = 0; i < sitesList.length; i++) {
    cartona += `<tbody id="tableContent">
            <tr>
              <td>${i + 1}</td>
              <td>${sitesList[i].name}</td>
              <td>
                 <button onclick="visitSite()" class="btn btn-visit" data-index="0">
                  <i class="fa-solid fa-eye pe-2"></i>
                  <a href="${sitesList[i].url}" target="_blank">Visit</a>
                 </button>
              </td>
              <td>
                <button onclick="deleteItem(${i})" class="btn btn-delete pe-2" data-index="0">
                  <i class="fa-solid fa-trash-can"></i>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>`;
  }
  document.getElementById("tableContent").innerHTML = cartona;
}

// Function to delete item

function deleteItem(index) {
  sitesList.splice(index, 1);
  localStorage.setItem("sitesContainer", JSON.stringify(sitesList));
  displayData();
}
// Function for ValidationName
function validationName() {
  var regex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
  var text = siteNameInput.value;
  var msgName = document.getElementById("msgName");
  if (regex.test(text)) {
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");
    return true;
  } else {
    siteNameInput.classList.add("is-invalid");
    siteNameInput.classList.remove("is-valid");
    // if (text !== null) {
    return false;
    // }
  }
}
// Function for ValidationUrl
function validationUrl() {
  var regex = /^https:[\/][\/][wW]{3}[\.][A-Za-z0-9]{3,10}[\.]com/;
  var text = siteUrlInput.value;
  var msgName = document.getElementById("msgName");
  if (regex.test(text)) {
    siteUrlInput.classList.add("is-valid");
    siteUrlInput.classList.remove("is-invalid");
    return true;
  } else {
    siteUrlInput.classList.add("is-invalid");
    siteUrlInput.classList.remove("is-valid");
    if (siteNameInput.value !== null) {
      return false;
    }
  }
}

// Swal.fire({
//   html: `
//   <div class="d-flex"><div style="width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: #F15F5D;" class="dot"></div>
//   <div style="width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: #FEBE2E;margin-left:5px" class="dot"></div>
//   <div style="width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: #4DB748;margin-left:5px" class="dot"></div>
//   </div>
//   <h3 class="fs-5 text-start py-3 fw-bold w-100" style="  font-family: "Bree Serif", serif;>Site Name or Url is not valid, Please follow the rules below :</h3>
//   <p style="text-align:left">
//       <span style="color:#BB4120">
//         <i class="fa-regular fa-circle-right"></i>
//       </span>
//       Site name must contain at least 3 characters
//     </p>
//     <p style="text-align:left">
//       <span style="color:#BB4120">
//         <i class="fa-regular fa-circle-right"></i>
//       </span>
//       Site URL must be a valid one
//     </p>`,
//   showCloseButton: true,
//   showConfirmButton: false,
//   padding: "24px",
// });
