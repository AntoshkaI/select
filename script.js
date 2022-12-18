import Select from "./components/Select/index.js";

if (!customElements.get("dream-select")) {
    customElements.define("dream-select", Select);
}

