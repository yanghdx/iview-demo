const PREIFX = "";

function uri(uri) {
    return PREIFX + uri;
}

function encode(data) {
    return data;
}

export default {
    uri,
    encode
}