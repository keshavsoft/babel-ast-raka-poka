function handleImportDeclaration(node, source) {
    return {
        type: node.type,
        start: node.start,
        end: node.end,
        text: source.slice(node.start, node.end),
        lineType: node.type,
        raka: node.source?.value,
        poka: node.specifiers?.[0]?.local?.name,
        importedName: node.specifiers?.[0]?.imported?.name
    };
}

export default handleImportDeclaration;