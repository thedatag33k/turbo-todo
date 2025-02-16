import { reactive } from "vue";

const defaultSettings = {
    darkmode: true,
    startScreen: "/",
    notes:{showEditor:false, currentNote:{}, showPreview:true, defaultEditorMode:"View", autoFocusOnEdit:true}
};

export const state = reactive({
    settings: defaultSettings
})

export const loadSettings = () => {
    try {
        const storedSettings = JSON.parse(localStorage.getItem("settings")) || {};
        state.settings = {...defaultSettings, ...storedSettings};
    } catch (error) {
        state.settings = defaultSettings;
    }
}

export const saveSettings = () => {
    localStorage.setItem("settings", JSON.stringify(state.settings));
}

// Load on module import
loadSettings();