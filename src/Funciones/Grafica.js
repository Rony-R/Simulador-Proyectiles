export const simulate = (v, ang) => {
  const g = 9.8;
  var y0 = 0;
  var y;
  var t = 0;
  var data = [];
  var labels = [];
  var xlabels = [];
  var ylabels = [];
  var point;
  var angle;

  angle = (ang * Math.PI) / 180;

  do {
    point = {
      x: v * t * Math.cos(angle),
      y: y0 + v * t * Math.sin(angle) - (1 / 2) * g * (t * t),
    };

    data.push(point);
    labels.push(point.x);
    xlabels.push(point.x);
    ylabels.push(point.y);

    t += 1 / 1000;
  } while (t > 0 && point.y >= 0);

  return {
    data: data,
    labels: labels,
    xlabels: xlabels,
    ylabels: ylabels,
  };
};

export const generateLabels = (set1, set2) => {
  var max =
    set1.labels[set1.labels.length - 1] > set2.labels[set2.labels.length - 1]
      ? set1.labels
      : set2.labels;

  var labels = new Array(max.length);

  var step = max[max.length - 1] / max.length;

  console.log("Dimension de labels: " + max.length);

  var x = -1 * step;

  return labels.map(function () {
    x += step;
    return x;
  });
};

export const generarEtiquetas = (set1, set2) => {
  var xMaxL = [];
  var yMaxL = [];

  // var max =
  //   set1.labels[set1.labels.length - 1] > set2.labels[set2.labels.length - 1]
  //     ? set1.labels
  //     : set2.labels;

  if (
    set1.xlabels[set1.xlabels.length - 1] >
    set2.xlabels[set2.xlabels.length - 1]
  ) {
    //xMaxL = set2.xlabels;
    for (var i = 0; i < set2.xlabels.length; i++) {
      xMaxL.push(set2.xlabels[i].toFixed(2));
    }
  } else {
    //xMaxL = set1.xlabels;
    for (var i = 0; i < set1.xlabels.length; i++) {
      xMaxL.push(set1.xlabels[i].toFixed(2));
    }
  }

  if (
    set1.ylabels[set1.ylabels.length - 1] >
    set2.ylabels[set2.ylabels.length - 1]
  ) {
    yMaxL = set2.ylabels;
  } else {
    yMaxL = set1.ylabels;
  }

  // console.log("Dimension de labels: " + max.length);

  // for (var i = 0; i < max.length; i++) {
  //   xMaxL.push(i);
  // }

  // for (var i = 0; i < max.length; i++) {
  //   yMaxL.push(i);
  // }

  return {
    xMaxL: xMaxL,
    yMaxL: yMaxL,
  };
};

export const impimirDataset = (data) => {
  var output = [];
  //var container = document.getElementById("dataSet");
  var deltaT = 1 / 1000;
  var base = i * 10;

  for (var i = 0; i < 10; i++) {
    output.push(
      "Instante " +
        (i * deltaT).toFixed(3) +
        "s : x = \t" +
        data[i].x.toFixed(2) +
        " y = " +
        data[i].y.toFixed(2) +
        "m"
    );

    console.log(output[i]);
  }

  //   container.innerHTML = output.join("<br>");
};
