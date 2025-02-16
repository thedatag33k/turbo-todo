<template>
    <div class="root-container" :class="{'disabled':props.disabled}">
        <textarea placeholder="Note" 
            id="editing"
            ref="inputElement"
            spellcheck="false"
            rows="1"
            class="form-control p-0 m-0"
            v-model="localText"
            :disabled="props.disabled"
            @input="handleInput"
            @keydown.enter="handleEnter"
            @keydown.tab="handleTab">
        </textarea>
        <div ref="editorBg" id="editor-bg" class="form-control p-0 m-0"></div>
        <pre ref="outputElement" class="form-control p-0 m-0" id="highlighting"><code id="highlighting-content"></code><div id="content-bottom"></div></pre>
    </div>
</template>

<script setup>
// IMPORTS
// -------
import { ref, defineModel, defineEmits, defineProps, watch, onUpdated, nextTick, useTemplateRef} from 'vue'
import { state } from '@/UserSettings';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown.min.js';
let marked = require('marked')

// CONFIGS
// -------
marked.use({
    "breaks":true,"silent":true
})
const model = defineModel();
const emit = defineEmits(['input','keydown.enter']);
const props = defineProps({
    editorVisible:{type:Boolean},
    disabled:{type:Boolean}
})

// REFS
// ----
const localText = ref(model.value);
const inputElement = useTemplateRef("inputElement");
const editorBg = useTemplateRef("editorBg");

// REGULAR METHODS
// ---------------
const updateHighlights = () => {
    let resultElement = document.getElementById("highlighting-content");
    let text = inputElement.value.value;
    // Handle final newlines
    if(text[text.length-1] == "\n") {
        text += " ";
    }
    resultElement.innerHTML = Prism.highlight(text, Prism.languages.markdown, "md");
}

const autoGrow = () => {
    inputElement.value.style.height = "5px";
    inputElement.value.style.height = inputElement.value.scrollHeight + "px";
    editorBg.value.style.height = inputElement.value.scrollHeight + "px";
}

const getPrevLine = () => {
    const cursorPosition = inputElement.value.selectionStart;
    const text = inputElement.value.value;
    const lastNewLineIndex = text.lastIndexOf("\n", cursorPosition-1);
    const prevLine = text.substring(lastNewLineIndex+1, cursorPosition);
    return prevLine;
}

const getSelection = () => {
    let text = inputElement.value.value;
    let textBefore = text.slice(0, inputElement.value.selectionStart);
    let textAfter = text.slice(inputElement.value.selectionEnd, inputElement.value.value.length);
    let textSelected = text.slice(inputElement.value.selectionStart, inputElement.value.selectionEnd);
    let cursor = {start:inputElement.value.selectionStart, end:inputElement.value.selectionEnd};

    // Find the start of the current line by looking for the last newline before the cursor:
    const startOfLine = text.lastIndexOf('\n', cursor.start - 1);
    // Use -1 to handle the case where there's no newline before the cursor.
    const lineStartIndex = startOfLine === -1 ? 0 : startOfLine + 1;

    // Find the end of the current line:
    const endOfLine = text.indexOf('\n', cursor.start);
    const lineEndIndex = endOfLine === -1 ? text.length : endOfLine;

    // Extract the current line:
    const currentLine = text.slice(lineStartIndex, lineEndIndex);

    return {
        selected: textSelected,
        before: textBefore,
        after: textAfter,
        cursor: cursor,
        line: currentLine,
        isCollapsed: cursor.start===cursor.end
    }
}

const insertNewText = (text) => {
    let sel = getSelection();
    // insert text
    inputElement.value.value = sel.before + text + sel.after;
    // move cursor
    inputElement.value.selectionStart = sel.cursor.start+text.length;
    inputElement.value.selectionEnd = sel.cursor.start+text.length;
    updateHighlights();
    autoGrow();
}

// Function to fix numbered lists that get wrecked by lines
// being inserted or deleted in the middle of a list.
const fixNumberedLists = () => {
    const nlPattern = /^(\t*)(\d+)\..+$/; // optional tabs and a number list item
    const text = inputElement.value.value;
    const lines = text.split("\n");
    const cursorPosition = inputElement.value.selectionStart;
    let num = 0;

    lines.forEach(function (value, index){
        const match = nlPattern.exec(value);
        if (match) {
            num++;
            lines[index] = lines[index].replace(nlPattern,(match, p1, p2)=>{
                return p1 + `${num}` + match.slice(p2.length + p1.length);
            })
        } else {
            num = 0; // reset for next possible list
        }
    })
    inputElement.value.value = lines.join("\n");
    inputElement.value.selectionStart = cursorPosition;
    inputElement.value.selectionEnd = cursorPosition;
    updateHighlights();
}

