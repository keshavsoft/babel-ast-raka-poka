function handleVariableDeclaration(node, source) {
    return {
        type: node.type,
        start: node.start,
        end: node.end,
        text: source.slice(node.start, node.end),
        lineType: node.type,
        poka: node.declarations?.[0]?.id?.name
    };
}

export default handleVariableDeclaration;