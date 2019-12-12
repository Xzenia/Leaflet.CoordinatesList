# Leaflet.CoordinatesList

Leaflet.CoordinatesList is a simple Leaflet plugin that shows a list of coordinates as an overlay of the map. 

## Using the Coordinates List control

In order to display the list box, insert this to your webpage.

```
L.control.coordinatesList().addTo(map);
```

## Adding coordinates to the Coordinates List control

Using addCoordinates() adds latitude and longtitude values in the list.

```
var coordinatesList = L.control.coordinatesList().addTo(map);
coordinatesList.addCoordinates(e.latlng);
```

## Retrieving list of selected points
getSelectedCoordinates() will retrieve the latitude and longtitude values as a multidimensional array.

```
var selectedCoordinates = coordinatesList.getSelectedCoordinates();
```

## Erasing all contents of the list

clearList() allows you to clear the contents of the list box entirely.

```
coordinatesList.clearList();
```

## Setting headers

Using setHeader() puts a **bolded** and __underlined__ **__text__** in the list. This is useful if you want to label the list box.

```
coordinatesList.setHeader("Selected Points in the Map");
```
