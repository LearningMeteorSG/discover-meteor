Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a'),
            self = this;

        a.href = self.url;
        return a.hostname;
    }
});