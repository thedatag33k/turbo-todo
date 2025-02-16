const imgPattern = /.+src="(http\S+)"\s.+/;
const rssItemTagsNew = [
    {name:"title", alts:["title"]},
    {name:"link", alts:["link"]},
    {name:"description", alts:["description","summary", "content:encoded"]},
    {name:"date", alts:["pubDate", "published", "dc:date"]},
    {name:"id", alts:["guid", "id"]},
    {name:"category", alts:["category"]}
]
const imageTags = [
    {tag:"media:thumbnail", attr:"url"},
    {tag:"media:content", attr:"url"},
]
const linkTags = [
    {tag:"link", attr:"href"}
]

const textIsEmpty = (text) => {
    return !text || text === ""
}

const fetchData = async (urls=[]) => {
    try {
        //const promises = urls.map(url => fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`));
        const promises = urls.map(url => 
            fetch(`http://localhost:5000/proxy?url=${encodeURIComponent(url)}`)
            .then(response => {
                if (!response.ok) {
                    console.log("Error fetching feed");
                } else {
                    return response.text();
                }
            })
        );
        const data = await Promise.all(promises);
        return data;
    } catch (err) {
        console.log("Error fetching data");
        return null;
    }
}

export const fetchAllItems = async (urls=[]) => {
    const data = await fetchData(urls);
    if (data) {
        const tempDiv = document.createElement("div");
        const parsedItems = data.map(content => parseItems(parseContent(content),tempDiv));
        tempDiv.remove();
        return parsedItems;
    } else {
        return null;
    }
}


const parseContent = (contentInput) => {
    let content = contentInput;
    if (content.includes("base64,")) {
        try {
            const binaryString = atob(content.split(",")[1])
            const uint8Array = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                uint8Array[i] = binaryString.charCodeAt(i);
            }
            const decoder = new TextDecoder("utf-8");
            content = decoder.decode(uint8Array);
        } catch (err) {
            return null;
        }
    }
    try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(content, 'text/xml');
        return xmlDoc;
    } catch (err) {
        console.log("Failed to parse XML document. Error: " + err);
        return null;
    }
}

const parseItems = (xmlDoc, tempDiv) => {
    if (xmlDoc) {
        const titleElm = xmlDoc.querySelector('title');
        const rssTitle = titleElm ? titleElm.textContent || titleElm.innerText : null;
        let rssItems = xmlDoc.querySelectorAll('item')
        if (rssItems.length===0) {
            rssItems = xmlDoc.querySelectorAll('entry')
        }
        const tempItems = [];
        for (let i = 0; i<rssItems.length; i++) {
            const item = rssItems[i];
            const rssItem = {feedName:rssTitle, uniqueId:crypto.randomUUID()};

            // Find text content for each tag and alternate name
            for (let i = 0; i<rssItemTagsNew.length; i++) {
                const tag = rssItemTagsNew[i];
                for (let j = 0; j<tag.alts.length; j++) {
                    const alt = tag.alts[j];
                    const elm = item.getElementsByTagName(alt);
                    if (elm.length>0) {
                        rssItem[tag.name] = elm[0].textContent;
                        break;
                    }
                }
            }

            // Find image url for each possible tag
            for (let i = 0; i<imageTags.length; i++) {
                const tag = imageTags[i];
                const elm = item.getElementsByTagName(tag.tag);
                if (elm.length>0) {
                    const url = elm[0].getAttribute(tag.attr);
                    if (url.includes("http")) {
                        rssItem.imageUrl = url;
                        break;
                    }
                }
            }

            // If the standard link is not found, try to find alternatives
            if (textIsEmpty(rssItem.link)) {
                for (let i = 0; i<linkTags.length; i++) {
                    const tag = linkTags[i];
                    const elm = item.getElementsByTagName(tag.tag);
                    if (elm.length>0) {
                        const url = elm[0].getAttribute(tag.attr);
                        if (url.includes("http")) {
                            rssItem.link = url;
                            break;
                        }
                    }
                }
            }

            // Use regex to find an image link if not already found
            if (textIsEmpty(rssItem.imageUrl)) {
                const imgMatch = imgPattern.exec(item.innerHTML);
                if (imgMatch) {
                    rssItem.imageUrl = imgMatch.at(1);
                }
        
            }

            // Set category to null if not found
            if (textIsEmpty(rssItem.category)) {
                rssItem.category = null;
            }

            // Get plaintext if the description includes html
            if (rssItem.description && (rssItem.description.includes("&#") || rssItem.description.includes("</")) ) {
                tempDiv.innerHTML = rssItem.description;
                rssItem.description = tempDiv.textContent || tempDiv.innerText || rssItem.description;
            }

            tempItems.push(rssItem);
        }
        return {title:rssTitle, items:tempItems};
    } else {
        return null;
    }
}