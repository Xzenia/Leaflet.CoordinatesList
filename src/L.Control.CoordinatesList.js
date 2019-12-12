L.Control.CoordinatesList = L.Control.extend({
    options: {
        // Default control position
        position: 'topright'
    },
    onAdd: function (map) {
        this.container = L.DomUtil.create('div', 'coordinateList-container');
        this.coordinates = new Array();
        return this.container;
    },
    onRemove:function(){
        this.getContainer().innerHTML = "";
    },
    setHeader: function (content) {
        this.header = "<center> <strong> <u>" + content + "</u> </strong> </center>";
        this.getContainer().innerHTML = this.header;
    },
    addCoordinates: function(content){
        this.getContainer().innerHTML = this.header;
        for (var item = 0; item < content.length; item++){
            if (item == 0){
                this.getContainer().innerHTML += "<ul>";
            }

            this.getContainer().innerHTML += "<li> "+ content[item].lat + " : "+ content[item].lng +"</li>";

            if (item == content.length - 1){
                this.getContainer().innerHTML += "</ul>";
            }
        }
        this.coordinates.push(content);
    },
    clearList: function(){
        this.getContainer().innerHTML = "";
        this.coordinates = new Array();
    },
    getSelectedCoordinates: function(){
        return this.coordinates;
    }
});

L.control.coordinatesList = function () {
    return new L.Control.CoordinatesList();
};
