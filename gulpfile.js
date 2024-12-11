import gulp from 'gulp';
import {deleteAsync} from 'del';
//const del = require('del');
import {promises as fs} from 'fs';
import path from 'path';

import replace from 'gulp-replace';

const dist_path = 'docs/.vitepress/dist';
const www_path  = 'www';

// Copy files
async function copyDist() {
    // Clean destination folder
    await deleteAsync([path.join(www_path, 'dist/**/*')]);

    // Ensure destination directory exists
    await fs.mkdir(path.join(www_path, 'dist'), {recursive: true});

    return new Promise((resolve, reject) => {
    // Copy files from source to destination
        gulp.src(path.join(dist_path, '**', '*'), {
            encoding: false
        })  // Include all files and subfolders
            .pipe(gulp.dest(path.join(www_path, 'dist')))  // Destination folder
            .on('end', resolve)   // Resolve the Promise when the task is complete
            .on('error', reject) // Reject the Promise if an error occurs
            .on('error', (err) => console.error('Error during copy:', err));  // Log errors
    });

}

function copyReplace() {
    return gulp.src(path.join(dist_path, '**', '*.html'))  // Adjust the path to your directory and file types
        .pipe(replace(/\/comforterpdocs\//g, (match) => {
            console.log(`Replaced: ${match}`);  // Log every replacement
            return '';  // Replace with '/'
        }))
        .pipe(gulp.dest(path.join(www_path, 'dist')));  // Save the modified files to a 'dist' directory
}


// Define complex tasks
//const www = gulp.series(copyDist, copyReplace);
const www = gulp.series(copyDist);

export {www};  // Export task so it can be run via npm