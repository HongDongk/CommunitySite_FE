import { getData } from "./util/webstoredata.js";

const preview = document.getElementById("preview");

const userData = getData("user");
preview.src = userData.profileUrl;
