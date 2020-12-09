const btnFetchStyles = document.getElementById("btn-fetch-styles");
const btnUpdateStyle = document.getElementById("btn-update-style");
const btnDisplayFormStyle = document.getElementById("btn-display-form-style");
const btnPostStyle = document.getElementById("btn-post-style");
const formPostStyle = document.getElementById("form-post-style");
const listStyle = document.getElementById("list-styles");
const inputName = document.getElementById("new-style-name");
const inputColor = document.getElementById("new-style-color");
const formEditStyle = document.getElementById("form-edit-style");
const inputNameUpdate = document.getElementById("update-style-name");
const inputColorUpdate = document.getElementById("update-style-color");

// CRUD
// C => POST
// R => GET
// U => PATCH
// D => DELETE

function displayStyles(arr) {
  listStyle.innerHTML = ""; // reset the list (destroy any li in the ul)

  arr.forEach((style) => {
    // display one li per style
    listStyle.innerHTML += `<li class="row style">
        <span class="infos">
            <span class="color-code" style="background: ${style.color}"></span>
            <span>${style.name}</span>
        </span>
        <span class="btns">
            <i data-style-id="${style._id}" class="fa fa-edit"></i>
            <i data-style-id="${style._id}" class="fa fa-trash"></i>
        </span>
    </li>`;
  });

  listenDeleteIcons(); // relaunch the delete icon listening/handling
}

function prepareData() {
  const name = inputName.value;
  const color = inputColor.value;
  return name && color
    ? {
        name,
        color,
      }
    : null;
}

function resetForm() {
  inputName.value = "";
  inputColor.value = "";
  formPostStyle.classList.add("is-hidden");
}

function updateUpdateForm(style) {
  inputNameUpdate.value = style.name;
  inputColorUpdate.value = style.color;
}

function handlePostStyle() {
  formPostStyle.classList.remove("is-hidden");
  btnPostStyle.addEventListener("click", async () => {
    const formValues = prepareData();

    try {
      await axios.post("/api/style/", formValues);
      resetForm();
      fetchStyles();
    } catch (err) {
      console.error(err);
    }
  });
}

async function handleDeleteStyle(evt) {
  const currentId = evt.target.getAttribute("data-style-id");
  try {
    await axios.delete(`/api/style/${currentId}`);
    fetchStyles();
  } catch (err) {
    console.error(err);
  }
}

async function updateStyle(id) {
  const updatedStyle = {
    name: inputNameUpdate.value,
    color: inputColorUpdate.value,
  };
  try {
    await axios.patch("/api/style/" + id, updatedStyle);
    fetchStyles();
  } catch (err) {
    console.error(err);
  }
}

async function handleUpdateStyle(evt) {
  const currentId = evt.target.getAttribute("data-style-id");
  try {
    const apiRes = await axios.get("/api/style/" + currentId);
    const style = apiRes.data;
    updateUpdateForm(style);
    btnUpdateStyle.onclick = () => updateStyle(currentId);
  } catch (err) {
    console.error(err);
  }
}

function listenDeleteIcons() {
  const deleteIcons = document.querySelectorAll("#list-styles .fa-trash");

  deleteIcons.forEach((icon) => {
    icon.onclick = handleDeleteStyle;
  });
}

function listenUpdateIcons() {
  const updateIcons = document.querySelectorAll("#list-styles .fa-edit");

  updateIcons.forEach((icon) => {
    icon.onclick = handleUpdateStyle;
  });
}

async function fetchStyles() {
  // 1 fetch all styles from server side
  try {
    const apiRes = await axios.get("/api/style/");
    const styles = apiRes.data;
    displayStyles(styles);
  } catch (err) {
    console.error(err);
  }
}

listenUpdateIcons();
listenDeleteIcons();

// fetchStyles();

if (btnFetchStyles) btnFetchStyles.onclick = fetchStyles;
if (btnDisplayFormStyle) btnDisplayFormStyle.onclick = handlePostStyle;
