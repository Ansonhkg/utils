/**
 * Remove tags from string
 */
module.exports = html => html.replace(/(<([^>]+)>)/gi, "");
