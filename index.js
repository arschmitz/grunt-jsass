var jsass = require( "jsass-vars" );
var path = require( "path" );
module.exports = function( grunt ) {
	grunt.registerMultiTask( "jsass", "generate scss variable files", function() {
		this.files.forEach(function( file ) {
			var options = this.options();
			var paths = file.src.filter(function( filepath ) {

				// Remove nonexistent files (it's up to you to filter or warn here).
				if ( !grunt.file.exists( filepath ) ) {
					grunt.log.warn( "Source file '" + filepath + "' not found." );
					return false;
				} else {
					return true;
				}
			}).map( function(filepath) {

				// Make src absolute as thats what jsass expects
				return path.join( process.cwd(), filepath )
			});

			// Make sure directory exists jsass wont create it
			if ( !grunt.file.exists( distPath ) {
				grunt.file.mkdir( distPath );
			}

			options.dest = file.dest;

			jsass( paths, options );
			grunt.log.writeln( "File '" + file.dest + "' created. from" + file.src );
		});
	} );
};