const handleTab = (event) => {
    event.preventDefault();
    insertNewText("\t");
}

const handleInput = () => {
    updateHighlights();
    autoGrow();
    model.value = inputElement.value.value;
    emit('input');
}

const handleEnter = (event) => {
    event.preventDefault();
    const nlPattern = /^\t*(\d+)\..+$/; // optional tabs and a number list item
    const ulPattern = /^\t*(-|\*) .+$/; // optional tabs and a bullet list item (either dash or asterisk)
    let prevLine = getPrevLine();
    let newText = "\n";

    if (prevLine.length>0){
        const nlMatch = nlPattern.exec(prevLine);
        const ulMatch = ulPattern.exec(prevLine);
        const tabMatch = /(\t+).+/.exec(prevLine);
        
        if (tabMatch) {
            const numTabs = tabMatch.at(0).split("\t").length;
            newText += "\t".repeat(numTabs-1);
        }
        
        if (nlMatch) {
            let nextN = parseInt(nlMatch.at(1))+1;
            newText += `${nextN}. `;
        } else if (ulMatch) {
            newText += ulMatch.at(1) + " ";
        }
    }
    insertNewText(newText);
    fixNumberedLists();
}

// WATCHERS AND EVENTS
// -------------------
// Focus the editor when it becomes visible
watch(
    () => props.editorVisible,
    (newValue) => {
        if(newValue && inputElement.value && editorBg.value){
            nextTick(()=>{
                autoGrow();
                updateHighlights();
                if (state.settings.notes.autoFocusOnEdit) {
                    inputElement.value.focus();
                }
            })
        }
    }
)

onUpdated(autoGrow);
</script>

<style>
  #editing, #highlighting, #editor-bg , #highlighting * {
    font-family: "Fira Code", monospace;
    font-size: 1em;
    line-height: 1.5em;
    tab-size: 2;
    text-shadow: none !important;
  }

  #content-bottom {
    height: calc(70px + 2em); /* fixed bottom + a little extra */
  }

  .root-container {
    position: relative;
    background-color: var(--bs-gray-800) !important;
    margin-bottom: calc(70px + 2em); /* fixed bottom + a little extra */
  }
  
  #editing, #highlighting, #editor-bg {
    /* In the same place */
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px !important;
    overflow-y: hidden;
    overflow-x: visible;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    box-sizing: border-box;
    display: block;
    width: 100%;
    resize: none;
    min-height: calc(22px + 1.5em); /* padding*2 + border-width*2 + line-height */
    border-width: 1px;

  }

  #highlighting {
    z-index: 1;
    border: 0;
    background-color: transparent !important;
  }

  
  #editing {
    z-index: 2;
    color: transparent !important;
    background: transparent !important;
    caret-color: var(--bs-info);
    columns: 1;
  }

  #editing::selection {
    color: transparent !important;
    background-color: color-mix(in srgb, var(--primary) 30%, rgba(0,0,0,0) 70%) !important;
  }

  #editor-bg {
    z-index: 0;
  }

  .disabled {
    display: none;
  }

  body[data-bs-theme="dark"] #editor-bg {
    background: var(--dark-accent);
  }

  body[data-bs-theme="light"] #editor-bg {
    background: var(--light-accent);
  }

</style>
<style>
    .token.title.important {
        color: var(--bs-green);
        font-weight: bolder;
    }
    .token.title > .token.punctuation {
        /*color: color-mix(in srgb, var(--bs-red) 70%, var(--bs-light) 30%);*/
        color: var(--bs-secondary);
    }
    .list.punctuation {
        color: var(--bs-orange);
    }
    .token.blockquote {
        color: var(--bs-secondary);
    }
    .token.hr {
        color: var(--bs-secondary);
    }
    .token.bold {
        font-weight: bold;
        /*color: var(--bs-cyan);*/
    }
    .token.bold > .token.punctuation {
        /*color: color-mix(in srgb, var(--bs-orange) 70%, var(--bs-light) 30%);*/
        color: var(--bs-secondary);
    }
    .token.italic {
        font-style: italic;
        color: var(--bs-red);
    }
    .token.italic > .token.punctuation {
        /*color: color-mix(in srgb, var(--bs-teal) 70%, var(--bs-light) 30%);*/
        color: var(--bs-secondary);
    }
    .token.operator {
        color: var(--bs-orange);
    }
    .token.url > .token.url {
        color: var(--bs-blue);
        text-decoration: underline;
    }
    .token.url > .token.content {
        color: var(--bs-secondary)
    }
    .token.table-header {
        font-weight: bold;
    }
    .token.strike > .token.content {
        text-decoration: line-through;
    }
</style>