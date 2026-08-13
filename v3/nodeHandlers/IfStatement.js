function handleIfStatement(node, source) {
    return {
        type: node.type,
        start: node.start,
        end: node.end,
        text: source.slice(node.start, node.end),
        lineType: node.type
    };
}

export default handleIfStatement;