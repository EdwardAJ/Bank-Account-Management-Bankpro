function getXMLResponse (str) {
    let parser = new DOMParser();
    let xmlResponse = parser.parseFromString(str, "text/xml");
    let results = xmlResponse.getElementsByTagName("return");
    return results;
}

export default getXMLResponse;