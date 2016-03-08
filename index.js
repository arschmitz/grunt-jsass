var jsass = require( "jsass-vars" );
var path = require( "path" );
module.exports = function( grunt ) {
	grunt.registerMultiTask( "varia", "generate scss variable files", function() {
		this.files.forEach(function( file ) {
			var distPath = path.join( process.cwd(), file.dest );
			var contents = file.src.filter(function( filepath ) {

				// Remove nonexistent files (it's up to you to filter or warn here).
				if ( !grunt.file.exists( filepath ) ) {
					grunt.log.warn( "Source file '" + filepath + "' not found." );
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {

				// Make src absolute as thats what jsass expects
				return path.join( process.cwd(), filepath )
			}).join( "\n" );

			// Make sure directory exists jsass wont create it
			if ( !grunt.file.exists( distPath ) {
				grunt.file.mkdir( distPath );
			}

			jsass( paths, {
				"dest": file.dest,
				"name": this.options( "name" )
			} );
			grunt.log.writeln( "File '" + file.dest + "' created. from" + file.src );
		});
	} );
};
