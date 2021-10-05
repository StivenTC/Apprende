export default function createPie(id, cx, cy, r, slices, portions, colors) {
  var fromAngle, toAngle,
    fromCoordX, fromCoordY,
    toCoordX, toCoordY,
    path, d;

  for (var i = 0; i < slices; i++) {
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    fromAngle = i * 360 / slices;
    toAngle = (i + 1) * 360 / slices;
    //console.log(fromAngle + ' ' + toAngle);
    fromCoordX = cx + (r * Math.cos(fromAngle * Math.PI / 180));
    fromCoordY = cy + (r * Math.sin(fromAngle * Math.PI / 180));
    toCoordX = cx + (r * Math.cos(toAngle * Math.PI / 180));
    toCoordY = cy + (r * Math.sin(toAngle * Math.PI / 180));
    //console.log(fromCoord + ' ' + toCoord);
    d = 'M' + cx + ',' + cy + ' L' + fromCoordX + ',' + fromCoordY + ' A' + r + ',' + r + ' 0 0,1 ' + toCoordX + ',' + toCoordY + 'z';
    //console.log(d);
    path.setAttributeNS(null, "d", d);
    path.setAttribute('id', id + i);

    if (portions.includes(i)) {
      path.setAttribute('fill', colors[1]);
    } else {
      path.setAttribute('fill', colors[0]);
    }

    document.getElementById(id).appendChild(path);
  }
}