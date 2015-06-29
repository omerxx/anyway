var DiscussDialog = Backbone.View.extend({
	className: "discuss-dialog",
    events: {
		"submit" : "submit",
		"click .save-button" : "submit",
		"click .close-button" : "close"
	},
	initialize: function(options) {
		//this.identifier = options.identifier;
		this.model = options.model;
		//this.view = options.view;
	},
	render: function() {
		this.$el.append($("#discuss-dialog-template").html());
		$(document.body).append(this.$el);
		this.modal = this.$el.find(".modal");
        this.modal.modal("show");
		return this;
	},
	close: function() {
		this.modal.modal("hide");
	},
	submit : function()
    {
        view: new MarkerView({model: model, map: this.map}).render(); //TODO: model is not defined for some reason
        var dcontent = this.$el.find("#dcontent").val();
        $.post("new-discussion", JSON.stringify({
                    "latitude"  : model.get("latitude"),
                    "longitude" : model.get("longitude"),
                    "identifier": identifier,
                    "title"     : dcontent      // CHANGED FROM IDENTIFIER - NOTE!!!
        }));
        // var dcontent = this.$el.find("#dcontent").val();
        var adr = this.$el.find("#demailAddress").val();
        var firstname = this.$el.find("#dfName").val();
        var lastname = this.$el.find("#dlName").val();
        // $.post("new-discussion", JSON.stringify({'dcontent': dcontent, 'address': adr, 'fname': firstname, 'lname': lastname}));
        this.close();
	}
});

/*
var identifier = this.newDiscussionIdentifier;
            if (typeof identifier == 'undefined') return true;
            var model = new Discussion({
                identifier: identifier,
                latitude: this.clickLocation.lat(),
                longitude: this.clickLocation.lng(),
                type: MARKER_TYPE_DISCUSSION
            });
            var view = new MarkerView({model: model, map: this.map}).render();
            $.post("new-discussion", JSON.stringify({
                    "latitude"  : model.get("latitude"),
                    "longitude" : model.get("longitude"),
                    "identifier": identifier,
                    "title"     : identifier
                }));
            return true; */