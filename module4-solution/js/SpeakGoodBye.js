

(function(window)
	{
		var byeSpeaker = {};
		var speakWord = "Good Bye";
		byeSpeaker.speak = function (name)
		{
			console.log (speakWord + " " + name + "\n");
		}
		
		window.byeSpeaker = byeSpeaker;
	})(window);


