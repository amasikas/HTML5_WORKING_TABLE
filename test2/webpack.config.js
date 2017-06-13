/**
 * Created by saki on 2017/6/7.
 */
const path = require('path');

const project = 'test2';
const dir_path = path.resolve(__dirname);
const entry_file = "./src/main.js";
const output_path = `${dir_path}${path.sep}dist/`;
module.exports = {
    "entry": `${dir_path}${path.sep}${entry_file}`,
    "output_path": output_path,
    "output_filename": "bundle.js",
    "contentBase": `${dir_path}/src/`,
    "template_html": path.resolve(`${project}/src/index.html`),
    "filename_html": path.resolve(`${project}/dist/index.html`)
};